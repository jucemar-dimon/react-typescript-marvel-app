import styled from "styled-components";

export const Container = styled.header`
    color: var(--body-font);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-height: 3rem;
    margin-top: 1rem;
    border-radius: 3rem;
    margin: 2rem;

    h1 {
        margin-left: -1rem;
        text-transform: uppercase;
        font-weight: 700;
    }

    img {
        min-height: 100px;
    }
`;
