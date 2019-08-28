import styled from "styled-components";

const colors = {
     primary: "#00d5ff",
     secondary: "#f53b8c",
     terciary: "#1b2c39"
};

export const Container = styled.div``;

export const ClientsFAQ = styled.div`
     background-color: rgb(250, 250, 250);
     position: relative;
     min-height: 100vh;
     display: grid;
     grid-template-columns: 1fr, 2fr;
     grid-template-rows: repeat(13, 1fr);
     grid-column-gap: 25px;
     grid-row-gap: 10px;
     padding: 20vh 8vw 50px 15vw;
     img {
          visibility: ${props => (props.animateMobile ? "" : "hidden")};
          animation: ${props =>
               props.animateMobile ? "ImageOverflowX 1.2s" : ""};
     }
     @keyframes ImageOverflowX {
          0% {
               opacity: 0.3;
               transform: translateX(-100%);
          }
          100% {
               opacity: 1;
               transform: translateX(0%);
          }
     }
`;

export const ClientsFAQTitle = styled.div`
     font-size: 1.5vmax;
     font-weight: 600;
     text-transform: capitalize;
     grid-area: 1 / 1 / 2 / 2;
     @media screen and (max-width: 1100px) {
          font-size: 2vmax;
     }
`;

export const ClientsFAQList = styled.div`
     grid-area: 1 / 2 / 13 / 3;
     h3 {
          font-size: 1.2vmax;
          font-weight: 600;
          margin-bottom: 10px;
     }
     p {
          font-size: 1vmax;
          margin-bottom: 30px;
     }
     @media screen and (max-width: 1100px) {
          h3 {
               font-size: 2vmax;
          }
          p {
               font-size: 1.5vmax;
          }
     }
`;

export const ServicesWrapper = styled.div`
     min-height: 100vh;
     padding: 10vh 10vw 0 10vw;
`;

export const ServicesTitle = styled.h2`
     text-align: center;
     text-transform: capitalize;
     font-size: 40px;
     font-weight: 600;
     padding-top: 100px;
`;

export const ServicesList = styled.ul`
     margin-top: 150px;
     display: flex;
     justify-content: space-around;
     a {
          text-decoration: none;
          color: ${colors.terciary};
     }
     li {
          transition: 0.5s ease;
          padding: 0 40px;
          max-width: 30vw;
     }
     li:hover {
          transform: scale(1.05);
     }
     h4 {
          text-transform: capitalize;
          font-size: 20px;
          font-weight: 600;
          margin-top: 30px;
     }
     p {
          font-size: 13px;
          font-weight: 600;
          margin-top: 10px;
     }
     @media screen and (max-width: 1100px) {
          flex-direction: column;
          margin-top: 0;
          padding-bottom: 20vh;
          li {
               margin-top: 80px;
               max-width: 80vw;
          }
     }
`;

export const Button = styled.button`
     border: 1px solid ${colors.terciary};
     color: ${colors.terciary};
     cursor: pointer;
     border-radius: 20px;
     padding: 3px 10px;
     font-size: 14px;
     font-weight: 600;
     text-transform: capitalize;
`;

export const ButtonWrapper = styled.div`
     button {
          transition: 0.5s ease;
     }
     button:hover {
          color: ${colors.secondary};
     }
`;
