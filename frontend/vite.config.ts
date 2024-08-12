import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "postgresql://directory_ny_user:u99Gn7T5nIar73HlxhXE0yY14gUFasRt@dpg-cqt5e4lsvqrc73d0gk0g-a.ohio-postgres.render.com/directory_ny");
  return defineConfig({
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
    },
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
        },
      },
    },
  });
};
