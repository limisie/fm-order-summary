import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../assets/styles/GlobalStyle";
import {theme} from "../assets/styles/theme";
import MainTemplate from "../components/templates/MainTemplate";
import OrderSummary from "../components/organisms/OrderSummary";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <MainTemplate>
                <OrderSummary/>
            </MainTemplate>
        </ThemeProvider>
    );
}

export default App;
