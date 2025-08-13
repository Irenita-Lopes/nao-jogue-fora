import Image from "next/image";
import { BiAngry } from "react-icons/bi";
import { FaRegSmileWink } from "react-icons/fa";
import descarte_irregular from "@/assets/descarte-irregular.png";
import separando_residuos from "@/assets/separando-residuos.png";

export default function Home() {
  function Homepage() {
    return (
      <div className="w-full flex flex-col justify-center gap-4">
        <h1 className="mt-14 text-4xl md:text-8xl font-bold">
          não jogue fora
        </h1>
        <h4 className="mt-5 text-gray-400 font-light">
          por favor, não diga que vai jogar algo fora
        </h4>
        <h2 className="mt-15 text-2xl md:text-5xl text-gray-700">
          Imagine falar que vai "jogar fora" sendo que não existe "fora".
        </h2>
      </div>
    );
  }

  function NaoFaca() {
    return (
      <>
        <div className="mt-20 flex gap-4 text-4xl py-6">
          <BiAngry className="text-red-600" />
          <h3 className="font-bold text-3xl">
            Não faça isso
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-15">
          <Image
            src={descarte_irregular}
            alt="dia nublado com poluicao"
            className="w-full md:w-1/3" />
          <p className="text-justify md:text-left text-[1.2rem]">
            Jogar roupas que não estão em bom estado no lixo comum ou doar para pessoas em situação de rua não são práticas sustentáveis, nem respeitosas.

            Descartar materiais recicláveis misturados com resíduos orgânicos, inviabilizando o processo de triagem e reaproveitamento em cooperativas de reciclagem.
          </p>
        </div>
      </>
    );
  }

  function FacaAssim() {
    return (
      <>
        <div className="mt-20 flex gap-4 text-3xl py-6">
          <FaRegSmileWink className="text-red-600" />
          <h3 className="font-bold text-3xl">
            No lugar daquilo, tente isso
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-15">
          <Image
            src={separando_residuos}
            alt="dia ensolarado com descarte residual"
            className="w-full md:w-1/3"/>
          <p className="text-justify md:text-left text-[1.2rem]">
            Leve suas meias usadas para o projeto
            <a className="font-bold" href="https://www.meiasdobem.com.br/" target="_blank">
              {"\u00A0"} Meias do Bem {"\u00A0"}
            </a>
            pra que elas virem cobertores para quem precisa.

            Deposite roupas sem uso nas urnas de logística reversa da
            <a className="font-bold" href="https://sustentabilidade.cea.com.br/pt-br/Paginas/MovimentoReciclo.aspx" target="_blank">
              {"\u00A0"} C&A
            </a> ou
            <a className="font-bold" href="https://www.lojasrenner.com.br/sustentabilidade/eco-estilo?srsltid=AfmBOorRGEPb4To-txNT9nTq9ZoP4KB6oEVErwziMej4MxvqQZs1z8DE" target="_blank">
              {"\u00A0"} Renner
            </a>
            , para reciclagem dos materiais da indústria textil.

            Descarte frascos de perfumaria em ecopontos também das lojas
            <a className="font-bold" href="https://www.lojasrenner.com.br/sustentabilidade/eco-estilo?srsltid=AfmBOorRGEPb4To-txNT9nTq9ZoP4KB6oEVErwziMej4MxvqQZs1z8DE" target="_blank">
              {"\u00A0"} Renner
            </a>
            , e descarte embalagens em lojas
            <a className="font-bold" href="https://www.boticario.com.br/dicas-de-beleza/boti-recicla-conheca-o-programa-de-retorno-de-embalagens-vazias/" target="_blank">
              {"\u00A0"} O{"\u00A0"}Boticário
            </a>
            ,
            <a className="font-bold" href="https://www.natura.com.br/c/logistica-reversa" target="_blank">
              {"\u00A0"} Natura
            </a>
            ,
            <a className="font-bold" href="https://www.eudora.com.br/sustentabilidade/" target="_blank">
              {"\u00A0"} Eudora {"\u00A0"}
            </a>
            e
            <a className="font-bold" href="https://www.quemdisseberenice.com.br/recicla/" target="_blank">
              {"\u00A0"} Quem Disse Berenice
            </a>.

            Papéis de cadernos usados? A
            <a className="font-bold" href="https://www.kalunga.com.br/hotsite/volta-as-aulas/trade-in-cadernos" target="_blank">
              {"\u00A0"} Kalunga {"\u00A0"}
            </a>
            aceita esses materiais e eles podem virar novos produtos escolares.
            Você também pode usar o aplicativo
            <a className="font-bold" href="https://www.cataki.org" target="_blank">
              {"\u00A0"} Cataki {"\u00A0"}
            </a>
            para contratar serviços de retirada de resíduos sólidos por trabalhadores cadastrados na plataforma.
          </p>
        </div>

      </>
    );
  }

  function Notas() {
    return (
      <p className=" flex gap-4 py-20">
        Em algumas lojas o descarte é revertido em pontos para descontos e compras de produtos, você economiza e cuida do planeta.

        Descartar certo é respeitar o planeta e cuidar das pessoas.

        Projeto baseado na campanha "no hello".
      </p>
    )
  }

  return (
    <div className="px-4 md:px-95">
      <Homepage />
      <NaoFaca />
      <FacaAssim />
      <Notas />
    </div>
  );
}
