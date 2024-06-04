import React, { useState } from "react";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import AddForm from "./components/AddForm";

import { Box, Stack, createTheme } from "@mui/material";

import "./App.css";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <NavBar></NavBar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode}/>
          <Feed />
          <RightBar />
        </Stack>
        <AddForm />
      </Box>
    </ThemeProvider>
  );
}

export default App;
