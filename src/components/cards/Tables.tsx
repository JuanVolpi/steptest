import { Alunos, Respostas } from "@/lib/mock_data/tipos";

interface TabelaAlunosProps {
  alunos: Alunos;
  respostas: Respostas;
}

export default function Alunos({ alunos, respostas }: TabelaAlunosProps) {
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
