import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { ReactNode } from "react";
import "../../styles/component/cards/Cards.scss";

export type CardStates =
  | "active"
  | "inactive"
  | "success"
  | "failure"
  | "warning";

export type CardContentSection = {
  icon: ReactNode;
  tittle: string;
  headSubs?: ReactNode | string;
  inner: ReactNode | string;
};

export type CardStateVisualizationColor = {
  active: string;
  inactive: string;
  success?: string;
  failure?: string;
  warning?: string;
};

type GenericCardProps = {
  state?: CardStates;
  headerElements?: ReactNode[];
  visualizeState?: CardStateVisualizationColor;
  content: CardContentSection[];
  footer?: ReactNode;
};

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
