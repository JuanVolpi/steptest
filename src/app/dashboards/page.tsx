import ResultsTable from "@/componentes/cards/ResultsTable";
import { alunos, respostas } from "@/lib/test_data/dados";
import { Divider } from "@nextui-org/react";

 // Certifique-se de importar os dados corretos

export default function Dashboards() {
  return (
    <>
      <main className="w-full h-full bg-white rounded p-3 px-4">
        <ResultsTable alunos={alunos} respostas={respostas} />
      </main>
    </>
  );
}
