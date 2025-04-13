import "./App.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <h1>연락처 앱</h1>
      <Grid
        container
        // spacing={6}
        sx={{
          px: 2,
          justifyContent: "center",
          alignItems: "center",
          // border: "3px solid purple",
          flexDirection: { xs: "column", md: "row" }, 
          gap: { xs: 6, md: 12 }
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            // border: "3px solid green",
            width: { xs: "100%", md: "auto" }
          }}
        >
          <ContactForm />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            // border: "3px solid orange",
          }}
        >
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
