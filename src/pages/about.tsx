import Image from "next/image";
import imgCaricatura from "../../public/assets/ilustration.svg";

export function About() {
  return (
    <section
      id="about"
      className="container flex py-16 gap-16 items-center max-md:flex-col"
    >
      <div className="w-[35%]">
        <Image alt="" className="fill-black" src={imgCaricatura} width={400} height={400} />
      </div>

      <div className="flex flex-col w-[65%]">
        <div className="space-y-2">
          <h2 className="subtitle">Sobre mim</h2>
          <div className="space-y-6">
            <p className="text-5xl leading-snug font-sans font-light">
              Acadêmica de Bacharelado em Ciência da Computação
            </p>
            <p className="text-3xl font-light font-sans">
              Sou designer e desenvolvedora apaixonada pelo processo, com experiência na
              criação de aplicações em JavaScript, UX/UI design, Jogos Educacionais e
              Interação Humano-Computador.
            </p>
            <p className="text-3xl font-light font-sans">
              Também me dedico em projetos de pesquisa e extensão, focados 
              em incentivar mais meninas nas áreas de STEAM, aplicando
              conhecimentos teóricos em soluções práticas e inovadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
