import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://yoom-video.vercel.app"),
  title: {
    default: "Yoom - Real-Time Video Conferencing",
    template: "%s | Yoom",
  },
  description:
    "High-performance real-time video conferencing platform built with Next.js 15, React 19, TypeScript, Stream Video SDK, and Clerk Authentication.",
  keywords: [
    "video conferencing",
    "video calling",
    "zoom clone",
    "realtime video",
    "realtime audio",
    "screen sharing",
    "webrtc",
    "stream video sdk",
    "clerk auth",
    "nextjs 15",
    "react 19",
    "typescript",
    "tailwindcss",
    "radix ui",
    "portfolio project",
  ],
  authors: [
    {
      name: "Anas Mahfouz",
      url: "https://github.com/aanasmahfouz",
    },
  ],
  creator: "Anas Mahfouz",
  publisher: "Anas Mahfouz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/aanasmahfouz/zoom-clone",
    title: "Yoom - Real-Time Video Conferencing",
    description:
      "High-performance real-time video conferencing platform built with Next.js 15, React 19, Stream Video SDK, and Clerk Authentication.",
    siteName: "Yoom",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 675,
        alt: "Yoom - Enterprise Video Conferencing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoom - Real-Time Video Conferencing",
    description:
      "High-performance real-time video conferencing platform built with Next.js 15, React 19, Stream Video SDK, and Clerk Authentication.",
    creator: "@aanasmahfouz",
    images: ["/images/social-preview.jpg"],
  },
  icons: {
    icon: "/icons/logo.svg",
  },
};

export const links = {
  sourceCode: "https://github.com/aanasmahfouz/zoom-clone",
  githubProfile: "https://github.com/aanasmahfouz",
} as const;

export const copyrightText = "Copyright © 2026 Anas Mahfouz. All rights reserved.";
