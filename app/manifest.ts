import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bombay Bedding",
    short_name: "Bombay Bedding",
    description: "Premium Home Furnishing Showroom in Durgapur",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#b8956a",
    icons: [
      {
        src: "/main-logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
