import styled, {css} from 'styled-components'


export const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${props => props.primary ? "white" : "palevioletred"};
    margin: 0 1em;
    padding: 0.25em 1em;
`