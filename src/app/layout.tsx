import { Display } from "@/lib/fonts";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Providers } from "./providers";
import styles from "@/styles/layout/root-layout.module.scss";
import BarraDeNavegacao from "@/componentes/navegacao/Navbar";

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
    <html lang="pt">
      <body style={Display.style} className={styles.Body}>
        <Providers>
          <BarraDeNavegacao></BarraDeNavegacao>
          <div className={styles.RootLayout}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
