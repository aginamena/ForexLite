import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade with Confidence — And Feel Good Doing It",
  description:
    "Stop wasting time manually posting to your WhatsApp groups every day. Let AI do the work, so you can focus on what really matters — growing your business.",
  openGraph: {
    type: "website",
    url: "https://forex-lite.vercel.app/",
    title: "Let AI Handle Your WhatsApp Group Posting",
    description:
      "Stop second-guessing. Start trading with clarity, confidence, and a community that has your back.",
    siteName: "Trade with Confidence — And Feel Good Doing It",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/b38d71f6-d59c-4536-b835-b98f52e33d9d.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
