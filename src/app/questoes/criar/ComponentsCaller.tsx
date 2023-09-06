import React from "react";
import { Button, Textarea } from "@nextui-org/react";
import { Ingrid_Darling } from "next/font/google";
import { type } from "os";
import { TrashIcon } from "@heroicons/react/20/solid";

type PropsEnunciado = {
  title: string;
  click: () => void;
};

export function Enunciado({ title, click }: PropsEnunciado) {
  let btnTitle = "Remover " + title;
  return (
    <div className="p-2 h-fit w-full flex flex-col bg-lblue rounded-lg">
      <Textarea
        label={title}
        labelPlacement="outside"
        placeholder="Enter your description"
        className="w-full"
      />
      <Button
        className={"bg-lred w-fit text-ared"}
        endContent={<TrashIcon className="w-4 h-4" />}
        onClick={click}
      >
        {btnTitle}
      </Button>
    </div>
  );
}

export function Comentario({
  title,
  click,
}: {
  title: string;
  click: () => void;
}) {
  let btnTitle = "Remover " + title;
  return (
    <div className="p-2 h-fit w-full flex flex-col bg-lblue rounded-lg">
      <Textarea
        label={title}
        labelPlacement="outside"
        placeholder="Enter your description"
        className="w-full"
      />
      <Button
        className={"bg-lred w-fit text-ared"}
        endContent={<TrashIcon className="w-4 h-4" />}
        onClick={click}
      >
        {btnTitle}
      </Button>
    </div>
  );
}
