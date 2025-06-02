import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { html } from "framer-motion/client";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  radii: {
    md: "0.75px",
  },
  colors: {
    background: "hsl(150, 30%, 98%)",
    foreground: "#173629",
    card: "hsl(150, 30%, 97%)",
    "card-foreground": "#173629",
    popover: "hsl(150, 30%, 98%)",
    "popover-foreground": "hsl(155, 40%, 15%)",
    primary: "#24a85b",
    "primary-foreground": "hsl(150, 30%, 98%)",
    secondary: "hsl(150, 30%, 92%)",
    "secondary-foreground": "hsl(155, 40%, 15%)",
    muted: "hsl(155, 20%, 92%)",
    "muted-foreground": "hsl(155, 30%, 45%)",
    accent: "hsl(140, 70%, 45%)",
    "accent-foreground": "hsl(150, 30%, 98%)",
    destructive: "hsl(0, 84.2%, 60.2%)",
    "destructive-foreground": "hsl(150, 30%, 98%)",
    border: "hsl(155, 20%, 85%)",
    input: "hsl(155, 20%, 85%)",
    ring: "hsl(145, 65%, 40%)",
  },
  styles: {
    global: {
      html: {
        overflowX: "hidden",
      },
      body: {
        bg: "background",
        color: "foreground",
      },
    },
  },
});

export default theme;
