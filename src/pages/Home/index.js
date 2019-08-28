import React, { createRef, useState, useEffect } from "react";
import {
     Container,
     Hero,
     LeftHero,
     Phrase,
     Button,
     Arrow,
     GlobalWrapper,
     TituloFuncionamento,
     Funcionamento,
     Wrapper,
     ServicesWrapper,
     ServicesTitle,
     ServicesList
} from "./styles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";
import clock from "../../img/clock.svg";
import muscle from "../../img/muscle.svg";
import calendar from "../../img/calendar.svg";
import packing from "../../img/packing.svg";
import house from "../../img/house.svg";
import building from "../../img/building.svg";

export default function Home() {
     const ref = createRef();

     const handleClick = () =>
          ref.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
          });

     const [animate, setAnimate] = useState(false);
     const handleScroll = () => {
          let h = Math.max(
               document.documentElement.clientHeight,
               window.innerHeight || 0
          );
          if (window.scrollY > h * 0.4) {
               setAnimate(true);
          }
     };
     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          window.onload = handleScroll();
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <Container>
               <Helmet>
                    <meta
                         name="description"
                         content="A Quickploy te ajuda a realizar sua mudança, te conectando com nossos melhores parceiros. Agende sua próxima mudança rápido e sem dor de cabeça."
                    />
                    <title>
                         Quickploy | Mudança de residência sem dor de cabeça
                    </title>
               </Helmet>
               <Hero>
                    <LeftHero>
                         <Phrase>
                              <h1>Mudanças causam estresse...</h1>
                              <h2>
                                   Nós também achamos, por isso decidimos trazer
                                   uma solução para este problema. Com a
                                   Quickploy você pode se mudar com rapidez,
                                   praticidade e conforto.
                              </h2>
                              <Button>
                                   <Link to="/book">quero me mudar</Link>
                              </Button>
                         </Phrase>
                    </LeftHero>
                    <Arrow onClick={handleClick}>
                         <FiChevronsDown size="40px" />
                    </Arrow>
               </Hero>
               <GlobalWrapper ref={ref}>
                    <TituloFuncionamento>Título</TituloFuncionamento>
                    <Funcionamento animate={animate}>
                         <Wrapper>
                              <img
                                   src={clock}
                                   style={{ width: "80px" }}
                                   alt="relógio"
                              />
                              <h3>
                                   Aute in anim id dolore consectetur.Officia
                                   tempor adipisicing aliqua in amet mollit ad
                                   cillum amet quis.Mollit adipisicing aliquip
                                   ad in labore deserunt adipisicing et ex dolor
                                   cillum.
                              </h3>
                         </Wrapper>
                         <Wrapper>
                              <img
                                   src={muscle}
                                   style={{ width: "80px" }}
                                   alt="muscle"
                              />
                              <h3>
                                   Duis do minim nostrud dolor.Magna in
                                   reprehenderit tempor minim fugiat ut.Ex in
                                   Lorem reprehenderit est amet.
                              </h3>
                         </Wrapper>
                         <Wrapper>
                              <img
                                   src={calendar}
                                   style={{ width: "80px" }}
                                   alt="calendário"
                              />
                              <h3>
                                   Ea aute duis eiusmod esse do anim.Officia
                                   sint tempor laboris magna dolore irure.Quis
                                   cillum exercitation excepteur aliqua veniam
                                   qui nisi voluptate sunt amet nulla nisi in
                                   pariatur.
                              </h3>
                         </Wrapper>
                    </Funcionamento>
               </GlobalWrapper>
               <ServicesWrapper>
                    <ServicesTitle>Tipos de mudanças</ServicesTitle>
                    <ServicesList>
                         <li>
                              <Link>
                                   <img
                                        src={packing}
                                        style={{
                                             width: "80px",
                                             display: "block",
                                             margin: "auto"
                                        }}
                                        alt="Mudança Pequena"
                                   ></img>
                                   <h4>Small Move</h4>
                                   <p>
                                        Carrega poucos itens? Atendemos pequenas
                                        mudanças
                                   </p>
                              </Link>
                         </li>
                         <li>
                              <Link>
                                   <img
                                        src={house}
                                        style={{
                                             width: "80px",
                                             display: "block",
                                             margin: "auto"
                                        }}
                                        alt="Mudança Média"
                                   ></img>
                                   <h4>Medium Move</h4>
                                   <p>
                                        Cupidatat voluptate deserunt officia
                                        Lorem nisi duis Lorem officia cupidatat
                                        reprehenderit cupidatat eiusmod. Ea
                                        eiusmod non deserunt ad mollit nostrud
                                        anim. Id aute culpa amet incididunt
                                        aliquip minim commodo.
                                   </p>
                              </Link>
                         </li>
                         <li>
                              <Link>
                                   <img
                                        src={building}
                                        style={{
                                             width: "80px",
                                             display: "block",
                                             margin: "auto"
                                        }}
                                        alt="Mudança Grande"
                                   ></img>
                                   <h4>Big Move</h4>
                                   <p>
                                        Sunt nostrud sunt veniam adipisicing in
                                        pariatur ullamco adipisicing est nisi
                                        nisi aliquip laboris. Ex aute sint
                                        ullamco nulla consectetur cillum do. Non
                                        aute enim sunt ad mollit magna amet
                                        pariatur.
                                   </p>
                              </Link>
                         </li>
                    </ServicesList>
               </ServicesWrapper>
          </Container>
     );
}
