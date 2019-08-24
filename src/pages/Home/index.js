import React, { createRef } from "react";
import { Container, Hero, LeftHero, Phrase, Button, Arrow } from "./styles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";

export default function Home() {
     const ref = createRef();
     const handleClick = () =>
          ref.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
          });
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
               <div
                    ref={ref}
                    style={{ height: "100vh", backgroundColor: "white" }}
               />
          </Container>
     );
}
