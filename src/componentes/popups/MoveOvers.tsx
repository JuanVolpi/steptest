import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
  User,
} from "@nextui-org/react";

import {
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  DocumentTextIcon,
  EyeIcon,
  FlagIcon,
  GlobeAmericasIcon,
  HandThumbUpIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import { Conteudo } from "@/lib/fonts";
import {
  DetalhesQuestaoPageSelectorProps,
  DetalhesQuestaoProps,
  NavegacaoDetalhesQuestao,
} from "@/lib/types/componentes/move_overs";
import "@/styles/component/popups/MoveOvers.scss";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function DetalhesQuestao(props: DetalhesQuestaoProps) {
  const [pagina, setPagina] = useState<string>("notas");

  function handleSelectedPage(): React.JSX.Element {
    switch (pagina) {
      case "bncc":
        return <BnccTable />;
      case "publicacao":
        return <PublicacaoQuestao />;
      case "feedback":
        return <ComentariosQuestao />;
      default:
        return <></>;
    }
  }

  return (
    <Card className="wrapper" radius="sm">
      <CardHeader className="header">
        <header>
          <h3>
            <i>{props.nomeQuestao}</i>
            Questão
          </h3>
          <Divider orientation="vertical" className="h-6" />
          <User
            lang="pt-br"
            name={props.autor}
            description="Autora"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              isBordered: true,
              color: "primary",
              radius: "md",
              size: "md",
              fallback: <UserCircleIcon className="w-7 h-7" />,
            }}
          />
          <Divider orientation="vertical" className="h-6" />
          <div className="chips">
            <Chip
              variant="flat"
              color="primary"
              radius="sm"
              className="px-2"
              startContent={<DocumentTextIcon className="w-5 h-5" />}
            >
              Testes <strong>{props.numTestes}</strong>
            </Chip>
            <Chip
              variant="flat"
              color="warning"
              radius="sm"
              className="px-2"
              startContent={<EyeIcon className="w-5 h-5" />}
            >
              <strong>{props.visibilidade}</strong>
            </Chip>
          </div>
          <Divider orientation="vertical" className="h-6" />
          <div className="upVotes">
            <HandThumbUpIcon className="w-5 h-5 text-slate-200" />
            {props.posReacts}
            <div className="buttons">
              <ChevronUpIcon className="button" />
              <ChevronDownIcon className="button " />
            </div>
          </div>
        </header>
      </CardHeader>
      <Divider />
      <CardBody className="body">
        <DetalhesQuestaoPageSelector
          defaultSelect={pagina}
          onSelectionChange={setPagina}
          sections={defaultNavigation}
        />
        <section className="info">{handleSelectedPage()}</section>
      </CardBody>
      {/* <Divider />
      <CardFooter className="footer"></CardFooter> */}
    </Card>
  );
}

function ComentariosQuestao() {
  const comments = new Array(6).fill(1);
  return (
    <div>
      <h3 className="text-xl font-bold mb-5 w-full border py-3 px-2 rounded bg-white sticky top-0 z-30 flex items-center gap-2">
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-600 drop-shadow" />
        Comentários
      </h3>
      <section className="flex flex-col gap-5 overflow-scroll scroll-smooth px-3 snap-y">
        {comments.map((_, a) => (
          <div className="snap-center" key={a}>
            <CommentarioQuestao />
          </div>
        ))}
      </section>
    </div>
  );
}

