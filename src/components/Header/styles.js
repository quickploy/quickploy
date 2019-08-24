import styled from "styled-components";

const colors = {
     primary: "#00d5ff",
     secondary: "#f53b8c",
     terciary: "#1b2c39"
};

export const Container = styled.div`
background-color: ${props =>
     props.navcolor ? `${colors.primary}` : "transparent"};
          transition: ease .3s;
     box-shadow: ${props =>
          props.navcolor ? "0 1px 15px -2px rgba(33, 33, 33, 0.1)" : ""};
     /* background-color: ${colors.terciary}; */
     
     align-items: center;
     color: ${colors.primary};
     display: flex;
     height: 60px;
     padding-left: 40px;
     padding-right: 100px;
     position: fixed;
     text-transform: capitalize;
     width: 100%;
     a {
          display: block;
          text-decoration: none;
     }

     img {
          display: block;
          width: 190px;
     }
     @media screen and (max-width: 1023px) {
          height: 80px;
          padding: 0 20px;
          justify-content: space-between;
     }
`;

export const MenuEnd = styled.div`
     margin-left: 70px;
     width: 100%;
     a {
          -webkit-transition: color 0.5s;
          align-items: center;
          color: ${colors.terciary};
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-left: 15px;
          margin-right: 15px;
          text-align: center;
          text-decoration: none;
          text-transform: capitalize;
     }
     a:hover {
          -webkit-transition: color 0.5s;
          color: white;
          transition: all 0.5s;
     }
     ul {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          list-style-type: none;
     }
     @media screen and (max-width: 1023px) {
          background-color: rgba(0, 213, 255, 0.97);
          height: 100vh;
          margin-left: 20px;
          position: absolute;
          right: 0;
          top: ${props => (props.open ? "0" : "80")};
          width: 100%;
          transform: ${props =>
               props.open ? "translateX(0 %)" : "translateX(100%)"};
          transition: 0.5s ease;
          overflow-x: hidden;
          a {
               color: ${colors.terciary};
               font-size: 27px;
               font-weight: 800;
               padding: 10px 20px;
          }
          ul {
               align-items: flex-start;
               display: flex;
               flex-direction: column;
               margin-top: 50px;
          }
          @keyframes navLinkFade {
               0% {
                    opacity: 0.3;
                    transform: translateX(15px);
               }
               100% {
                    opacity: 1;
                    transform: translateX(0px);
               }
          }
     }
`;

export const Burger = styled.div`
     position: relative;
     display: none;
     z-index: 1000;
     @media screen and (max-width: 1023px) {
          display: block;
     }
`;

export const Line = styled.div`
     transition: all 0.5s ease;
     width: 20px;
     height: 3.5px;
     background-color: ${colors.terciary};
     margin: 3px;
`;

export const Timer = styled.div`
     @keyframes navLinkLoad {
          0% {
               opacity: 0.2;
               transform: translatey(-2px);
          }
          100% {
               opacity: 1;
               transform: translatey(0px);
          }
     }
     li {
          @media screen and (max-width: 1023px) {
               animation: ${props =>
                    props.open
                         ? `navLinkFade ${props.index / 4 +
                                1.0}s ease forwards 0s`
                         : ""};
          }
          animation: ${props =>
               props.open
                    ? ""
                    : `navLinkLoad ${props.index / 4 + 1}s ease forwards 0s`};
     }
`;

export const Button = styled.button`
     a {
          color: ${colors.terciary};
          text-transform: uppercase;
          -webkit-transition: color 0.5s;
     }
     a:hover {
          color: white;
          -webkit-transition: color 0.5s;
     }
     /* background-color: ${colors.secondary}; */
     align-content: center;
     background-color: transparent;
     border-radius: 30px;
     border: 2px solid ${colors.terciary};
     font-weight: 600;
     height: 30px;
     margin-left: 15px;
     margin-right: 15px;
     text-align: center;
     text-decoration: none;
     @media screen and (max-width: 1023px) {
          border-radius: 50px;
          /* background-color: transparent; */
          /* border: 1px solid ${colors.primary}; */
          height: 50px;
          margin-top: 20px;
          margin-left: 30px;
          a {
               font-size: 20px;
          }
     }
`;

export const SeparadorMobile = styled.div`
     display: none;
     position: relative;
     transition: all 0.5s ease;
     width: 35px;
     height: 3.5px;
     background-color: white;
     @media screen and (max-width: 1023px) {
          display: ${props => (props.open ? "block" : "")};
          margin-left: 35px;
          margin-top: 30px;
          margin-bottom: 30px;
     }
`;
