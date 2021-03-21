import styled, {css} from 'styled-components'
import cardImg from './images/card.png'
import appleImg from './images/apple.png'
import paypalImg from './images/paypal.png'

export const Form = styled.form`
    width: 100%;
    z-index: 10;
`
export const InnerModalForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.dark ? "gray" : "white"};
    color: ${props => props.dark ? "black" : "white"};
    margin-top: 12px;
    margin-bottom: 20px;

    @media(max-width: 960px) {
        color: ${props => props.dark && "white"};
    }
    
`
export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CenterTextForm = styled.div`
    text-align: center;
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
`
export const Label = styled.span`
    color: ${props => props.dark ? "gray" : "white"};
    font-size: small;
    @media(max-width: 960px) {
        color: ${props => props.dark && "white"};
    }
`
export const FormSeperator = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SignUpLink = styled.span`
    color: yellow;
`
export const ForgotPasswordLink = styled.span`
    color: white;
`
export const RadioCapsule = styled.div`
    box-shadow: 1px 1px 3px 1px #aaaaaa;
    border-radius: 12px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
    cursor: pointer;
    &:hover {
        -webkit-transition: all 100ms linear;
        transition: all 100ms linear;
        -webkit-box-shadow: 2px 2px 4px 2px #757575;
        box-shadow: 2px 2px 4px 2px #757575;
        -webkit-transform: scale(1.01);
        transform: scale(1.01);
    }

    @media (max-width: 960px) {
        background-color: white;
        box-shadow: 1px 1px 3px 1px #424242;  
        &:hover {
            box-shadow: 2px 2px 4px 2px #212121;
        }
    }
`
export const RadioLeft = styled.div`
    display: flex;
    align-items: center;
`
export const RadioRight = styled.div`
    border: 1px solid rgba(81, 85, 81, 0.4);
    border-radius: 5px;
    height: 12px;
    width: 12px;
    margin-right: 20px;
    background-color: ${props => props.selected && "orange"};
    transition: all 50ms linear;
    &:hover {
        transition: all 100ms linear;
        box-shadow: 1px 1px 3px 1px #757575;
    }
`
export const CardPng = styled.img.attrs({
    src: cardImg
})`
    width: 40px;
    height: 30px;
    object-fit: contain;
    display: block;
    margin-left: 15px;
    margin-right: 10px;
`
export const ApplePng = styled.img.attrs({
    src: appleImg
})`
    width: 40px;
    height: 30px;
    object-fit: contain;
    display: block;
    margin-left: 15px;
    margin-right: 10px;
`
export const PaypalPng = styled.img.attrs({
    src: paypalImg
})`
    width: 100px;
    height: 100px;
    object-fit: contain;
    display: block;
    margin-left: 15px;
    margin-right: 10px;
`