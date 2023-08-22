"use client";

import { ReactNode } from "react";

export function PageTag({ content }: { endIcon?: ReactNode; content: string }) {
  return (
    <div className="flex text-agreen text-[20px] bg-lgreen h-5 w-fit p-5 rounded font-confortaa font-agreen self-center items-center">
      {content}
    </div>
  );
}
