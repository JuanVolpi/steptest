"use client";

import "../../styles/component/popups/Grids.scss";

import { Titulo } from "@/lib/fonts";

import { motion } from "framer-motion";

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from "@nextui-org/react";

import { useMemo, useState } from "react";

import { questoes } from "@/lib/mock_data/dados";
import { DadosQuestao } from "@/lib/types/componentes/cards";
import {
  DocumentDuplicateIcon,
  ScissorsIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { SmallQuestion } from "../cards/Card";
import { RectangleStack, Send, TrashBin } from "../icons/HeroIcons";
import { DetalhesQuestao } from "./MoveOver";

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
  const [selectedTurmas, setSelectedTurmas] = useState(new Set(["Sem Turma"]));

  const dadosQuestoes = useMemo(() => {
    return questoes;
  }, []);

  const [selectedPage, setSelectedPage] = useState(1);

  const getQuestion = () => {
    return dadosQuestoes[selectedPage - 1];
  };

  const [selectedQuestao, setSelectedQuestao] = useState<DadosQuestao>(
    getQuestion(),
  );

  const turmasDisponivies: string[] = [
    "Turma A",
    "Turma B",
    "Turma C",
    "Turma D",
  ];

  const selectedValue = useMemo(
    () => Array.from(selectedTurmas),
    [selectedTurmas],
  );

  return (
    <Modal
      isOpen={x.state.isOpen}
      onOpenChange={x.state.onOpenChange}
      scrollBehavior="inside"
      backdrop="blur"
      size="full"
      placement="center"
      classNames={{
        body: "flex flex-row gap-5 py-5",
        base: "text-base min-h-full overflow-y-none",
        header:
          "flex flex-row gap-5 items-center justify-between border-b-1 border-b-slate-300",
        footer:
          "flex flex-row gap-5 items-center justify-end border-t-1 border-t-slate-300",
      }}
      closeButton={<></>}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-row gap-5 items-center justify-between ">
              <div className="w-fit flex flex-row gap-4 items-center">
                <h1 style={Titulo.style} className="text-4xl font-semibold">
                  Prova
                </h1>
                <p className="text-2xl">{x.content.titulo}</p>
                <Divider orientation="vertical" className="h-5" />
                <div className="flex flex-row gap-2 items-center justify-between">
                  <RectangleStack />
                  <p className="text-lg">Questões: {x.content.num_questoes}</p>
                </div>
              </div>

              <div className="flex flex-row gap-3 items-center justify-between">
                {/* <div>
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
                </div> */}
                <Button
                  color="success"
                  variant="faded"
                  endContent={<Send fill="#2c7041" />}
                  className="text-gray-900"
                >
                  Aplicar Prova
                </Button>
                <Button
                  variant="flat"
                  color="danger"
                  size="sm"
                  isIconOnly
                  className="rounded-full"
                  onClick={onClose}
                >
                  <XMarkIcon className="w-5 h-5" />
                </Button>
              </div>
            </ModalHeader>

            <ModalBody>
              <motion.div
                className="min-w-fit h-full space-y-5 overflow-y-auto scroll-smooth snap-y pr-3"
                initial={{ opacity: 0, left: "-110%" }}
                animate={{ opacity: 1, left: "0%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                {dadosQuestoes.map((questao, index) => (
                  <div key={index} className="snap-start">
                    <SmallQuestion
                      visualizeState={{
                        active: "lime",
                        inactive: "transparent",
                      }}
                      dadosQuestao={questao}
                      ordemAparencia={index + 1}
                      footerActions={[
                        <Tooltip
                          key={"a"}
                          content="Exclui a questão da prova"
                          placement="bottom"
                          delay={550}
                          slot="arrow"
                        >
                          <Button isIconOnly color="danger" variant="flat">
                            <ScissorsIcon className="w-5 h-5" />
                          </Button>
                        </Tooltip>,
                        <Tooltip
                          key={"b"}
                          content="Duplica questão para a minha biblioteca"
                          placement="bottom"
                          delay={550}
                          slot="arrow"
                        >
                          <Button isIconOnly color="success" variant="flat">
                            <DocumentDuplicateIcon className="w-5 h-5" />
                          </Button>
                        </Tooltip>,
                      ]}
                      expandTrigger={setSelectedQuestao}
                    />
                  </div>
                ))}
              </motion.div>

              <div className="w-full h-full sticky top-0">
                <DetalhesQuestao
                  nomeQuestao={selectedQuestao?.nome || "a"}
                  numTestes={0}
                  visibilidade={"Publica"}
                  posReacts={0}
                  autor={selectedQuestao?.nome || "Camilla"}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                startContent={<TrashBin fill="red" />}
                onClick={() => {
                  setSelectedTurmas(new Set(["Sem Turma"]));
                  setSelectedPage(1);
                  setSelectedQuestao(getQuestion);
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
