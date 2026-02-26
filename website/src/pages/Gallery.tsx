import { useEffect, useState } from "react";
import GalleryCard, { type Hackpad } from "../components/GalleryCard";
import GalleryLayout from "../layouts/GalleryLayout";

const Gallery = () => {
    const [hackpads, setHackpads] = useState<Hackpad[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/gallery")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch gallery");
                return res.json();
            })
            .then((data) => {
                setHackpads(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <GalleryLayout>
            <div className="">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-slate-900 pb-4">
                        The Hackpad Gallery!
                    </h1>
                    <p className="text-slate-600 mt-1">
                        Fill out{" "}
                        <a
                            href="https://forms.hackclub.com/hackpad-demo"
                            className="text-[#155e75] hover:underline"
                        >
                            this form
                        </a>{" "}
                        to add your hackpad to the gallery!
                    </p>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-slate-100 border-4 border-slate-300 rounded-sm animate-pulse aspect-square"
                            />
                        ))}
                    </div>
                )}

                {error && (
                    <div className="border-4 border-dashed border-red-400 bg-red-50 p-6 rounded-sm text-red-700">
                        <p className="font-bold">Failed to load gallery</p>
                        <p className="text-sm mt-1">{error}</p>
                        <p className="text-sm mt-2 text-slate-500">
                            Make sure the API server is running on port 3000.
                        </p>
                    </div>
                )}

                {!loading && !error && hackpads.length === 0 && (
                    <div className="border-4 border-dashed border-slate-400 p-8 text-center text-slate-500">
                        No hackpads submitted yet!
                    </div>
                )}

                {!loading && !error && hackpads.length > 0 && (
                    <>
                        <p className="text-sm text-slate-500 mb-4">
                            {hackpads.length} hackpad
                            {hackpads.length !== 1 ? "s" : ""} in the gallery so
                            far
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {hackpads.map((hackpad) => (
                                <GalleryCard
                                    key={hackpad.id}
                                    hackpad={hackpad}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </GalleryLayout>
    );
};

export default Gallery;
