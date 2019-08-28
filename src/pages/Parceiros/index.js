import React, { useState, useEffect, createRef } from "react";
import { Link } from "react-router-dom";
import {
     Arrow,
     Container,
     PartnersWrapper,
     PartnersTitle,
     PartnersSubTitle,
     PartnersItems,
     Helper,
     FirstPartnersItem,
     SecondPartnersItem,
     Separator,
     PartnersButton,
     PartnersFAQ,
     PartnersFAQList,
     PartnersFAQTitle
} from "./styles";

import wheel from "../../img/wheel.svg";
import worker from "../../img/worker.svg";
import partner from "../../img/partner.svg";
import { FiChevronsUp } from "react-icons/fi";

export default function Parceiros() {
     const [animate, setAnimate] = useState(false);
     const handleScroll = () => {
          let el = document.getElementById("image");
          let h = el.getBoundingClientRect().top;
          if (h < 600) {
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

     const ref = createRef();
     const handleClick = () => {
          ref.current.scrollIntoView({
               behavior: "smooth",
               block: "start"
          });
     };

     return (
          <Container>
               <PartnersWrapper ref={ref}>
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
                              <img
                                   src={wheel}
                                   style={{
                                        width: "80px",
                                        paddingBottom: "10px"
                                   }}
                              />
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
                              <img
                                   src={worker}
                                   style={{
                                        width: "80px",
                                        paddingBottom: "10px"
                                   }}
                              />
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
               <PartnersFAQ animate={animate}>
                    <PartnersFAQTitle>
                         Por que trabalhar com a Quickploy?
                    </PartnersFAQTitle>
                    <div style={{ gridArea: "4 / 1 / 13 / 2" }} id="image">
                         <img
                              src={partner}
                              style={{
                                   width: "90px",
                                   display: "block",
                                   margin: "auto"
                              }}
                         />
                    </div>

                    <PartnersFAQList>
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
                    </PartnersFAQList>
                    <Arrow onClick={handleClick}>
                         <FiChevronsUp
                              color="#f53b8c"
                              size="40px"
                         ></FiChevronsUp>
                    </Arrow>
               </PartnersFAQ>
          </Container>
     );
}
