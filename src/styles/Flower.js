import styled, {css} from 'styled-components'
import lightBulb from './images/light_bulb.png';

export const Flower = styled.div`
    top: ${props => props.half ? "-150px" : "-60px"};
    left: 15px;
    height: 200px;
    width: 220px;
    background-color: ${props => props.color ? props.color : '#e91e63'};
    position: absolute;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: rotate(-28deg);
    z-index: 1;


    // border-radius: 20px 0 20px 50px/10px 0 20px 100px;
    
    //transform: matrix(scaleX, skewY, skewX, scaleY, translateX, translateY);
    // transform: matrix(1, 0.6, 0.2, 1.5, 0, 0);

    @media (max-width: 1080px) { 
        left: -20px;
        height: 140px;
        width: 145px;
        top: -60px;
    }
    
`
export const FlowerTop2 = styled(Flower)`
    top: ${props => props.half ? "-250px" : "-200px"};
    left: 22%;
    transform: rotate(-50deg);
    width: 260px;
    height: 300px;

    @media (max-width: 1080px) { 
        left: 30%;
        width: 230px;
        height: 270px;
        top: -200px;
    }
`
export const FlowerTop3 = styled(Flower)`
    transform: rotate(0deg);
    width: 230px;
    left: 48%;

    @media (max-width: 1080px) { 
        display: none;
    }
`
export const FlowerTop4 = styled.div`
    position: absolute;
    top: ${props => props.half ? "-100px" : "-35px"};
    left: 70%;
    background-color: ${props => props.color ? props.color : 'green'};
    height: 70px;
    width: 180px;
    transform: matrix(0.5, -0.6, -0.9, 2, 0, 0);

    @media (max-width: 1080px) { 
        display: none;
    }
`
export const FlowerTopRight = styled(Flower)`
    top: ${props => props.half ? "-150px" : "-90px"};
    left: 88%;
    transform: rotate(90deg);

    @media (max-width: 1080px) { 
        top: -90px;
    }
`
export const FlowerRight = styled(Flower)`
    top: 18%;
    left: ${props => props.half ? "96%" : "90%"};
    height: 40%;
    width: 200px;
    transform: rotate(130deg);
    border-radius: 0 100% 100% 100%/0 100% 100% 100%;
`
export const FlowerRight2 = styled(Flower)`
    transform: rotate(67deg);
    top: 53%;
    left: ${props => props.half ? "97%" : "95%"};
    width: 150px;
`
export const FlowerRightBottom = styled(Flower)`
    top: ${props => props.half ? "78%" : "55%"};
    left: 72%;
    width: 270px;
    height: 70%;
    transform: rotate(120deg);

    @media (max-width: 1080px) { 
        height: 45%;
        width: 189px;
        top: ${props => props.half ? "85%" : "67%"};
    }
`
export const FlowerRightBottom2 = styled(FlowerRightBottom)`
    left: 38%;
    width: 280px;
    top: ${props => props.half ? "80%" : "63%"};
    // border-radius: 50% 0 50% 50%/50% 0 100% 100%;

    @media (max-width: 1080px) { 
        display: none;
    }
`
export const FlowerLeftBottom = styled(Flower)`
    top: ${props => props.half ? "85%" : "70%"};
    left: 0;
    transform: rotate(-140deg);
    width: 290px;
    height: 300px;

    @media (max-width: 1080px) { 
        top: ${props => props.half ? "90%" : "85%"};
        left: -30px;
        height: 210px;
    }
`
export const FlowerLeft = styled(Flower)`
    top: 15%;
    left: ${props => props.half ? "-250px" : "-130px"};
    transform: rotate(-60deg);
    width: 300px;
    height: 400px;

    @media (max-width: 1080px) { 
        top: 25%;
        width: ${props => props.half ? "280px" : "220px"};
        height: ${props => props.half ? "370px" : "270px"};
    }
`
