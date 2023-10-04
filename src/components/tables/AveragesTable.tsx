import { Button, Divider } from '@nextui-org/react';

import { HighlightSpanKind } from 'typescript';
import { Title } from 'chart.js';
import { Titulo } from '@/lib/fonts';
import { respostas, turmasAvaliadas } from '@/lib/mock_data/dados';

export default function AveragesTable() {
  let correctAnswers: {
    [key: number]: { corretas: number; respostas: number; media: number };
  } = {};

  respostas.forEach((element) => {
    if (!!element.resposta) {
      if (correctAnswers[element.idQuestao] === undefined) {
        correctAnswers[element.idQuestao] = {
          corretas: 0,
          respostas: 0,
          media: 0,
        };
      }
      correctAnswers[element.idQuestao].respostas += 1;
    }
    if (element.resposta == element.correta) {
      if (isNaN(correctAnswers[element.idQuestao].corretas)) {
        correctAnswers[element.idQuestao].corretas = 0;
      }
      correctAnswers[element.idQuestao].corretas += 1;
    }
    correctAnswers[element.idQuestao].media =
      correctAnswers[element.idQuestao].corretas /
      correctAnswers[element.idQuestao].respostas;
    correctAnswers[element.idQuestao].media = Number(
      (correctAnswers[element.idQuestao].media * 100).toFixed(2)
    );
  });

  const tableColumnTitles = Object.entries(correctAnswers).map((element) => {
    return (
      <th key={element[0]}>
        <div className="w-fit h-fit p-3 bg-slate-00 shadow-lg mb-2 rounded-md  text-slate-600 text-center">{`Questão ${
          Number(element[0]) + 1
        }`}</div>
      </th>
    );
  });

  const turmas = turmasAvaliadas.map((element) => {
    return { ano: element.ano, notaMedia: element.notaMedia };
  });

  console.log(turmas);

  const tableBody = turmas.map((element, index) => {
    return (
      <tr
        key={index}
        className="hover:bg-sky-200 ease-in-out duration-4 transition-all"
      >
        <td
          style={Titulo.style}
          className="w-fit h-fit p-3 bg-blue-600 shadow-lg rounded-md text-center font-bold text-xl text-white"
        >{`${element.ano}`}</td>
        {Object.entries(correctAnswers).map((entry) => {
          return (
            <td
              key={entry[0]}
              className="w-fit h-14 p-3 bg-gray-200/30 rounded-md text-center hover:scale-110 hover:bg-sky-300 hover:text-2xl ease-in-out duration-4 transition-all"
            >
              {`${entry[1].media} %`}
            </td>
          );
        })}
        <td
          style={Titulo.style}
          className="w-fit h-14  bg-gray-400/30 rounded-md text-center font-bold text-2xl text-slate-600 hover:scale-110 hover:bg-blue-300 hover:text-3xl ease-in-out duration-4 transition-all"
        >
          {element.notaMedia}
        </td>
      </tr>
    );
  });

  const mainTable = (
    <div className="w-full flex bg-white rounded-md p-5 justify-center align-middle text-xl">
      <table className="table-auto border-2 border-gray-200 rounded-lg p-3 border-separate border-spacing-x-3 border-spacing-y-2">
        <thead style={Titulo.style}>
          <tr>
            <th></th>
            {tableColumnTitles}
            <th className="w-fit h-fit p-3 bg-slate-00 shadow-lg rounded-md  text-slate-600 text-center">
              Média da sala
            </th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );

  console.table(correctAnswers);

  return <div>{mainTable}</div>;
}
