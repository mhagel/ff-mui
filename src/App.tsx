import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Billing } from "./components/Billing";
import { theme } from "./theme/theme";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Billing />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
