import { DadosQuestao } from "../types/componentes/cards";
import { Alunos, OpcaoResposta, Respostas } from "./tipos";

export function traduzLetraParaIndexResposta(letra: OpcaoResposta) {
  switch (letra) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
  }
}
export function traduzIndexRespostaParaLetra(num: number) {
  switch (num) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
  }
}

export const questoes: DadosQuestao[] = [
  {
    contextualizacao:
      "A pizzaria Q’Delícia resolveu inovar no formato das suas pizzas, não sendo maisredondas, mas sim com um formatooctogonal, de acordo com o padrão dascaixas, contendo 8 fatias triangulares,conforme figura abaixo.",
    nome: "Temp",
    questao:
      "Sabendo que as fatias das pizzas são triângulos congruentes e isósceles, bem como o ângulo Ω mede 68º, qual é a medida da soma dos ângulos β + α?",
    bncc: "EF09MA05",
    dificuldade: "Fácil",
    respostas: [
      {
        conteudo: "44º",
        correta: false,
      },
      {
        conteudo: "88º",
        correta: true,
      },
      {
        conteudo: "136º",
        correta: false,
      },
      {
        conteudo: "176º",
        correta: false,
      },
    ],
    imgApoio: "/images/q1.png",
  },
  {
    contextualizacao:
      "A Prefeitura de uma cidade resolveu instalar 4 cabines de informações nos locais de grande fluxo de turistas no centro da cidade, com o objetivo de dar assistência àqueles que a visitam. Cada cabine de informação foi nomeada com uma letra do alfabeto, sendo elas: Cabine A, Cabine B, Cabine C e Cabine D. A figura abaixo mostra a localização de cada cabine e o local em que um turista japonês está, onde o mesmo procura uma dessas instalações para solicitar informações sobre alguns lugares que gostaria de visitar.",
    nome: "Temp",
    questao:
      "Sabendo que todas as quadras das ruas têm formato retangular e por ser de uma cidade planejada, tem a mesma medida, 250m x 150m, qual ou quais das cabines o turista japonês andaria o menor percurso, sabendo que ele se encontra na esquina da rua das Variedades com a Rua das Marias?",
    bncc: "EF09MA09",
    dificuldade: "Fácil",
    respostas: [
      {
        conteudo: "Cabine A",
        correta: false,
      },
      {
        conteudo: "Cabine A e Cabine B",
        correta: true,
      },
      {
        conteudo: "Cabine D",
        correta: false,
      },
      {
        conteudo: "Cabine C e B",
        correta: false,
      },
    ],
    imgApoio: "/images/q2.png",
  },
  {
    contextualizacao:
      "Um agricultor estava tendo problemas com uma árvore plantada em seu terreno, os animais acabavam comendo suas folhas, destruindo-a. Então, ele resolveu cercar a árvore com arame farpado, para evitar que animais se aproximassem dela. Ele demarcou no chão um círculo com raio de 5 metros e firmou as estacas ao seu redor. Solicitou ao seu irmão que comprasse arame farpado para formar cinco voltas nas estacas, com curto espaço entre um a e outra, evitando que qualquer animal se aproximasse da árvore. ",
    nome: "Temp",
    questao:
      "Sabendo que o valor do metro do arame farpado custa R$ 5,00, quanto o irmão do agricultor irá gastar para comprar o arame suficiente para dar 5 voltas na demarcação feita para proteger a árvore dos animais? Considere o valor de  = 3,14. ",
    bncc: "EF09MA02",
    dificuldade: "Difícil",
    respostas: [
      {
        conteudo: "R$ 31,40",
        correta: false,
      },
      {
        conteudo: "R$ 157,00",
        correta: true,
      },
      {
        conteudo: "R$ 314,00",
        correta: false,
      },
      {
        conteudo: "R$ 785,00",
        correta: false,
      },
    ],
    imgApoio: "/images/q3.png",
  },
  {
    nome: "TEMP",
    contextualizacao:
      "A figura abaixo mostra duas caixas, onde a caixa maior é uma aplicação em 2 vezes da caixa menor. ",
    questao: "Qual é o volume das duas caixas somados?",
    bncc: "EF09MA12",
    dificuldade: "Fácil",
    respostas: [
      {
        conteudo: "10,5 m3",
        correta: false,
      },
      {
        conteudo: "12 m3",
        correta: false,
      },
      {
        conteudo: "13,5 m3",
        correta: true,
      },
      {
        conteudo: "15,75 m3",
        correta: false,
      },
    ],
    imgApoio: "/images/q4.png",
  },
  {
    nome: "Temp",
    questao:
      " Para fazer a dieta de leite de um bebê recém-nascido, o médico orientou que a equipe do hospital usasse uma porção do medidor padrão de fórmula de leite para cada 30 ml de água morna. Suponhamos que a equipe precise fazer 6 L de leite para a dieta de várias crianças internadas na enfermaria, quantas porções do medidor de leite em pó (fórmula) a equipe precisará usar?",
    bncc: "EF09MA15",
    dificuldade: "Difícil",
    respostas: [
      {
        conteudo: "20 porções",
        correta: true,
      },
      {
        conteudo: "60 porções",
        correta: false,
      },
      {
        conteudo: "100 porções",
        correta: false,
      },
      {
        conteudo: "200 porções",
        correta: false,
      },
    ],
  },
  {
    contextualizacao:
      "O dono de uma sorveteria resolveu colocar um outdoor no formato de um sorvete gigante, para divulgar a sua marca. Ele encomendou a uma empresa um molde de madeira, no formato de um sorvete, para que ele pudesse enviar para a gráfica para acabamento. A empresa construiu o formato de madeira por justaposição de um triângulo a um semicírculo, onde a base do triângulo e o diâmetro do semicírculo tem a mesma medida, conforme figura abaixo. ",
    nome: "Temp",
    questao:
      "Sabendo que a empresa cobra por metro quadrado da peça final, e que o metro quadrado da madeira escolhida custa R$ 50,00, quanto o dono da sorveteria precisou pagar na peça entregue pela empresa? Considere pi = 3,14.",
    bncc: "EF09MA19",
    dificuldade: "Fácil",
    respostas: [
      {
        conteudo: "R$ 307,00",
        correta: false,
      },
      {
        conteudo: "R$ 300,00",
        correta: true,
      },
      {
        conteudo: "R$ 157,00",
        correta: false,
      },
      {
        conteudo: "R$ 150,00",
        correta: false,
      },
    ],
    imgApoio: "/images/q6.png",
  },
  {
    contextualizacao:
      "O Sr. Paulo está pensando em construir uma nova porta (porteira) de madeira para a entrada da sua fazenda, conforme o modelo abaixo. ",
    nome: "Temp",
    questao:
      "Sabendo que a altura da porteira é igual a 1,5m e a sua largura igual a 2m, considerando apenas a altura e largura da porteira, qual o tamanho da madeira que ele precisará fixar de forma diagonal, conforme apresentada na imagem.",
    bncc: "EF09MA23",
    dificuldade: "Médio",
    respostas: [
      {
        conteudo: "2,5 m",
        correta: false,
      },
      {
        conteudo: "3,0 m",
        correta: false,
      },
      {
        conteudo: "3,5 m",
        correta: false,
      },
      {
        conteudo: "4,0 m",
        correta: true,
      },
    ],
    imgApoio: "/images/q7.png",
  },
  {
    contextualizacao:
      "Observe o mapa do nordeste ilustrado no plano cartesiano. ",
    nome: "Temp",
    questao:
      "Quais os estados correspondem as seguintes coordenadas (9, 6), (5, 7) e (7, 9), respectivamente.",
    bncc: "EF09MA14",
    dificuldade: "Médio",
    respostas: [
      {
        conteudo: "Piauí, Bahia e Pernambuco",
        correta: true,
      },
      {
        conteudo: " Piauí, Bahia e Paraíba",
        correta: false,
      },
      {
        conteudo: "Pernambuco, Piauí e Ceará",
        correta: false,
      },
      {
        conteudo: "Alagoas, Piauí e Ceará",
        correta: false,
      },
    ],
    imgApoio: "/images/q8.png",
  },
];

