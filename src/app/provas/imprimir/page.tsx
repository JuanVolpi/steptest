"use client";

import "@/styles/pages/provas/Imprimir.scss";
import {
  AcademicCapIcon,
  ChevronUpDownIcon,
  PrinterIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Chip,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Skeleton,
} from "@nextui-org/react";
import React from "react";
import { useImmerReducer } from "use-immer";

export interface PreMadeInputs {
  [key: string]: { selected: boolean; description: string; value: string };
}

export default function Imprimir() {
  type InputsActionType = "write" | "clear" | "toggle";
  type InputsAction = {
    type: InputsActionType;
    selected: boolean;
    value: string;
    nome: string;
  };

  const [inputs, dispatchInputUpdate] = useImmerReducer<
    PreMadeInputs,
    InputsAction
  >(
    (draft, action) => {
      switch (action.type) {
        case "write": {
          const input = draft[action.nome];
          input.value = action.value;
          break;
        }
        case "toggle": {
          const input = draft[action.nome];
          input.selected = !input.selected;
          break;
        }
        case "clear": {
          const input = draft[action.nome];
          input.selected = false;
          input.value = "";
          break;
        }
      }
    },
    {
      escola: {
        selected: false,
        description: "Local onde o teste é aplicado",
        value: "",
      },
      nome: { selected: false, description: "Nome do teste", value: "" },
      professor: {
        selected: false,
        description: "Professor que aplica o teste",
        value: "",
      },
      "ano/turma": {
        selected: false,
        description: "A quem é aplicado",
        value: "",
      },
      data: {
        selected: true,
        description: "Aplicação do teste",
        value: "16/02/23",
      },
    },
  );

  type InputPrefeito = {
    readonly nome: keyof PreMadeInputs;
    valor: string;
    selected: boolean;
    description: string;
  };

  let turmas = ["1º A", "1º B", "2º A", "2º B", "3º A", "3º B", "4º A"];
  const [selectedTurma, setSelectedTurma] = React.useState<string>("1º A");

  const [numCopias, setNumCopias] = React.useState("1");

  type PrintSelectionType = "turma" | "numero";
  let [printSelection, setPrintSelection] =
    React.useState<PrintSelectionType>("turma");

  type PrintType = "Cores" | "Preto e Branco";
  const [printType, setPrintType] = React.useState<PrintType>("Preto e Branco");

  function filterSelectedInputs(): InputPrefeito[] {
    return enumerateCamposPrefeitos().filter((inp) => inp.selected);
  }

  function constructSelectedInputs(): string[] {
    return filterSelectedInputs().map((inp) => inp.nome as string);
  }

  function enumerateCamposPrefeitos(): InputPrefeito[] {
    return Object.entries(inputs).map((campo) => {
      return {
        nome: campo[0] as keyof PreMadeInputs,
        valor: campo[1].value,
        selected: campo[1].selected,
        description: campo[1].description,
      };
    });
  }

  return (
    <main className="wrapper">
      <header>
        <h1>Pre-visualizar</h1>
        <Divider className="divider" />
      </header>
      <main>
        <section className="left">
          <section>
            <header>
              <h3>Definições de Impressão</h3>
              <Divider className="divider" />
            </header>
            <div className="print-controls">
              <Button
                radius="sm"
                className="print"
                variant="solid"
                color="primary"
                endContent={<PrinterIcon className="w-6 h-6 text-slate-50" />}
              >
                Imprimir
              </Button>
              <Select
                className="impr-cor"
                label="Tipo de impressão"
                placeholder="Cores"
                color="primary"
                radius="sm"
                selectorIcon={<ChevronUpDownIcon className="w-6 h-6" />}
                onSelectionChange={(val) => {
                  setPrintType(val as PrintType);
                }}
                value={printType}
              >
                <SelectItem key={"peb"} value={"Preto e Branco" as PrintType}>
                  Preto e Branco
                </SelectItem>
                <SelectItem key={"crs"} value={"Cores" as PrintType}>
                  Cores
                </SelectItem>
              </Select>
              <div className="num-copias">
                <h4>Numero de cópias</h4>
                <RadioGroup
                  defaultValue={"turma"}
                  className="num-copias-selectors"
                  orientation="vertical"
                  value={printSelection}
                  onValueChange={(val) =>
                    setPrintSelection(val as PrintSelectionType)
                  }
                >
                  <div className="selector">
                    <Radio value={"turma"} />
                    <Select
                      className="select-turma"
                      labelPlacement="outside"
                      label={"Turma"}
                      fullWidth={true}
                      placeholder={selectedTurma}
                      value={selectedTurma}
                      isDisabled={printSelection !== "turma"}
                      color="primary"
                      radius="sm"
                      startContent={<AcademicCapIcon className="w-6 h-6" />}
                      selectorIcon={<ChevronUpDownIcon className="w-6 h-6" />}
                      onSelectionChange={(val) => {
                        setSelectedTurma(val as string);
                      }}
                    >
                      {turmas.map((turma) => (
                        <SelectItem key={turma}>{turma}</SelectItem>
                      ))}
                    </Select>
                  </div>
                  <Divider
                    orientation="horizontal"
                    className="my-3 w-3/4 mx-auto bg-slate-100"
                  />
                  <div className="selector">
                    <Radio value={"numero"} />
                    <div className="select-num">
                      <label
                        htmlFor="numero_copias"
                        style={{
                          opacity: printSelection !== "numero" ? "0.5" : "1",
                        }}
                      >
                        Número
                      </label>
                      <Input
                        name="numero_copias"
                        isDisabled={printSelection !== "numero"}
                        type="number"
                        radius="sm"
                        variant="flat"
                        value={numCopias}
                        onValueChange={setNumCopias}
                        startContent={<UserGroupIcon className="w-6 h-6" />}
                      />
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </section>
          <section>
            <header>
              <h3>Campos Pré Feitos</h3>
              <Divider className="divider" />
            </header>
            <div>
              <CheckboxGroup
                label={
                  <span className="flex flex-row gap-3 items-center pt-4">
                    <h4 className="tittle">Campos</h4>
                    <Chip
                      variant="flat"
                      color="primary"
                      startContent={
                        <Squares2X2Icon className="w-4 h-4 ml-1.5 mr-0.5" />
                      }
                    >
                      {constructSelectedInputs().length}/
                      {enumerateCamposPrefeitos().length}
                    </Chip>
                  </span>
                }
                className="controls"
                value={constructSelectedInputs()}
                orientation="horizontal"
              >
                {enumerateCamposPrefeitos().map(
                  ({ nome, valor, selected, description }, index) => (
                    <div
                      key={index}
                      className="combo-input"
                      style={{
                        borderColor: selected ? "blueviolet" : undefined,
                      }}
                    >
                      <Checkbox
                        key={index}
                        value={nome as string}
                        onValueChange={(isSelected: boolean) =>
                          dispatchInputUpdate({
                            type: "toggle",
                            selected: isSelected,
                            value: nome as string,
                            nome: nome as string,
                          })
                        }
                      />
                      <Input
                        size="sm"
                        radius="sm"
                        type="text"
                        variant="bordered"
                        label={nome.toString().toUpperCase()}
                        labelPlacement="outside"
                        placeholder={(nome as string).toUpperCase()}
                        description={description}
                        value={valor}
                        onValueChange={(val) =>
                          dispatchInputUpdate({
                            type: "write",
                            selected: true,
                            value: val,
                            nome: nome as string,
                          })
                        }
                        onClear={() =>
                          dispatchInputUpdate({
                            type: "clear",
                            selected: false,
                            value: "",
                            nome: nome as string,
                          })
                        }
                        isDisabled={!selected}
                        isClearable
                        spellCheck
                      />
                    </div>
                  ),
                )}
              </CheckboxGroup>
            </div>
          </section>
        </section>
        <section className="right">
          <Card>
            <CardHeader className="inputs-parent">
              {filterSelectedInputs().length > 0 ? (
                filterSelectedInputs().map((inp, index) => (
                  <div key={index} className={`div${index + 1}`}>
                    <h4>{(inp.nome as string).toLocaleUpperCase()}</h4>
                    <p>{inp.valor || <i>{"sem conteudo"}</i>}</p>
                  </div>
                ))
              ) : (
                <i className="text-slate-400 underline">
                  Sem conteudo de cabeçalho
                </i>
              )}
            </CardHeader>
            <CardBody>
              <Skeleton>
                <div className="h-[670px] w-[300px] rounded-sm bg-red-500" />
              </Skeleton>
            </CardBody>
          </Card>
        </section>
      </main>
    </main>
  );
}
