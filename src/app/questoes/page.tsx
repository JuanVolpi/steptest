"use client";
import { PageTag } from "@/componentes/cards/Pagetag";
import { Button, Link } from "@nextui-org/react";

export default function Questoes() {
  return (
    <div>
      <header className="bg-bglgreen w-full h-fit px-4 pb-3 ">
        <div className="w-full justify-between h-max flex flex-row">
          <h1 className="font-confortaa text-[40px] text-ayellow w-fit">
            Questões - Criar
          </h1>
          <div className="self-center">
            <PageTag content={"Questão"}></PageTag>
          </div>
        </div>
        <div className="w-full h-2 pb-3 rounded bg-mgreen self-center"></div>
        <main className="flex justify-center p-5">
          <Button
            variant="flat"
            radius="sm"
            size="sm"
            color="primary"
            href={"/questoes/criar"}
            as={Link}
          >
            Ir para criar questões
          </Button>
        </main>
      </header>
    </div>
  );
}
