import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import theme from "./theme.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={AppRoutes} />
    </ChakraProvider>
  </StrictMode>
);
