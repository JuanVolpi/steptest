import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

export default function Contexto() {
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
    errorMessage: string
  ) => {
    return errorMessageState ? errorMessage : null;
  };

  const [value, setValue] = React.useState("");

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className="p-6 pt-4 border border-green-400 rounded-md shadow"
      >
        <Textarea
          variant="bordered"
          label="Contexto"
          labelPlacement="outside"
          placeholder="Enter your description"
          validationState={validationState(false)}
          errorMessage={errorMessageValidation(errorMessageState, errorMessage)}
          defaultValue="NextUI is a React UI library with..."
          className="max-w-xs"
          value={value}
          onValueChange={setValue}
        />
      </motion.section>
    </>
  );
}
