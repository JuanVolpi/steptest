"use client";

import { Divider } from "@nextui-org/react";

export default function Dashboards() {
  return (
    <>
      <main className="w-full h-full bg-white rounded p-3 px-4 grid grid-cols-[25%_auto] grid-rows-1 gap-4">
        {/* Selecionador turma, materia e dados */}
        <section className="w-full h-full">
          <fieldset className="border border-slate-300 p-2 px-4 rounded">
            <legend className="font-bold text-xl text-blue-500 bg-sky-100 p-1 px-2 rounded-md">
              Turma
            </legend>
            <Divider />
          </fieldset>
        </section>
        {/* Representação dos dados */}
        <section className="w-full h-full border rounded"> </section>
      </main>
    </>
  );
}
