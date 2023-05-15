import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// ===================== dnd =====================
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// ===================== mui =====================
import { ThemeProvider } from "@mui/material";
import theme from "./theme/mainTheme";

// ===================== store =====================
import store from "./store";

// ===================== boundary =====================
import ErrorBoundary from "./app/components/error-boundary.component";

// ===================== routes =====================
import AppRoutes from "./app.routes";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </DndProvider>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
