import React, { useState, useEffect } from 'react';
import { 
    Background, 
    Wrapper, 
    WaveBottom,
    LightBulb,
    Title,
    TitleText1,
    TitleText2,
    TitleText3,
    TitleLine2,
    CenterText,
    CardBox,
    Img2,
    Img1,
    Img3,
    CardRow,
    CardImg,
    CardText,
    CardBtn,
    FullScreen,
    TitleWrapper,
} from '../styles/Div';
import { AboutButton, Button } from '../styles/Button'
import { 
    Flower, 
    FlowerLeftBottom, 
    FlowerLeft,
    FlowerRight, 
    FlowerRight2, 
    FlowerRightBottom, 
    FlowerRightBottom2, 
    FlowerTop2, 
    FlowerTop3, 
    FlowerTop4, 
    FlowerTopRight 
} from '../styles/Flower';
import Grid from '@material-ui/core/Grid';
import { Wave } from 'react-animated-text'
import { HomePageElm } from '../styles/KeyFrames';


function LandingPage() {

    const [willAnimate, setWillAnimate] = useState(true)

    useEffect(() => {
        const checkAnimation = () => {
            const animate = sessionStorage.getItem('waveMotion')
            if(animate) {
                setWillAnimate(false)
            } else {
                sessionStorage.setItem('waveMotion', 1)
            }

            if(willAnimate) {
                setTimeout(() => setWillAnimate(false), 3000)
            }
        }
        checkAnimation()
    }, [])

    return (
        <HomePageElm>
            <Background>
                <Flower />
                <FlowerTop2 color="skyblue" />
                <FlowerTop3 color="#e6ee9c" />
                <FlowerTop4 />
                <FlowerTopRight color="#7c4dff" />
                <FlowerRight color="#7b1fa2" />
                <FlowerRight2 color="pink" />
                <FlowerRightBottom color="red" />
                <FlowerRightBottom2 color="cyan" />
                <FlowerLeftBottom color="skyblue" />
                <FlowerLeft color="green" />

                <FullScreen>
                    <TitleWrapper>
                        <Title>
                            <TitleText1>
                                {
                                    willAnimate ? 
                                        <Wave 
                                            text="COLOURS"
                                            effect="stretch"
                                            effectChange={2.0}
                                        /> 
                                    : "COLOURS"
                                }
                            </TitleText1>
                            <TitleLine2>
                                <TitleText2>
                                    <strong>AND</strong>
                                </TitleText2>
                                <TitleText3>
                                    <strong>SPACES</strong>
                                </TitleText3>
                            </TitleLine2>
                        </Title>
                        <LightBulb />
                    </TitleWrapper>
                </FullScreen>

                <AboutButton primary><strong>About Us</strong></AboutButton>

                <WaveBottom />
            </Background>
            
            <Wrapper>
                <CenterText>
                    What Do We Do?
                </CenterText>

                <CardRow>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item container xs={10} spacing={3}>
                            <Grid item xs={12} md={4}>
                                <CardBox>
                                    <CardImg>
                                        <Img1 />
                                    </CardImg>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus risus et vulputate. Maecenas congue massa dui, at pulvinar arcu tincidunt ac. Fusce quis ornare lectus, id placerat lorem. 
                                    </CardText>
                                    <CardBtn>
                                        <Button primary>Learn More</Button>
                                    </CardBtn>
                                </CardBox>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardBox>
                                    <CardImg>
                                        <Img2 />
                                    </CardImg>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus risus et vulputate. Maecenas congue massa dui, at pulvinar arcu tincidunt ac. Fusce quis ornare lectus, id placerat lorem. 
                                    </CardText>
                                    <CardBtn>
                                        <Button primary>Learn More</Button>
                                    </CardBtn>
                                </CardBox>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardBox>
                                    <CardImg>
                                        <Img3 />
                                    </CardImg>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus risus et vulputate. Maecenas congue massa dui, at pulvinar arcu tincidunt ac. Fusce quis ornare lectus, id placerat lorem. 
                                    </CardText>
                                    <CardBtn>
                                        <Button primary>Learn More</Button>
                                    </CardBtn>
                                </CardBox>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </CardRow>
            </Wrapper>
        </HomePageElm>
    )
}

export default LandingPage;