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

import {
  SimpleBlueButton,
  SimpleRedButton,
  SimpleYellowButton,
} from "../buttons/Buttons";

import { GenericCard } from "../cards/Card";

import {
  ChatBubbleSolid,
  ListBullet,
  LockOutline,
  QuestionSolid,
  RectangleStack,
  Send,
  Share,
  StarOutline,
  TrashBin,
} from "../icons/HeroIcons";

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
      size="5xl"
      backdrop="blur"
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
  const data = new Array(5).fill(
    <GenericCard
      headerElements={[
        <SimpleBlueButton
          key={"fav"}
          content={"Favorito"}
          endIcon={<StarOutline fill="rgb(129 140 248)" />}
        />,
        <SimpleBlueButton
          key={"share"}
          content={"Partilhar"}
          endIcon={<Share fill="rgb(129 140 248)" />}
        />,
        <SimpleBlueButton
          key={"lock"}
          content={"Trancar"}
          endIcon={<LockOutline fill="rgb(129 140 248)" />}
        />,
        <SimpleRedButton
          key={"trash"}
          content={"Apagar"}
          endIcon={<TrashBin fill="salmon" />}
        />,
      ]}
      content={[
        {
          icon: <QuestionSolid fill="blue" />,
          tittle: "Questões",
          inner: (
            <p>
              Uma empresa fabrica 600 peças por dia e trabalha 5 dias por
              semana. Quantas peças são fabricadas em um mês de 4 semanas?
            </p>
          ),
        },
        {
          icon: <ChatBubbleSolid fill="blue" />,
          tittle: "Respostas",
          inner: (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              veritatis alias, quidem odit rem consequatur nisi.
            </p>
          ),
        },
        {
          icon: <ListBullet fill="blue" />,
          headSubs: (
            <>
              <SimpleYellowButton
                content={"Info"}
                endIcon={<QuestionSolid fill="orange" />}
              />
            </>
          ),
          tittle: "Respostas",
          inner: (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              veritatis alias, quidem odit rem consequatur nisi.
            </p>
          ),
        },
      ]}
    />,
  );
  return <>{data.map((e) => e)}</>;
}