export const respostas: Respostas = [
  { nomeAluno: "Andre Gomes", idQuestao: 0, resposta: "A", correta: "B" },
  { nomeAluno: "Andre Gomes", idQuestao: 1, resposta: "B", correta: "B" },
  { nomeAluno: "Andre Gomes", idQuestao: 2, resposta: "C", correta: "B" },
  { nomeAluno: "Andre Gomes", idQuestao: 3, resposta: "D", correta: "C" },
  { nomeAluno: "Andre Gomes", idQuestao: 4, resposta: "A", correta: "A" },
  { nomeAluno: "Andre Gomes", idQuestao: 5, resposta: "B", correta: "B" },
  { nomeAluno: "Andre Gomes", idQuestao: 6, resposta: "C", correta: "D" },
  { nomeAluno: "Andre Gomes", idQuestao: 7, resposta: "D", correta: "A" },
  { nomeAluno: "Maria Silva", idQuestao: 0, resposta: "B", correta: "B" },
  { nomeAluno: "Maria Silva", idQuestao: 1, resposta: "C", correta: "B" },
  { nomeAluno: "Maria Silva", idQuestao: 2, resposta: "D", correta: "B" },
  { nomeAluno: "Maria Silva", idQuestao: 3, resposta: "A", correta: "C" },
  { nomeAluno: "Maria Silva", idQuestao: 4, resposta: "B", correta: "A" },
  { nomeAluno: "Maria Silva", idQuestao: 5, resposta: "C", correta: "B" },
  { nomeAluno: "Maria Silva", idQuestao: 6, resposta: "D", correta: "D" },
  { nomeAluno: "Maria Silva", idQuestao: 7, resposta: "A", correta: "A" },
  { nomeAluno: "João Santos", idQuestao: 0, resposta: "C", correta: "B" },
  { nomeAluno: "João Santos", idQuestao: 1, resposta: "D", correta: "B" },
  { nomeAluno: "João Santos", idQuestao: 2, resposta: "A", correta: "B" },
  { nomeAluno: "João Santos", idQuestao: 3, resposta: "B", correta: "C" },
  { nomeAluno: "João Santos", idQuestao: 4, resposta: "C", correta: "A" },
  { nomeAluno: "João Santos", idQuestao: 5, resposta: "D", correta: "B" },
  { nomeAluno: "João Santos", idQuestao: 6, resposta: "A", correta: "D" },
  { nomeAluno: "João Santos", idQuestao: 7, resposta: "B", correta: "A" },
  { nomeAluno: "Ana Pereira", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "Ana Pereira", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "Ana Pereira", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "Ana Pereira", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "Ana Pereira", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "Ana Pereira", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "Ana Pereira", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "Ana Pereira", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 0, resposta: "B", correta: "B" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 1, resposta: "C", correta: "B" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 2, resposta: "D", correta: "B" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 3, resposta: "A", correta: "C" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 4, resposta: "B", correta: "A" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 5, resposta: "C", correta: "B" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 6, resposta: "D", correta: "D" },
  { nomeAluno: "Pedro Rodrigues", idQuestao: 7, resposta: "A", correta: "A" },
  { nomeAluno: "Marta Oliveira", idQuestao: 0, resposta: "C", correta: "B" },
  { nomeAluno: "Marta Oliveira", idQuestao: 1, resposta: "D", correta: "B" },
  { nomeAluno: "Marta Oliveira", idQuestao: 2, resposta: "A", correta: "B" },
  { nomeAluno: "Marta Oliveira", idQuestao: 3, resposta: "B", correta: "C" },
  { nomeAluno: "Marta Oliveira", idQuestao: 4, resposta: "C", correta: "A" },
  { nomeAluno: "Marta Oliveira", idQuestao: 5, resposta: "D", correta: "B" },
  { nomeAluno: "Marta Oliveira", idQuestao: 6, resposta: "A", correta: "D" },
  { nomeAluno: "Marta Oliveira", idQuestao: 7, resposta: "B", correta: "A" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "Carlos Fernandes", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "Sofia Costa", idQuestao: 0, resposta: "A", correta: "B" },
  { nomeAluno: "Sofia Costa", idQuestao: 1, resposta: "B", correta: "B" },
  { nomeAluno: "Sofia Costa", idQuestao: 2, resposta: "C", correta: "B" },
  { nomeAluno: "Sofia Costa", idQuestao: 3, resposta: "D", correta: "C" },
  { nomeAluno: "Sofia Costa", idQuestao: 4, resposta: "A", correta: "A" },
  { nomeAluno: "Sofia Costa", idQuestao: 5, resposta: "B", correta: "B" },
  { nomeAluno: "Sofia Costa", idQuestao: 6, resposta: "C", correta: "D" },
  { nomeAluno: "Sofia Costa", idQuestao: 7, resposta: "D", correta: "A" },
  { nomeAluno: "Rui Sousa", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "Rui Sousa", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "Rui Sousa", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "Rui Sousa", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "Rui Sousa", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "Rui Sousa", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "Rui Sousa", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "Rui Sousa", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "Luisa Almeida", idQuestao: 0, resposta: "C", correta: "B" },
  { nomeAluno: "Luisa Almeida", idQuestao: 1, resposta: "D", correta: "B" },
  { nomeAluno: "Luisa Almeida", idQuestao: 2, resposta: "A", correta: "B" },
  { nomeAluno: "Luisa Almeida", idQuestao: 3, resposta: "B", correta: "C" },
  { nomeAluno: "Luisa Almeida", idQuestao: 4, resposta: "C", correta: "A" },
  { nomeAluno: "Luisa Almeida", idQuestao: 5, resposta: "D", correta: "B" },
  { nomeAluno: "Luisa Almeida", idQuestao: 6, resposta: "A", correta: "D" },
  { nomeAluno: "Luisa Almeida", idQuestao: 7, resposta: "B", correta: "A" },
  { nomeAluno: "José Marques", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "José Marques", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "José Marques", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "José Marques", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "José Marques", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "José Marques", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "José Marques", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "José Marques", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 0, resposta: "A", correta: "B" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 1, resposta: "B", correta: "B" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 2, resposta: "C", correta: "B" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 3, resposta: "D", correta: "C" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 4, resposta: "A", correta: "A" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 5, resposta: "B", correta: "B" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 6, resposta: "C", correta: "D" },
  { nomeAluno: "Inês Ribeiro", idQuestao: 7, resposta: "D", correta: "A" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "Hugo Fernandes", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "Beatriz Santos", idQuestao: 0, resposta: "C", correta: "B" },
  { nomeAluno: "Beatriz Santos", idQuestao: 1, resposta: "D", correta: "B" },
  { nomeAluno: "Beatriz Santos", idQuestao: 2, resposta: "A", correta: "B" },
  { nomeAluno: "Beatriz Santos", idQuestao: 3, resposta: "B", correta: "C" },
  { nomeAluno: "Beatriz Santos", idQuestao: 4, resposta: "C", correta: "A" },
  { nomeAluno: "Beatriz Santos", idQuestao: 5, resposta: "D", correta: "B" },
  { nomeAluno: "Beatriz Santos", idQuestao: 6, resposta: "A", correta: "D" },
  { nomeAluno: "Beatriz Santos", idQuestao: 7, resposta: "B", correta: "A" },
  { nomeAluno: "Miguel Silva", idQuestao: 0, resposta: "A", correta: "B" },
  { nomeAluno: "Miguel Silva", idQuestao: 1, resposta: "B", correta: "B" },
  { nomeAluno: "Miguel Silva", idQuestao: 2, resposta: "C", correta: "B" },
  { nomeAluno: "Miguel Silva", idQuestao: 3, resposta: "D", correta: "C" },
  { nomeAluno: "Miguel Silva", idQuestao: 4, resposta: "A", correta: "A" },
  { nomeAluno: "Miguel Silva", idQuestao: 5, resposta: "B", correta: "B" },
  { nomeAluno: "Miguel Silva", idQuestao: 6, resposta: "C", correta: "D" },
  { nomeAluno: "Miguel Silva", idQuestao: 7, resposta: "D", correta: "A" },
  { nomeAluno: "Catarina Santos", idQuestao: 0, resposta: "D", correta: "B" },
  { nomeAluno: "Catarina Santos", idQuestao: 1, resposta: "A", correta: "B" },
  { nomeAluno: "Catarina Santos", idQuestao: 2, resposta: "B", correta: "B" },
  { nomeAluno: "Catarina Santos", idQuestao: 3, resposta: "C", correta: "C" },
  { nomeAluno: "Catarina Santos", idQuestao: 4, resposta: "D", correta: "A" },
  { nomeAluno: "Catarina Santos", idQuestao: 5, resposta: "A", correta: "B" },
  { nomeAluno: "Catarina Santos", idQuestao: 6, resposta: "B", correta: "D" },
  { nomeAluno: "Catarina Santos", idQuestao: 7, resposta: "C", correta: "A" },
  { nomeAluno: "António Pereira", idQuestao: 0, resposta: "A", correta: "B" },
  { nomeAluno: "António Pereira", idQuestao: 1, resposta: "B", correta: "B" },
  { nomeAluno: "António Pereira", idQuestao: 2, resposta: "C", correta: "B" },
  { nomeAluno: "António Pereira", idQuestao: 3, resposta: "D", correta: "C" },
  { nomeAluno: "António Pereira", idQuestao: 4, resposta: "A", correta: "A" },
  { nomeAluno: "António Pereira", idQuestao: 5, resposta: "B", correta: "B" },
  { nomeAluno: "António Pereira", idQuestao: 6, resposta: "C", correta: "D" },
  { nomeAluno: "António Pereira", idQuestao: 7, resposta: "D", correta: "A" },
];

