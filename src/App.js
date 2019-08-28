import React from "react";
import GlobalStyle from "./styles/global";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";

function App(props) {
     return (
          <React.Fragment>
               <GlobalStyle />
               <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/parceiros" component={Parceiros} />
                    <Footer />
               </BrowserRouter>
          </React.Fragment>
     );
}

const mapStateToProps = state => {
     return {
          name: state.user.name
     };
};

export default connect(mapStateToProps)(App);
