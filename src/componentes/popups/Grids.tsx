"use client";

import "../../styles/component/popups/Grids.scss";

import { Titulo } from "@/lib/fonts";

import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import React, { SetStateAction } from "react";

import { SmallQuestionCard } from "../cards/Card";
import { ListBullet, RectangleStack, Send, TrashBin } from "../icons/HeroIcons";

type GenericGridProps = {
  gridTittle: string;
};

export function GenericGrid(props: GenericGridProps) {
  return (
    <>
      <h1>unimplemented</h1>
    </>
  );
}

type GridProvaQuestoesProps = {
  state: { isOpen: boolean; onOpen: () => void; onOpenChange: () => void };
  content: {
    titulo: string;
    num_questoes: number;
  };
};

export function GridProvaQuestoes(x: GridProvaQuestoesProps) {
  const [selectedTurmas, setSelectedTurmas] = React.useState(
    new Set(["Sem Turma"]),
  );

  const turmasDisponivies: string[] = [
    "Turma A",
    "Turma B",
    "Turma C",
    "Turma D",
  ];

  const selectedValue = React.useMemo(
    () => Array.from(selectedTurmas),
    [selectedTurmas],
  );

  return (
    <Modal
      isOpen={x.state.isOpen}
      onOpenChange={x.state.onOpenChange}
      scrollBehavior="inside"
      backdrop="blur"
      size="5xl"
      radius="sm"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="gridProvaQuestoes">
              <div className="nomeProva">
                <h1 style={Titulo.style}>Prova</h1>
                <p>{x.content.titulo}</p>
                <Divider orientation="vertical" className="h-5" />
                <div className="numQuestoes">
                  <RectangleStack />
                  <p>Questões: {x.content.num_questoes}</p>
                </div>
              </div>

              <div className="interacoes">
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="ghost"
                        color="default"
                        className="w-min"
                        endContent={<ListBullet />}
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      variant="solid"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedTurmas}
                      onSelectionChange={(a) => {
                        setSelectedTurmas(a as SetStateAction<Set<string>>);
                      }}
                    >
                      {turmasDisponivies.map((turma) => (
                        <DropdownItem key={turma}>{turma}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <Button
                  color="success"
                  variant="faded"
                  endContent={<Send fill="#2c7041" />}
                  className="text-gray-900"
                >
                  Aplicar Prova
                </Button>
              </div>
            </ModalHeader>

            <ModalBody>
              <div className="questoes">{exampleCards()}</div>
            </ModalBody>

            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                startContent={<TrashBin fill="red" />}
                onClick={() => {
                  setSelectedTurmas(new Set(["Sem Turma"]));
                  onClose();
                }}
              >
                Apagar Prova
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

function exampleCards() {
  const data = new Array(8).fill(
    <SmallQuestionCard
      visualizeState={{
        active: "lime",
        inactive: "transparent",
      }}
      dadosQuestao={{
        bncc: "EF06MT",
        dificuldade: "Fácil",
        respostas: [
          {
            conteudo: "708 pontos",
            correta: false,
          },
          {
            conteudo: "512 pontos",
            correta: false,
          },
          {
            conteudo: "462 pontos",
            correta: true,
          },
          {
            conteudo: "188 pontos",
            correta: false,
          },
        ],
        imgApoio: "/images/GamingPana.svg",
      }}
      ordemAparencia={1}
      footerActions={
        <>
          <Button>Fechar</Button>
          <Button>Copiar</Button>
        </>
      }
      expandTrigger={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
  );
  return <>{data.map((e) => e)}</>;
}
