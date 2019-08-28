import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

import { Container, Contact, ContactTitle, ContactCard } from "./styles";

import help from "../../img/help.svg";

export default function Contato() {
     return (
          <Container>
               <Contact>
                    <img
                         src={help}
                         style={{
                              width: "80px",
                              display: "block",
                              margin: "auto"
                         }}
                    ></img>
                    <ContactTitle>
                         Tem alguma dúvida? Fale com a gente.
                    </ContactTitle>
                    <ContactCard>
                         <FiPhone
                              size="40px"
                              style={{ display: "block", margin: "auto" }}
                         ></FiPhone>
                         <p>(xx) xxxxx-xxxx</p>
                         <FiMail
                              size="40px"
                              style={{ display: "block", margin: "auto" }}
                         ></FiMail>
                         <p>suporte@quickploy.com.br</p>
                    </ContactCard>
               </Contact>
          </Container>
     );
}
