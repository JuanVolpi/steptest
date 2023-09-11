"use client";

import { CardStates } from "@/lib/types/componentes/cards";
import { useDisclosure } from "@nextui-org/use-disclosure";
import React from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [cardSelection, setCardSelection] =
    React.useState<CardStates>("inactive");

  function toggleCard() {
    cardSelection === "active"
      ? setCardSelection("inactive")
      : setCardSelection("active");
    console.log(cardSelection);
  }

  return (
    <div className="bg-white rounded-lg shadow-md self-center p-6 w-full max-h-[98%] h-full md:w-2/3 lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Registro de Atualizações</h1>
      <div className="max-h-[90%] overflow-y-scroll">
        <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
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
                Adição da página &quot;Provas&quot; que contém cards de provas.
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
                Futuramente, irá exibir dados de uma prova por meio de tabelas e
                gráficos.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 my-5 border-2 hover:border-mblue ease-in-out transition-all">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Data: 11/09/2023</h2>
            <h2 className="text-xl font-semibold mb-2">Página "Dashboards":</h2>
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
      </div>
    </div>
  );
}
