export type OpcaoResposta = 'A' | 'B' | 'C' | 'D';

export type Aluno = {
  nome: string;
  turma: string;
  mediaGeral: number;
};

export type Alunos = Aluno[];

export type DadosResposta = {
  nomeAluno: string;
  idQuestao: number;
  resposta: OpcaoResposta;
  correta: OpcaoResposta;
};

export type Respostas = DadosResposta[];

export type Turma = {
  ano: string;
  alunos: number;
  notaMaxima: number;
  notaMinima: number;
  notaMedia: number;
};

export type TurmasAvaliadas = Turma[];

export type Escola = {
  nome: string;
  notaMedia: number;
};

export type Rede = Escola[];
