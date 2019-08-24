import React from "react";
import GlobalStyle from "./styles/global";
import { connect } from "react-redux";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

function App(props) {
     return (
          <React.Fragment>
               <GlobalStyle />
               <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
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
