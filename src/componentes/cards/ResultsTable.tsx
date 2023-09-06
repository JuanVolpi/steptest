import { Alunos, Respostas } from "@/lib/test_data/tipos";
import React from "react";

interface TabelaAlunosProps {
  alunos: Alunos;
  respostas: Respostas;
}

const TabelaAlunos: React.FC<TabelaAlunosProps> = ({ alunos, respostas }) => {
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
    <table>
      <thead>
        <tr>
          <th className="h-5 w-fit justify-center rounded-lg bg-lgreen p-1">
            Aluno
          </th>
          {Array.from({ length: 8 }, (_, i) => (
            <th
              className="h-5 w-20 justify-center rounded-lg bg-lblue p-1"
              key={i}
            >
              Q{i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => (
          <tr key={aluno.nome}>
            <td className="h-5 w-fit justify-center rounded-lg bg-lblue p-1">
              {aluno.nome}
            </td>
            {Array.from({ length: 8 }, (_, i) => {
              const respostaAluno = respostasPorQuestao[i][aluno.nome] || "";
              const respostaCorreta = respostasCorretasPorQuestao[i] || "";

              const corDaResposta =
                respostaAluno === respostaCorreta
                  ? "lgreen"
                  : respostaAluno !== ""
                  ? "lred"
                  : "lyellow";

              return (
                <td
                  className={`h-5 w-20 text-center rounded-lg bg-${corDaResposta} p-1`}
                  key={i}
                >
                  {respostaAluno}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaAlunos;
