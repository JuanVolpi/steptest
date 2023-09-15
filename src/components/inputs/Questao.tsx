import { Conteudo } from "@/lib/fonts";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import { Textarea } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export type QuestaoProps = {
  emitTextContent: (text: string) => void;
};

export default function Questao(props: QuestaoProps) {
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
