import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import { Provider } from 'react-redux';
import store from './store/store';

render(
  <Provider store={store}>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
