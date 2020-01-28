import styled from 'styled-components';

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--lightBlue);
    border-color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--lightBlue);
    color: ${props => props.cart && 'var(--mainYellow)'};
    border-radius: 0.5 rem;
    paddind: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2 rem 0.5 rem 0.2 rem 0;
    transitional: 0.5s ease-in-out;
    &:hover{
       background: var(--lightBlue);
       color: var(--mainBlue);
       color: ${props => props.cart && 'var(--mainWhite)'};
       background: ${props => props.cart && 'var(--mainYellow)'};
   
       
    }   
    &focus{
       outline: none;
    } `

    export default ButtonContainer;

    