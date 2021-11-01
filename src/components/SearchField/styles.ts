import styled from "styled-components";

export const Container = styled.div`
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
`;
