import styled, {css} from 'styled-components'
import wave from './images/Path 14@1X.png' 
import purpleBackground from './images/BACKGROUND@1X.png'
import bulbImg from './images/light_bulb.png';
import gridImg1 from './images/undraw_referral_4ki4@1X.png';
import gridImg2 from './images/undraw_Mobile_pay_re_sjb8@1X.png'
import gridImg3 from './images/undraw_wallet_aym5 (1)@1X.png'


export const Wrapper = styled.section`
    position: relative;
`
export const CenterText = styled.section`
    position: relative;
    text-align: center;
    margin-top: 120px;
    font-size: 40px;
    margin-bottom: 70px;
    width: 100%;
`
export const Background = styled.div`
    height: ${props => props.screenHeight ? "100vh" : "120vh"};
    width: 100%;
    background-image: url(${purpleBackground});
    position: relative;
    overflow: hidden;
`
export const FullScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`
export const TitleWrapper = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const WaveBottom = styled.div`
    bottom: 0;
    background-image: url(${wave});
    background-size: cover;
    width: 100%;
    height: 80px;
    position: absolute;
    z-index: 20;
`
export const LightBulb = styled.div`
    background-image: url(${bulbImg});
    background-size: cover;
    height: 496px;
    width: 543px;
    margin-left: 100px;
    z-index: 1;
    transform: scale(0.7);

    @media (max-width: 1280px) {
        display: none;
    }
    
`
export const Title = styled.div`
    padding-bottom: 100px;
    color: white;
    z-index: 2;
    height: 200px;
    width: 500px;
    font-family: 'Brygada 1918', serif;

    @media (max-width: 600px) {
        transform: scale(0.7);
    }
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
export const CardRow = styled.div`
    height: auto;
`
export const CardBox = styled.div`
    // background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 80px;
`
export const CardImg = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    align-items: flex-end;
`
export const CardText = styled.p`
    // background-color: yellow;
    font-size: 14px;
    line-height: 20px;
    // height: 20%;
`
export const CardBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const Img1 = styled.img.attrs({
    src: gridImg1
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
`
export const Img2 = styled.img.attrs({
    src: gridImg2
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export const Img3 = styled.img.attrs({
    src: gridImg3
})`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: #e3f2fd; */
  font-family: "Open Sans", sans-serif;
`
