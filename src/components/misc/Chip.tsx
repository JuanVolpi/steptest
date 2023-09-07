import { DificuldadeQuestao } from "@/lib/types/componentes/cards";
import { Chip } from "@nextui-org/react";

export function ChipDificuldade({
  dificuldade,
}: {
  dificuldade: DificuldadeQuestao;
}) {
  let chipColor: "success" | "warning" | "primary" | "danger" = "primary";
  if (dificuldade === "Fácil") {
    chipColor = "success";
  } else if (dificuldade === "Médio") {
    chipColor = "warning";
  } else {
    chipColor = "danger";
  }

  return (
    <Chip variant="flat" size="sm" color={chipColor}>
      {dificuldade}
    </Chip>
  );
}
