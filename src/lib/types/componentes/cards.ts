import React, { ReactNode } from "react";

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

export type GenericCardProps = {
  state?: CardStates;
  headerElements?: ReactNode[];
  visualizeState?: CardStateVisualizationColor;
  content: CardContentSection[];
  footer?: ReactNode;
};

type DificuldadeQuestao = "Fácil" | "Médio" | "Difícil";

type Resposta = {
  correta: boolean;
  conteudo: string;
};

export type DadosQuestao = {
  bncc: string;
  dificuldade: DificuldadeQuestao;
  respostas: Resposta[];
  imgApoio?: string;
};

export type SmallQuestionCardProps = {
  state?: CardStates;
  visualizeState?: CardStateVisualizationColor;
  dadosQuestao: DadosQuestao;
  ordemAparencia: number;
  footerActions?: React.JSX.Element[];
  expandTrigger: (dados: DadosQuestao) => void;
};