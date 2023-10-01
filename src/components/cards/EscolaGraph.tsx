import { Conteudo, Display, Titulo } from "@/lib/fonts";
import {
  AdjustmentsHorizontalIcon,
  ChartPieIcon,
  CheckIcon,
  HashtagIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Divider } from "@nextui-org/divider";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Spacer,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import Chart from "chart.js/auto";
import { useEffect, useMemo, useRef, useState } from "react";
import { TextInputAutoCompleteOptions } from "../inputs/TextAutoComplete";

export default function EscolaGraph() {
  const regiaoOpcoes = ["Norte", "Sul", "Este", "Oeste"];
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [regiao, setRegiao] = useState<string>(regiaoOpcoes[0]);

  function handleFilterInput(text: string) {
    setRegiao(() => {
      const showAuto = text.length < 1;

      if (showAuto) setShowAutoComplete(false);
      else setShowAutoComplete(true);

      return text;
    });
  }

  const charArea = useRef<HTMLDivElement>(null);
  const chart: HTMLCanvasElement = document.createElement("canvas");

  const newLocal = useMemo(
    () => [
      {
        label: "Media minima",
        data: [5, 5, 5, 5],
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: "yellow",
        type: "line",
        tension: 0.3,
        order: 0,
      },
      {
        label: "Media Alvo",
        data: [5, 6, 7, 8],
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: "lime",
        type: "line",
        tension: 0.3,
        order: 1,
      },
      {
        label: "Media Atual",
        data: [6.5, 5.9, 8.0, 8.1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
        type: "line",
      },
      {
        label: "Escola 1",
        data: [3, 5.3, 3.5, 7.5],
        borderColor: "white",
        backgroundColor: "rgba(40, 170, 53, 0.65)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Escola 2",
        data: [4.2, 5.3, 6.4, 8.1],
        borderColor: "white",
        backgroundColor: "rgba(255, 170, 53, 0.65)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Escola 3",
        data: [3.2, 3.3, 6.4, 5.1],
        borderColor: "white",
        backgroundColor: "rgba(255, 109, 255, 0.65)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
    [],
  );

  useEffect(() => {
    new Chart(chart, {
      type: "bar",
      data: {
        labels: ["Norte", "Sul", "Este", "Oeste"],
        datasets: newLocal,
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            text: "aaa",
            align: "center",
            display: false,
          },
          legend: {
            display: false,
          },
          decimation: {
            enabled: true,
          },
        },
      },
    });
    chart.style.width = "100%";
    chart.style.height = "100%";
    charArea.current?.replaceChildren(chart);
  }, [charArea, chart, newLocal]);

  return (
    <section className="flex flex-col gap-4 bg-slate-200 w-full h-full rounded-md p-3">
      <header className="bg-white rounded-md p-3 px-3.5 w-full h-fit border border-slate-300">
        {/* Header */}
        <section className="flex flex-col items-start justify-center">
          <h2
            className="text-xl font-medium tracking-wide text-blue-500 rounded-md drop-shadow"
            style={Titulo.style}
          >
            Analise da Rede Escolar
          </h2>
          <h4 className="text-lg text-slate-400" style={Titulo.style}>
            Informacao abrangente das escolas na sua rede.
          </h4>
        </section>
        <Spacer y={2} />
        <Divider />
        <Spacer y={2} />
        {/* Controls */}
        {/* <h4 className="py-1 pb-2 text-sm text-blue-500">Filtros</h4> */}
        <section className="w-full flex flex-row gap-3 overflow-x-scroll scroll-smooth">
          <fieldset className="px-3 pb-1.5 w-fit">
            <h3 className="font-extrabold  text-blue-600 pb-1.5 inline-flex gap-2 items-center justify-start">
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
              <p className="pt-[2px]">Quantitativos</p>
            </h3>
            <section className="flex flex-col gap-2 px-0">
              <div className="grid grid-cols-[1fr_0.3fr] gap-4 items-center">
                <h4 className="tracking-wide pb-0.5" style={Conteudo.style}>
                  Nº de escolas:
                </h4>
                <input
                  type="number"
                  name="num escolas"
                  id="escola_num"
                  className="border border-slate-300 rounded pl-2 max-w-[50px] flex flex-row items-center justify-center"
                  placeholder="4"
                  min={0}
                  max={10}
                  step={1}
                />
              </div>
              <div className="grid grid-cols-[1fr_0.3fr] gap-4 items-center">
                <h4 className="tracking-wide  pb-0.5" style={Conteudo.style}>
                  Nº de resultados:
                </h4>
                <input
                  type="number"
                  name="num escolas"
                  id="escola_num"
                  className="border border-slate-300 rounded pl-2 max-w-[50px] flex flex-row items-center justify-center"
                  placeholder="4"
                  min={0}
                  max={10}
                  step={1}
                />
              </div>
            </section>
          </fieldset>
          <Divider orientation="vertical" className="h-16 my-auto" />
          <fieldset className="px-3 pb-1.5 w-fit">
            <h3 className="font-extrabold  text-blue-600 pb-1.5 inline-flex gap-2 items-center justify-start">
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
              <p className="pt-[2px]">Geográficos e Temporais</p>
            </h3>
            <section className="flex flex-col gap-2">
              <div className="grid grid-cols-[.4fr_1fr] grid-rows-1 gap-5 items-center justify-start place-content-center">
                <h4 className="tracking-wide" style={Conteudo.style}>
                  Regiao:
                </h4>
                <div>
                  <Input
                    // label="Qual categoria?"
                    placeholder={"Regiao (N,S,E,O)"}
                    classNames={{
                      base: "max-w-[175px]",
                      input:
                        "placeholder:italic placeholder:opacity-40 max-w-[45ch]",
                      label: "text-sm font-semibold",
                    }}
                    variant="flat"
                    color="primary"
                    isClearable
                    size="sm"
                    radius="sm"
                    labelPlacement="outside"
                    value={regiao}
                    onValueChange={handleFilterInput}
                    startContent={
                      <MagnifyingGlassIcon className="w-4 h-4 text-blue-500" />
                    }
                    onClear={() => {
                      setShowAutoComplete(false);
                    }}
                  />
                  <TextInputAutoCompleteOptions
                    opcoes={regiaoOpcoes}
                    onSelection={setRegiao}
                    isOpen={showAutoComplete}
                    closeSyncState={() => setShowAutoComplete(false)}
                    currentText={regiao}
                    filterOpcoes={false}
                  />
                </div>
              </div>
              <div className="grid grid-cols-[.4fr_1fr] grid-rows-1 gap-5 items-center justify-start place-content-center">
                <h4 className="tracking-wide  pb-0.5" style={Conteudo.style}>
                  Intervalo:
                </h4>
                <input
                  type="number"
                  name="num escolas"
                  id="escola_num"
                  className="border border-slate-300 rounded pl-2 max-w-[50px] flex flex-row items-center justify-center"
                  placeholder="4"
                  min={0}
                  max={10}
                  step={1}
                />
              </div>
            </section>
          </fieldset>
        </section>
      </header>
      <main className="bg-white rounded-md p-3 px-3.5 w-full h-fit border border-slate-300">
        <div className="min-w-full min-h-full grid grid-cols-[2.4fr_1.5fr] grid-rows-1 items-start justify-center gap-4 place-content-center">
          {/* placeholder for the chart */}
          <div ref={charArea}></div>
          <div className="w-full h-full">
            <Tabs
              radius="full"
              color="primary"
              variant="bordered"
              className="w-full"
            >
              <Tab
                key={"adicionar_metrica"}
                title={
                  <div className="flex gap-2 items-start">
                    <ChartPieIcon className="w-5 h-5" />
                    <span className="mt-[2px]">Adicionar Métrica</span>
                  </div>
                }
              >
                {/* Add Target line */}
                <section className="p-1 rounded border-2 border-slate-300  bg-white space-y-1 hover:border-blue-200 duration-300 ease-in-out">
                  <header className="p-2">
                    <h4
                      style={Titulo.style}
                      className="text-lg font-medium text-fuchsia-600 drop-shadow"
                    >
                      Adicionar representação alvo
                    </h4>
                    <h6 className="text-sm text-slate-400 drop-shadow-sm -mt-1">
                      Um parâmetro a ser tomado como objetivo.
                    </h6>
                  </header>
                  <Divider className="bg-slate-200 w-[90%] mx-2" />
                  <main className="p-2 px-3">
                    {/* Nome da Metrica */}
                    <Input
                      style={Conteudo.style}
                      type="text"
                      color="primary"
                      isRequired
                      label="Nome Métrica"
                      placeholder="Média Alvo da Região"
                      // defaultValue="Media Alvo"
                      size="sm"
                      variant="bordered"
                      radius="sm"
                      labelPlacement="outside"
                      className="max-w-[100%] py-1"
                      isClearable
                      classNames={{
                        clearButton: "text-red-400",
                        label:
                          "px-2 py-1 bg-blue-200/20 rounded-md w-fit mb-1.5 font-semibold",
                      }}
                      startContent={
                        <PencilSquareIcon className="w-4 h-4 -mt-0.5 text-blue-400" />
                      }
                    />
                    <div className="p-1" />
                    {/* Descricao da Metrica */}
                    <Textarea
                      style={Conteudo.style}
                      type="text"
                      color="primary"
                      label="Descrição da Métrica"
                      isRequired
                      placeholder="Media alvo a atingir, de maneira a melhorar a performance escolar."
                      // defaultValue="Media Alvo"
                      size="sm"
                      variant="bordered"
                      radius="sm"
                      labelPlacement="outside"
                      className="max-w-[100%] py-1"
                      classNames={{
                        clearButton: "text-red-400",
                        label:
                          "px-2 py-1 bg-blue-200/20 rounded-md w-fit mb-1.5 font-semibold",
                      }}
                    />
                    {/* Valor da metrica */}
                    <Input
                      style={Conteudo.style}
                      type="number"
                      color="primary"
                      isRequired
                      label="Valor da Métrica"
                      placeholder="5"
                      defaultValue="5"
                      size="sm"
                      variant="bordered"
                      radius="sm"
                      labelPlacement="outside"
                      className="max-w-[100%] py-1"
                      isClearable
                      classNames={{
                        clearButton: "text-red-400",
                        label:
                          "px-2 py-1 bg-blue-200/20 rounded-md w-fit mb-1.5 font-semibold",
                      }}
                      startContent={
                        <HashtagIcon className="w-4 h-4 -mt-0.5 text-blue-400" />
                      }
                    />
                    <section className="py-3.5 pb-0 inline-flex gap-3 justify-between w-full">
                      <Button
                        color="success"
                        variant="flat"
                        className="w-full"
                        radius="sm"
                        endContent={<CheckIcon className="w-4 h-4" />}
                      >
                        Adicionar
                      </Button>
                      <Button
                        color="danger"
                        variant="flat"
                        className="w-full"
                        radius="sm"
                        endContent={<TrashIcon className="w-4 h-4" />}
                      >
                        Cancelar
                      </Button>
                    </section>
                  </main>
                  <Divider className="bg-slate-200 w-[90%] mx-2" />
                  <footer className="p-2">
                    <p className="text-xs text-slate-300 font-semibold mx-auto w-fit">
                      Items com asterisco, são items <i>obrigatórios.</i>
                    </p>
                  </footer>
                </section>
              </Tab>
              <Tab
                key={"listar_metricas"}
                title={
                  <div className="flex gap-2 items-start">
                    <ListBulletIcon className="w-5 h-5" />
                    <span className="mt-[1px]">Lista de Métricas</span>
                  </div>
                }
              >
                <section className="p-1 rounded border-2 border-slate-300  bg-white space-y-1 hover:border-blue-200 duration-300 ease-in-out">
                  <header className="p-2">
                    <h4
                      style={Titulo.style}
                      className="text-lg font-medium text-fuchsia-600 drop-shadow"
                    >
                      Métricas para esta prova
                    </h4>
                    <h6 className="text-sm text-slate-400 drop-shadow-sm -mt-1">
                      Uma lista dos objetivos para cada escola.
                    </h6>
                  </header>
                  <Divider className="bg-slate-200 w-[90%] mx-2" />
                  <main className="p-2 px-3">
                    <Accordion variant="splitted">
                      <AccordionItem
                        key="1"
                        aria-label="Metrica 1"
                        title={
                          <div>
                            <h4
                              className="text-blue-800 font-medium tracking-wide p-2.5 py-1 rounded-md bg-slate-200 w-fit"
                              style={Titulo.style}
                            >
                              Media Alvo
                            </h4>
                            <span className="text-sm px-2.5 text-slate-500 flex flex-row items-center gap-1 pt-1">
                              <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400/80" />
                              <p className="pt-0.5">
                                Media que a escola quer/têm de obter.
                              </p>
                            </span>
                          </div>
                        }
                      >
                        <section className="flex flex-col gap-2 items-start justify-start px-3.5 w-full">
                          <header className="flex flex-row gap-2 w-full items-center justify-between">
                            <h4
                              className="min-w-fit text-lg drop-shadow"
                              style={Titulo.style}
                            >
                              Regiao em análise
                            </h4>
                            <div>
                              <Input
                                // label="Qual categoria?"
                                placeholder={"Regiao (N,S,E,O)"}
                                classNames={{
                                  base: "max-w-[175px]",
                                  input:
                                    "placeholder:italic placeholder:opacity-40 max-w-[45ch]",
                                  label: "text-sm font-semibold",
                                }}
                                variant="flat"
                                color="primary"
                                isClearable
                                size="sm"
                                radius="sm"
                                labelPlacement="outside"
                                value={regiao}
                                onValueChange={handleFilterInput}
                                startContent={
                                  <MagnifyingGlassIcon className="w-4 h-4 text-blue-500" />
                                }
                                onClear={() => {
                                  setShowAutoComplete(false);
                                }}
                              />
                              <TextInputAutoCompleteOptions
                                opcoes={regiaoOpcoes}
                                onSelection={setRegiao}
                                isOpen={showAutoComplete}
                                closeSyncState={() =>
                                  setShowAutoComplete(false)
                                }
                                currentText={regiao}
                                filterOpcoes={false}
                              />
                            </div>
                          </header>
                          <main className="space-y-4">
                            {new Array(3).fill(1).map((_, i) => {
                              return (
                                <section
                                  key={i}
                                  className="flex flex-col gap-2 pt-2"
                                >
                                  <div className="flex flex-row items-center gap-3">
                                    <h5 className="font-semibold tracking-tight px-3 py-1 bg-orange-500/20 rounded-md text-orange-600 drop-shadow">
                                      Escola {i + 1}
                                    </h5>
                                    <h6
                                      className="bg-red-400/30 text-red-600 text-sm font-extrabold px-1.5 py-1 rounded-md"
                                      style={Display.style}
                                    >
                                      #1
                                    </h6>
                                  </div>
                                  <div className="flex flex-row gap-0 items-start justify-start w-full">
                                    <span
                                      className="flex flex-row gap-2 items-end text-md px-2"
                                      style={Conteudo.style}
                                    >
                                      <p className="font-semibold tracking-tight px-3 py-1 border border-slate-400/80 rounded-md text-slate-600 drop-shadow">
                                        Atual
                                      </p>
                                      <p className="font-semibold tracking-tight px-3 py-1 bg-red-500/20 rounded-md text-red-600 drop-shadow">
                                        4.5
                                      </p>
                                    </span>
                                    <span
                                      className="flex flex-row gap-0 text-md px-2 items-center"
                                      style={Conteudo.style}
                                    >
                                      <p className="font-semibold tracking-tight px-3 py-1 border border-slate-400/80 text-slate-600 drop-shadow rounded">
                                        Alvo
                                      </p>
                                      <span className="flex flex-row gap-2 items-center text-md px-2">
                                        <p className="bg-green-400/50 px-2 py-0.5 rounded">
                                          6.5
                                        </p>
                                        <span className="text-sm flex items-center gap-2">
                                          <p className="bg-slate-200 p-1 rounded font-medium">
                                            +.2
                                          </p>
                                          <p className="bg-slate-200 p-1 rounded font-medium">
                                            -.2
                                          </p>
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                </section>
                              );
                            })}
                          </main>
                          <footer></footer>
                          <Divider />
                        </section>
                      </AccordionItem>
                      <AccordionItem
                        key="2"
                        aria-label="Metrica 2"
                        title={
                          <div>
                            <h4
                              className="text-blue-800 font-medium tracking-wide p-2.5 py-1 rounded-md bg-slate-200 w-fit"
                              style={Titulo.style}
                            >
                              Media Base
                            </h4>
                            <span className="text-sm px-2.5 text-slate-500 flex flex-row items-center gap-1 pt-1">
                              <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400/80" />
                              <p className="pt-0.5">
                                Media obrigatoria para a escola.
                              </p>
                            </span>
                          </div>
                        }
                      ></AccordionItem>
                    </Accordion>
                  </main>
                </section>
              </Tab>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="bg-white rounded-md p-3 px-3.5 w-full h-fit border border-slate-300"></footer>
    </section>
  );
}
