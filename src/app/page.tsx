'use client';

import { CardStates } from '@/lib/types/componentes/cards';
import { Divider } from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/use-disclosure';
import React from 'react';

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [cardSelection, setCardSelection] =
    React.useState<CardStates>('inactive');

  function toggleCard() {
    cardSelection === 'active'
      ? setCardSelection('inactive')
      : setCardSelection('active');
    console.log(cardSelection);
  }

  return (
    <div className="bg-white rounded-lg shadow-md self-center p-6 w-full max-h-[98%] h-full md:w-2/3 lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4 text-blue-500">
        Registro de Atualizações
      </h1>
      <Divider></Divider>
      <div className="max-h-[90%] overflow-y-scroll">
        <section>
          <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
            <div className="mb-6 hover:translate-x-3 duration-2 transition-all ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Data: 04/10/2023</h2>
              <h2 className="text-xl font-semibold mb-2">
                Página &quot;Dashboards&quot;:
              </h2>
              <ul className="list-disc list-inside">
                <li>Adicionada nova aba de análise de turmas:</li>
                <ul className="list-disc list-inside pl-4">
                  <li>Gráficos de desempenho das turmas.</li>
                  <li>Ranking de turmas.</li>
                  <li>Tabela de comparação da média de notas por turma.</li>
                </ul>
                <li>
                  Adicionada nova aba de análise de nível da rede escolar:
                </li>

                <ul className="list-disc list-inside pl-4">
                  <li>
                    Comparação entre escolas com uma prova comum como ponto de
                    referência.
                  </li>
                </ul>

                <ul className="list-disc list-inside pl-4">
                  <li>
                    Permite a visualização do desempenho real de cada escola com
                    base nos dados de cada turma.
                  </li>
                  <li>Possibilita a comparação entre escolas diferentes.</li>
                </ul>

                <ul className="list-disc list-inside pl-4">
                  <li>
                    Os gráficos incluem métricas como médias, metas de média e
                    médias de referência.
                  </li>
                  <li>
                    Métricas podem ser personalizadas durante a visualização dos
                    gráficos.
                  </li>
                </ul>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    Fornece informações sobre a média atual de cada escola.
                  </li>
                  <li>
                    Compara a média atual com a meta de desempenho estabelecida
                    para a escola.
                  </li>
                </ul>
              </ul>
              <br />
              <h2 className="text-xl font-semibold mb-2">
                Página &quot;Criação de Questões&quot;:
              </h2>
              <ul className="list-disc list-inside">
                <li>Adição e remoção de componentes na criação de questões.</li>
                <li>
                  Alteração na ordem dos componentes na página de criação de
                  questões.
                </li>
                <li>
                  Adição de pré-visualização dos componentes na página de
                  criação de questões.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
            <div className="mb-6 hover:translate-x-3 duration-2 transition-all ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Data: 19/09/2023</h2>
              <h2 className="text-xl font-semibold mb-2">
                Página &quot;Dashboards&quot;:
              </h2>
              <ul className="list-disc list-inside">
                <li>Alterações na disposição dos componentes na página.</li>
                <li>Adição da resposta correta em cada questão.</li>
                <li>
                  Alteração na forma como as questões são apresentadas, agora
                  com scroll.
                </li>
              </ul>
              <br />
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  Página &quot;Questões&quot;:
                </h2>
                <ul className="list-disc list-inside">
                  <li>Adição da página &quot;Questões&quot;.</li>
                  <li>
                    Amostra inicial na reimplementação da página &quot;Criar
                    Questões&quot;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
            <div className="mb-6 hover:translate-x-3 duration-2 transition-all ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Data: 11/09/2023</h2>
              <h2 className="text-xl font-semibold mb-2">
                Página &quot;Dashboards&quot;:
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Adição de detalhes das questões que agora mostram os detalhes
                  por questão.
                </li>
                <li>
                  Adição de um gráfico de pizza para visualizar as respostas dos
                  alunos de forma mais clara.
                </li>
                <li>
                  Adição de interações para permitir a visualização da resposta
                  individual de cada aluno.
                </li>
                <li>
                  Refatoramento e mudanças em códigos existentes para melhorias
                  gerais.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
            <section className=" hover:translate-x-3 duration-2 transition-all ease-in-out">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Data: 07/09/2023</h2>
                <p>
                  Nota: Fique à vontade para navegar entre as páginas através da
                  navbar e explorar as funcionalidades disponíveis.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  Página &quot;Provas&quot;:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Adição da página &quot;Provas&quot; que contém cards de
                    provas.
                  </li>
                  <li>
                    Possibilidade de visualizar detalhes de uma prova, incluindo
                    questões e respostas.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  Página &quot;Questões&quot;:
                </h2>
                <ul className="list-disc list-inside">
                  <li>Adição da página &quot;Questões&quot;.</li>
                  <li>
                    Botão para acessar a página &quot;Questões/Criar&quot; em
                    produção.
                  </li>
                </ul>
              </div>
              <div> 
                <h2 className="text-xl font-semibold mb-2">
                  Página &quot;Dashboards&quot;:
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    Estágio inicial de desenvolvimento da página
                    &quot;Dashboards&quot;.
                  </li>
                  <li>
                    Futuramente, irá exibir dados de uma prova por meio de
                    tabelas e gráficos.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
