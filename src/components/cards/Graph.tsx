import { Titulo } from "@/lib/fonts";
import { turmasAvaliadas } from "@/lib/mock_data/dados";
import { Divider } from "@nextui-org/react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import AveragesTable from "../tables/AveragesTable";
import Ranking from "./Ranking";

export default function Graph() {
  useEffect(() => {
    const labels = turmasAvaliadas.map((turma) => turma.ano);

    const chart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            type: "bar",
            label: "Menor nota",
            data: turmasAvaliadas.map((turma) => turma.notaMinima),
            backgroundColor: "rgba(158, 221, 255)",

            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
            barThickness: 35,
          },
          {
            type: "line",
            label: "Linha Nota Média",
            backgroundColor: "rgba(100, 153, 233)",
            borderColor: "rgba(100, 153, 233)",
            fill: false,
            data: turmasAvaliadas.map((turma) => turma.notaMedia),
          },
          {
            type: "bar",
            label: "Nota Média",
            data: turmasAvaliadas.map((turma) => turma.notaMedia),
            backgroundColor: "rgb(75, 192, 192)",

            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
            barThickness: 35,
          },
          {
            type: "bar",
            label: "Maior nota",
            data: turmasAvaliadas.map((turma) => turma.notaMaxima),
            backgroundColor: "rgba(3, 227, 252, 0.65)",

            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
            barThickness: 35,
          },
        ],
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
      <div className="p-3 rounded-md bg-slate-200">
        <div className="w-full h-full flex flex-col gap-4 justify-center rounded-md item-center">
          <div className="bg-white rounded-md">
            <section className="flex flex-col p-5 items-start justify-center px-5">
              <h2
                className="text-xl font-medium tracking-wide text-blue-500 rounded-md drop-shadow"
                style={Titulo.style}
              >
                Ranking de Turmas
              </h2>
              <h4 className="text-lg text-slate-400" style={Titulo.style}>
                Lista de Turmas que realizaram as provas
              </h4>
              <Divider></Divider>
            </section>
            <section className="w-full h-full gap-5 flex flex-row self-center justify-center ">
              <div className="p-2 flex-grow max-w-2xl self-center">
                <canvas id="myChart" className="self-center"></canvas>
              </div>
              <div>
                <div className=" p-5 flex-grow items-center">
                  <Ranking></Ranking>
                </div>
              </div>
            </section>
            <Divider></Divider>
          </div>
          <section>
            <AveragesTable></AveragesTable>
          </section>
        </div>
      </div>
    </>
  );
}
