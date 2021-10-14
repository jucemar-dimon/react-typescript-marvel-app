import styled from "styled-components";

interface IContainerProps {
    display: boolean;
}

export const Container = styled.main<IContainerProps>`
    color: var(--body-font-color);
    margin-left: auto;
    margin-right: auto;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;

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
            button {
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

    div.result-list {
        padding: 0.5rem;
        height: 41rem;
        border: 0.1rem solid var(--marvel-border);

        border-radius: 0.5rem;
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #000000cc;

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
            display: ${(props) => (props.display ? "flex" : "none")};
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
