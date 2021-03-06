import React from "react";
import "./style.scss";


import { BsFillHouseFill, BsHeadset, BsTelephoneFill, BsLink45Deg } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoGithub, IoIosBook  } from "react-icons/io";
import {MdOutlineScreenSearchDesktop, MdEmail} from "react-icons/md"
import {FaSatelliteDish, FaDatabase, FaCode} from "react-icons/fa"
import {SiReact, SiNextdotjs, SiSass, SiTypescript,SiStripe} from 'react-icons/si'


import Skills from "../Skills";






interface IdadosPessoais {
  endereco: string;
  email: string;
  tel: number;
  likendin: string;
  github: string;
}





const Body = () => {
  const dadosPessoais: IdadosPessoais = {
    endereco: "Rua Maria Inacia do Nascimento, 59600-990 MossorĂ³/RN",
    email: "may2dgoiis@gmail.com",
    tel: 5584999073399,
    likendin: "www.linkedin.com/in/maycon-douglas-8a36a11a2",
    github: "https://github.com/MayconDouglasGois",
  };

  return (
    <main>
      <section className="colum-1">
        <div className="contatos">
          <h1>CONTATOS</h1>
          <ul>
            <li>
              <BsFillHouseFill /> {dadosPessoais.endereco}
            </li>
            <li>
              <MdEmail />
              <a href={"mailto:" + dadosPessoais.email}>
                {" "}
                {dadosPessoais.email}
              </a>
            </li>
            <li>
              <BsTelephoneFill />
              <a href={"tel:" + dadosPessoais.tel} 
              target="_blank"
              rel="noopener noreferrer"
              >
                {" "}
                {dadosPessoais.tel}
                </a> 
            </li>
            <li>
              <IoLogoLinkedin />
              <a
                href={dadosPessoais.likendin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {dadosPessoais.likendin}
              </a>
            </li>
            <li>
              <IoLogoGithub />
              <a
                href={dadosPessoais.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {dadosPessoais.github}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>SKILS</h1>
          <Skills />
        </div>
      </section>

      <section className="colum-2">
        <div>
          <h1>FORMAĂ‡ĂƒO</h1>
          <p>
            <IoIosBook /> Ensino MĂ©dio - Centro de EducaĂ§Ă£o Integrada Professor
            Eliseu Viana - 2013 / 2016
          </p>
          <p>
            <IoIosBook /> Ensino Superior - CiĂªncia e Tecnologia - UNIVERSIDADE
            FEDERAL RURAL DO SEMI-Ă?RIDO - 2017 - Cursando
          </p>
        </div>
        <div>
          <h1>EXPERIĂ?NCIAS</h1>
          <h2><BsHeadset/> Atendente de Telemarketing â€“ AeC MossorĂ³/RN (2018 - 2018)</h2>
          <p>   Durante o perĂ­odo tive experiencia com atendimento ao cliente.</p>
          <h2><MdOutlineScreenSearchDesktop/> Suporte Operacional - PROSAT Rastreamento (2020 - 2020)</h2>
          <p>
                Durante esse perĂ­odo trabalhei com atendimento, suporte ao cliente
            (PF e PJ), com logĂ­stica para agendamentos e tratativas de serviĂ§os
            tĂ©cnicos.
          </p>
          <h2><FaSatelliteDish/> TI - PROSAT Rastreamento (2020 - atual)</h2>
          <p>
                Migrei de funĂ§Ă£o e atuo como TI. Trabalho configurando rastreadores e perifĂ©ricos para a instalaĂ§Ă£o, com Desenvolvimento de
            soluĂ§Ăµes de telemetria & IoT e com analise e resoluĂ§Ă£o de problemas.
          </p>
        </div>
        <div>
          <h1>PROJETOS</h1>
          
          <a href="https://md-commerce.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
<h2 className="link"><BsLink45Deg/>md-commerce</h2>
            </a>
          <p>Projeto de E-commerce usando o stripe para cadastro e pagamentos. Usando o Next Auth para trabalhar com login e o faunaDB para armazenamento. Projeto consiste em 3 pĂ¡ginas, uma para os produtos, outra com o carrinho e uma com o histĂ³rico de compras. </p>
          <ul>
            <li><SiReact/> - React</li>
            <li><SiNextdotjs/> - Next</li>
            <li><SiSass/> - Sass</li>
            <li><SiTypescript/> - Typescript</li>
            <li><SiStripe/> - Api Stripe</li>
            <li><FaDatabase/> - FaunaDB</li>

          </ul>
          
        </div>
      </section>
    </main>
  );
};

export default Body;
