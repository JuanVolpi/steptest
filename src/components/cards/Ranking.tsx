import React, { useState, useEffect } from 'react';
import { turmasAvaliadas } from '@/lib/mock_data/dados';

export default function Ranking() {
  const [rankList, setRankList] = useState(
    turmasAvaliadas
      .map(function (turmas) {
        return {
          ano: turmas.ano,
          notaMedia: turmas.notaMedia,
        };
      })
      .sort(function (a, b) {
        return b.notaMedia - a.notaMedia;
      })
  );

  const rankingMedals = (placement: number) => {
    switch (placement) {
      case 1:
        return (
          <div className="quiz-medal">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tl border-amber-400 border-3 from-amber-400 via-yellow-100 to-yellow-400 shadow-md flex items-center justify-center text-white font-semibold text-">
                <span className="relative">{placement}</span>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div className="quiz-medal">
            <div className="relative">
              <div className="w-14 h-14 rounded-full  border-gray-400 border-3 bg-gradient-to-tl from-gray-500 via-neutral-100 to-slate-300 shadow-md flex items-center justify-center text-white font-semibold text-">
                <span className="relative">{placement}</span>
              </div>
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div className="quiz-medal">
            <div className="relative">
              <div className="w-14 h-14 rounded-full  border-orange-400 border-3 bg-gradient-to-tl from-orange-800 via-orange-300 to-orange-500 shadow-md flex items-center justify-center text-white font-semibold text-">
                <span className="relative">{placement}</span>
              </div>
            </div>
          </div>
        );
        break;
      default:
        return (
          <div className="quiz-medal">
            <div className="relative">
              <div className="w-14 h-14 rounded-full  border-sky-400 border-3 bg-gradient-to-tl from-sky-600 via-sky-100 to-sky-300 flex items-center justify-center text-white font-semibold text-">
                <span className="relative">{placement}</span>
              </div>
            </div>
          </div>
        );
        break;
    }
  };

  return (
    <div className="space-y-4 h-96 overflow-scroll">
      {rankList.map((rank, index) => {
        return (
          <div className="flex flex-row gap-9 w-max h-fit text-3xl rounded-full hover:bg-sky-200 transition-all ease-in-out duration-200">
            <section className="flex flex-row gap-3">
              <div className="w-max h-full border-b-3 rounded-full p-3 shadow align-middle">
                {rankingMedals(index + 1)}
              </div>
              <div className="w-max h-full border-b-3 rounded-lg p-3 shadow inline-flex items-center">
                Turma: {rank.ano}
              </div>
              <div className="w-16 h-full border-b-3 rounded-lg p-3 shadow font-bold text-slate-600 inline-flex items-center justify-center bg-neutral-100">
                {rank.notaMedia}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
