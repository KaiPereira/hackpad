import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    plugins: [
        // {enforce: 'pre', ...mdx({
        //   extensions: ['.mdx'],
        // })},
        mdx({
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeExternalLinks,
                    { target: "_blank", rel: ["noopener", "noreferrer"] },
                ],
            ],
        }),
        react(),
    ],
});
