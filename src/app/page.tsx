"use client";

import StepTestLogo from "@/componentes/logos/StepTest";
import { GridProvaQuestoes } from "@/componentes/popups/Grids";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main>
      <StepTestLogo />
      <Button onPress={onOpen}>Open modal</Button>
      <GridProvaQuestoes
        state={{
          onOpen,
          isOpen,
          onOpenChange,
        }}
        content={{
          titulo: "Matematica#2",
          num_questoes: 8,
        }}
      />
    </main>
  );
}
