import styled, {css} from 'styled-components'
import wave from './images/Path 14@1X.png' 
import purpleBackground from './images/BACKGROUND@1X.png'
import bulbImg from './images/light_bulb.png';


export const Wrapper = styled.section`
    position: relative;
    background: papayawhip;
`
export const Background = styled.div`
    height: 120vh;
    width: 100%;
    background-image: url(${purpleBackground});
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
`
export const WaveBottom = styled.div`
    bottom: 0;
    background-image: url(${wave});
    background-size: cover;
    width: 100%;
    height: 80px;
    position: absolute;
`
export const LightBulb = styled.div`
    background-image: url(${bulbImg});
    background-size: cover;
    height: 496px;
    width: 543px;
    position: absolute;
    top: 8%;
    right: 0;
    z-index: 1;
    transform: scale(0.7);
`
export const Title = styled.div`
    color: white;
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 13%;
    height: 150px;
    width: 38%;
    font-family: 'Brygada 1918', serif;
`
export const TitleText1 = styled.h1`
    font-size: 80px;
    color: white;
`
export const TitleLine2 = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -55px;
`
export const TitleText2 = styled.span`
    font-size: 30px;
    color: white;
    margin-right: 5px;
`
export const TitleText3 = styled.span`
    font-size: 80px;
    color: white;
`


