import { Conteudo } from "@/lib/fonts";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

export type ContextProps = {
  emitTextContent: (text: string) => void;
};

export function Contexto(props: ContextProps) {
  let errorMessageState = false;
  let errorMessage = "Erro";

  const validationState = (valor: boolean) => {
    if (valor) {
      return "valid";
    } else {
      errorMessageState = true;
      return "invalid";
    }
  };

  const errorMessageValidation = (
    errorMessageState: boolean,
    errorMessage: string,
  ) => {
    return errorMessageState ? errorMessage : null;
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className=""
      >
        <Textarea
          variant="bordered"
          label="Contexto"
          labelPlacement="outside"
          placeholder="Enter your description"
          validationState={validationState(false)}
          errorMessage={errorMessageValidation(errorMessageState, errorMessage)}
          defaultValue=""
          className="max-w-xs"
          onValueChange={(text) => {
            props.emitTextContent(text);
          }}
          classNames={{
            inputWrapper: "border rounded-md w-[400px]",
            input: "text-md",
          }}
        />
      </motion.section>
    </>
  );
}

export type ContextoPreviewProps = {
  // textSize?: "sm" | "md" | "lg" | "xl";
  texto: string;
};

export function ContextoPreview(props: ContextoPreviewProps) {
  return (
    <main className="text-sm font-medium flex flex-col gap-2 items-start justify-start min-w-fit border-2 rounded-lg shadow-sm bg-white p-3 py-4 pr-6">
      <div className="flex items-center justify-start gap-2">
        <Bars3BottomLeftIcon className="w-6 h-6 text-blue-500" />
        <h3 className="pt-1">1.1</h3>
      </div>
      <pre
        className="max-w-[65ch] pt-0.5 overflow-x-auto py-3"
        style={Conteudo.style}
      >
        {props.texto.length < 1 ? "Sem conteudo" : props.texto}
      </pre>
    </main>
  );
}
