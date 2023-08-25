"use client";

import {
  SimpleBlueButton,
  SimpleRedButton,
  SimpleYellowButton,
} from "@/componentes/buttons/Buttons";
import { GenericCard, SmallQuestionCard } from "@/componentes/cards/Card";

import {
  ChatBubbleSolid,
  ListBullet,
  LockOutline,
  QuestionSolid,
  Share,
  StarOutline,
  TrashBin,
} from "@/componentes/icons/HeroIcons";
import { GridProvaQuestoes } from "@/componentes/popups/Grids";
import { DetalhesQuestao } from "@/componentes/popups/MoveOvers";
import { CardStates } from "@/lib/types/componentes/cards";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import React from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [cardSelection, setCardSelection] =
    React.useState<CardStates>("inactive");

  function toggleCard() {
    cardSelection === "active"
      ? setCardSelection("inactive")
      : setCardSelection("active");
    console.log(cardSelection);
  }

  return (
    <main>
      <Button onPress={onOpen}>Open modal</Button>
      <br />
      <br />
      <Button onPress={toggleCard}>Toggle card selection</Button>
      <br />
      <br />
      <DetalhesQuestao
        posReacts={12}
        nomeQuestao={"Pontos Turísticos"}
        numTestes={2}
        visibilidade={"Publica"}
        autor={"Camilla Rodrigues"}
      />
      <br />
      <br />
      <SmallQuestionCard
        state={cardSelection}
        visualizeState={{
          active: "lime",
          inactive: "transparent",
        }}
        footerActions={[
          <Button key={1} size="sm">
            Fechar
          </Button>,
          <Button key={2} size="sm">
            Fechar
          </Button>,
          <Button key={3} size="sm">
            Fechar
          </Button>,
          <Button key={4} size="sm">
            Fechar
          </Button>,
        ]}
        expandTrigger={function (_): void {
          throw new Error("Function not implemented.");
        }}
        dadosQuestao={{
          contextualizacao:
            "A Prefeitura de uma cidade resolveu instalar 4 cabines de informações nos locais de grande fluxo de turistas no centro da cidade, com o objetivo de dar assistência àqueles que a visitam. Cada cabine de informação foi nomeada com uma letra do alfabeto, sendo elas: Cabine A, Cabine B, Cabine C e Cabine D. A figura abaixo mostra a localização de cada cabine e o local em que um turista japonês está, onde o mesmo procura uma dessas instalações para solicitar informações sobre alguns lugares que gostaria de visitar.",
          questao:
            "Sabendo que todas as quadras das ruas têm formato retangular e por ser de uma cidade planejada, tem a mesma medida, 250m x 150m, qual ou quais das cabines o turista japonês andaria o menor percurso, sabendo que ele se encontra na esquina da rua das Variedades com a Rua das Marias?",
          bncc: "EF06MT",
          dificuldade: "Fácil",
          respostas: [
            {
              conteudo: "708 pontos",
              correta: false,
            },
            {
              conteudo: "512 pontos",
              correta: false,
            },
            {
              conteudo: "462 pontos",
              correta: true,
            },
            {
              conteudo: "188 pontos",
              correta: false,
            },
          ],
          imgApoio: "/images/GamingPana.svg",
        }}
        ordemAparencia={1}
      />
      <br />
      <br />
      <GenericCard
        state={cardSelection}
        visualizeState={{
          active: "blueviolet",
          inactive: "gainsboro",
        }}
        headerElements={[
          <SimpleBlueButton
            key={"fav"}
            content={"Favorito"}
            endIcon={<StarOutline fill="rgb(129 140 248)" />}
          />,
          <SimpleBlueButton
            key={"share"}
            content={"Partilhar"}
            endIcon={<Share fill="rgb(129 140 248)" />}
          />,
          <SimpleBlueButton
            key={"lock"}
            content={"Trancar"}
            endIcon={<LockOutline fill="rgb(129 140 248)" />}
          />,
          <SimpleRedButton
            key={"trash"}
            content={"Apagar"}
            endIcon={<TrashBin fill="salmon" />}
          />,
        ]}
        content={[
          {
            icon: <QuestionSolid fill="blue" />,
            tittle: "Questões",
            inner: (
              <p>
                Uma empresa fabrica 600 peças por dia e trabalha 5 dias por
                semana. Quantas peças são fabricadas em um mês de 4 semanas?
              </p>
            ),
          },
          {
            icon: <ChatBubbleSolid fill="blue" />,
            tittle: "Respostas",
            inner: (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi veritatis alias, quidem odit rem consequatur nisi.
              </p>
            ),
          },
          {
            icon: <ListBullet fill="blue" />,
            headSubs: (
              <>
                <SimpleYellowButton
                  content={"Info"}
                  endIcon={<QuestionSolid fill="orange" />}
                />
              </>
            ),
            tittle: "Respostas",
            inner: (
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi veritatis alias, quidem odit rem consequatur nisi.
              </p>
            ),
          },
        ]}
      />
      <br />
      <GridProvaQuestoes
        state={{
          onOpen,
          isOpen,
          onOpenChange,
        }}
        content={{
          titulo: "Matematica#2",
          num_questoes: 8,
        }}
      />
    </main>
  );
}
