import styled from 'styled-components';

export const OptionList = styled.ul`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const OptionButton = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
    background-color: beige;
    transition: background-color 250ms ease-in;

    :hover {
        background-color: violet;
    }
`;