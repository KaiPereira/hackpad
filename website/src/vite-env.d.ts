/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GALLERY_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
