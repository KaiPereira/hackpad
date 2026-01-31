import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import rehypeExternalLinks from "rehype-external-links";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // {enforce: 'pre', ...mdx({
        //   extensions: ['.mdx'],
        // })},
        mdx({
            rehypePlugins: [
                [
                    rehypeExternalLinks,
                    { target: "_blank", rel: ["noopener", "noreferrer"] },
                ],
            ],
        }),
        react(),
    ],
});
