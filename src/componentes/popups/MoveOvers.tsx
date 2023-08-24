import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  User,
} from "@nextui-org/react";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentTextIcon,
  EyeIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import { DetalhesQuestaoProps } from "@/lib/types/componentes/move_overs";
import "@/styles/component/popups/MoveOvers.scss";

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
            name="Camila Alves"
            description="Autora / Matemática"
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
              Testes <strong>{props.quanTestes}</strong>
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
      <CardBody className="body"></CardBody>
      <Divider />
      <CardFooter className="footer"></CardFooter>
    </Card>
  );
}
