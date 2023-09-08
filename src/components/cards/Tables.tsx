import { Conteudo } from "@/lib/fonts";
import { Alunos, Respostas } from "@/lib/mock_data/tipos";
import { DadosQuestao } from "@/lib/types/componentes/cards";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
  const secoes: { categoria: string; questoes: DadosQuestao[] }[] = [
    {
      categoria: "Trigonometria",
      questoes: [questoes[0], questoes[5]],
    },
    {
      categoria: "Geometria",
      questoes: [questoes[1]],
    },
    {
      categoria: "Planeamento & Areas",
      questoes: [questoes[2], questoes[3], questoes[6]],
    },
    {
      categoria: "Proporções",
      questoes: [questoes[4]],
    },
    {
      categoria: "Planos Cartesianos",
      questoes: [questoes[7]],
    },
  ];

  const [questaoSelecionada, setQuestaoSelecionada] = useState<
    string | undefined
  >(undefined);

  return (
    <div className="flex flex-row gap-12">
      {/* Questoes */}
      <section>
        <h2 className="text-xl font-bold w-fit px-3 py-1.5 rounded-md bg-orange-300/25 text-orange-600 tracking-wide shadow">
          Questoes
        </h2>
        <main className="p-3 py-4">
          <AnimatePresence>
            <ol>
              {secoes.map((seccao, i) => (
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
                      <ArrowDownCircleIcon className="w-5 h-5 text-orange-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: "10px" }}
                      animate={{ opacity: 1, y: "0px" }}
                      exit={{ opacity: 0, y: "10px" }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.7,
                      }}
                      className="border-l-3 ml-[3px] pl-7 border-orange-500 pb-4 space-y-1"
                    >
                      {seccao.questoes.map((questao, j) => (
                        <li
                          key={j}
                          style={Conteudo.style}
                          className="duration-100 ease-in-out transition-all hover:translate-x-1 hover:font-semibold hover:text-md hover:text-sky-600 hover:cursor-pointer"
                        >
                          {questao.questao.slice(0, 31).trim() + "..."}
                        </li>
                      ))}
                    </motion.div>
                  </ol>
                </li>
              ))}
            </ol>
          </AnimatePresence>
        </main>
      </section>
      {/* Resultados */}
      <section>
        <h2 className="text-xl font-bold w-fit px-3 py-1.5 rounded-md bg-orange-300/25 text-orange-600 tracking-wide shadow">
          Respostas
        </h2>
        <main className="p-3 py-4">
          {questaoSelecionada === undefined && (
            <>
              <p className="text-default-500 bg-slate-100 p-3 py-2.5 rounded-md">
                Sem questao Selecionada
              </p>
            </>
          )}
        </main>
      </section>
    </div>
  );
}