export const alunos: Alunos = [
  {
    nome: "Andre Gomes",
    turma: "5C",
    mediaGeral: 3,
  },
  {
    nome: "Maria Silva",
    turma: "2A",
    mediaGeral: 8,
  },
  {
    nome: "João Santos",
    turma: "6B",
    mediaGeral: 6,
  },
  {
    nome: "Ana Pereira",
    turma: "4C",
    mediaGeral: 7,
  },
  {
    nome: "Pedro Rodrigues",
    turma: "1A",
    mediaGeral: 9,
  },
  {
    nome: "Marta Oliveira",
    turma: "3B",
    mediaGeral: 5,
  },
  {
    nome: "Carlos Fernandes",
    turma: "6A",
    mediaGeral: 4,
  },
  {
    nome: "Sofia Costa",
    turma: "2B",
    mediaGeral: 8,
  },
  {
    nome: "Rui Sousa",
    turma: "4A",
    mediaGeral: 7,
  },
  {
    nome: "Luisa Almeida",
    turma: "5B",
    mediaGeral: 6,
  },
  {
    nome: "José Marques",
    turma: "1C",
    mediaGeral: 9,
  },
  {
    nome: "Inês Ribeiro",
    turma: "3A",
    mediaGeral: 5,
  },
  {
    nome: "Hugo Fernandes",
    turma: "6C",
    mediaGeral: 4,
  },
  {
    nome: "Beatriz Santos",
    turma: "2C",
    mediaGeral: 8,
  },
  {
    nome: "Miguel Silva",
    turma: "4B",
    mediaGeral: 7,
  },
];
