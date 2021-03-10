import { 
    Background, 
    Wrapper, 
    WaveBottom,
    LightBulb,
    Title,
    TitleText1,
    TitleText2,
    TitleText3,
    TitleLine2
  } from '../styles/Div';
import { Button } from '../styles/Button'
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


function LandingPage() {
    return (
        <div className="landing">
            <Background>
                <Flower />
                <FlowerTop2 color="skyblue" />
                <FlowerTop3 color="#e6ee9c" />
                <FlowerTop4 />
                <FlowerTopRight color="blue" />
                <FlowerRight color="#7b1fa2" />
                <FlowerRight2 color="pink" />
                <FlowerRightBottom color="red" />
                <FlowerRightBottom2 color="cyan" />
                <FlowerLeftBottom color="skyblue" />
                <FlowerLeft color="green" />

                <LightBulb />

                <Title>
                    <TitleText1>COLOURS</TitleText1>
                    <TitleLine2>
                        <TitleText2><strong>AND</strong></TitleText2>
                        <TitleText3><strong>SPACES</strong></TitleText3>
                    </TitleLine2>
                </Title>

                <WaveBottom />
            </Background>
            <Wrapper>
                Middle section
            </Wrapper>

            Landing page

        </div>
    )
}

export default LandingPage;