"use client";

import {
  ChartPieIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { SimpleYellow } from "../buttons/Button";

import { useState } from "react";
import StepTest from "../logos/StepTest";

import { usePathname } from "next/navigation";

export default function BarraDeNavegacao() {
  const iconStyle = "w-6 h-6 text-[rgb(195, 131, 29)]";

  const [selectedRoute, setSelectedRoute] = useState<string | undefined>(
    usePathname(),
  );

  return (
    <div className="w-full h-max flex flex-row bg-white sticky top-0 p-2 z-50 shadow">
      <StepTest />
      <div className=" flex flex-row gap-5 w-full self-center justify-end pr-2">
        <SimpleYellow
          onClick={() => {
            setSelectedRoute("/perfil");
          }}
          content={"Perfil"}
          selected={selectedRoute === "/perfil"}
          endIcon={<UserIcon className={iconStyle} />}
        ></SimpleYellow>
        <SimpleYellow
          onClick={() => {
            setSelectedRoute("/provas");
          }}
          content={"Provas"}
          selected={selectedRoute === "/provas"}
          endIcon={<DocumentTextIcon className={iconStyle} />}
          href={"/provas"}
        ></SimpleYellow>
        <SimpleYellow
          onClick={() => {
            setSelectedRoute("/questoes");
          }}
          content={"Questões"}
          endIcon={<QuestionMarkCircleIcon className={iconStyle} />}
          href={"/questoes"}
          selected={selectedRoute === "/questoes"}
        ></SimpleYellow>
        <SimpleYellow
          onClick={() => {
            setSelectedRoute("/minhaturma");
          }}
          content={"Minha Turma"}
          selected={selectedRoute === "/minhaturma"}
          endIcon={<UserGroupIcon className={iconStyle} />}
        ></SimpleYellow>
        <SimpleYellow
          onClick={() => {
            setSelectedRoute("/dashboards");
          }}
          content={"Dashboards"}
          selected={selectedRoute === "/dashboards"}
          endIcon={<ChartPieIcon className={iconStyle} />}
          href={"/dashboards"}
        ></SimpleYellow>
      </div>
    </div>
  );
}
