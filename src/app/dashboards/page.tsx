"use client";

import { AnimatePresence, motion } from "framer-motion";

import TabelaAlunos from "@/componentes/cards/ResultsTable";
import { alunos, respostas } from "@/lib/test_data/dados";
import {
  CubeTransparentIcon,
  DocumentTextIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Button, Divider, Input, Spacer, Tab, Tabs } from "@nextui-org/react";
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
  const [selectedDashboard, setSelectedDashboard] = useState<
    string | undefined
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

  return (
    <main className="inline-flex gap-4 pb-5">
      {/* Selecionador turma, materia e dados */}
      <section className="max-w-[30%] pb-6 bg-white p-4 px-6 rounded">
        <h2 className="font-bold text-xl text-blue-500 bg-sky-100 p-2 rounded-md w-fit before:content-['#'] before:mr-1 before:text-blue-300 hover:before:text-blue-500 before:ease-soft-spring before:duration-250">
          Provas
        </h2>
        <Spacer />
        <section className="space-y-4">
          <header>
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
          <main className="max-h-[450px] overflow-y-scroll space-y-4 snap-y scroll-smooth shadow-inner">
            {seccoes.map(({ nome, numProvas }, i) => (
              <div
                key={i}
                ref={(e) => {
                  refs.current[nome] = e as HTMLDivElement;
                }}
                className={`rounded-md py-2 ${
                  filterText === nome ? "bg-fuchsia-100/50" : "bg-inherit"
                }`}
              >
                <SeccaoProvas quantProvas={numProvas} tituloSeccao={nome} />
              </div>
            ))}
          </main>
        </section>

        <Divider className="bg-slate-200" />

        <section className="mt-4 space-y-4">
          <header className="space-y-2">
            <h2 className="font-bold text-xl text-blue-500 bg-sky-100 p-2 rounded-md w-fit before:content-['#'] before:mr-1 before:text-blue-300 hover:before:text-blue-500 before:ease-soft-spring before:duration-250">
              Dashboard
            </h2>
            <i className="text-default-400 text-sm">
              Selecione o tipo de dashboard a visualizar
            </i>
          </header>
          <main className="flex flex-col gap-0.5 justify-center">
            <AnimatePresence>
              {selectedDashboard !== undefined && (
                <motion.div
                  initial={{ opacity: 0, x: "-20px" }}
                  animate={{ opacity: 1, x: "0px" }}
                  exit={{ opacity: 0, y: "20px", animationDelay: "0.5s" }}
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
                      delay: 0.5,
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
                base: "rounded-md border border-fuchsia-400 mb-1 py-1 shadow mx-auto w-fit",
              }}
            >
              <Tab key="Provas" title="Específicos para prova">
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
                    startContent={<GlobeAmericasIcon className="w-5 h-5" />}
                    onClick={() => setSelectedDashboard("Vista Geral")}
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
                    onClick={() => setSelectedDashboard("Questão-A-Questão")}
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
        </section>
      </section>
      {/* Representação dos dados */}
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.35 }}
          className="w-full h-fit aspect-video rounded bg-white p-4 grid place-items-start"
        >
          <h2 className="text-lg font-bold text-fuchsia-600 p-2 px-3 bg-fuchsia-100 rounded-md">
            Prova: Nome Prova
          </h2>
          <Spacer y={3} />
          <Divider />
          <Spacer y={3} />
          <TabelaAlunos alunos={alunos} respostas={respostas} />
        </motion.section>
      </AnimatePresence>
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
      option.includes(props.currentText as string),
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
          className="border bg-white rounded-md py-4 px-3 pt-2 space-y-2 absolute left-14 z-10 w-full max-w-xs shadow-sm max-h-[200px] overflow-y-scroll"
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
};

function SeccaoProvas(props: SeccaoProvasProps) {
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
      <ul className="flex flex-row flex-wrap items-center justify-start gap-3 scroll-smooth snap-y ml-1.5 pr-1 pb-2 max-w-fit">
        {new Array(props.quantProvas).fill(1).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 items-center justify-evenly border-1.5 w-fit px-4 py-2.5 rounded border-fuchsia-300/50 bg-white snap-center ease-soft-spring duration-200 transition-all hover:border-fuchsia-300 hover:scale-105 hover:cursor-pointer"
          >
            <header>
              <h4 className="font-semibold">Nome Prova</h4>
              <p className="font-thin text-default-500 text-xs">12/03/2022</p>
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
              {/* <ArrowRightCircleIcon className="w-7 h-7 text-fuchsia-500" /> */}
            </main>
          </div>
        ))}
      </ul>
    </section>
  );
}
