"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Alunos, QuestoesProva } from "@/components/cards/Tables";

import { alunos, questoes, respostas } from "@/lib/mock_data/dados";

import {
  ClipboardDocumentListIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import {
  Button,
  Divider,
  Input,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";

import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React, { useMemo, useRef, useState } from "react";

// Certifique-se de importar os dados corretos

export default function Dashboards() {
  const seccoes: { nome: string; numProvas: number }[] = useMemo(() => {
    return [
      { nome: "Matemática", numProvas: 5 },
      { nome: "Ciências", numProvas: 2 },
      { nome: "Português", numProvas: 3 },
      { nome: "Frações", numProvas: 6 },
    ];
  }, []);

  const sectionNames = useMemo(() => {
    return seccoes.map(({ nome }) => nome);
  }, [seccoes]);

  const [filterText, setFilterText] = useState<string>("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [provaSelecionada, setProvaSelecionada] = useState<string | undefined>(
    undefined,
  );

  type Dashboard = "Vista Geral" | "Aluno-Aluno" | "Questao-Questao";
  const [selectedDashboard, setSelectedDashboard] = useState<
    Dashboard | undefined
  >();

  const seccoesObj: { [key: string]: HTMLDivElement } = useMemo(() => {
    return Object.fromEntries([
      sectionNames,
      new Array(sectionNames.length).fill(React.createElement("div")),
    ]);
  }, [sectionNames]);

  const refs = useRef<{ [key: string]: HTMLDivElement }>(seccoesObj);

  function handleFilterInput(text: string) {
    setFilterText(() => {
      const showAuto = text.length < 1;

      if (showAuto) setShowAutoComplete(false);
      else setShowAutoComplete(true);

      return text;
    });
  }

  function handleAutoCompleteSelection(selection: string): void {
    setFilterText(selection);
    setShowAutoComplete(false);

    let sectRoot = refs.current[selection].parentElement as HTMLElement;
    let currentElement = refs.current[selection];
    let selectedPageOffset = currentElement.offsetTop;
    sectRoot.scrollTop =
      (selectedPageOffset - currentElement.clientHeight) * 1.4;
  }

  function handleDashboardSelect(): React.JSX.Element {
    switch (selectedDashboard) {
      case undefined:
        return <></>;
      case "Aluno-Aluno":
        return <></>;
      case "Questao-Questao":
        return <QuestoesProva questoes={questoes} />;
      case "Vista Geral":
        return <Alunos alunos={alunos} respostas={respostas} />;
    }
  }

  const [last, setLast] = useState<"provas" | "dashboards">("provas");
  const [option, setOption] = useState<"provas" | "dashboards" | undefined>(
    "provas",
  );

  const provas = useMemo(
    () =>
      seccoes.map(({ nome, numProvas }, i) => (
        <div
          key={i}
          ref={(e) => {
            refs.current[nome] = e as HTMLDivElement;
          }}
          className={`rounded-md py-2.5 ${
            filterText === nome ? "bg-fuchsia-100/50" : "bg-inherit"
          }`}
        >
          <SeccaoProvas
            quantProvas={numProvas}
            tituloSeccao={nome}
            onProvaSelect={(prova) => {
              setProvaSelecionada(prova);
              setOption("dashboards");
            }}
          />
        </div>
      )),
    [seccoes, refs, filterText],
  );

  return (
    <main className="flex flex-row gap-4 pb-5 w-full transition-all ease-in-out duration-200">
      {/* Selecionador turma, materia e dados */}
      <section className="max-w-[35%] min-w-fit bg-transparent rounded-md h-fit overflow-clip flex flex-row drop-shadow">
        <header className="space-y-5 bg-white z-20 p-4">
          <Button
            isIconOnly
            color={option !== undefined ? "danger" : "primary"}
            onClick={() => {
              if (option !== undefined) {
                setOption(undefined);
              }
            }}
          >
            <AnimatePresence>
              {option !== undefined ? (
                <motion.div
                  initial={{ opacity: 0, rotate: "180deg" }}
                  animate={{ opacity: 1, rotate: "0deg" }}
                  exit={{ opacity: 0, rotate: "180deg" }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, rotate: "180deg" }}
                  animate={{ opacity: 1, rotate: "0deg" }}
                  exit={{ opacity: 0, rotate: "180deg" }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <Bars3BottomLeftIcon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          <Divider />
          <div className="flex flex-col gap-5">
            <Tooltip
              lang="pt-br"
              content="Provas"
              placement="right"
              delay={150}
              closeDelay={200}
            >
              <Button
                variant="flat"
                onClick={() => setOption("provas")}
                size="md"
                isIconOnly
                color="primary"
                className="rotate-45 "
              >
                <DocumentTextIcon className="w-6 h-6 -rotate-45" />
              </Button>
            </Tooltip>
            <Tooltip
              lang="pt-br"
              content="Vistas"
              placement="right"
              delay={150}
              closeDelay={200}
            >
              <Button
                variant="flat"
                onClick={() => setOption("dashboards")}
                size="md"
                isIconOnly
                color="primary"
                className="rotate-45"
              >
                <ClipboardDocumentListIcon className="w-6 h-6 -rotate-45" />
              </Button>
            </Tooltip>
          </div>
          <Divider />
        </header>
        <AnimatePresence>
          {option !== undefined && option === "provas" && (
            <motion.section
              initial={{ opacity: 0, x: "-150%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-150%" }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="space-y-4 p-4 bg-white border-l-2 border-l-slate-300 border-dashed"
            >
              <header className="space-y-5">
                <h2 className="font-bold text-xl text-blue-500 bg-sky-100 p-2 rounded-md w-fit before:content-['#'] before:mr-1 before:text-blue-300 hover:before:text-blue-500 before:ease-soft-spring before:duration-250">
                  Provas
                </h2>
                <h2 className="text-lg font-bold tracking-wide text-blue-600">
                  Selecionar prova:
                </h2>
                {/* Prova select filter */}
                <section className="space-y-2 mt-3 mb-6 ">
                  <Input
                    label="Qual categoria?"
                    placeholder={"Nome da categoria"}
                    classNames={{
                      input: "placeholder:italic placeholder:opacity-40",
                      label: "text-sm font-semibold",
                    }}
                    variant="flat"
                    color="primary"
                    isClearable
                    size="sm"
                    radius="sm"
                    labelPlacement="outside"
                    value={filterText}
                    onValueChange={handleFilterInput}
                    startContent={
                      <MagnifyingGlassIcon className="w-6 h-6 text-blue-500" />
                    }
                    onClear={() => setShowAutoComplete(false)}
                  />
                  <TextInputAutoCompleteOptions
                    opcoes={sectionNames}
                    onSelection={handleAutoCompleteSelection}
                    isOpen={showAutoComplete}
                    closeSyncState={() => setShowAutoComplete(false)}
                    currentText={filterText}
                    filterOpcoes={true}
                  />
                </section>
              </header>
              {/* Zona Lista Provas */}
              <main className="max-h-[68vh] overflow-y-scroll space-y-4 snap-y scroll-smooth shadow-inner">
                {provas}
              </main>
            </motion.section>
          )}
          {option !== undefined &&
            option === "dashboards" &&
            provaSelecionada !== undefined && (
              <motion.section
                initial={{ opacity: 0, x: "-150%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "-150%" }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="space-y-4 p-4 bg-white border-l-2 border-l-slate-300 border-dashed"
              >
                <header className="space-y-5">
                  <h2 className="font-bold text-xl text-blue-500 bg-sky-100 p-2 rounded-md w-fit before:content-['#'] before:mr-1 before:text-blue-300 hover:before:text-blue-500 before:ease-soft-spring before:duration-250">
                    Vistas
                  </h2>
                  <i className="text-default-400 text-sm">Selecione a vista</i>
                </header>
                {/* Detalhes Dashboard */}
                <main className="flex flex-col gap-0.5 justify-start">
                  <AnimatePresence>
                    {selectedDashboard !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, x: "-20px" }}
                        animate={{ opacity: 1, x: "0px" }}
                        exit={{
                          opacity: 0,
                          y: "20px",
                          animationDelay: "0.2s",
                        }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        className="inline-flex gap-2 my-2 items-center"
                      >
                        <h3 className="text-blue-500 font-medium text-md">
                          Dashboard selecionado:
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, y: "15px" }}
                          animate={{ opacity: 1, y: "0px" }}
                          exit={{ opacity: 0, y: "-15px" }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.25,
                            delay: 0.2,
                          }}
                          className="inline-flex items-center gap-0.5"
                        >
                          <p className="text-sm p-2 px-3 py-1 bg-sky-100 text-blue-600 rounded-md">
                            {selectedDashboard}
                          </p>
                          <XCircleIcon
                            className="w-5 h-5 text-red-400/80"
                            onClick={() => setSelectedDashboard(undefined)}
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Spacer />
                  <Spacer />
                  <Tabs
                    aria-label="Dashboards Provas"
                    color="secondary"
                    variant="underlined"
                    classNames={{
                      base: "rounded-md border border-fuchsia-400 mb-1 py-1 shadow w-fit",
                    }}
                  >
                    <Tab key="Provas" title="Específicos para prova">
                      <motion.div
                        initial={{ opacity: 0, y: "-15px" }}
                        animate={{ opacity: 1, y: "0px" }}
                        exit={{ opacity: 0, y: "-15px" }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        className="flex flex-row flex-wrap items-center justify-start gap-2"
                      >
                        <Button
                          variant="flat"
                          color="success"
                          size="md"
                          startContent={
                            <GlobeAmericasIcon className="w-5 h-5" />
                          }
                          onClick={() => {
                            setSelectedDashboard("Vista Geral");
                            setOption(undefined);
                          }}
                        >
                          Vista Geral
                        </Button>
                        <Button
                          variant="flat"
                          color="success"
                          size="md"
                          startContent={
                            <QuestionMarkCircleIcon className="w-5 h-5" />
                          }
                          onClick={() => {
                            setSelectedDashboard("Questao-Questao");
                            setOption(undefined);
                          }}
                        >
                          Questão-A-Questão
                        </Button>
                      </motion.div>
                    </Tab>
                    <Tab key="Alunos" title="Específicos para alunos">
                      <motion.div
                        initial={{ opacity: 0, y: "-15px" }}
                        animate={{ opacity: 1, y: "0px" }}
                        exit={{ opacity: 0, y: "-15px" }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        className="flex flex-row flex-wrap items-center justify-center gap-2"
                      >
                        <Button
                          variant="flat"
                          color="success"
                          size="md"
                          startContent={<UserGroupIcon className="w-5 h-5" />}
                          onClick={() => setSelectedDashboard("Aluno-Aluno")}
                        >
                          Analise prova Aluno-Aluno
                        </Button>
                      </motion.div>
                    </Tab>
                  </Tabs>
                </main>
              </motion.section>
            )}
        </AnimatePresence>
      </section>
      {/* Representação dos dados */}
      <section className="400 w-full">
        {/* Zona Dashboards */}

        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0, x: "200%" }}
            animate={{ opacity: 1, x: "-0%" }}
            exit={{ opacity: 0, x: "200%" }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
          >
            <AnimatePresence>
              {selectedDashboard !== undefined && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: "-0%" }}
                  exit={{ x: "100%" }}
                  transition={{ ease: "easeInOut", duration: 0.7 }}
                  className="h-fit min-w-full rounded bg-white p-4"
                >
                  <div className="inline-flex gap-2 items-center">
                    <h2 className="text-lg font-bold text-fuchsia-600 p-2 px-3 bg-fuchsia-100 rounded-md w-fit">
                      Prova: {provaSelecionada}
                    </h2>
                    <XCircleIcon
                      className="w-6 h-6 text-red-400"
                      onClick={() => setSelectedDashboard(undefined)}
                    />
                  </div>
                  <Spacer y={3} />
                  <Divider />
                  <Spacer y={3} />
                  <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                    className="min-w-full"
                  >
                    {handleDashboardSelect()}
                  </motion.section>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </AnimatePresence>
      </section>
    </main>
  );
}

type TextInputAutoCompleteOptionsProps = {
  opcoes: string[];
  filterOpcoes?: boolean;
  currentText?: string;
  isOpen: boolean;
  closeSyncState: () => void;
  onSelection: (selection: string) => void;
};

function TextInputAutoCompleteOptions(
  props: TextInputAutoCompleteOptionsProps,
) {
  let filteredOptions = props.opcoes;

  if (
    props.filterOpcoes !== undefined &&
    props.currentText !== undefined &&
    props.filterOpcoes
  ) {
    filteredOptions = filteredOptions.filter((option) =>
      option
        .toLowerCase()
        .includes((props.currentText as string).toLowerCase()),
    );
  }

  function handleOptionSelect(option: string) {
    props.onSelection(option);
    if (!open) props.closeSyncState();
  }

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "-10px" }}
          transition={{ ease: "easeInOut" }}
          className="border bg-white rounded-md py-4 px-3 pt-2 space-y-2 absolute z-10 w-full max-w-xs shadow-sm max-h-[200px] overflow-y-scroll"
        >
          <XMarkIcon
            className="z-20 w-6 h-6 text-red-500/60 absolute top-2 right-2 ease-in-out duration-200 transition-all hover:cursor-pointer hover:scale-110 hover:text-red-500/100"
            onClick={() => props.closeSyncState()}
          />
          <ul className="tracking-normal">
            {filteredOptions.length < 1 ? (
              <i className="text-sm text-default-500">Sem correspondência</i>
            ) : (
              filteredOptions.map((nome, index) => (
                <li
                  key={index}
                  className="py-1.5 pl-1.5 rounded-md inline-flex w-full gap-2.5 ease-soft-spring duration-150 transition-all hover:translate-x-0.5 hover:bg-indigo-100/30 hover:cursor-pointer hover:text-blue-500 hover:font-semibold"
                  onClick={() => handleOptionSelect(nome)}
                >
                  <CubeTransparentIcon className="w-5 h-5 text-slate-300" />
                  <p className="text-sm">{nome}</p>
                </li>
              ))
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type SeccaoProvasProps = {
  tituloSeccao: string;
  quantProvas: number;
  onProvaSelect: (prova: string) => void;
};

function SeccaoProvas(props: SeccaoProvasProps) {
  const [selecionada, setSelecionada] = useState("");
  function nomeProva(i: number): string {
    return `${props.tituloSeccao} ${i}`;
  }

  return (
    <section className="max-h-[400px] overflow-y-scroll snap-start ">
      <div className="mb-2.5 sticky top-0 w-fit flex gap-3 items-end ">
        <div className="font-medium text-fuchsia-600 bg-fuchsia-50 p-2 px-4 rounded">
          <h5 className="text-xs text-fuchsia-400/90">categoria</h5>
          <h3>{props.tituloSeccao}</h3>
        </div>
        <div className="flex flex-row gap-2 bg-fuchsia-50 p-1.5 px-3 rounded text-fuchsia-500 items-center z-0">
          <p>{props.quantProvas}</p>
          <DocumentTextIcon className="w-6 h-6" />
        </div>
      </div>
      <AnimatePresence>
        <motion.ul className="grid grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 items-center justify-between gap-1.5 scroll-smooth snap-y  pb-2.5 w-full">
          {new Array(props.quantProvas).fill(1).map((_, i) => (
            <motion.li
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                ease: "circInOut",
                duration: 0.35,
                delay: Number(`0.${i + 1}`),
              }}
              key={i}
              className="w-full flex flex-col gap-4 items-center justify-evenly border-1.5 px-3 py-2 rounded border-fuchsia-300/50 bg-white snap-center ease-soft-spring duration-200 transition-all hover:border-fuchsia-300 hover:scale-105 hover:cursor-pointer"
              style={{
                border:
                  selecionada === nomeProva(i) ? "solid 1.5px blue" : undefined,
              }}
              onClick={() => {
                if (selecionada !== nomeProva(i)) {
                  setSelecionada(nomeProva(i));
                  props.onProvaSelect(nomeProva(i));
                } else {
                  setSelecionada("");
                  props.onProvaSelect("");
                }
              }}
            >
              <header>
                <h4 className="font-semibold">{nomeProva(i)}</h4>
                <p className="font-thin text-default-500 text-xs text-center mt-0.5">
                  12/03/2022
                </p>
              </header>
              <main className="flex flex-row items-center gap-2 text-sm">
                <p
                  className={`font-bold ${
                    i % 2 === 0
                      ? "text-green-600 bg-green-600/10"
                      : "text-orange-500 bg-orange-500/10"
                  } px-3 py-0.5  rounded-md`}
                >
                  {i % 2 === 0 ? "Corrigida" : "Corrigir"}
                </p>
              </main>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  );
}
