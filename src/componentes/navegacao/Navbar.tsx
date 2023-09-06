"use client";

import {
  ChartPieIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { SimpleYellowButton, SimpleYellowButtonLink } from "../buttons/Buttons";

import StepTest from "../logos/StepTest";

export default function BarraDeNavegacao() {
  const iconStyle = "w-6 h-6 text-[rgb(195, 131, 29)]";
  return (
    <div className="w-full h-max flex flex-row bg-white sticky top-0 p-2 z-50">
      <StepTest />
      <div className=" flex flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellowButton
          content={"Perfil"}
          endIcon={<UserIcon className={iconStyle} />}
        ></SimpleYellowButton>
        <SimpleYellowButtonLink
          content={"Provas"}
          endIcon={<DocumentTextIcon className={iconStyle} />}
          href={"/provas"}
        ></SimpleYellowButtonLink>
        <SimpleYellowButtonLink
          content={"Questões"}
          endIcon={<QuestionMarkCircleIcon className={iconStyle} />}
          href={"/questoes"}
        ></SimpleYellowButtonLink>
        <SimpleYellowButton
          content={"Minha Turma"}
          endIcon={<UserGroupIcon className={iconStyle} />}
        ></SimpleYellowButton>
        <SimpleYellowButtonLink
          content={"Dashboards"}
          endIcon={<ChartPieIcon className={iconStyle} />}
          href={"/dashboards"}
        ></SimpleYellowButtonLink>
      </div>
    </div>
  );
}
