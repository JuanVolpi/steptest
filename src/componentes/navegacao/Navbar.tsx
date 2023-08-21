"use client";
import React from "react";
import StepTest from "../logos/StepTest";
import { SimpleYellowButton } from "../buttons/Buttons";
import {
  DocumentText,
  QuestionSolid,
  UserGroup,
  User,
  ChartPie,
} from "../icons/HeroIcons";

export default function BarraDeNavegacao() {
  return (
    <div className="w-full h-max flex flex-row bg-white">
      <StepTest></StepTest>
      <div className=" flex  flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellowButton
          content={"Perfil"}
          endIcon={<User fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
        <SimpleYellowButton
          content={"Provas"}
          endIcon={<DocumentText fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
        <SimpleYellowButton
          content={"Questões"}
          endIcon={<QuestionSolid fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
        <SimpleYellowButton
          content={"Minha Turma"}
          endIcon={<UserGroup fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
        <SimpleYellowButton
          content={"Dashboard"}
          endIcon={<ChartPie fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
      </div>
    </div>
  );
}
