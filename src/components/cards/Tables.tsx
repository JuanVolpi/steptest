import { Conteudo, Titulo } from "@/lib/fonts";
import { respostas, traduzIndexRespostaParaLetra } from "@/lib/mock_data/dados";
import { Alunos, Respostas } from "@/lib/mock_data/tipos";
import { DadosQuestao } from "@/lib/types/componentes/cards";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { Spacer } from "@nextui-org/react";
import { Chart } from "chart.js/auto";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useImmerReducer } from "use-immer";

interface TabelaAlunosProps {
  alunos: Alunos;
  respostas: Respostas;
}

export function Alunos({ alunos, respostas }: TabelaAlunosProps) {
  // Crie um objeto para mapear as respostas corretas por questão
  const respostasCorretasPorQuestao: { [key: number]: string } = {};
  respostas.forEach((resposta) => {
    respostasCorretasPorQuestao[resposta.idQuestao] = resposta.correta;
  });

  // Crie um objeto para mapear as respostas dos alunos por questão
  const respostasPorQuestao: { [key: number]: { [key: string]: string } } = {};

  // Preencha o objeto com as respostas dos alunos
  respostas.forEach((resposta) => {
    if (!respostasPorQuestao[resposta.idQuestao]) {
      respostasPorQuestao[resposta.idQuestao] = {};
    }
    respostasPorQuestao[resposta.idQuestao][resposta.nomeAluno] =
      resposta.resposta;
  });

  return (
    <table className="h-full overflow-y-scroll" role="table">
      <thead className="table-header-group rounded-md overflow-clip h-min">
        <tr className="table-row bg-slate-300/25 text-md items-center">
          <th className="table-cell text-center py-1.5">
            <p className="w-fit h-fit bg-white border mx-auto px-4 py-1 rounded text-blue-400">
              Aluno
            </p>
          </th>
          {Array.from({ length: 8 }, (_, i) => (
            <th className="table-cell text-center px-1 py-1.5" key={i}>
              <p className="w-fit px-4 py-1.5 bg-white border rounded text-blue-400">
                Q{i + 1}
              </p>
            </th>
          ))}
          <th className="table-cell text-center px-2 py-1.5">
            <p className="w-fit px-4 py-1.5 bg-white border rounded text-blue-400">
              Nota
            </p>
          </th>
        </tr>
      </thead>
      <tbody className="table-row-group gap-2 overflow-clip">
        {alunos.map((aluno) => (
          <tr
            className="table-row transition-all ease-in-out duration-300 hover:bg-fuchsia-100 rounded-md overflow-clip text-center pr-6"
            key={aluno.nome}
          >
            <td className="table-cell text-center text-sm px-3 py-0.5">
              <p className="w-fit bg-slate-100 px-3 py-1 rounded-md">
                {aluno.nome}
              </p>
            </td>
            {Array.from({ length: 8 }, (_, i) => {
              const respostaAluno = respostasPorQuestao[i][aluno.nome] || "";
              const respostaCorreta = respostasCorretasPorQuestao[i] || "";

              let corDaResposta = "";
              let corDaLetra = "";
              if (respostaAluno === respostaCorreta) {
                corDaResposta = "bg-green-500/20";
                corDaLetra = "text-green-600";
              } else if (respostaAluno !== "") {
                corDaResposta = "bg-red-500/20";
                corDaLetra = "text-red-600";
              } else {
                corDaResposta = "bg-yellow-500/20";
                corDaLetra = "text-yellow-600";
              }

              return (
                <td className="table-cell" key={i}>
                  <p
                    className={`text-center ${corDaLetra} ${corDaResposta} p-1 font-medium rounded-md mx-0.5`}
                  >
                    {respostaAluno}
                  </p>
                </td>
              );
            })}
            <td className="table-cell ">
              <p className="bg-red-300/25 px-2 py-0 w-fit mx-auto my-auto rounded text-red-500">
                3.5
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export type QuestoesProvaProps = { questoes: DadosQuestao[] };

export function QuestoesProva({ questoes }: QuestoesProvaProps) {
  const secoes: Seccao[] = useMemo(() => {
    return [
      {
        aberta: false,
        categoria: "Trigonometria",
        questoes: [questoes[0], questoes[5]],
      },
      {
        aberta: false,
        categoria: "Geometria",
        questoes: [questoes[1]],
      },
      {
        aberta: false,
        categoria: "Planeamento & Areas",
        questoes: [questoes[2], questoes[3], questoes[6]],
      },
      {
        aberta: false,
        categoria: "Proporções",
        questoes: [questoes[4]],
      },
      {
        aberta: false,
        categoria: "Planos Cartesianos",
        questoes: [questoes[7]],
      },
    ];
  }, [questoes]);

  type SeccoesActionType = "seccao selecionada";

  type SeccoesAction = {
    type: SeccoesActionType;
    selected: string;
  };

  type Seccao = {
    aberta: boolean;
    categoria: string;
    questoes: DadosQuestao[];
  };

  const [seccoesState, dispatch] = useImmerReducer<Seccao[], SeccoesAction>(
    (draft, action) => {
      switch (action.type) {
        case "seccao selecionada":
          const seccao = draft.find(
            (x) => x.categoria === action.selected,
          ) as Seccao;
          seccao.aberta = !seccao.aberta;
          break;
      }
    },
    secoes,
  );

  const seccoesObj: { [key: string]: HTMLDivElement } = useMemo(() => {
    return Object.fromEntries([
      questoes,
      new Array(questoes.length).fill(React.createElement("section")),
    ]);
  }, [questoes]);

  const questoesRef = useRef<{ [key: string]: HTMLDivElement }>(seccoesObj);

  const [posicaoQuestao, setPosicaoQuestao] = useState<string>();

  const [questaoSelecionada, setQuestaoSelecionada] = useState<
    DadosQuestao | undefined
  >(undefined);

  useEffect(() => {
    seccoesState.forEach((seccao, i) =>
      seccao.questoes.forEach((quest, j) => {
        const x = respostas.filter(
          (resposta) => resposta.idQuestao === questoes.indexOf(quest),
        );

        const getNumberOfAnswers = function (question: "A" | "B" | "C" | "D") {
          return x.filter((resposta) => resposta.resposta == question).length;
        };

        const chart = document.createElement("canvas") as HTMLCanvasElement;
        chart.setAttribute("width", "250px");
        chart.setAttribute("height", "250px");

        new Chart(chart as HTMLCanvasElement, {
          type: "pie",
          data: {
            labels: ["A", "B", "C", "D"],
            datasets: [
              {
                label: "My First Dataset",
                data: [
                  getNumberOfAnswers("A"),
                  getNumberOfAnswers("B"),
                  getNumberOfAnswers("C"),
                  getNumberOfAnswers("D"),
                ],
                backgroundColor: ["tomato", "orange", "green", "blueviolet"],
                hoverOffset: 0,
                order: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                text: quest.questao.slice(0, 32) + "...",
                align: "center",
                display: false,
              },
              legend: {
                display: false,
              },
            },
          },
        });
        document.getElementById(`chart@${i}:${j}`)?.replaceChildren(chart);
      }),
    );
  }, [seccoesState, questoes]);

  const opcoesResposta = [
    { letra: "A", cor: "bg-[tomato]" },
    { letra: "B", cor: "bg-[orange]" },
    { letra: "C", cor: "bg-[green]" },
    { letra: "D", cor: "bg-[blueviolet]" },
  ];

  return (
    <div className="flex flex-row gap-12 min-w-full">
      {/* Questoes */}
      <section className="min-w-fit sticky top-0">
        <h2 className="text-xl font-bold w-fit px-3 py-1.5 rounded-md bg-orange-300/25 text-orange-600 tracking-wide shadow">
          Secções
        </h2>
        <main className="p-3 py-4">
          {questaoSelecionada !== undefined && (
            <div
              className="inline-flex items-center gap-3 text-base py-1 pb-4"
              style={Conteudo.style}
            >
              {/* Selected questao */}
              <h4 className="text-lg font-semibold tracking-wide text-blue-500 underline underline-offset-4">
                Selecionada
              </h4>
              <p className="bg-orange-100 text-orange-600 p-2 px-2.5 rounded-md font-semibold">
                Q{posicaoQuestao?.split("|")[0]}.{posicaoQuestao?.split("|")[1]}
              </p>
            </div>
          )}
          <AnimatePresence>
            <ol>
              {seccoesState.map((seccao, i) => (
                <li key={i}>
                  <ol className="list-decimal list-inside flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: "-20px" }}
                      animate={{ opacity: 1, x: "0px" }}
                      exit={{ opacity: 0, x: "-20px" }}
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: Number(`0.${i + 1}`),
                      }}
                      className="inline-flex gap-2.5 items-center justify-start mb-0.5"
                    >
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                      <dl className="text-lg font-medium text-orange-500 underline underline-offset-4">
                        {i + 1}.{` `}
                        {seccao.categoria}
                      </dl>
                      <ArrowDownCircleIcon
                        className="w-5 h-5 text-orange-400 transition-all ease-soft-spring duration-250"
                        style={{
                          rotate: seccao.aberta ? "0deg" : "-90deg",
                        }}
                        onClick={() => {
                          dispatch({
                            selected: seccao.categoria,
                            type: "seccao selecionada",
                          });
                        }}
                      />
                    </motion.div>
                    <AnimatePresence>
                      {seccao.aberta && (
                        <motion.div
                          initial={{ opacity: 0, y: "10px" }}
                          animate={{ opacity: 1, y: "0px" }}
                          exit={{ opacity: 0, y: "10px" }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            delay: 0.5,
                          }}
                          className="border-l-3 ml-[3px] pl-7 border-orange-500 pb-4 space-y-1"
                        >
                          {seccao.questoes.map((questao, j) => (
                            <li
                              key={j}
                              style={{
                                fontFamily: Conteudo.style.fontFamily,
                                color:
                                  questaoSelecionada === questao
                                    ? "blue"
                                    : "inherit",
                              }}
                              className="z-20 duration-100 ease-in-out transition-all hover:translate-x-1 hover:font-semibold hover:text-md hover:text-sky-600 hover:cursor-pointer"
                              onClick={() => {
                                setQuestaoSelecionada(questao);
                                setPosicaoQuestao(`${i + 1}|${j + 1}`);
                                questoesRef.current[
                                  questao.questao
                                ].scrollIntoView();
                              }}
                            >
                              {questao.questao.slice(0, 31).trim() + "..."}
                            </li>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ol>
                </li>
              ))}
            </ol>
          </AnimatePresence>
        </main>
      </section>
      {/* Resultados */}
      <section className="w-full">
        <h2 className="text-xl font-bold w-fit px-3 py-1.5 rounded-md bg-orange-300/25 text-orange-600 tracking-wide shadow">
          Questões da Prova
        </h2>
        <Spacer y={6} />
        <main className="space-y-4 max-h-[72.5vh] overflow-y-scroll pr-3 scroll-smooth">
          {seccoesState.map((seccao, i) =>
            seccao.questoes.map((questao, j) => {
              return (
                <section
                  key={j}
                  className="space-y-10 p-4 border-2 rounded-lg border-slate-200 shadow bg-white"
                  ref={(e) => {
                    questoesRef.current[questao.questao] = e as HTMLDivElement;
                  }}
                >
                  <motion.section
                    initial={{ opacity: 0, x: "10px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    exit={{ opacity: 0, x: "10px" }}
                    className="space-y-4"
                  >
                    <header className="flex flex-row gap-4 items-center justify-start w-full">
                      <QuestionMarkCircleIcon className="w-8 h-8 text-orange-500" />
                      <div className="inline-flex items-baseline gap-4">
                        <h3 className="text-xl font-bold tracking-tight">
                          Questao {i + 1}.{j + 1}
                        </h3>
                        <p className="text-orange-400 text-sm">15 Avaliações</p>
                      </div>
                    </header>
                    <main className="grid grid-cols-[50px_2fr] grid-rows-1">
                      <div />
                      <div className="space-y-4">
                        <div>
                          <h4
                            className="font-medium text-lg text-orange-600"
                            style={Titulo.style}
                          >
                            Contexto
                          </h4>
                          <div className="p-[1px]" />
                          {questao.contextualizacao !== undefined ? (
                            <p
                              style={Conteudo.style}
                              className="border border-orange-400 shadow bg-white p-3.5 max-w-[60ch] rounded-md max-h-[200px] overflow-y-scroll scroll-smooth"
                            >
                              {questao.contextualizacao}
                            </p>
                          ) : (
                            <i
                              style={Conteudo.style}
                              className="text-medium font-medium bg-slate-200 text-slate-400 p-2 rounded-lg w-full"
                            >
                              Sem Contexto
                            </i>
                          )}
                        </div>
                        <div>
                          <h4
                            className="font-medium text-lg text-orange-600"
                            style={Titulo.style}
                          >
                            Questao
                          </h4>
                          <div className="p-1" />
                          <p
                            style={Conteudo.style}
                            className="border border-orange-400 shadow bg-white p-3.5 max-w-[60ch] rounded-md max-h-[200px] overflow-y-scroll scroll-smooth"
                          >
                            {questao.questao}
                          </p>
                        </div>
                        <div>
                          <h4
                            className="font-medium text-lg text-orange-600"
                            style={Titulo.style}
                          >
                            Resposta
                          </h4>
                          <div className="p-1" />
                          <span className="flex flex-row gap-2">
                            <p
                              style={Conteudo.style}
                              className="border-2 border-green-300 bg-green-200 text-green-700 font-semibold shadow p-3 py-1.5 w-fit rounded-md"
                            >
                              {traduzIndexRespostaParaLetra(
                                questao.respostas.indexOf(
                                  questao.respostas.find(
                                    (opcao) => opcao.correta,
                                  ),
                                ),
                              )}
                            </p>
                            <p className="border-2 border-green-300 bg-green-200 text-green-700 font-semibold shadow p-2 py-1.5 w-fit rounded-md">
                              {
                                questao.respostas.find((opcao) => opcao.correta)
                                  ?.conteudo
                              }
                            </p>
                          </span>
                        </div>
                      </div>
                    </main>
                  </motion.section>
                  <motion.section
                    initial={{ opacity: 0, x: "10px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    exit={{ opacity: 0, x: "10px" }}
                    className="space-y-4"
                  >
                    <header className="flex flex-row gap-4 items-center justify-start w-full">
                      <ChartPieIcon className="w-8 h-8 text-orange-500" />
                      {/* Questao & contexto */}
                      <h3 className="text-xl font-bold tracking-tight">
                        Representação Gráfica
                      </h3>
                    </header>
                    <main className="grid grid-cols-[0.15fr_.75fr_1fr] grid-rows-1">
                      <div />
                      <div
                        className=" max-w-[250px] max-h-[250px] bg-white"
                        id={`chart@${i}:${j}`}
                      />
                      <div className="w-fit">
                        <h4 className="font-bold text-blue-500 border-b-2 border-b-slate-300 w-full">
                          Legenda
                        </h4>
                        <ul className="p-1.5 px-3 space-y-2">
                          <dl className="-ml-3 text-sm text-default-500">
                            Universo de Resposta
                          </dl>
                          <div className="pl-2 space-y-1">
                            {opcoesResposta.map((opcao) => (
                              <li
                                key={opcao.letra}
                                className="flex items-baseline gap-2"
                              >
                                <div
                                  className={`w-3 h-3 ${opcao.cor} rounded-sm`}
                                />
                                <p>{opcao.letra}</p>
                              </li>
                            ))}
                          </div>
                        </ul>
                      </div>
                    </main>
                  </motion.section>
                  <motion.section
                    initial={{ opacity: 0, x: "10px" }}
                    animate={{ opacity: 1, x: "0px" }}
                    exit={{ opacity: 0, x: "10px" }}
                    className="space-y-3"
                  >
                    <header className="flex flex-row gap-4 items-center justify-start w-full">
                      <ChartPieIcon className="w-8 h-8 text-orange-500" />
                      {/* Questao & contexto */}
                      <h3 className="text-xl font-bold tracking-tight">
                        Respostas da turma
                      </h3>
                    </header>
                    <main className="grid grid-cols-[0.15fr_2fr] grid-rows-1">
                      <div />
                      <AnimatePresence>
                        <motion.div
                          className={`flex flex-row flex-wrap items-start gap-2.5`}
                        >
                          {opcoesResposta.map((opcao, id) => (
                            <motion.div
                              initial={{ opacity: 0, x: "10px" }}
                              animate={{ opacity: 1, x: "0px" }}
                              exit={{ opacity: 0, x: "10px" }}
                              whileHover={{
                                scale: 1.05,
                              }}
                              key={id}
                              className="flex flex-col gap-2 rounded-md border-2 overflow-clip pb-3 w-fit "
                            >
                              <p className="font-semibold p-2 w-full text-center bg-orange-400 text-white">
                                {opcao.letra}
                              </p>
                              <br />
                              {respostas
                                .filter(
                                  (resposta) =>
                                    resposta.idQuestao ===
                                      questoes.indexOf(questao) &&
                                    opcao.letra === resposta.resposta,
                                )
                                .map((resposta, i) => {
                                  return (
                                    <p
                                      key={i}
                                      style={Conteudo.style}
                                      className="px-3.5 text-left text transition-all ease-in-out duration-100 hover:font-semibold hover:text-fuchsia-400"
                                    >
                                      {resposta.nomeAluno}
                                    </p>
                                  );
                                })}
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </main>
                  </motion.section>
                </section>
              );
            }),
          )}
        </main>
      </section>
    </div>
  );
}
