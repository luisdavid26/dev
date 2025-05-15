import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                addRima: resolve(__dirname, 'add-rima.html'),
                delPalabra: resolve(__dirname, 'del-palabra.html'),
                delRima: resolve(__dirname, 'del-rima.html'),
                getRimas: resolve(__dirname, 'get-rimas.html'),
            },
        },
    },
})