import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        background: transparent;
        border: none;
        padding: 0.5rem;
        span {
            font-size: 0.65rem;
            color: white;
        }
    }
`;
