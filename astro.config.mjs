// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    output: 'server',
    adapter: node({
        mode: 'standalone', // Use 'standalone' for a single server file
      }),
    server: {
      port: 3000,
      host: true,
    },      
});