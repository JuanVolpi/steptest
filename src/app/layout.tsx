import BarraDeNavegacao from "@/components/navigation/Navbar";
import { Display } from "@/lib/fonts";
import "@/styles/globals.scss";
import styles from "@/styles/layout/root-layout.module.scss";
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
    <html lang="pt" className="w-full h-full bg-lgreen ">
      <body style={Display.style}>
        <Providers>
          <BarraDeNavegacao />
          <div className={styles.RootLayout}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
