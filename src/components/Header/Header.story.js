import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Navbar from "react-bulma-components/lib/components/navbar";
import "../../css/bulma.css";
import "../../css/font.css";
// import GoogleFontLoader from "react-google-font-loader";

const logo = require("../../img/logos/bluewhite.png");

const colors = {
     Default: "",
     primary: "primary",
     secondary: "secondary",
     terciary: "terciary",
     info: "info",
     danger: "danger",
     warning: "warning",
     success: "success",
     white: "white",
     black: "black",
     light: "light",
     dark: "dark",
     link: "link"
};

const stories = storiesOf("components/Header", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => {
     return (
          <Navbar
               style={{
                    maxHeight: "3.5rem",
                    fontWeight: 600,
                    fontFamily: "'Montserrat'"
               }}
               color={select("Color", colors)}
               fixed={select("Fixed", {
                    default: null,
                    top: "top",
                    bottom: "bottom"
               })}
               active={boolean("Active", false)}
          >
               <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                         <img
                              src={logo}
                              alt="Quickploy"
                              width="190"
                              height="60"
                         />
                    </Navbar.Item>
                    <Navbar.Burger />
               </Navbar.Brand>
               <Navbar.Menu>
                    <Navbar.Container position="end">
                         <Navbar.Item onClick={action("clicked")}>
                              At the end
                         </Navbar.Item>
                    </Navbar.Container>
               </Navbar.Menu>
          </Navbar>
     );
});
