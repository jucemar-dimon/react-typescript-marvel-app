import styled from "styled-components";

interface IContainerProps {
    display: boolean;
}

export const Container = styled.main<IContainerProps>`
    color: var(--body-font-color);
    margin: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;

    div.result-list {
        padding: 1rem;
        border-radius: 0.5rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: var(--marvel-header-nav);

        div.loading-list {
            font-size: 1rem;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            color: white;
            background: #ec1d2499;

            height: 10rem;
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

    div.search-form {
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: 1rem;

        justify-content: space-between;
        background: var(--marvel-header-nav);
        width: 100%;
        height: 6rem;
        position: relative;

        div.search-field {
            padding: 1rem;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: stretch;

            flex: 1;

            input {
                width: 100%;
                padding: 1rem;
                color: white;
                border-radius: 0.5rem;
                border: 0.1rem solid var(--marvel-border);
                background: var(--marvel-header-nav);
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
