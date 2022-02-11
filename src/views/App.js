import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../assets/styles/GlobalStyle";
import {theme} from "../assets/styles/theme";
import MainTemplate from "../components/templates/MainTemplate";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <MainTemplate>

            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
