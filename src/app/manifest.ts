import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} · Garantías para alquileres`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    lang: "es-AR",
    background_color: "#ffffff",
    theme_color: "#111414",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
