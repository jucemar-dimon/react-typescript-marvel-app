import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0.5rem;
    flex-direction: row;

    button {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 4.5rem;
        background: transparent;
        border: none;

        span {
            font-size: 0.65rem;
            color: white;
        }
    }
`;
