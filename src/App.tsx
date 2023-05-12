import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// ===================== mui =====================
import { CircularProgress, ThemeProvider } from "@mui/material";
import theme from "./theme/mainTheme";

// ===================== store =====================
import store from "./store";

// ===================== layout =====================
import Layout from "./app/layout";
import { Provider } from "react-redux";

// ===================== pages =====================

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
