/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { PageTag } from "@/componentes/cards/Pagetag";
import CustomDropdown from "@/componentes/navegacao/CustomDropdown";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { SetStateAction, useState } from "react";
import { Comentario, Enunciado } from "./ComponentsCaller";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import ConfirmationModal from "@/componentes/popups/ConfirmationModal";

export default function app() {
  const [selectedKeys1, setSelectedKeys1] = useState(new Set([""]));
  const [selectedKeys2, setSelectedKeys2] = useState(new Set([""]));
  const [selectedKeys3, setSelectedKeys3] = useState(new Set([""]));
  const [selectedKeys4, setSelectedKeys4] = useState(new Set([""]));
  const [selectedKeys5, setSelectedKeys5] = useState(new Set([""]));
  const [selectedKeys6, setSelectedKeys6] = useState(new Set([""]));
  const [selectedKeys7, setSelectedKeys7] = useState(new Set([""]));

  const handleDropdown1SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys1(newSelectedKeys);
  };
  const handleDropdown2SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys2(newSelectedKeys);
  };
  const handleDropdown3SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys3(newSelectedKeys);
  };
  const handleDropdown4SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys4(newSelectedKeys);
  };
  const handleDropdown5SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys5(newSelectedKeys);
  };
  const handleDropdown6SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys6(newSelectedKeys);
  };
  const handleDropdown7SelectionChange = (newSelectedKeys: Set<string>) => {
    setSelectedKeys7(newSelectedKeys);
  };

  const dropdownOptions1 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions2 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions3 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions4 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions5 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions6 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];
  const dropdownOptions7 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = React.useState("enunciado");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const descriptionsMap = {
    enunciado: "Adiciona um campo para o enunciado da questão",
    comentario: "Adiciona um campo para o comentário da questão",
    rebase: "Ay.",
  };

  const labelsMap: { [key: string]: string } = {
    enunciado: "Adicionar Enunciado",
    comentario: "Adicionar Comentário",
    rebase: "y",
  };

  const [exibirEnunciado, setExibirEnunciado] = useState(false);
  const [exibirComentario, setExibirComentario] = useState(false);
  const [title, setTitle] = useState("");

  const selectedOptionValue = Array.from(selectedOption)[0];

  const handleButtonClick = () => {
    switch (selectedOption) {
      case "enunciado":
        setExibirEnunciado(true);
        break;
      case "comentario":
        setExibirComentario(true);
        break;
    }
  };

  return (
    <div className="overflow-hidden">
      <header className="bg-bglgreen w-full h-fit px-4 pb-3 ">
        <div className="w-full justify-between h-max flex flex-row">
          <h1 className="font-confortaa text-[40px] text-ayellow w-fit">
            Questões - Criar
          </h1>
          <div className="self-center">
            <PageTag content={"Questão"}></PageTag>
          </div>
        </div>
        <div className="w-full h-2 pb-3 rounded bg-mgreen self-center"></div>
      </header>
      <div className="bg-bglgreen w-full h-[87%] px-4 overflow-y-scroll">
        <section className="grid grid-cols-6 gap-5">
          <CustomDropdown
            initialSelectedKeys={selectedKeys1}
            onSelectChange={handleDropdown1SelectionChange}
            options={dropdownOptions1}
            title={"Área de conhecimento"}
          ></CustomDropdown>
          <CustomDropdown
            initialSelectedKeys={selectedKeys2}
            onSelectChange={handleDropdown2SelectionChange}
            options={dropdownOptions2}
            title={"Nível de dificuldade"}
          ></CustomDropdown>
          <CustomDropdown
            initialSelectedKeys={selectedKeys3}
            onSelectChange={handleDropdown3SelectionChange}
            options={dropdownOptions3}
            title={"Ano"}
          ></CustomDropdown>
          <CustomDropdown
            initialSelectedKeys={selectedKeys4}
            onSelectChange={handleDropdown4SelectionChange}
            options={dropdownOptions4}
            title={"Código"}
          ></CustomDropdown>
          <CustomDropdown
            initialSelectedKeys={selectedKeys5}
            onSelectChange={handleDropdown5SelectionChange}
            options={dropdownOptions5}
            title={"Ordem"}
          ></CustomDropdown>
          <CustomDropdown
            initialSelectedKeys={selectedKeys6}
            onSelectChange={handleDropdown6SelectionChange}
            options={dropdownOptions6}
            title={"Descritor"}
          ></CustomDropdown>
        </section>
        <div className="py-4">
          <CustomDropdown
            initialSelectedKeys={selectedKeys7}
            onSelectChange={handleDropdown7SelectionChange}
            options={dropdownOptions1}
            title={"Descritor"}
          ></CustomDropdown>
        </div>
        <button onClick={onOpen}>aaaaaaaaaaaaaa</button>
        <main>
          {exibirEnunciado && (
            <Enunciado
              click={() => {
                setTitle("Enunciado");
                onOpen();
              }}
              title={"Enunciado"}
            />
          )}
          {exibirComentario && (
            <Comentario
              click={() => {
                setTitle("Comentário");
                onOpen();
              }}
              title={"Comentário"}
            />
          )}

          <ConfirmationModal
            onOpen={function (): void {
              onOpen();
            }}
            onClose={function (): void {
              onClose();
            }}
            isOpen={isOpen}
            title={title}
            click={() => {
              switch (title) {
                case "Comentário":
                  setExibirComentario(false);
                  break;
                case "Enunciado":
                  setExibirEnunciado(false);
                  break;
              }
            }}
          />
        </main>
        <ButtonGroup variant="flat">
          <Button onClick={handleButtonClick}>
            {labelsMap[selectedOptionValue]}
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly>
                <ChevronDownIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Merge options"
              selectedKeys={selectedOption}
              selectionMode="single"
              onSelectionChange={(x) => {
                setSelectedOption(x as string);
              }}
              className="max-w-[300px]"
            >
              <DropdownItem
                key="enunciado"
                description={descriptionsMap["enunciado"]}
              >
                {labelsMap["enunciado"]}
              </DropdownItem>
              <DropdownItem
                key="comentario"
                description={descriptionsMap["comentario"]}
              >
                {labelsMap["squash"]}
              </DropdownItem>
              <DropdownItem
                key="rebase"
                description={descriptionsMap["rebase"]}
              >
                {labelsMap["rebase"]}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
        <button
          onClick={() => {
            setExibirEnunciado(true), setExibirComentario(true);
          }}
        >
          Mostrar Enunciado
        </button>
      </div>
    </div>
  );
}
