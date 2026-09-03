import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] font-semibold mb-4">
          Erro 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-gray-400 mb-10">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:border-[#4285F4]/60 transition-all duration-300"
        >
          Voltar para o site
        </Link>
      </div>
    </div>
  );
}
