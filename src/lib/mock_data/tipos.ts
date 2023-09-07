export type Aluno = {
  nome: string;
  turma: string;
  mediaGeral: number;
};

export type Alunos = Aluno[];

export type Resposta = {
  nomeAluno: string;
  idQuestao: number;
  resposta: string;
  correta: string;
};

export type Respostas = Resposta[];
