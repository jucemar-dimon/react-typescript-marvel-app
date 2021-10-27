import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    button.btn-next {
        width: 4.5rem;
        height: 2rem;
        border: none;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        color: var(--body-font-color);
        background-color: var(--marvel-red);
    }

    button.btn-prev {
        width: 4.5rem;
        height: 2rem;
        border: none;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        color: var(--body-font-color);
        background-color: var(--marvel-red);
    }

    button.btn-page {
        width: 2rem;
        height: 2rem;
        border: none;
        color: var(--body-font-color);
        background-color: var(--marvel-red);
    }
`;
