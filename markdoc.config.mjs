import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
    extends: [
        shiki({
            // Choose from Shiki's built-in themes (or add your own)
            // Default: 'github-dark'
            // https://shiki.style/themes
            theme: 'one-dark-pro',
        }),
    ],
});