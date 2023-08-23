"use client";

import { SimpleYellowButton, SimpleYellowButtonLink } from "../buttons/Buttons";
import {
  ChartPie,
  DocumentText,
  QuestionSolid,
  User,
  UserGroup,
} from "../icons/HeroIcons";
import StepTest from "../logos/StepTest";

export default function BarraDeNavegacao() {
  return (
    <div className="w-full h-max flex flex-row bg-white sticky top-0 p-3">
      <StepTest />
      <div className=" flex flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellowButton
          content={"Perfil"}
          endIcon={<User fill="rgb(195, 131, 29)" />}
        ></SimpleYellowButton>
        <SimpleYellowButtonLink
          content={"Provas"}
          endIcon={<DocumentText fill="rgb(195, 131, 29)" />}
          href={"/provas"}
        ></SimpleYellowButtonLink>
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
