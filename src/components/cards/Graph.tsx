import { turmasAvaliadas } from "@/lib/mock_data/dados";
import { Divider } from "@nextui-org/react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import Ranking from "./Ranking";

export default function Graph() {
  useEffect(() => {
    const labels = turmasAvaliadas.map((turma) => turma.ano);

    const datasets = [
      {
        type: "bar",
        label: "Nota Mínima",
        data: turmasAvaliadas.map((turma) => turma.notaMinima),
        backgroundColor: "rgba(215, 3, 252, 0.3)",
        borderColor: "rgba(215, 3, 252)",
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 35,
      },
      {
        type: "line",
        label: "Linha Nota Me",
        backgroundColor: "rgba(244, 252, 3, 0.3)",
        borderColor: "rgba(244, 252, 3)",
        fill: false,
        data: turmasAvaliadas.map((turma) => turma.notaMedia),
      },
      {
        type: "bar",
        label: "Nota Média",
        data: turmasAvaliadas.map((turma) => turma.notaMedia),
        backgroundColor: "rgba(244, 252, 3, 0.3)",
        borderColor: "rgba(244, 252, 3)",
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 35,
      },
      {
        type: "bar",
        label: "Nota Máxima",
        data: turmasAvaliadas.map((turma) => turma.notaMaxima),
        backgroundColor: "rgba(3, 227, 252, 0.3)",
        borderColor: "rgba(3, 227, 252)",
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 35,
      },
    ];

    const chart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          title: {
            display: true,
            text: "Turmas Avaliadas",
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            min: 0,
            max: 10,
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-[500px]">
        <canvas id="myChart" className="self-center"></canvas>
      </div>
      <section>
        <Divider></Divider>
        <h2 className="text-lg font-bold text-fuchsia-600 p-2 px-3 bg-fuchsia-100 rounded-md w-fit">
          Ranking
        </h2>
        <Ranking></Ranking>
      </section>
    </>
  );
}
