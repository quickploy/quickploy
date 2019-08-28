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
     PartnersWrapper,
     PartnersTitle,
     PartnersSubTitle,
     PartnersItems,
     FirstPartnersItem,
     SecondPartnersItem,
     Separator,
     PartnersButton,
     Helper
} from "./styles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiChevronsDown, FiClock } from "react-icons/fi";
import clock from "../../img/clock.svg";
import muscle from "../../img/muscle.svg";
import calendar from "../../img/calendar.svg";
import truck from "../../img/delivery-truck.svg";

export default function Home() {
     const ref = createRef();

     const handleClick = () =>
          ref.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
          });

     const [animate, setAnimate] = useState(false);
     const handleScroll = () => {
          if (window.scrollY > 450) {
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
                              <img src={clock} style={{ width: "80px" }} />
                              <h3>
                                   Aute in anim id dolore consectetur.Officia
                                   tempor adipisicing aliqua in amet mollit ad
                                   cillum amet quis.Mollit adipisicing aliquip
                                   ad in labore deserunt adipisicing et ex dolor
                                   cillum.
                              </h3>
                         </Wrapper>
                         <Wrapper>
                              <img src={muscle} style={{ width: "80px" }} />
                              <h3>
                                   Duis do minim nostrud dolor.Magna in
                                   reprehenderit tempor minim fugiat ut.Ex in
                                   Lorem reprehenderit est amet.
                              </h3>
                         </Wrapper>
                         <Wrapper>
                              <img src={calendar} style={{ width: "80px" }} />
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
               <PartnersWrapper>
                    <PartnersTitle>nossos parceiros</PartnersTitle>
                    <PartnersSubTitle>
                         <h3>
                              Ex aliqua sit exercitation esse sunt ad do
                              occaecat sit qui ullamco deserunt duis. In laborum
                              officia elit do qui nisi dolore elit sunt esse
                              aliqua ipsum veniam labore. Minim nisi est sunt
                              voluptate sit aliqua qui aute sint commodo. Veniam
                              nisi nisi non amet.
                         </h3>
                    </PartnersSubTitle>
                    <PartnersItems>
                         <FirstPartnersItem>
                              <img src={truck} style={{ width: "80px" }} />
                              <Separator />
                              <p>
                                   Aute minim mollit veniam eu minim
                                   reprehenderit aute dolore eiusmod. Magna
                                   occaecat et ea laboris in in tempor. Laborum
                                   sit nostrud aliqua sunt exercitation commodo
                                   nostrud irure aute esse.
                              </p>
                              <Helper>
                                   <Link to="/motorista">
                                        <PartnersButton>
                                             quero dirigir
                                        </PartnersButton>
                                   </Link>
                              </Helper>
                         </FirstPartnersItem>
                         <SecondPartnersItem>
                              <img src={muscle} style={{ width: "80px" }} />
                              <Separator />
                              <p>
                                   In aliquip ullamco consectetur ea eiusmod.
                                   Occaecat aliquip pariatur ipsum ipsum ex in
                                   incididunt magna. Deserunt esse dolor
                                   pariatur veniam nostrud qui minim labore elit
                                   sunt. Dolor id ipsum dolor tempor deserunt ex
                                   amet pariatur incididunt. Officia consequat
                                   qui velit enim sit irure.
                              </p>
                              <div style={{ marginTop: "25px" }}>
                                   <Link to="/helper">
                                        <PartnersButton>
                                             quero ajudar
                                        </PartnersButton>
                                   </Link>
                              </div>
                         </SecondPartnersItem>
                    </PartnersItems>
               </PartnersWrapper>
          </Container>
     );
}
