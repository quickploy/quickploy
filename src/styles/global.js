import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,600&display=swap');
* {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
}

body {
     font-family: 'Montserrat', sans-serif;
     color: #333;
     -webkit-font-smoothing: antialiased !important;
}

ul {
     list-style: none;
}
`;
