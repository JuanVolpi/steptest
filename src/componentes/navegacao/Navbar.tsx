"use client";
import { SimpleYellowButton } from "../buttons/Buttons";
import StepTest from "../logos/StepTest";

export default function BarraDeNavegacao() {
  return (
    <div className="w-full h-max flex flex-row bg-white">
      <StepTest></StepTest>
      <div className="flex flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellowButton content={"Perfil"}></SimpleYellowButton>
        <SimpleYellowButton content={"Provas"}></SimpleYellowButton>
        <SimpleYellowButton content={"Questões"}></SimpleYellowButton>
        <SimpleYellowButton content={"Minha Turma"}></SimpleYellowButton>
        <SimpleYellowButton content={"Dashboard"}></SimpleYellowButton>
      </div>
    </div>
  );
}
