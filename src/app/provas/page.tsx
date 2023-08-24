"use client";

import { PageTag } from "@/componentes/cards/Pagetag";
import React, { SetStateAction, useState } from "react";

import CustomDropdown from "@/componentes/navegacao/Dropdown";
import { SimpleBlueButton } from "@/componentes/buttons/Buttons";
import { SearchIcon } from "@/componentes/icons/SeachIcon";
import { PaperAirplane, Plus } from "@/componentes/icons/HeroIcons";
import TestCard from "@/componentes/cards/TestCard";
import { CardStates } from "@/lib/types/componentes/cards";
import { Input } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function BarraDeNavegacao() {
  const [selectedKeys1, setSelectedKeys1] = useState(new Set(["Ensino"]));
  const [selectedKeys2, setSelectedKeys2] = useState(new Set(["Matéria"]));
  const [selectedKeys3, setSelectedKeys3] = useState(new Set(["Ordêm"]));
  const [selectedKeys4, setSelectedKeys4] = useState(new Set(["Visibilidade"]));
  const [selectedKeys5, setSelectedKeys5] = useState(new Set(["Data"]));

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

  const dropdownOptions1 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];

  const dropdownOptions2 = [
    { key: "item1", label: "Item 1" },
    { key: "item2", label: "Item 2" },
    { key: "item3", label: "Item 3" },
  ];
  const dropdownOptions3 = [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" },
  ];

  const dropdownOptions4 = [
    { key: "item1", label: "Item 1" },
    { key: "item2", label: "Item 2" },
    { key: "item3", label: "Item 3" },
  ];

  const dropdownOptions5 = [
    { key: "item1", label: "Item 1" },
    { key: "item2", label: "Item 2" },
    { key: "item3", label: "Item 3" },
  ];

  // * Accordion
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // * Card de provas
  const [cardSelection, setCardSelection] =
    React.useState<CardStates>("inactive");

  return (
    <div className="bg-bglgreen w-full h-full px-4">
      <div className="w-full justify-between h-max flex flex-row">
        <h1 className="font-confortaa text-[40px] text-ayellow w-fit">
          Minhas provas
        </h1>
        <div className="self-center">
          <PageTag content={"Provas"}></PageTag>
        </div>
      </div>
      <div className="w-full h-2 mb-3 rounded bg-mgreen self-center"></div>
      <div>
        <div className="flex flex-row justify-between">
          <div className=" pb-5 w-1/2">
            <h2 className="text-agreen text-[20px]">Filtros</h2>
            <div className="flex flex-row gap-5 pb-5">
              <CustomDropdown
                initialSelectedKeys={selectedKeys1}
                onSelectChange={handleDropdown1SelectionChange}
                options={dropdownOptions1}
              />
              <CustomDropdown
                initialSelectedKeys={selectedKeys2}
                onSelectChange={handleDropdown2SelectionChange}
                options={dropdownOptions2}
              />
              <CustomDropdown
                initialSelectedKeys={selectedKeys3}
                onSelectChange={handleDropdown3SelectionChange}
                options={dropdownOptions3}
              />
              <CustomDropdown
                initialSelectedKeys={selectedKeys4}
                onSelectChange={handleDropdown4SelectionChange}
                options={dropdownOptions4}
              />
              <CustomDropdown
                initialSelectedKeys={selectedKeys5}
                onSelectChange={handleDropdown5SelectionChange}
                options={dropdownOptions5}
              />
            </div>
            <div className="flex flex-row gap-5 justify-center align-middle">
              <Input
                label="Search"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="Type to search..."
                startContent={
                  <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
              <div className="w-max  h-full gap-5 align-middle justify-center self-center flex">
                <SimpleBlueButton
                  content={"Pesquisar"}
                  endIcon={<PaperAirplane fill="rgb(129 140 248)" />}
                ></SimpleBlueButton>
                <SimpleBlueButton
                  content={"Criar"}
                  endIcon={<Plus fill="rgb(129 140 248)" />}
                ></SimpleBlueButton>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Informações"
                title="Informações"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="w-full p-5 max-h-[68%] min-h-[68%] bg-lgreen grid grid-cols-6 gap-10 overflow-y-scroll">
        <TestCard
          nomeProva={"Desafio de Soma"}
          numQuest={8}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Matemática"}
          recomendacao={"3º ano"}
          materia={"Matemática"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
        <TestCard
          nomeProva={"Exemplo"}
          numQuest={10}
          imgProva={
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          disciplina={"Exemplo"}
          recomendacao={"4º ano"}
          materia={"Exemplo"}
        ></TestCard>
      </div>
    </div>
  );
}
