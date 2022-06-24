import React from "react";
import "./style.scss";


import { MdEmail } from "react-icons/md";
import { BsFillHouseFill, BsHeadset, BsTelephoneFill } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { IoIosBook } from "react-icons/io";
import {MdOutlineScreenSearchDesktop} from "react-icons/md"
import {FaSatelliteDish} from "react-icons/fa"


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
    endereco: "Rua Maria Inacia do Nascimento, 59600-990 Mossoró/RN",
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
          <h1>PERFIL PESSOAL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat
            doloremque dolorum nostrum dolor ipsum minima nobis reprehenderit
            eligendi maxime voluptatum voluptas explicabo eos aut, dolores earum
            quidem assumenda ipsam!
          </p>
        </div>
        <div>
          <h1>FORMAÇÃO</h1>
          <p>
            <IoIosBook /> Ensino Médio - Centro de Educação Integrada Professor
            Eliseu Viana - 2013 / 2016
          </p>
          <p>
            <IoIosBook /> Ensino Superior - Ciência e Tecnologia - UNIVERSIDADE
            FEDERAL RURAL DO SEMI-ÁRIDO - 2017 - Cursando
          </p>
        </div>
        <div>
          <h1>EXPERIÊNCIAS</h1>
          <h2><BsHeadset/> Atendente de Telemarketing – AeC Mossoró/RN (2018 - 2018)</h2>
          <p>   Durante o período tive experiencia com atendimento ao cliente.</p>
          <h2><MdOutlineScreenSearchDesktop/> Suporte Operacional - PROSAT Rastreamento (2020 - 2020)</h2>
          <p>
                Durante esse período trabalhei com atendimento, suporte ao cliente
            (PF e PJ), com logística para agendamentos e tratativas de serviços
            técnicos.
          </p>
          <h2><FaSatelliteDish/> TI - PROSAT Rastreamento (2020 - atual)</h2>
          <p>
                Migrei de função e atuo como TI. Trabalho configurando rastreadores e periféricos para a instalação, com Desenvolvimento de
            soluções de telemetria & IoT e com analise e resolução de problemas.
          </p>
        </div>
        <div>
          <h1>PROJETOS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae
            enim recusandae, voluptatem esse facere pariatur tempora accusamus
            ex placeat atque illo praesentium itaque commodi ab tenetur
            quibusdam ipsam dicta.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, sint nemo adipisci repellat ab, deserunt quos
            recusandae rerum necessitatibus doloremque blanditiis laboriosam
            quasi animi maiores labore molestiae consequuntur dolorum quo!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Body;
