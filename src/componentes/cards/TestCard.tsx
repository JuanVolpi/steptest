"use client";

import "@/styles/component/cards/TestCard.scss";
import { Url } from "next/dist/shared/lib/router/router";
import {
  AcademicCap,
  DocumentText,
  FolderOpen,
  UserGroup,
} from "../icons/HeroIcons";
import { SimpleBlueButton } from "../buttons/Buttons";
import Image from "next/image";

export default function TestCard({
  nomeProva,
  numQuest,
  imgProva,
  disciplina,
  recomendacao,
  materia,
}: {
  nomeProva: string;
  numQuest: number;
  imgProva: string;
  disciplina: string;
  recomendacao: string;
  materia: string;
}) {
  return (
    <div className="Main">
      <div className="Wrap">
        <div className="flex flex-col w-max h-max">
          <div className="NomeProva">Prova: {nomeProva}</div>
          <div className="NumQuest">
            <FolderOpen></FolderOpen> {numQuest} Questões
          </div>
          <Image
            src={imgProva}
            width={240}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="LowerInfo">
          <div className="Disciplina">
            <AcademicCap></AcademicCap> Disciplina: {disciplina}
          </div>
          <div className="Recomendacao">
            <UserGroup></UserGroup> Recomendação: {recomendacao}
          </div>
          <div className="Materia">
            <DocumentText></DocumentText> Matéria: {materia}
          </div>
        </div>
        <SimpleBlueButton content={"Detalhes"}></SimpleBlueButton>
      </div>
    </div>
  );
}