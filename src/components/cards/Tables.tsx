import { Conteudo } from "@/lib/fonts";
import { respostas } from "@/lib/mock_data/dados";
import { Alunos, Respostas } from "@/lib/mock_data/tipos";
import { DadosQuestao } from "@/lib/types/componentes/cards";
import {
  ArrowDownCircleIcon,
  ChartPieIcon,
  DocumentTextIcon,
} from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Select, SelectItem } from "@nextui-org/react";
import { Chart } from "chart.js/auto";
import {} from "chart.js/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const [questaoSelecionada, setQuestaoSelecionada] = useState<
    DadosQuestao | undefined
  >(undefined);

  const [textoSelecionado, setTextoSelecionado] = useState<string>();

  const chart = document.createElement("canvas") as HTMLCanvasElement;
  const reff = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Chart(chart as HTMLCanvasElement, {
      type: "pie",
      data: {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "My First Dataset",
            data: [10, 3, 5, 7],
            backgroundColor: ["tomato", "orange", "green", "blueviolet"],
            hoverOffset: 0,
            order: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            align: "center",
            display: false,
          },
        },
      },
    });

    reff.current?.replaceChildren(chart);
  }, [reff, chart]);

  const opcoesResposta = [
    { letra: "A", cor: "bg-red-400" },
    { letra: "B", cor: "bg-yellow-400" },
    { letra: "C", cor: "bg-lime-400" },
    { letra: "D", cor: "bg-blue-400" },
  ];

  return (
    <div className="flex flex-row gap-12 min-w-full">
      {/* Questoes */}
      <section className="min-w-fit sticky top-0">
        <h2 className="text-xl font-bold w-fit px-3 py-1.5 rounded-md bg-orange-300/25 text-orange-600 tracking-wide shadow">
          Questoes
        </h2>
        <main className="p-3 py-4">
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
                        duration: 0.3,
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
          Respostas
        </h2>
        <main className="px-3 py-4">
          {questaoSelecionada === undefined && (
            <>
              <p className="text-default-500 bg-slate-100 p-3 py-2.5 rounded-md">
                Sem questao Selecionada
              </p>
            </>
          )}
          {questaoSelecionada !== undefined && (
            <section className="space-y-10">
              <motion.section
                initial={{ opacity: 0, x: "10px" }}
                animate={{ opacity: 1, x: "0px" }}
                exit={{ opacity: 0, x: "10px" }}
                className="space-y-4"
              >
                <header className="flex flex-row gap-4 items-center justify-start w-full">
                  <QuestionMarkCircleIcon className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold tracking-tight">Questao</h3>
                  {/* Questao & contexto */}
                  <Select
                    radius="sm"
                    variant="flat"
                    label="Textos da questao"
                    color="primary"
                    startContent={<DocumentTextIcon className="w-6 h-6" />}
                    onChange={(change) => {
                      setTextoSelecionado(change.target.value);
                    }}
                    classNames={{
                      base: "h-12 max-w-[230px]",
                    }}
                  >
                    <SelectItem
                      key={"Contexto"}
                      value={"Contexto"}
                      defaultChecked
                    >
                      Contexto
                    </SelectItem>
                    <SelectItem key={"Questão"} value={"Questão"}>
                      Questão
                    </SelectItem>
                  </Select>
                  <i className="text-orange-200 ">15 Avaliações</i>
                </header>
                <main className="grid grid-cols-[0.15fr_2fr] grid-rows-1">
                  <div />
                  <div className="border border-orange-400 shadow bg-white p-3.5 max-w-[60ch] rounded-md max-h-[155px] overflow-y-scroll scroll-smooth">
                    <p style={Conteudo.style}>
                      {textoSelecionado === "Questão"
                        ? questaoSelecionada.questao
                        : questaoSelecionada.contextualizacao}
                    </p>
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
                  <h3 className="text-xl font-bold tracking-tight">Dados</h3>
                </header>
                <main className="grid grid-cols-[0.15fr_.75fr_1fr] grid-rows-1">
                  <div />
                  <div
                    className=" max-w-[250px] max-h-[250px] bg-white"
                    ref={reff}
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
                    Interações
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
                                  questoes.indexOf(questaoSelecionada) &&
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
          )}
        </main>
      </section>
    </div>
  );
}