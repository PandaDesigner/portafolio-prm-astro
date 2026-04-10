/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GITHUB_USERNAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
