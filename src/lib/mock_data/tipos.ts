export type OpcaoResposta = "A" | "B" | "C" | "D";

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