function CommentarioQuestao() {
  return (
    <Card className="page" radius="sm" shadow="sm">
      <CardHeader className="flex gap-2 p-4 pr-6 items-center justify-between">
        <User
          name="Jane Doe"
          description="Professora de Matemática"
          avatarProps={{
            src: "https://i.pravatar.cc/150",
            size: "md",
            isBordered: true,
            color: "warning",
          }}
        />
        <div className="flex flex-col">
          <p className="text-small text-default-500 font-medium">12/04/23</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4">
        <div className="flex flex-row items-baseline gap-2">
          <h3 className="text-large text-blue-600 font-bold">Tópico:</h3>
          <p style={Conteudo.style} className="text-medium">
            lorem{"."}
          </p>
        </div>
        <p
          className="text-sm tracking-wider leading-5"
          style={{
            lineHeight: "1.5rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          odit fugiat illo, culpa atque non nihil corrupti fuga, architecto
          porro velit iure amet. Est inventore quia placeat. Aut, ipsam maiores.
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-row gap-3">
        <Button
          size="sm"
          color="secondary"
          variant="flat"
          startContent={<PencilSquareIcon className="w-4 h-4" />}
        >
          Responder
        </Button>
        <Button
          size="sm"
          color="danger"
          variant="flat"
          startContent={<FlagIcon className="w-4 h-4" />}
        >
          Reportar
        </Button>
      </CardFooter>
    </Card>
  );
}

function PublicacaoQuestao() {
  return (
    <Card className="page" radius="sm" shadow="sm">
      <CardHeader className="flex gap-2 p-4 pr-6">
        <GlobeAmericasIcon className="w-12 h-12 text-blue-500" />
        <div className="flex flex-col">
          <p className="text-md font-bold">Publicação</p>
          <p className="text-small text-default-500">
            Visibilidade, utilização e estatísticas.
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          odit fugiat illo, culpa atque non nihil corrupti fuga, architecto
          porro velit iure amet. Est inventore quia placeat. Aut, ipsam maiores.
        </p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

function BnccTable() {
  return (
    <Card className="page" radius="sm" shadow="sm">
      <CardHeader className="flex gap-2 p-4 pr-6">
        <Image
          alt="bncc logo"
          height={45}
          width={45}
          radius="sm"
          src="/images/bncc.jpeg"
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">Bncc</p>
          <p className="text-small text-default-500">
            Descrição, habilidades e competências
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row gap-4">
        <Table
          removeWrapper
          isStriped
          isHeaderSticky
          classNames={{
            wrapper: "max-h-[382px] ",
            th: "outline-none bg-slate-50 text-red-200",
          }}
        >
          <TableHeader>
            <TableColumn>Ano/Faixa</TableColumn>
            <TableColumn>Código</TableColumn>
            <TableColumn>Atuação Social</TableColumn>
          </TableHeader>
          <TableBody>
            {new Array(4).fill(1).map((_, a) => (
              <TableRow key={a}>
                <TableCell className="font-bold">{"1º, 2º, 3º"}</TableCell>
                <TableCell>
                  <Chip variant="flat" color="primary">
                    EM13LP01
                  </Chip>
                </TableCell>
                <TableCell className="min-w-full">
                  {"Todos os Campos de atuação social"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Textarea
          readOnly
          label="Habilidade"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          color="primary"
          value={
            "Relacionar o texto, tanto na produção como na leitura/escuta, com suas condições de produção e seu contexto sócio-histórico de circulação (leitor/audiência previstos, objetivos, pontos de vista e perspectivas, papel social do autor, época, gênero do discurso etc.), de forma a ampliar as possibilidades de construção de sentidos e de análise crítica e produzir textos adequados a diferentes situações."
          }
        />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

const defaultNavigation: NavegacaoDetalhesQuestao[] = [
  {
    titulo: "Especificações",
    paginas: [
      {
        nome: "BNCC",
        desc: "Requisitos e objetivos",
        key: "bncc",
      },
      {
        nome: "Publicação",
        desc: "Visibilidade e utilização",
        key: "publicacao",
      },
    ],
  },
  {
    titulo: "Multimédia",
    paginas: [
      {
        nome: "Imagens",
        desc: "Recursos visuais",
        key: "imgs",
      },
    ],
  },
  {
    titulo: "Conteúdo",
    paginas: [
      {
        nome: "Respostas",
        desc: "Opções de resposta",
        key: "resps",
      },
      {
        nome: "Explicações",
        desc: "Explicação alternativas",
        key: "explicacoes",
      },
    ],
  },
  {
    titulo: "Anotações",
    paginas: [
      {
        nome: "Comentários",
        desc: "Feedback comunidade",
        key: "feedback",
      },
      {
        nome: "Notas",
        desc: "Comentários do criador",
        key: "notas",
      },
    ],
  },
];

export function DetalhesQuestaoPageSelector(
  props: DetalhesQuestaoPageSelectorProps,
) {
  const [selected, setSelected] = useState<string>(props.defaultSelect);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const rootParentScroll = useRef<HTMLElement>(null);

  const allPages = useMemo(
    () => props.sections.map((x) => x.paginas).flat(),
    [props],
  );
  const refs = useRef<HTMLElement[]>(new Array(allPages.length));

  const scroll = useCallback(() => {
    props.onSelectionChange(selected);
    const currentElement = refs.current[selectedIndex as number];

    if (rootParentScroll.current !== null) {
      let selectedPageOffset = currentElement.offsetTop;
      rootParentScroll.current.scrollTop =
        selectedPageOffset - currentElement.clientHeight * 1.35;
    }
  }, [selectedIndex, refs, props, selected]);

  useEffect(() => scroll(), [scroll]);

  return (
    <section className="pages" ref={rootParentScroll}>
      {props.sections.map((sec, index) => (
        <div key={index} className="seccao">
          <h2>{sec.titulo}</h2>
          <section>
            {sec.paginas.map((pagina, indexSect) => {
              const currentPageFlatIndex = allPages.indexOf(pagina);
              return (
                <div
                  id={currentPageFlatIndex.toString()}
                  key={indexSect}
                  className={`page ${
                    selected === pagina.key ? "selected" : ""
                  }`}
                  onClick={(_) => {
                    setSelected(pagina.key);
                    setSelectedIndex(currentPageFlatIndex);
                  }}
                  ref={(el) =>
                    (refs.current[currentPageFlatIndex] = el as HTMLElement)
                  }
                >
                  <div>
                    <h3>{pagina.nome}</h3>
                    <span>{pagina.desc}</span>
                  </div>
                  <ChevronRightIcon className="endContent" />
                </div>
              );
            })}
          </section>
          {index < props.sections.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </section>
  );
}
