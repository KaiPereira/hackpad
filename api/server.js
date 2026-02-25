const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const {
    fetchAllHackpads,
    fetchHackpadById,
    computeStats,
} = require("./lib/airtable");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/*
TODO:
- Make /api/gallery return all hackpads
- Make /api/gallery/:id return specific hackpad's info
- Make /api/stats return all-time stats about the program (total designs approved, total built designs in the gallery, countries served)
- Serve the built website files otherwise

implement caching on all so the response time is faster - helper functions should be in airtable.js

*/

// Cache configuration
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cache = {
    gallery: { data: null, timestamp: 0 },
    stats: { data: null, timestamp: 0 },
};

const IS_PROD = process.env.NODE_ENV === "production";

function isCacheValid(key) {
    if (!IS_PROD) return false;
    return cache[key].data && Date.now() - cache[key].timestamp < CACHE_TTL;
}

function setCache(key, data) {
    cache[key] = { data, timestamp: Date.now() };
}

// API Routes
app.get("/api/gallery", async (req, res) => {
    try {
        if (isCacheValid("gallery")) {
            return res.json(cache.gallery.data);
        }

        const hackpads = await fetchAllHackpads();
        setCache("gallery", hackpads);
        res.json(hackpads);
    } catch (error) {
        console.error("Error fetching gallery:", error);
        res.status(500).json({ error: "Failed to fetch gallery" });
    }
});

const AIRTABLE_ID_RE = /^rec[a-zA-Z0-9]{14}$/;

app.get("/api/gallery/:id", async (req, res) => {
    if (!AIRTABLE_ID_RE.test(req.params.id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
        if (isCacheValid("gallery")) {
            const cached = cache.gallery.data.find(
                (h) => h.id === req.params.id,
            );
            if (cached) return res.json(cached);
        }

        const hackpad = await fetchHackpadById(req.params.id);
        if (!hackpad) {
            return res.status(404).json({ error: "Hackpad not found" });
        }
        res.json(hackpad);
    } catch (error) {
        console.error("Error fetching hackpad:", error);
        res.status(500).json({ error: "Failed to fetch hackpad" });
    }
});

app.get("/api/stats", async (req, res) => {
    try {
        if (isCacheValid("stats")) {
            return res.json(cache.stats.data);
        }

        let hackpads;
        if (isCacheValid("gallery")) {
            hackpads = cache.gallery.data;
        } else {
            hackpads = await fetchAllHackpads();
            setCache("gallery", hackpads);
        }

        const stats = computeStats(hackpads);
        setCache("stats", stats);
        res.json(stats);
    } catch (error) {
        console.error("Error fetching stats:", error);
        res.status(500).json({ error: "Failed to fetch stats" });
    }
});

// Serve static files from the built website
const STATIC_PATH = path.join(__dirname, "../website/dist");
app.use(express.static(STATIC_PATH));

// Fallback to index.html for SPA routing
app.get("/{*path}", (req, res) => {
    res.sendFile(path.join(STATIC_PATH, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
