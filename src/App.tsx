import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// ===================== mui =====================
import { ThemeProvider } from "@mui/material";
import theme from "./theme/mainTheme";

// ===================== store =====================
import store from "./store";

// ===================== boundary =====================
import ErrorBoundary from "./app/components/error-boundary.component";
import AppRoutes from "./app.routes";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
