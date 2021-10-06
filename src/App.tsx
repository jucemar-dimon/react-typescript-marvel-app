import Body from "./components/Body";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

export function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Body />
        </>
    );
}
