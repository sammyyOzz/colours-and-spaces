import styled, {css} from 'styled-components'

export const Form = styled.form`
    width: 100%;
`
export const Input = styled.input`
    width: 100%;
    border: 1px solid red;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    margin-top: 12px;
    margin-bottom: 20px;
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
    color: white;
    font-size: small;
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