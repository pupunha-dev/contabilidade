import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 w-5/6 py-6">
      <Link href="/cgae">
        <p className="">
          1. <span className="underline">Notas do Livro Contabilidade Geral e Avançada Esquematizado</span>
        </p>
      </Link>
    </div>
  );
}
