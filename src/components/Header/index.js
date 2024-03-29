import React, { useState, useEffect } from "react";
import "./Header.css";
import {
     Container,
     MenuEnd,
     Burger,
     Line,
     Timer,
     Button,
     SeparadorMobile
} from "./styles";
import logo from "../../img/logos/black.png";
import { Link } from "react-router-dom";

export default function Header() {
     const [open, setOpen] = useState(false);
     const [navcolor, setNavcolor] = useState(false);
     const handleScroll = () => {
          if (window.scrollY > 0) {
               setNavcolor(true);
          } else {
               setNavcolor(false);
          }
     };
     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          window.onload = handleScroll();
     }, []);

     return (
          <Container navcolor={navcolor}>
               <div className="menu-start">
                    <Link to="/">
                         <img src={logo} alt="Quickploy" />
                    </Link>
               </div>
               <MenuEnd open={open}>
                    <ul>
                         <Timer index={0} open={open}>
                              <li>
                                   <Link
                                        to="/parceiros"
                                        onClick={() => {
                                             setOpen(false);
                                        }}
                                   >
                                        para parceiros
                                   </Link>
                              </li>
                         </Timer>
                         <Timer index={1} open={open}>
                              <li>
                                   <Link
                                        to="/areas-de-atuacao"
                                        onClick={() => {
                                             setOpen(false);
                                        }}
                                   >
                                        áreas de atuação
                                   </Link>
                              </li>
                         </Timer>
                         <Timer index={2} open={open}>
                              <li>
                                   <Link
                                        to="/servicos"
                                        onClick={() => {
                                             setOpen(false);
                                        }}
                                   >
                                        serviços
                                   </Link>
                              </li>
                         </Timer>
                         <Timer index={3} open={open}>
                              <li className="vertical-bar">
                                   <Link
                                        to="/contato"
                                        onClick={() => {
                                             setOpen(false);
                                        }}
                                   >
                                        contato
                                   </Link>
                              </li>
                         </Timer>
                         <SeparadorMobile open={open} />
                         <Timer index={4} open={open}>
                              <li>
                                   <Button>
                                        <Link
                                             to="/book"
                                             onClick={() => {
                                                  setOpen(false);
                                             }}
                                        >
                                             quero me mudar
                                        </Link>
                                   </Button>
                              </li>
                         </Timer>
                    </ul>
               </MenuEnd>
               <Burger
                    onClick={() => {
                         setOpen(!open);
                    }}
               >
                    <Line className={open ? "line1" : ""} />
                    <Line className={open ? "line2" : ""} />
                    <Line className={open ? "line3" : ""} />
               </Burger>
          </Container>
     );
}
