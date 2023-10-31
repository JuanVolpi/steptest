import { Conteudo } from "@/lib/fonts";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Textarea } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export type QuestaoProps = {
  emitTextContent: (text: string) => void;
};

export function Questao(props: QuestaoProps) {
  const [locked, setLocked] = useState(false);

  return (
    <div>
      <h3 className="flex flex-row gap-2.5 items-center font-semibold tracking-tight text-blue-400">
        Conteudo da Questao
        <button
          onClick={() => setLocked(!locked)}
          className="p-1 rounded"
          style={{
            backgroundColor: locked
              ? "rgba(225, 0, 0, 0.22)"
              : "rgba(0, 225, 0, 0.22)",
          }}
        >
          <AnimatePresence>
            {locked ? (
              <LockClosedIcon className="w-4 h-4 text-red-500" />
            ) : (
              <LockOpenIcon className="w-4 h-4  text-green-500" />
            )}
          </AnimatePresence>
        </button>
      </h3>
      <Textarea
        variant="flat"
        placeholder="O gato saltou da arvore..."
        readOnly={locked}
        classNames={{
          inputWrapper: "border rounded-md w-[400px]",
          input: "text-md",
        }}
        minRows={1}
        maxRows={4}
        style={Conteudo.style}
        onValueChange={(text) => {
          props.emitTextContent(text);
        }}
      />
    </div>
  );
}

export type QuestaoPreviewProps = {
  // textSize?: "sm" | "md" | "lg" | "xl";
  texto: string;
};

export function QuestaoPreview(props: QuestaoPreviewProps) {
  return (
    <main className="text-sm font-medium flex flex-row gap-2 items-start justify-start min-w-fit border-2 rounded-lg shadow-sm bg-white p-3 py-4 pr-6">
      <QuestionMarkCircleIcon className="w-6 h-6 text-blue-500" />
      <pre
        className="max-w-[65ch] pt-0.5 overflow-x-auto py-3"
        style={Conteudo.style}
      >
        {props.texto.length < 1 ? "Sem conteudo" : props.texto}
      </pre>
    </main>
  );
}
