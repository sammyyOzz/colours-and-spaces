import styled, {css} from 'styled-components';
import googleImg from './images/google.png';

export const Button = styled.button`
    background-color: ${props => props.primary && "#d500f9"}
                      ${props => props.secondary && "#1976d2"}
                      ${props => props.clear && "white"}
                      ${props => props.warning && "#ffeb3b"};
    border-radius: 20px;
    color: ${props => props.primary && "white"}
           ${props => props.secondary && "white"}
           ${props => props.clear && "black"}
           ${props => props.warning && "white"};
    padding: 6px 30px 6px 30px;
    height: 40px;
    border: none;
    width: ${props => props.fullWidth && "100%"};
    margin-bottom: ${props => props.mb1 && "15px"} 
                   ${props => props.mb2 && "25px"}
                   ${props => props.mb3 && "70px"};
    cursor: pointer;
`
export const AboutButton = styled(Button)`
    position: absolute;
    bottom: 30%;
    left: 13%;
    padding: 6px 40px 6px 40px;
`
export const GooglePng = styled.img.attrs({
    src: googleImg
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
`