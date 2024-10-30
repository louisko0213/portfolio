import "./styles.css";
import { Stack } from "@mui/material";
import Main from "./components/Main";
import DeskTopNav from "./components/Nav/DeskTopNav";
import MobileNav from "./components/Nav/MobileNav";

export default function App() {
  return (
    <div className="App">
      <Stack width={1} height="100vh" direction={{ xs: "column", lg: "row" }}>
        <Stack width="20%" p={5} display={{ xs: "none", lg: "block" }}>
          <DeskTopNav />
        </Stack>
        <Stack
          width={1}
          display={{ xs: "block", lg: "none" }}
          boxShadow={8}
          zIndex={1}
        >
          <MobileNav />
        </Stack>
        <Stack width={{ xs: 1, lg: "80%" }} height={1}>
          <Main />
        </Stack>
      </Stack>
    </div>
  );
}
