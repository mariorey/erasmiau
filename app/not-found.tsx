import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Lo sentimos, esta página no existe o ha sido movida.",
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-6 max-w-md w-full">

        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Erasmiau"
          width={120}
          height={120}
          className="object-contain"
          priority
        />

        {/* Código 404 */}
        <p className="text-8xl font-bold text-[#E8003A] leading-none">
          404
        </p>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800">
          Página no encontrada
        </h1>

        {/* Subtítulo */}
        <p className="text-base text-gray-400 leading-relaxed">
          Lo sentimos, esta página no existe o ha sido movida.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#E8003A] text-white text-sm font-bold tracking-widest uppercase px-8 py-3 transition-colors duration-200 hover:bg-[#c40032]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#E8003A] text-[#E8003A] text-sm font-bold tracking-widest uppercase px-8 py-3 transition-colors duration-200 hover:bg-[#E8003A] hover:text-white"
          >
            Ver proyectos
          </Link>
        </div>

      </div>
    </div>
  );
}
