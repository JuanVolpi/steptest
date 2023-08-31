import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { Display } from "@/lib/fonts";
import {
  DificuldadeQuestao,
  GenericCardProps,
  SmallQuestionCardProps,
} from "@/lib/types/componentes/cards";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
  PresentationChartBarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Divider,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";

import { SetStateAction, useState } from "react";
import "../../styles/component/cards/Cards.scss";

export function ChipDificuldade({
  dificuldade,
}: {
  dificuldade: DificuldadeQuestao;
}) {
  let chipColor: "success" | "warning" | "primary" | "danger" = "primary";
  if (dificuldade === "Fácil") {
    chipColor = "success";
  } else if (dificuldade === "Médio") {
    chipColor = "warning";
  } else {
    chipColor = "danger";
  }

  return (
    <Chip variant="flat" size="sm" color={chipColor}>
      {dificuldade}
    </Chip>
  );
}

export function SmallQuestionCard(props: SmallQuestionCardProps) {
  function handleCardColorState(): string {
    if (props.visualizeState !== undefined && props.state !== undefined)
      return props.visualizeState[props.state] as string;
    return "";
  }

  const [selectedKeys, setSelectedKeys] = useState(new Set(["questao"]));

  const contextoDisponivel = props.dadosQuestao.contextualizacao !== undefined;

  return (
    <Card
      className={"smallCard " + (props.className || "")}
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
            {props.dadosQuestao.bncc}
          </Chip>
          {/* <Divider orientation="vertical" className="h-3" /> */}
          <ChipDificuldade dificuldade="Fácil" />
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
            <Accordion
              className="conteudoQuestoes"
              variant="splitted"
              disabledKeys={[contextoDisponivel ? "" : "contexto"]}
              selectedKeys={selectedKeys}
              onSelectionChange={(val) =>
                setSelectedKeys(val as SetStateAction<Set<string>>)
              }
            >
              <AccordionItem
                key="contexto"
                className="questaoContexto"
                style={{
                  visibility: contextoDisponivel ? "visible" : "hidden",
                  height: contextoDisponivel ? "auto" : "0",
                }}
                aria-label="Contexto Questao"
                title={
                  <Chip variant="flat" size="md" color="primary" radius="sm">
                    Contexto
                  </Chip>
                }
                subtitle={
                  <>
                    <Spacer />
                    <Spacer />
                    <span>Contexto para a resposta do aluno</span>
                  </>
                }
              >
                <p className="p-2 pt-0">
                  {props.dadosQuestao.contextualizacao}
                </p>
              </AccordionItem>
              <AccordionItem
                key="questao"
                className="questConteudo"
                aria-label="Conteudo Questao"
                title={
                  <Chip variant="flat" size="md" color="primary" radius="sm">
                    Questão
                  </Chip>
                }
                subtitle={
                  <>
                    <Spacer />
                    <Spacer />
                    <span>Conteúdo alvo da avaliação</span>
                  </>
                }
              >
                <p className="p-2 pt-0">{props.dadosQuestao.questao}</p>
                <section className="w-fit mx-auto mt-3.5">
                  {props.dadosQuestao.imgApoio !== undefined ? (
                    <>
                      <div>
                        <Popover placement="right">
                          <PopoverTrigger>
                            <MagnifyingGlassCircleIcon className="w-10 h-10 text-indigo-500 drop-shadow-md bg-white rounded-full p-0 duration-200 ease-soft-spring transition-all absolute -mt-5 -ml-5 z-30 hover:scale-110 hover:cursor-pointer" />
                          </PopoverTrigger>
                          <PopoverContent>
                            <Image
                              loading="lazy"
                              src={props.dadosQuestao.imgApoio}
                              width={500}
                              height={500}
                              alt={""}
                              className="content"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Image
                        src={props.dadosQuestao.imgApoio}
                        width={280}
                        height={280}
                        alt={""}
                        className="border-2 border-slate-200 transition-all duration-200 ease-in-out hover:border-violet-600"
                      />
                    </>
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
              </AccordionItem>
            </Accordion>
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
              {props.dadosQuestao.respostas.map((resp, index) => (
                <li key={index}>
                  <Input
                    className="w-full hover:cursor-pointer hover:border-blue-500 "
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
            <section className="img">
              {props.dadosQuestao.imgApoio !== undefined ? (
                <>
                  <div>
                    <Popover placement="right">
                      <PopoverTrigger>
                        <MagnifyingGlassCircleIcon className="magnify" />
                      </PopoverTrigger>
                      <PopoverContent>
                        <Image
                          loading="lazy"
                          src={props.dadosQuestao.imgApoio}
                          width={500}
                          height={500}
                          alt={""}
                          className="content"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Image
                    src={props.dadosQuestao.imgApoio}
                    width={280}
                    height={280}
                    alt={""}
                    className="content"
                  />
                </>
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
            onClick={() => props.expandTrigger(props.dadosQuestao)}
          >
            <PresentationChartBarIcon className="w-6 h-6" />
          </Button>
        </Tooltip>
        {props.footerActions !== undefined ? (
          <Divider orientation="vertical" className="h-4" />
        ) : null}
        <div className="w-full flex flex-row gap-3 scroll-smooth">
          {props.footerActions?.map((action, index) => (
            <div key={index}>{action}</div>
          ))}
        </div>
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
