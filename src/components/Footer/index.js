import React from "react";
import {
     Container,
     FirstList,
     SecondList,
     ThirdList,
     Foot,
     ListParent
} from "./styles";
import logo from "../../img/logos/blueicon.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
     return (
          <Container>
               <ListParent>
                    <div>
                         <ul>
                              <li>
                                   <a>Parceiros</a>
                              </li>
                         </ul>
                    </div>
                    <div>
                         <ul>
                              <li>
                                   <Link>Áreas de atuação</Link>
                              </li>
                         </ul>
                    </div>
                    <div>
                         <ul>
                              <li>
                                   <Link>Serviços</Link>
                              </li>
                         </ul>
                    </div>
               </ListParent>
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
