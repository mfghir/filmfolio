/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "i.postimg.cc",
      "flagcdn.com",
      "picsum.photos",
      "images.freeimages.com",
      "randomuser.me",
      "cdn.stocksnap.io",
      "cdn.zoomg.ir",
      "svgshare.com",
      "ia.media-imdb.com",
      "image.tmdb.org",
      "image.tmdb.org/t/p/w500",
      "media.themoviedb.org",
      "api.themoviedb.org",
      "utfs.io"
    ],
  },
  remotePatterns: [
    {
      hostname: "utfs.io",
    },
  ],
};

export default nextConfig;
