import React from "react";
import "./style.scss";
import { MdEmail } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
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
    tel: 55849999073399,
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
              <IoLogoWhatsapp />
              <a href={"tel:+" + dadosPessoais.tel}></a> {dadosPessoais.tel}
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
          <Skills/>
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
          <h1>HABILIDADES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            eius doloremque, consequatur ducimus velit atque architecto, quas
            fugiat voluptatibus voluptates soluta. Unde animi, obcaecati facilis
            praesentium consectetur accusamus sequi optio?
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