import styled, {css} from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 80px;
    top: 0;
    position: absolute;
    background-color: transparent;
    z-index: 2000;
    margin-bottom: -80px;
    display: flex;
    justify-content: space-between;
`
export const HeaderTitle = styled.div`
    color: white;
    margin-top: 7px;
    margin-left: 30px;
    font-family: 'Dancing Script', cursive;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 60px;
`
export const HeaderTitleText1 = styled.div`
    font-size: 17px;
`
export const HeaderTitleText2 = styled.div`
    font-size: 10px;
`
export const HeaderRight = styled.div`
    margin-right: 50px;
    margin-top: 20px;
`
export const HeaderButton = {
    color: 'white',
    border: '1px solid transparent',
    padding: '5px 12px 5px 12px',
    borderRadius: '20px',
    fontSize: '16px',
    textDecoration: 'none',
    transition: '200ms linear'
}

export const HeaderActive = {
    backgroundColor: '#1a237e',
    transition: '100ms linear'
}
