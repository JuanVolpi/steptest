import { Display } from "@/lib/fonts";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "StepTest",
  description: "Prebuild dos Mockups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="light">
      <body style={Display.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
