import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tatami Labs - 匠心传承 · 文化桥梁",
  description: "通过深度对话体验，连接全球用户与日本传统工艺大师。探索匠人精神，感受文化传承的力量。",
  keywords: "日本匠人, 传统工艺, 文化交流, 深度体验, 匠人精神",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}