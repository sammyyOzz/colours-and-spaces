import styled, {css} from 'styled-components'
import lightBulb from './images/light_bulb.png';

export const Flower = styled.div`
    top: -60px;
    left: 15px;
    height: 200px;
    width: 18%;
    background-color: ${props => props.color ? props.color : '#e91e63'};
    position: absolute;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: rotate(-28deg);


    // border-radius: 20px 0 20px 50px/10px 0 20px 100px;
    
    //transform: matrix(scaleX, skewY, skewX, scaleY, translateX, translateY);
    // transform: matrix(1, 0.6, 0.2, 1.5, 0, 0);
    
`
export const FlowerTop2 = styled(Flower)`
    top: -200px;
    left: 22%;
    transform: rotate(-50deg);
    width: 22%;
    height: 300px;
`
export const FlowerTop3 = styled(Flower)`
    transform: rotate(0deg);
    width: 20%;
    left: 48%;
`
export const FlowerTop4 = styled.div`
    position: absolute;
    top: -35px;
    left: 70%;
    background-color: ${props => props.color ? props.color : 'green'};
    height: 70px;
    width: 16%;
    transform: matrix(0.5, -0.6, -0.9, 2, 0, 0);
`
export const FlowerTopRight = styled(Flower)`
    top: -90px;
    left: 85%;
    transform: rotate(90deg);
`
export const FlowerRight = styled(Flower)`
    top: 18%;
    left: 90%;
    height: 40%;
    width: 13%;
    transform: rotate(130deg);
    border-radius: 0 100% 100% 100%/0 100% 100% 100%;
`
export const FlowerRight2 = styled(Flower)`
    transform: rotate(67deg);
    top: 53%;
    left: 95%;
    width: 10%;
`
export const FlowerRightBottom = styled(Flower)`
    top: 55%;
    left: 72%;
    width: 19%;
    height: 70%;
    transform: rotate(120deg);
`
export const FlowerRightBottom2 = styled(FlowerRightBottom)`
    left: 38%;
    width: 21%;
    top: 63%;
    // border-radius: 50% 0 50% 50%/50% 0 100% 100%;
`
export const FlowerLeftBottom = styled(Flower)`
    top: 70%;
    left: 0;
    transform: rotate(-140deg);
    width: 22%;
    height: 300px;
`
export const FlowerLeft = styled(Flower)`
    top: 15%;
    left: -130px;
    transform: rotate(-60deg);
    width: 22%;
    height: 400px;
`
