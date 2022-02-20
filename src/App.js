import Header from "./common/header";
import Home from "./home";
import Detail from "./detail";
import store from "./store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
