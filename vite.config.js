import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                history: resolve(__dirname, 'history.html'),
                agenda: resolve(__dirname, 'agenda.html'),
                contact: resolve(__dirname, 'contact.html'),
                legal: resolve(__dirname, 'legal.html'),
            },
        },
    },
});
