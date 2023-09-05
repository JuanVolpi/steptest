import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
