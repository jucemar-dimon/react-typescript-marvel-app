import styled from "styled-components";

interface IContainerProps {
    isLoading: boolean;
}

export const Container = styled.main<IContainerProps>`
    color: var(--body-font-color);
    margin-left: auto;
    margin-right: auto;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 25%;
    padding-right: 25%;
    width: 100%;

    @media (max-width: 1080px) {
        padding-left: 15%;
        padding-right: 15%;
    }
    @media (max-width: 720px) {
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (max-width: 480px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    div.search-form {
        border: 0.1rem solid var(--marvel-border);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: stretch;

        justify-content: space-between;
        background: var(--background);
        width: 100%;
        height: 4.4rem;

        position: relative;

        div.search-field {
            padding: 0.5rem;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;

            input {
                height: 3rem;
                width: 100%;
                padding: 0.5rem;
                color: white;
                border-radius: 0.5rem;
                border: 0.1rem solid var(--marvel-border);
                background-color: var(--marvel-header-nav);
            }
            a {
                position: absolute;
                top: 0;
                right: 1rem;
                bottom: 0;
                background: transparent;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    div.result-area {
        padding: 0.5rem;
        height: 43rem;
        border: 0.1rem solid var(--marvel-border);
        border-radius: 0.5rem;
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: relative;
        background-color: #000000cc;

        div.total-results {
            font-size: 0.75rem;
            font-weight: bold;
            width: 100%;
            line-height: 1.5rem;
            margin: 0.5rem 0;
            display: flex;
            justify-content: flex-end;
        }

        div.result-list {
            gap: 0.5rem;
            display: flex;
            flex-direction: column;

            position: relative;

            div.loading-list {
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                justify-content: center;
                align-items: center;
                color: white;
                background: #ec1d2499;

                height: 100%;
                position: absolute;
                z-index: 10;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                margin-left: auto;
                margin-right: auto;
                display: ${(props) => (props.isLoading ? "flex" : "none")};
            }
        }
    }
`;

export const Card = styled.div`
    border: 0.1rem solid var(--marvel-border);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    padding: 0;

    background: var(--marvel-header-nav);
    transition: background 0.5s;

    gap: 1rem;

    &:hover {
        background-color: var(--marvel-border);
        cursor: pointer;
    }

    div {
        width: 3rem;
        height: 3rem;
        overflow: hidden;

        img {
            height: 3rem;
            margin: 0;
        }
    }

    div.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;
    }
`;
