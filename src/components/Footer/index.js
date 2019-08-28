import React from "react";
import { Container, FirstList, Foot } from "./styles";
import logo from "../../img/logos/blueicon.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
     return (
          <Container>
               <div style={{ display: "flex" }}>
                    <FirstList>
                         <ul>
                              <li>
                                   <a>Parceiros</a>
                              </li>
                              <li>
                                   <a>Áreas de atuação</a>
                              </li>
                              <li>
                                   <a>Serviços</a>
                              </li>
                         </ul>
                    </FirstList>
               </div>
               <Foot>
                    <div>
                         <img src={logo} style={{ width: "60px" }} />
                    </div>
                    <div>
                         <p>@Quickploy</p>
                    </div>
                    <div>
                         <ul>
                              <li>
                                   <a>
                                        <FiFacebook size="30px" />
                                   </a>
                              </li>
                              <li>
                                   <a>
                                        <FiInstagram size="30px" />
                                   </a>
                              </li>
                         </ul>
                    </div>
               </Foot>
          </Container>
     );
}
