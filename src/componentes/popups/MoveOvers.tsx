import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  User,
} from "@nextui-org/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  DocumentTextIcon,
  EyeIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import {
  DetalhesQuestaoPageSelectorProps,
  DetalhesQuestaoProps,
  NavegacaoDetalhesQuestao,
} from "@/lib/types/componentes/move_overs";
import "@/styles/component/popups/MoveOvers.scss";
import { useCallback, useEffect, useRef, useState } from "react";

export function DetalhesQuestao(props: DetalhesQuestaoProps) {
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
          defaultSelect={"notas"}
          onSelectionChange={function (key: string): void {}}
          sections={defaultNavigation}
        />
        <section className="info"></section>
      </CardBody>
      {/* <Divider />
      <CardFooter className="footer"></CardFooter> */}
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

  const allPages = useCallback(
    () => props.sections.map((x) => x.paginas).flat(),
    [props],
  )();
  const refs = useRef<HTMLElement[]>(new Array(allPages.length));

  const scroll = useCallback(() => {
    const currentElement = refs.current[selectedIndex as number];
    if (rootParentScroll.current !== null) {
      let selectedPageOffset = currentElement.offsetTop;
      rootParentScroll.current.scrollTop =
        selectedPageOffset - currentElement.clientHeight * 1.35;
    }
  }, [selectedIndex, refs]);

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
