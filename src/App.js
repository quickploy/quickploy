import React from "react";
import GlobalStyle from "./styles/global";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Parceiros from "./pages/Parceiros";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Areas from "./pages/Areas";

function App(props) {
     return (
          <React.Fragment>
               <GlobalStyle />
               <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/parceiros" component={Parceiros} />
                    <Route path="/servicos" component={Servicos} />
                    <Route path="/contato" component={Contato} />
                    <Route path="/areas-de-atuacao" component={Areas} />
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
