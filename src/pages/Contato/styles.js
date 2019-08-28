import styled from "styled-components";

export const Container = styled.div`
     padding: 15vh 10vw;
`;

export const Contact = styled.div`
     min-height: calc(100vh - 15vh - 80px);
`;

export const ContactTitle = styled.h3`
     font-size: 30px;
     font-weight: 600;
     margin-top: 40px;
     margin-bottom: 80px;
     text-transform: capitalize;
     text-align: center;
`;

export const ContactCard = styled.div`
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
     border: 1px solid rgba(0, 0, 0, 0.05);
     border-radius: 20px;
     display: flex;
     flex-direction: column;
     align-content: center;
     text-align: center;
     margin: auto;
     padding: 50px 30px;
     max-width: 30vw;
     p {
          font-size: 18px;
          font-weight: 600;
          margin: 10px 0 40px 0;
     }
     p:last-child {
          margin-bottom: 0;
     }
     @media screen and (max-width: 1100px) {
          max-width: 980vw;
     }
`;
