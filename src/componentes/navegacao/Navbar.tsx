"use client";

import {
  ChartPieIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { SimpleYellow } from "../buttons/Button";

import StepTest from "../logos/StepTest";

export default function BarraDeNavegacao() {
  const iconStyle = "w-6 h-6 text-[rgb(195, 131, 29)]";
  return (
    <div className="w-full h-max flex flex-row bg-white sticky top-0 p-2 z-50 shadow">
      <StepTest />
      <div className=" flex flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellow
          content={"Perfil"}
          endIcon={<UserIcon className={iconStyle} />}
        ></SimpleYellow>
        <SimpleYellow
          content={"Provas"}
          endIcon={<DocumentTextIcon className={iconStyle} />}
          href={"/provas"}
        ></SimpleYellow>
        <SimpleYellow
          content={"Questões"}
          endIcon={<QuestionMarkCircleIcon className={iconStyle} />}
          href={"/questoes"}
        ></SimpleYellow>
        <SimpleYellow
          content={"Minha Turma"}
          endIcon={<UserGroupIcon className={iconStyle} />}
        ></SimpleYellow>
        <SimpleYellow
          content={"Dashboards"}
          endIcon={<ChartPieIcon className={iconStyle} />}
          href={"/dashboards"}
        ></SimpleYellow>
      </div>
    </div>
  );
}
