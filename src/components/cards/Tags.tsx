import React from "react";

export function PageTag({
  content,
}: {
  endIcon?: React.JSX.Element;
  content: string;
}) {
  return (
    <div className="flex text-agreen text-[20px] bg-lgreen h-5 w-fit p-5 rounded font-confortaa font-agreen self-center items-center">
      {content}
    </div>
  );
}
