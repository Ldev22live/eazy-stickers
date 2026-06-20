import styled from 'styled-components';


const EazyButton = styled.button<{ $primary?: boolean }>`
    background-color: ${(props) => (props.$primary ? '#5b21b6' : 'transparent')};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 0px auto;

    &:hover {
        background-color: ${(props) => (props.$primary ? '#ffcc00' : 'transparent')};
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #5b21b6;
    }
`;

export default EazyButton;