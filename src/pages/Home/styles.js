import styled from "styled-components";
import box from "../../img/box.svg";
import pin from "../../img/location-pin.svg";

const colors = {
     primary: "#00d5ff",
     secondary: "#f53b8c",
     terciary: "#1b2c39"
};

export const Container = styled.div``;

export const Hero = styled.section`
     background-color: ${colors.primary};
     background-image: url(${box});
     background-position: 75% 47%;
     background-repeat: no-repeat;
     background-size: 10vw;
     display: grid;
     grid-column-gap: 10px;
     grid-template-columns: repeat(15, 1fr);
     height: 100vh;
     padding: 0 200px;
     animation: BoxLoad 1s linear;
     @media screen and (max-width: 1100px) {
          /* animation: BoxLoadMobile 2s linear; */
          background-position: 10% 82%;
          background-size: 0;
          grid-column-gap: 0;
          height: 90vh;
          min-height: 110vw;
          padding: 7vw 9vw;
     }
     @keyframes BoxLoad {
          0% {
               background-position: 95% 47%;
          }
          100% {
               background-position: 75% 47%;
          }
     }
     /* @keyframes BoxLoadMobile {
          0% {
               background-position: 100% 82%;
          }
          100% {
               background-position: 10% 82%;
          }
     } */
`;

export const LeftHero = styled.div`
     align-self: center;
     grid-column: 1/10;
     @media screen and (max-width: 1100px) {
          align-self: initial;
          grid-column-end: 13;
          padding-top: 15vh;
     }
`;

export const Phrase = styled.div`
     h1 {
          color: white;
          font-weight: 650;
          font-size: 60px;
          line-height: 70px;
     }
     h2 {
          color: white;
          font-size: 17px;
          font-weight: 600;
          padding-top: 17px;
     }
     @media screen and (max-width: 1100px) {
          h1 {
               font-size: 10vw;
               line-height: 10vw;
          }
          h2 {
               font-size: 4vw;
          }
     }
`;

export const Button = styled.button`
     align-content: center;
     background-color: transparent;
     border-radius: 30px;
     border: 2px solid ${colors.terciary};
     height: 40px;
     margin-top: 25px;
     padding: 0px 10px;
     text-align: center;
     text-decoration: none;
     text-transform: uppercase;
     a {
          font-weight: bold;
          color: ${colors.terciary};
          font-size: 17px;
          transition: ease 0.4s;
     }
     a:hover {
          color: white;
     }
     @media screen and (max-width: 1100px) {
          border-radius: 50px;
          height: 10vw;
          a {
               font-size: 4vw;
          }
     }
`;

export const Arrow = styled.div`
     cursor: pointer;
     position: absolute;
     top: 90vh;
     left: calc(50vw - 20px);
     @media screen and (max-width: 1100px) {
          display: none;
     }
`;

export const GlobalWrapper = styled.div`
     padding-bottom: 80px;
     min-height: 100vh;
`;

export const TituloFuncionamento = styled.div`
     color: ${colors.terciary};
     padding-top: 100px;
     font-size: 40px;
     font-weight: 600;
     text-transform: capitalize;
     text-align: center;
     @media screen and (max-width: 1100px) {
          padding-top: 40px;
          font-size: 6vmax;
     }
`;

export const Funcionamento = styled.div`
     animation: ${props => (props.animate ? "WrapperLoad 0.8s" : "")};
     display: ${props => (props.animate ? "flex" : "none")};
     justify-content: space-between;
     padding-top: calc(30vh - 160px);
     text-align: center;
     padding-left: 8vw;
     padding-right: 8vw;
     @media screen and (max-width: 1100px) {
          flex-direction: column;
          padding-top: 40px;
          div:not(:first-child) {
               margin-top: 40px;
          }
     }
     @keyframes WrapperLoad {
          0% {
               opacity: 0.1;
               transform: translateX(-20%);
          }
          100% {
               opacity: 1;
               transform: translateX(0);
          }
     }
`;

export const Wrapper = styled.div`
     border-radius: 5px;
     border: 1px solid rgba(0, 0, 0, 0.05);
     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
     height: 45vh;
     padding: 30px;
     margin: 50px;
     max-width: 40vw;
     h3 {
          color: black;
          margin-top: 5vh;
          font-size: 15px;
     }
     @media screen and (max-width: 1100px) {
          margin: 0;
          max-width: 90vw;
          height: 70vmin;
          max-height: 400px;
          h3 {
               margin-top: 5vmax;
               font-size: 3.1vmin;
          }
     }
`;

export const PartnersWrapper = styled.div`
     background-color: rgb(250, 250, 250);
     padding-left: 100px;
     padding-right: 100px;
     padding-top: 100px;
     padding-bottom: 40px;
     min-height: 50vh;
     @media screen and (max-width: 1100px) {
          padding-top: 3vh;
          padding-left: 3vw;
          padding-right: 3vw;
     }
`;

export const PartnersTitle = styled.div`
     color: ${colors.terciary};
     font-size: 40px;
     font-weight: 600;
     text-align: center;
     text-transform: capitalize;
     @media screen and(max-width: 1100px) {
          font-size: 6vmax;
     }
`;

export const PartnersSubTitle = styled.div`
     color: ${colors.terciary};
     font-size: 18px;
     justify-content: center;
     line-height: 40px;
     margin: auto;
     max-width: 60vw;
     padding-top: 40px;
     text-align: justify;
`;

export const PartnersItems = styled.div`
     margin-top: 20px;
     display: flex;
     justify-content: space-around;
     margin-left: 100px;
     margin-right: 100px;
     padding: 30px;
     div {
          max-width: 25vw;
     }
     a {
          padding: 5px 0px;
     }
     a:hover {
          color: white;
          filter: brightness(80%);
     }
     @media screen and (max-width: 1100px) {
          flex-direction: column;
          align-items: center;
          margin-left: 2vmax;
          margin-right: 2vmax;
          padding: 0;
          div {
               max-width: 80vmax;
          }
     }
`;

export const FirstPartnersItem = styled.div`
     text-align: center;
     @media screen and (max-width: 1100px) {
     }
`;

export const SecondPartnersItem = styled.div`
     text-align: center;
     @media screen and (max-width: 1100px) {
          margin-top: 60px;
     }
`;

export const Separator = styled.div`
     height: 1px;
     width: 10vw;
     margin: auto;
     background-color: rgba(0, 0, 0, 0.1);
     margin-bottom: 15px;
`;

export const PartnersButton = styled.button`
     background-color: ${colors.secondary};
     border: 1px solid ${colors.terciary};
     border-radius: 20px;
     cursor: pointer;
     padding: 5px 20px;
     font-size: 15px;
     font-weight: 600;
     color: white;
     text-decoration: none;
     text-transform: uppercase;
     transition: 0.5s ease;
`;

export const Helper = styled.div`
     margin-top: 75px;
     @media screen and (max-width: 1100px) {
          margin-top: 25px;
     }
`;
