"use client";

import { SmallDeleteButton, SmallSelectAllButton } from "@/components/buttons";

import Contexto from "@/components/inputs/Contexto";
import { Conteudo } from "@/lib/fonts";
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/button";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Tooltip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useImmerReducer } from "use-immer";

export default function app() {
  /* TODOs
    - Filtrozao

    Zona professor & aluno
    
    Linha de cima: Drop-down
      Ano, area, codigo
  */

  /* 
    [_] Dispatch: Action (type) + Value
    [_] Reducer: (action ?) -> ok... action.x => abcd(value)
    [X] State: obj
  */

  type Action = {
    type: "toggle" | "select all" | "deselect all";
    seccao: "questao" | "identificador" | "extra";
    value?: string[];
  };

  function reducer(draft: NewType, action: Action) {
    switch (action.type) {
      case "toggle":
        return void (draft[action.seccao] = action.value as string[]);
      case "deselect all":
        return void (draft[action.seccao] = baseState[action.seccao].filter(
          (x) => x === "questao"
        ));
      case "select all":
        return void (draft[action.seccao] = baseState[action.seccao]);
    }
  }

  type NewType = {
    questao: string[];
    identificador: string[];
    extra: string[];
  };

  const baseState: NewType = {
    questao: ["questao", "contexto", "imgs"],
    identificador: [],
    extra: [],
  };

  const [state, dispatch] = useImmerReducer<NewType, Action>(reducer, {
    questao: ["questao"],
    identificador: [],
    extra: [],
  });

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-5 grid-rows-1 h-full w-full ">
      <section className="h-full w-full rounded-md bg-white p-3 px-4 overflow-y-scroll">
        <header className="space-y-1.5">
          <h2 className="text-lg font-bold tracking-tight p-2 px-3 text-blue-500 bg-blue-300/20 rounded-md">
            Campos
          </h2>
          <h4 className="text-sm text-slate-900/40 p-2 bg-slate-200/30 rounded">
            Adicione e remova campos para a criação da questão.
          </h4>
        </header>
        <div className="p-3" />
        <AnimatePresence>
          <main className="space-y-5">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className="p-6 pt-4 border border-green-400 rounded-md shadow"
            >
              <header className="flex flex-row items-center justify-between gap-4 w-full">
                <h3 className="text-lg font-bold tracking-tight w-fit bg-green-100 text-green-600 p-2 py-1 rounded-md">
                  Questão
                </h3>
                <div className="space-x-2">
                  <SmallDeleteButton
                    click={() =>
                      dispatch({
                        type: "deselect all",
                        seccao: "questao",
                      })
                    }
                  />
                  <SmallSelectAllButton
                    click={() => {
                      dispatch({
                        type: "select all",
                        seccao: "questao",
                        value: ["questao", "contexto"],
                      });
                    }}
                  />
                </div>
              </header>
              <div className="p-2.5" />
              <div>
                <h3 className="text-md font-semibold tracking-tight">
                  Conteúdo Textual
                </h3>
                <CheckboxGroup
                  label="Texto apresentado na questao"
                  defaultValue={state.questao}
                  classNames={{
                    label: "text-sm",
                    wrapper: "pt-0.5 px-2",
                  }}
                  value={state.questao}
                  onValueChange={(value) =>
                    dispatch({
                      type: "toggle",
                      seccao: "questao",
                      value: value,
                    })
                  }
                >
                  <Checkbox value="contexto" style={Conteudo.style}>
                    Contexto
                  </Checkbox>
                  <Checkbox
                    value="questao"
                    style={Conteudo.style}
                    isRequired
                    isSelected
                    isDisabled
                    classNames={{
                      base: "opacity-100",
                    }}
                  >
                    Questao
                  </Checkbox>
                  <div className="p-0.5" />
                  <Divider />
                  <div className="p-0.5" />
                  <section>
                    <h3 className="text-md font-semibold tracking-tight">
                      Conteudo Multimedia
                    </h3>
                    <h5 className="text-sm tracking-tight text-slate-600/90">
                      Conteudo Multimedia
                    </h5>
                    <div className="p-1" />
                    <Checkbox value="imgs" style={Conteudo.style}>
                      Imagens
                    </Checkbox>
                  </section>
                </CheckboxGroup>
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className="p-6 pt-4 border border-blue-400 rounded-md shadow"
            >
              <header className="flex flex-row items-center justify-between gap-4 w-full">
                <h3 className="text-lg font-bold tracking-tight w-fit bg-blue-100 text-blue-600 p-2 py-1 rounded-md">
                  Identificadores
                </h3>
                <div className="space-x-2">
                  <SmallDeleteButton click={() => {}} />
                  <SmallSelectAllButton click={() => {}} />
                </div>
              </header>
              <div className="p-2.5" />
              <div>
                <h3 className="text-md font-semibold tracking-tight">
                  Contúdos Adcionais
                </h3>
                <CheckboxGroup
                  label="Informações atribuidas à questão "
                  defaultValue={["questao"]}
                  classNames={{
                    label: "text-sm",
                    wrapper: "pt-0.5 px-2",
                  }}
                >
                  <Checkbox value="area-de-conhecimento">
                    Área de conhecimento
                  </Checkbox>
                  <Checkbox value="nivel-de-dificuldade">
                    Nível de dificuldade
                  </Checkbox>
                  <Checkbox value="ano">Ano</Checkbox>
                  <Checkbox value="codigo">Código</Checkbox>
                  <Checkbox value="ordem">Ordem</Checkbox>
                  <Checkbox value="descritor">Descritor</Checkbox>
                </CheckboxGroup>
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className="p-6 pt-4 border border-fuchsia-400 rounded-md shadow"
            >
              <header className="flex flex-row items-center justify-between gap-4 w-full">
                <h3 className="text-lg font-bold tracking-tight w-fit bg-fuchsia-100 text-fuchsia-600 p-2 py-1 rounded-md">
                  Informação
                </h3>
                <div className="space-x-2">
                  <SmallDeleteButton click={() => {}} />
                  <SmallSelectAllButton click={() => {}} />
                </div>
              </header>
              <div className="p-2.5" />
              <div>
                <h3 className="text-md font-semibold tracking-tight">
                  Conteúdo Informacional
                </h3>
                <CheckboxGroup
                  label="Conteúdos adicionais para os educadores"
                  defaultValue={["questao"]}
                  classNames={{
                    label: "text-sm",
                    wrapper: "pt-0.5 px-2",
                  }}
                >
                  <Checkbox value="area-de-conhecimento">
                    Área de conhecimento
                  </Checkbox>
                  <Checkbox value="nivel-de-dificuldade">
                    Nível de dificuldade
                  </Checkbox>
                  <Checkbox value="ano">Ano</Checkbox>
                  <Checkbox value="codigo">Código</Checkbox>
                  <Checkbox value="ordem">Ordem</Checkbox>
                  <Checkbox value="descritor">Descritor</Checkbox>
                </CheckboxGroup>
              </div>
            </motion.section>
          </main>
        </AnimatePresence>
      </section>
      <section className="h-full w-full rounded-md bg-white p-3 px-4">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="p-6 pt-4 border border-green-400 rounded-md shadow"
        >
          <Contexto></Contexto>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="p-6 pt-4 border border-blue-400 rounded-md shadow"
        ></motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="p-6 pt-4 border border-fuchsia-400 rounded-md shadow"
        ></motion.section>
      </section>
    </div>
  );
}
