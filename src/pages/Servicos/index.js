import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
     Container,
     ClientsFAQList,
     ClientsFAQ,
     ClientsFAQTitle,
     ServicesWrapper,
     ServicesList,
     ServicesTitle,
     ButtonWrapper,
     Button
} from "./styles";
import trucks from "../../img/trucks.svg";
import house from "../../img/house.svg";
import building from "../../img/building.svg";
import packing from "../../img/packing.svg";

export default function Servicos() {
     const [animateMobile, setAnimateMobile] = useState(false);
     const handleScroll = () => {
          let el = document.getElementById("image");
          let v2 = el.getBoundingClientRect().top;
          if (v2 < 600) {
               setAnimateMobile(true);
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
               <ClientsFAQ animateMobile={animateMobile}>
                    <ClientsFAQTitle>
                         Como a Quickploy funciona?
                    </ClientsFAQTitle>
                    <div style={{ gridArea: "4 / 1 / 13 / 2" }} id="image">
                         <img
                              src={trucks}
                              style={{
                                   width: "90px",
                                   display: "block",
                                   margin: "auto"
                              }}
                         />
                    </div>

                    <ClientsFAQList>
                         <h3>
                              1. Proident irure aliquip enim irure non excepteur
                              occaecat minim consectetur culpa irure.
                         </h3>
                         <p>
                              Adipisicing ad eu nisi incididunt irure anim.
                              Adipisicing eiusmod laboris laborum aliqua laborum
                              reprehenderit. Consectetur laborum incididunt amet
                              incididunt ad tempor ea velit reprehenderit.
                         </p>

                         <h3>2. Est adipisicing ad velit id sit ipsum quis.</h3>
                         <p>
                              Nisi ipsum cillum enim tempor aute elit in esse.
                              Ad deserunt et commodo fugiat fugiat aliqua magna
                              in elit aliqua eiusmod occaecat sunt occaecat.
                              Voluptate velit magna commodo pariatur. Eiusmod
                              Lorem magna anim incididunt ad in occaecat amet.
                              Minim non elit ullamco veniam dolor veniam labore
                              laboris dolor labore nostrud cillum incididunt.
                         </p>

                         <h3>
                              3. Voluptate laboris aute irure minim eu aliqua
                              officia elit ea.
                         </h3>
                         <p>
                              Eu labore fugiat exercitation ad occaecat sint et
                              elit consequat velit adipisicing veniam excepteur.
                              Anim quis mollit fugiat qui Lorem amet elit nulla
                              sint ut labore nisi ut. Voluptate labore cillum ut
                              occaecat labore cillum sit nostrud velit. Eu id
                              occaecat Lorem cupidatat mollit et incididunt sunt
                              est cupidatat non reprehenderit. Aute incididunt
                              laboris sunt velit culpa.
                         </p>
                         <ButtonWrapper>
                              <Link>
                                   <Button>Peça um orçamento</Button>
                              </Link>
                         </ButtonWrapper>
                    </ClientsFAQList>
               </ClientsFAQ>
          </Container>
     );
}
