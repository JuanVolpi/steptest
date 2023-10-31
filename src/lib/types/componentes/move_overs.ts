export type DetalhesQuestaoProps = {
  nomeQuestao: string;
  numTestes: number;
  visibilidade: "Publica" | "Privada" | "Rede";
  posReacts: number;
  autor: string;
};

export type NavegacaoDetalhesQuestao = {
  titulo: string;
  paginas: {
    nome: string;
    desc: string;
    key: string;
  }[];
};

export type DetalhesQuestaoPageSelectorProps = {
  defaultSelect: string;
  onSelectionChange: (key: string) => void;
  sections: NavegacaoDetalhesQuestao[];
};
