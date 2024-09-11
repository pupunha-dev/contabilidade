import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-black text-white h-[50px] flex items-center px-10 w-full">
      <Link href="/">
        <h1>Notas de Contabilidade</h1>
      </Link>
    </header>
  )
}