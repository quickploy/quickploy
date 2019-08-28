import styled from "styled-components";

const colors = {
     primary: "#00d5ff",
     secondary: "#f53b8c",
     terciary: "#1b2c39"
};

export const Container = styled.div``;

export const PartnersWrapper = styled.div`
     background-color: rgb(250, 250, 250);
     padding-left: 100px;
     padding-right: 100px;
     padding-top: 160px;
     padding-bottom: 40px;
     min-height: 50vh;
     @media screen and (max-width: 1100px) {
          padding-top: 80px;
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

export const PartnersFAQ = styled.div`
     position: relative;
     min-height: 100vh;
     display: grid;
     grid-template-columns: 1fr, 2fr;
     grid-template-rows: repeat(13, 1fr);
     grid-column-gap: 25px;
     grid-row-gap: 10px;
     padding: 20vh 8vw 50px 15vw;
     img {
          visibility: ${props => (props.animate ? "" : "hidden")};
          animation: ${props => (props.animate ? "ImageOverflow 1.2s" : "")};
     }
     @keyframes ImageOverflow {
          0% {
               opacity: 0.3;
               transform: translateY(-10%);
          }
          50% {
               opacity: 1;
               transform: translateY(20%);
          }
          100% {
               opacity: 1;
               transform: translateY(0%);
          }
     }
`;

export const PartnersFAQTitle = styled.div`
     font-size: 1.5vmax;
     font-weight: 600;
     text-transform: capitalize;
     grid-area: 1 / 1 / 2 / 2;
     @media screen and (max-width: 1100px) {
          font-size: 2vmax;
     }
`;

export const PartnersFAQList = styled.div`
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

export const Arrow = styled.div`
     position: absolute;
     left: calc(50vw - 20px);
     bottom: 5vh;
     cursor: pointer;
`;
