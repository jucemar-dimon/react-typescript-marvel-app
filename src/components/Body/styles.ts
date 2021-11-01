import styled from "styled-components";

export const Container = styled.main`
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
            height: 100%;
            position: relative;

            div.loading-list {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #000000aa;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                position: absolute;
            }
        }
    }
`;

export const Card = styled.div`
    border: 0.1rem solid var(--marvel-border);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0;
    background: var(--marvel-header-nav);
    transition: background 0.5s;
    gap: 1rem;
    position: relative;

    &:hover {
        background-color: var(--marvel-border);
        cursor: pointer;
    }

    div {
        height: 3rem;
        width: 3rem;
        overflow: hidden;
        img {
            margin: 0;
            width: 5rem;
        }
    }
    strong {
        flex-grow: 1;
    }

    small {
        text-align: right;
        font-size: 0.65rem;
        margin: 0.5rem;
        background-color: var(--marvel-border);
        padding: 0.5rem;
    }
`;
