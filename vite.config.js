import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr({
      // Опции SVGR (необязательно)
      svgrOptions: {
        // Сохраняем viewBox для масштабирования, но удаляем width/height
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
});
