"use client";

import {
  SimpleBlueButton,
  SimpleRedButton,
  SimpleYellowButton,
} from "@/componentes/buttons/Buttons";
import { GenericCard } from "@/componentes/cards/Card";
import {
  ChatBubbleSolid,
  ListBullet,
  LockOutline,
  QuestionSolid,
  Share,
  StarOutline,
  TrashBin,
} from "@/componentes/icons/HeroIcons";
import StepTestLogo from "@/componentes/logos/StepTest";
import { GridProvaQuestoes } from "@/componentes/popups/Grids";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main>
      <StepTestLogo />
      <Button onPress={onOpen}>Open modal</Button>
      <br />
      <GenericCard
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
            key={"lock"}
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
