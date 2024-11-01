/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';

// Utils
import { cards1 } from '@/utils/cards';
import { cards2 } from '@/utils/cards';
// Components
import CardGuidance from '@/components/CardGuidance';
import Card3D from '@/components/Card3D';
import Footer from '@/components/Footer';
import WhatsButton from '@/components/WhatsButton';

// Icons
import { FaTruck } from 'react-icons/fa'; //transporte terrestre
import { GiCargoShip } from 'react-icons/gi'; //transporte maritimo
import { GiAirplaneDeparture } from 'react-icons/gi'; //transporte aéreo
import { CiBoxes } from 'react-icons/ci'; //Serviços Alfandegários:
import { GiHarborDock } from 'react-icons/gi'; //Serviços de Logística
import { RiScrollToBottomLine } from 'react-icons/ri';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

// Utils
import { TitleLetter, Paragraph, Lists, Img } from '@/utils/animations';

const index = () => {
  useEffect(() => {
    async function loadReveal() {
      const sr = (await import('scrollreveal')).default();

      sr.reveal('#TitleLetter', TitleLetter);
      sr.reveal('#Paragraph', Paragraph);
      sr.reveal('#Lists', Lists);
      sr.reveal('#Img', Img);
    }
    loadReveal();
  }, []);
  return (
    <div
      id="AnatonellyLLC"
      className=" w-full h-auto flex flex-col -z-10  justify-center items-center"
    >
      <WhatsButton />
      <div className="min-h-screen w-full flex flex-col items-center lg:justify-center justify-start lg:pt-0 pt-20 bg-Anatonelly-Primary p-5">
        <img
          src="./AnatonellyLLC/AnatonellyLLC.svg"
          className="lg:w-1/3 w-full h-2/5 filter animate-dropShadowPulse"
          alt=""
          draggable="false"
          srcset=""
        />
        <div className="animate-bounce text-center flex flex-col items-center justify-center gap-2 absolute mt-10 top-3/4">
          <RiScrollToBottomLine className="text-4xl" />
          <RiArrowDownDoubleLine className="text-4xl" />
        </div>
      </div>
      <div className="  bg-Anatonelly-Primary w-full h-auto  flex flex-col items-center justify-around ">
        <div className="min-h-screen w-full flex flex-col items-center justify-start gap-10">
          <div className=" w-full flex flex-col items-center">
            <span
              id="Paragraph"
              className="text-center text-white lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold "
            >
              Introdução
            </span>
          </div>
          <div
            id="Paragraph"
            className="lg:w-1/2 w-3/4 h-auto flex flex-col items-center justify-center bg-Anatonelly-Primary border border-yellow-500 lg:p-20 p-5 rounded-2xl shadow-2xl shadow-neutral-500 gap-3"
          >
            <p className="text-white lg:text-xl md:text-lg sm:text-base xs:text-sm">
              Anatonelly LLC é uma empresa em ascensão no setor de transporte
              internacional, focada em importação e exportação. Nosso
              compromisso é fornecer serviços de alta qualidade e soluções
              logísticas personalizadas para atender às necessidades de nossos
              clientes em todo o mundo. Especializados em transporte terrestre,
              marítimo e aéreo, combinados com serviços de desembaraço
              aduaneiro, buscamos proporcionar uma experiência tranquila e
              confiável em cada etapa do processo. Na Anatonelly LLC, estamos
              comprometidos em expandir as fronteiras de seus negócios,
              conectando você aos mercados globais de maneira eficiente e segura
            </p>
            <p
              id="Paragraph"
              className="text-white lg:text-xl md:text-lg sm:text-base xs:text-sm"
            >
              Destaques dos principais serviços oferecidos, como transporte
              terrestre, marítimo e aéreo, além de serviços alfandegários e de
              logística. &ldquo; Na Anatonelly LLC, oferecemos uma ampla gama de
              serviços especializados para atender às demandas do transporte
              internacional. &quot; <br />
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full bg-gradient-to-t from-Anatonelly-Primary via-purple-950 to-Anatonelly-Primary  text-black p-10 min-h-screen">
          <div className="w-full flex flex-col items-start">
            <span
              id="TitleLetter"
              className="text-start text-xl font-bold inline-block lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-white"
            >
              Nossa expertise abrange:{' '}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div
              id="Paragraph"
              className=" flex items-center justify-center w-full gap-10 flex-wrap "
            >
              <CardGuidance
                icon={<FaTruck size={30} className="text-yellow-500" />}
                title={'Transporte Terrestre'}
                text={
                  'Navegamos pelas estradas com eficiência e segurança, oferecendo soluções de transporte terrestre ágeis e confiáveis para suas mercadorias, independentemente do destino ou da carga.'
                }
              />
              <CardGuidance
                icon={<GiCargoShip size={30} className="text-yellow-500" />}
                title={'Transporte Marítimo'}
                text={
                  'Conduzimos sua carga pelos mares com expertise, utilizando rotas marítimas estratégicas e parcerias confiáveis para garantir entregas pontuais e econômicas em todo o mundo.'
                }
              />
              <CardGuidance
                icon={
                  <GiAirplaneDeparture size={30} className="text-yellow-500" />
                }
                title={'Transporte Aéreo'}
                text={
                  'Elevamos suas expectativas com nossos serviços de transporte aéreo rápido e eficiente. Com acesso a uma extensa rede de rotas e operadores, garantimos que suas mercadorias cheguem ao destino final no menor tempo possível.'
                }
              />

              <CardGuidance
                icon={<CiBoxes size={30} className="text-yellow-500" />}
                title={'Serviços Alfandegários'}
                text={
                  'Simplificamos os processos alfandegários complexos, fornecendo serviços de desembaraço aduaneiro rápidos e precisos para garantir a conformidade regulatória e a liberação rápida de sua carga.'
                }
              />
              <CardGuidance
                icon={<GiHarborDock size={30} className="text-yellow-500" />}
                title={'Serviços de Logística'}
                text={
                  'Vamos além do transporte básico, oferecendo soluções de logística completas e personalizadas para otimizar sua cadeia de suprimentos. Desde o armazenamento até a distribuição, estamos aqui para atender às suas necessidades logísticas com eficiência e profissionalismo.'
                }
              />
            </div>
            <span
              id="Paragraph"
              className=" text-white font-semibold w-full lg:p-16 md:gap-12 sm:gap-10 xs:gap-8 xxs:gap-6 text-justify lg:text-2xl md:text-1xl sm:text-lgxl xs:text-base"
            >
              Na Anatonelly LLC, nossa prioridade é fornecer serviços de alta
              qualidade que atendam e superem as expectativas de nossos
              clientes. Conte conosco para impulsionar seus negócios para novos
              patamares de sucesso no comércio internacional <br />
              <br />
            </span>
          </div>
        </div>
        <div className="bg-AnatonellyLLC h-auto w-full bg-cover z-20">
          <div className="w-full min-h-screen h-full bg-black/80 p-10 flex flex-col items-center justify-start gap-20">
            <div className="w-full flex flex-col items-start">
              <span
                id="TitleLetter"
                className="text-start text-white lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold md:pl-52 xxs:pl-0"
              >
                Sobre nós:{' '}
              </span>
            </div>
            <div
              id="Lists"
              className="xxs:w-full md:w-8/12 h-auto flex flex-col items-center justify-start lg:gap-20 gap-10"
            >
              <p className="text-white text-sm font-semibold lg:text-2xl md:text-1xl sm:text-lgxl xs:text-base">
                Informações sobre a equipe de especialistas em logística e
                transporte da Anatonelly LLC.
              </p>
              <p className="text-white text-sm lg:text-2xl md:text-1xl sm:text-lgxl xs:text-base text-justify">
                Na Anatonelly LLC, contamos com uma equipe de especialistas em
                logística e transporte altamente qualificados e experientes,
                dedicados a fornecer soluções personalizadas e eficientes para
                nossos clientes. Com um profundo conhecimento do setor e um
                compromisso inabalável com a excelência, nossa equipe está
                constantemente atualizada com as últimas tendências e melhores
                práticas do setor. Além de nossa equipe interna, colaboramos com
                empresas parceiras estratégicas em todo o mundo, expandindo
                nossa rede e recursos para fornecer um serviço abrangente e
                global. Confie em nossa equipe de especialistas para cuidar de
                todas as suas necessidades de transporte e logística com
                profissionalismo, eficiência e confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-start bg-Anatonelly-Primary z-10 p-10 pb-36">
        <div className="flex items-start justify-center w-full h-52">
          <span
            id="TitleLetter"
            className="text-center text-white text-xl font-bold w-full lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl "
          >
            Serviços:{' '}
          </span>
          <img
            className="relative  z-10 lg:-translate-x-1/2 hidden lg:flex"
            src="/AnatonellyLLC/objectAnatonellyLLC.png"
            alt=""
          />
        </div>
        <div
          id="Lists"
          className="z-40 w-full min-h-64 flex flex-wrap gap-40 items-center justify-center md:p-20 "
        >
          {
            /* eslint-disable react/jsx-key */
            cards1.map((card, index) => (
              <Card3D
                key={index}
                img={card.Img}
                title={card.title}
                text={card.text}
              />
            ))
          }
        </div>
      </div>
      <div className="min-h-screen bg-Anatonelly-Primary w-full h-auto  flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col items-center">
          <span
            id="TitleLetter"
            className="text-center text-white lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold"
          >
            Destinos
          </span>
        </div>
        <div
          id="Paragraph"
          className="lg:w-1/2 w-3/4 h-auto flex items-center justify-center bg-Anatonelly-Primary border border-yellow-500 lg:p-20 p-5 rounded-2xl shadow-2xl shadow-neutral-500"
        >
          <p className="text-white lg:text-2xl md:text-1xl sm:text-lgxl xs:text-base">
            Na Anatonelly LLC, conectamos seus negócios aos principais destinos
            globais, facilitando o comércio internacional de e para a China e os
            Estados Unidos. Com nossa expertise em transporte terrestre,
            marítimo e aéreo, atendemos às demandas logísticas desses
            mercados-chave, garantindo entregas rápidas e eficientes. Seja
            importando componentes vitais da indústria chinesa ou exportando
            produtos de alta qualidade para os consumidores americanos, estamos
            aqui para tornar o processo simples e sem complicações. Confie na
            Anatonelly LLC para expandir seus horizontes comerciais e alcançar
            sucesso em escala global.
          </p>
        </div>
      </div>
      <div className="w-full bg-gradient-to-t md:h-screen xxs:h-auto from-Anatonelly-Secundary to-Anatonelly-Primary flex flex-col items-start justify-evenly">
        <span
          id="TitleLetter"
          className="text-start text-white font-bold inline-block pl-20 lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
        >
          Recursos:{' '}
        </span>
        <div
          id="Lists"
          className="z-0 w-full min-h-64 flex flex-wrap gap-40 items-center justify-center p-20"
        >
          {
            /* eslint-disable react/jsx-key */
            cards2.map((card, index) => (
              <Card3D
                key={index}
                img={card.Img}
                title={card.title}
                text={card.text}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
