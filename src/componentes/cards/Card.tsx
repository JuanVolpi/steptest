import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { Display } from "@/lib/fonts";
import {
  GenericCardProps,
  SmallQuestionCardProps,
} from "@/lib/types/componentes/cards";
import {
  ArrowsPointingOutIcon,
  Bars3CenterLeftIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Button,
  Chip,
  Divider,
  Input,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";

import Image from "next/image";

import "../../styles/component/cards/Cards.scss";

export function SmallQuestionCard(props: SmallQuestionCardProps) {
  function handleCardColorState(): string {
    if (props.visualizeState !== undefined && props.state !== undefined)
      return props.visualizeState[props.state] as string;
    return "";
  }

  return (
    <Card
      className="smallCard"
      style={{
        borderColor: handleCardColorState(),
      }}
    >
      <CardHeader className="head">
        <div className="inline-flex gap-3 items-center">
          <Chip variant="flat" color="secondary" size="sm" className="px-2">
            {props.ordemAparencia} #
          </Chip>
          <h4 style={Display.style}>Questão</h4>
        </div>
        <div className="chips">
          <Chip variant="shadow" className="chip" size="sm">
            {props.bncc}
          </Chip>
          {/* <Divider orientation="vertical" className="h-3" /> */}
          <Chip variant="shadow" className="chip" size="sm">
            {props.dificuldade}
          </Chip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="body">
        <Tabs
          aria-label="Conteudo Questao"
          color="primary"
          variant="solid"
          className="tabs"
        >
          <Tab
            key="questao"
            title={
              <div className="flex items-center gap-2">
                <QuestionMarkCircleIcon className="w-6 h-6" />
                <h3>Questao</h3>
              </div>
            }
            className="tab"
          >
            <section>
              <p>
                Fábio está jogando no videogame novo que ganhou de presente de
                aniversário. Na primeira fase do jogo, ele fez 260 pontos e, na
                segunda, fez 325 pontos. Na terceira fase, Fábio perdeu 123
                pontos. Quantos pontos Fábio conseguiu no total?
              </p>
            </section>
          </Tab>
          <Tab
            key="respostas"
            title={
              <div className="flex items-center gap-2">
                <Bars3CenterLeftIcon className="w-6 h-6" />
                <h3>Respostas</h3>
              </div>
            }
            className="tab"
          >
            <ul className="respostas">
              {props.respostas.map((resp, index) => (
                <li key={index}>
                  <Input
                    className="w-fit hover:cursor-pointer hover:border-blue-500"
                    readOnly
                    type="text"
                    color={resp.correta ? "success" : "danger"}
                    variant="bordered"
                    radius="sm"
                    value={resp.conteudo}
                    startContent={
                      <>
                        <Chip
                          variant="flat"
                          color={resp.correta ? "success" : "danger"}
                        >
                          {String.fromCharCode(65 + index)}
                        </Chip>
                        <Spacer />
                      </>
                    }
                  />
                </li>
              ))}
            </ul>
          </Tab>
          <Tab
            key="imagem"
            title={
              <div className="flex items-center gap-2">
                <PhotoIcon className="w-6 h-6" />
                <h3>Imagem</h3>
              </div>
            }
            className="tab"
          >
            <section>
              {props.imgApoio !== undefined ? (
                <Image src={props.imgApoio} width={300} height={300} alt={""} />
              ) : (
                <>
                  <Spacer />
                  <p className="p-3 m-auto text-center rounded bg-slate-100 text-slate-100">
                    <i>Sem Imagem</i>
                  </p>
                  <Spacer />
                </>
              )}
            </section>
          </Tab>
        </Tabs>
      </CardBody>
      <Divider />
      <CardFooter className="footer">
        <Tooltip
          content="Mais detalhes sobre a questão"
          placement="right"
          delay={550}
          slot="arrow"
        >
          <Button
            variant="flat"
            size="md"
            radius="sm"
            color="primary"
            isIconOnly
            onClick={props.expandTrigger}
          >
            <ArrowsPointingOutIcon className="w-6 h-6" />
          </Button>
        </Tooltip>
        {props.footerActions !== undefined ? (
          <Divider orientation="vertical" className="h-4" />
        ) : null}
        {props.footerActions}
      </CardFooter>
    </Card>
  );
}

export function GenericCard(props: GenericCardProps) {
  function handleCardColorState(): string {
    if (props.visualizeState !== undefined && props.state !== undefined)
      return props.visualizeState[props.state] as string;
    return "";
  }

  return (
    <Card
      className="genericCard"
      style={{
        borderColor: handleCardColorState(),
      }}
    >
      <CardHeader className="header">{props.headerElements}</CardHeader>

      <CardBody className="body">
        {props.content.map((c, index) => (
          <div key={index} className="sect">
            <div className="side">
              <div className="sectIcon">{c.icon}</div>
              <div className="bar" />
            </div>
            <div className="head">
              <h3>{c.tittle}</h3>
              {c.headSubs}
            </div>
            <div className="content">{c.inner || <i>Sem conteudo</i>}</div>
          </div>
        ))}
      </CardBody>

      {props.footer && (
        <CardFooter className="footer">{props.footer}</CardFooter>
      )}
    </Card>
  );
}
