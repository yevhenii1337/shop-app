import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import SnackbarProvider from "react-simple-snackbar";

render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
