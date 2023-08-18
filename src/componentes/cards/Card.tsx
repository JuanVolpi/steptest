import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { ReactNode } from "react";
import "../../styles/component/cards/Cards.scss";

interface GenericCardProps {
  headerElements?: ReactNode[];
  visualizeState?: {
    activeColor: string | "blueviolet";
    inactiveColor: string | "gainsboro";
    successColor?: string | "green";
    failureColor?: string | "tomato";
    warningColor?: string | "yellow";
  };
  content: {
    icon: ReactNode;
    tittle: string;
    headSubs?: ReactNode | string;
    inner: ReactNode | string;
  }[];
  footer?: ReactNode;
}

export function GenericCard(props: GenericCardProps) {
  return (
    <Card
      className="genericCard"
      style={{ borderColor: props.visualizeState?.inactiveColor }}
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
