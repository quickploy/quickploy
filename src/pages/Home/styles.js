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
     /* background-attachment: fixed; */
     /* padding-top: 60px; */
     background-color: ${colors.primary};
     background-image: url(${box});
     background-position: 75% 47%;
     background-repeat: no-repeat;
     background-size: 15%;
     display: grid;
     grid-column-gap: 10px;
     grid-template-columns: repeat(15, 1fr);
     height: 100vh;
     padding: 0 200px;
     animation: BoxLoad 1s linear;
     @media screen and (max-width: 1023px) {
          animation: BoxLoadMobile 1s linear;
          background-position: 10% 80%;
          background-size: 30%;
          grid-column-gap: 0;
          height: 90vh;
          padding: 0 30px;
     }
     @keyframes BoxLoad {
          0% {
               background-position: 95% 47%;
          }
          100% {
               background-position: 75% 47%;
          }
     }
     @keyframes BoxLoadMobile {
          0% {
               background-position: 60% 80%;
          }
          100% {
               background-position: 10% 80%;
          }
     }
`;

export const LeftHero = styled.div`
     align-self: center;
     grid-column: 1/10;
     @media screen and (max-width: 1023px) {
          /* text-align: center; */
          align-self: initial;
          grid-column-end: 13;
          padding-top: 100px;
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
     @media screen and (max-width: 1023px) {
          h1 {
               font-size: 45px;
               line-height: 40px;
          }
          h2 {
               font-size: 16px;
          }
     }
`;

export const Button = styled.button`
     /* background-color: ${colors.secondary}; */
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
          transition: ease .4s;
     }
     a:hover {
          color: white;
     }
     @media screen and (max-width: 1023px) {
          border-radius: 50px;
          /* background-color: transparent; */
          /* border: 1px solid ${colors.primary}; */
          height: 50px;
          a {
               font-size: 14px;
          }
     }
`;

export const Arrow = styled.div`
     position: absolute;
     top: 90vh;
     left: calc(50vw - 20px);
     cursor: pointer;
     @media screen and (max-width: 1023px) {
          display: none;
     }
`;
