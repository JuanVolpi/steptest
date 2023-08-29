"use client";

import "../../styles/component/popups/Grids.scss";

import { Titulo } from "@/lib/fonts";

import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import React, { SetStateAction } from "react";

import { DadosQuestao } from "@/lib/types/componentes/cards";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { SmallQuestionCard } from "../cards/Card";
import { ListBullet, RectangleStack, Send, TrashBin } from "../icons/HeroIcons";
import { DetalhesQuestao } from "./MoveOvers";

type GenericGridProps = {
  gridTittle: string;
};

export function GenericGrid(props: GenericGridProps) {
  return (
    <>
      <h1>unimplemented</h1>
    </>
  );
}

type GridProvaQuestoesProps = {
  state: { isOpen: boolean; onOpen: () => void; onOpenChange: () => void };
  content: {
    titulo: string;
    num_questoes: number;
  };
};

export function GridProvaQuestoes(x: GridProvaQuestoesProps) {
  const [selectedTurmas, setSelectedTurmas] = React.useState(
    new Set(["Sem Turma"]),
  );

  const [selectedQuestao, setSelectedQuestao] = React.useState<
    DadosQuestao | undefined
  >(undefined);

  const turmasDisponivies: string[] = [
    "Turma A",
    "Turma B",
    "Turma C",
    "Turma D",
  ];

  const selectedValue = React.useMemo(
    () => Array.from(selectedTurmas),
    [selectedTurmas],
  );

  return (
    <Modal
      isOpen={x.state.isOpen}
      onOpenChange={x.state.onOpenChange}
      scrollBehavior="inside"
      backdrop="blur"
      size="5xl"
      radius="sm"
      placement="center"
      closeButton={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="gridProvaQuestoes">
              <div className="nomeProva">
                <h1 style={Titulo.style}>Prova</h1>
                <p>{x.content.titulo}</p>
                <Divider orientation="vertical" className="h-5" />
                <div className="numQuestoes">
                  <RectangleStack />
                  <p>Questões: {x.content.num_questoes}</p>
                </div>
              </div>

              <div className="interacoes">
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="ghost"
                        color="default"
                        className="w-min"
                        endContent={<ListBullet />}
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      variant="solid"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedTurmas}
                      onSelectionChange={(a) => {
                        setSelectedTurmas(a as SetStateAction<Set<string>>);
                      }}
                    >
                      {turmasDisponivies.map((turma) => (
                        <DropdownItem key={turma}>{turma}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <Button
                  color="success"
                  variant="faded"
                  endContent={<Send fill="#2c7041" />}
                  className="text-gray-900"
                >
                  Aplicar Prova
                </Button>
              </div>
            </ModalHeader>

            <ModalBody className="flex flex-row gap-0">
              <div className="questoes">
                {exampleCards({
                  selected: setSelectedQuestao,
                })}
              </div>
              {selectedQuestao !== undefined && selectedQuestao !== null ? (
                <div className="absolute z-20 top-0 left-0 w-full h-full bg-white  rounded">
                  <Button
                    onClick={() => setSelectedQuestao(undefined)}
                    variant="flat"
                    color="danger"
                    startContent={<XCircleIcon className="w-6 h-6" />}
                  >
                    Close
                  </Button>
                  <DetalhesQuestao
                    nomeQuestao={selectedQuestao.nome}
                    numTestes={0}
                    visibilidade={"Publica"}
                    posReacts={0}
                    autor={""}
                  />
                </div>
              ) : null}
            </ModalBody>

            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                startContent={<TrashBin fill="red" />}
                onClick={() => {
                  setSelectedTurmas(new Set(["Sem Turma"]));
                  setSelectedQuestao(undefined);
                  onClose();
                }}
              >
                Apagar Prova
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

function exampleCards({
  selected,
}: {
  selected: (dados: DadosQuestao) => void;
}) {
  const questao: DadosQuestao[] = [
    {
      contextualizacao:
        "A pizzaria Q’Delícia resolveu inovar no formato das suas pizzas, não sendo maisredondas, mas sim com um formatooctogonal, de acordo com o padrão dascaixas, contendo 8 fatias triangulares,conforme figura abaixo.",
      nome: "Temp",
      questao:
        "Sabendo que as fatias das pizzas são triângulos congruentes e isósceles, bem como o ângulo Ω mede 68º, qual é a medida da soma dos ângulos β + α?",
      bncc: "EF09MA05",
      dificuldade: "Fácil",
      respostas: [
        {
          conteudo: "44º",
          correta: false,
        },
        {
          conteudo: "88º",
          correta: true,
        },
        {
          conteudo: "136º",
          correta: false,
        },
        {
          conteudo: "176º",
          correta: false,
        },
      ],
      imgApoio: "/images/q1.png",
    },
    {
      contextualizacao:
        "A Prefeitura de uma cidade resolveu instalar 4 cabines de informações nos locais de grande fluxo de turistas no centro da cidade, com o objetivo de dar assistência àqueles que a visitam. Cada cabine de informação foi nomeada com uma letra do alfabeto, sendo elas: Cabine A, Cabine B, Cabine C e Cabine D. A figura abaixo mostra a localização de cada cabine e o local em que um turista japonês está, onde o mesmo procura uma dessas instalações para solicitar informações sobre alguns lugares que gostaria de visitar.",
      nome: "Temp",
      questao:
        "Sabendo que todas as quadras das ruas têm formato retangular e por ser de uma cidade planejada, tem a mesma medida, 250m x 150m, qual ou quais das cabines o turista japonês andaria o menor percurso, sabendo que ele se encontra na esquina da rua das Variedades com a Rua das Marias?",
      bncc: "EF09MA09",
      dificuldade: "Fácil",
      respostas: [
        {
          conteudo: "Cabine A",
          correta: false,
        },
        {
          conteudo: "Cabine A e Cabine B",
          correta: false,
        },
        {
          conteudo: "Cabine D",
          correta: false,
        },
        {
          conteudo: "Cabine C e B",
          correta: false,
        },
      ],
      imgApoio: "/images/q2.png",
    },
    {
      contextualizacao:
        "Um agricultor estava tendo problemas com uma árvore plantada em seu terreno, os animais acabavam comendo suas folhas, destruindo-a. Então, ele resolveu cercar a árvore com arame farpado, para evitar que animais se aproximassem dela. Ele demarcou no chão um círculo com raio de 5 metros e firmou as estacas ao seu redor. Solicitou ao seu irmão que comprasse arame farpado para formar cinco voltas nas estacas, com curto espaço entre um a e outra, evitando que qualquer animal se aproximasse da árvore. ",
      nome: "Temp",
      questao:
        "Sabendo que o valor do metro do arame farpado custa R$ 5,00, quanto o irmão do agricultor irá gastar para comprar o arame suficiente para dar 5 voltas na demarcação feita para proteger a árvore dos animais? Considere o valor de  = 3,14. ",
      bncc: "EF09MA02",
      dificuldade: "Difícil",
      respostas: [
        {
          conteudo: "R$ 31,40",
          correta: false,
        },
        {
          conteudo: "R$ 157,00",
          correta: true,
        },
        {
          conteudo: "R$ 314,00",
          correta: false,
        },
        {
          conteudo: "R$ 785,00",
          correta: false,
        },
      ],
      imgApoio: "/images/q3.png",
    },
    {
      contextualizacao:
        "A figura abaixo mostra duas caixas, onde a caixa maior é uma aplicação em 2 vezes da caixa menor. ",
      nome: "TEMP",
      questao: "Qual é o volume das duas caixas somados?",
      bncc: "EF09MA12",
      dificuldade: "Fácil",
      respostas: [
        {
          conteudo: "10,5 m3",
          correta: false,
        },
        {
          conteudo: "12 m3",
          correta: false,
        },
        {
          conteudo: "13,5 m3",
          correta: true,
        },
        {
          conteudo: "15,75 m3",
          correta: false,
        },
      ],
      imgApoio: "/images/q4.png",
    },
    {
      nome: "Temp",
      questao:
        " Para fazer a dieta de leite de um bebê recém-nascido, o médico orientou que a equipe do hospital usasse uma porção do medidor padrão de fórmula de leite para cada 30 ml de água morna. Suponhamos que a equipe precise fazer 6 L de leite para a dieta de várias crianças internadas na enfermaria, quantas porções do medidor de leite em pó (fórmula) a equipe precisará usar?",
      bncc: "EF09MA15",
      dificuldade: "Difícil",
      respostas: [
        {
          conteudo: "20 porções",
          correta: true,
        },
        {
          conteudo: "60 porções",
          correta: false,
        },
        {
          conteudo: "100 porções",
          correta: false,
        },
        {
          conteudo: "200 porções",
          correta: false,
        },
      ],
    },
    {
      contextualizacao:
        "O dono de uma sorveteria resolveu colocar um outdoor no formato de um sorvete gigante, para divulgar a sua marca. Ele encomendou a uma empresa um molde de madeira, no formato de um sorvete, para que ele pudesse enviar para a gráfica para acabamento. A empresa construiu o formato de madeira por justaposição de um triângulo a um semicírculo, onde a base do triângulo e o diâmetro do semicírculo tem a mesma medida, conforme figura abaixo. ",
      nome: "Temp",
      questao:
        "Sabendo que a empresa cobra por metro quadrado da peça final, e que o metro quadrado da madeira escolhida custa R$ 50,00, quanto o dono da sorveteria precisou pagar na peça entregue pela empresa? Considere pi = 3,14.",
      bncc: "EF09MA19",
      dificuldade: "Fácil",
      respostas: [
        {
          conteudo: "R$ 307,00",
          correta: false,
        },
        {
          conteudo: "R$ 300,00",
          correta: true,
        },
        {
          conteudo: "R$ 157,00",
          correta: false,
        },
        {
          conteudo: "R$ 150,00",
          correta: false,
        },
      ],
      imgApoio: "/images/q6.png",
    },
    {
      contextualizacao:
        "O Sr. Paulo está pensando em construir uma nova porta (porteira) de madeira para a entrada da sua fazenda, conforme o modelo abaixo. ",
      nome: "Temp",
      questao:
        "Sabendo que a altura da porteira é igual a 1,5m e a sua largura igual a 2m, considerando apenas a altura e largura da porteira, qual o tamanho da madeira que ele precisará fixar de forma diagonal, conforme apresentada na imagem.",
      bncc: "EF09MA23",
      dificuldade: "Médio",
      respostas: [
        {
          conteudo: "2,5 m",
          correta: false,
        },
        {
          conteudo: "3,0 m",
          correta: false,
        },
        {
          conteudo: "3,5 m",
          correta: false,
        },
        {
          conteudo: "4,0 m",
          correta: true,
        },
      ],
      imgApoio: "/images/q7.png",
    },
    {
      contextualizacao:
        "Observe o mapa do nordeste ilustrado no plano cartesiano. ",
      nome: "Temp",
      questao:
        "Quais os estados correspondem as seguintes coordenadas (9, 6), (5, 7) e (7, 9), respectivamente.",
      bncc: "EF09MA14",
      dificuldade: "Médio",
      respostas: [
        {
          conteudo: "Piauí, Bahia e Pernambuco",
          correta: true,
        },
        {
          conteudo: " Piauí, Bahia e Paraíba",
          correta: false,
        },
        {
          conteudo: "Pernambuco, Piauí e Ceará",
          correta: false,
        },
        {
          conteudo: "Alagoas, Piauí e Ceará",
          correta: false,
        },
      ],
      imgApoio: "/images/q8.png",
    },
  ];

  const miniCard = questao.map((dados, index) => (
    <SmallQuestionCard
      visualizeState={{
        active: "lime",
        inactive: "transparent",
      }}
      key={index}
      dadosQuestao={{
        contextualizacao: dados.contextualizacao,
        questao: dados.questao,
        bncc: dados.bncc,
        dificuldade: dados.dificuldade,
        respostas: dados.respostas,
        imgApoio: dados.imgApoio,
        nome: dados.nome,
      }}
      ordemAparencia={1}
      footerActions={[
        <Button key={"a"}>Fechar</Button>,
        <Button key={"b"}>Copiar</Button>,
        <Button key={"c"}>Favorito</Button>,
      ]}
      expandTrigger={selected}
    />
  ));
  return miniCard;
}
