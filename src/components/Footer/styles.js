import styled from "styled-components";

const colors = {
     primary: "#00d5ff",
     secondary: "#f53b8c",
     terciary: "#1b2c39"
};

export const Container = styled.div`
     background-color: ${colors.terciary};
     padding: 50px 250px 0px 250px;
     @media screen and (max-width: 1100px) {
          padding: 3vh 7vw 0 7vw;
     }
`;

export const ListParent = styled.div`
     display: flex;
     font-size: 1.1vmax;
     font-weight: 600;
     justify-content: space-between;
     a {
          text-transform: capitalize;
          color: white;
          text-decoration: none;
          transition: 0.5s ease;
     }
     a:hover {
          color: ${colors.secondary};
     }
     li {
          margin-top: 15px;
     }
     @media screen and (max-width: 1100px) {
          font-size: 1.5vmax;
     }
`;

export const Foot = styled.div`
     padding-top: 50px;
     display: flex;
     justify-content: space-between;
     align-content: center;
     align-items: center;
     padding-bottom: 4vh;
     ul {
          display: flex;
          justify-content: flex-end;
          list-style-type: none;
     }
     li:not(:first-child) {
          margin-left: 20px;
     }
     p {
          color: white;
          font-weight: 600;
     }
     a {
          color: white;
          transition: 0.5s ease;
     }
     a:hover {
          color: ${colors.secondary};
     }
`;
