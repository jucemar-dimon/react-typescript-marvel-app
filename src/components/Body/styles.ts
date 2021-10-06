import styled from "styled-components";

export const Container = styled.main`
    color: var(--body-font-color);
    margin: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    border: 0.1rem solid var(--marvel-border);
    border-radius: 5rem 0.5rem 0.5rem 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    height: 5rem;
    background-color: var(--marvel-header-nav);
    transition: all 0.5s;

    &:hover {
        background-color: var(--marvel-border);
        cursor: pointer;
    }

    img {
        width: 5rem;
        height: auto;
        margin: 0;
        clip-path: circle();
        background-position: center;
    }
`;
