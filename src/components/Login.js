import Grid from '@material-ui/core/Grid'
import React from 'react'
import MyModal from './MyModal'
import { Button, GooglePng } from '../styles/Button'
import { Background } from '../styles/Div'
import { 
    Form,
    Input,
    FormWrapper, 
    CenterTextForm, 
    Label, 
    SignUpLink, 
    ForgotPasswordLink,
    FormSeperator
} from '../styles/Form'
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

function Login() {

    const handleSubmit = e => {
        e.preventDefault();
        //
    }

    return (
        <Background screenHeight>
            <Flower half />
            <FlowerTop2 color="skyblue" half />
            <FlowerTop3 color="#e6ee9c" half />
            <FlowerTop4 half />
            <FlowerTopRight color="#7c4dff" half />
            <FlowerRight color="#7b1fa2" half />
            <FlowerRight2 color="pink" half />
            <FlowerRightBottom color="red" half />
            <FlowerRightBottom2 color="cyan" half />
            <FlowerLeftBottom color="skyblue" half />
            <FlowerLeft color="green" half />

            <FormWrapper>
                <Grid container>
                    <Grid item xs={1} md={3} lg={4} />
                    <Grid item container xs={10} md={6} lg={4}>
                        <Grid item xs={1} md={2} />
                        <Grid item xs={10} md={8}>
                            <CenterTextForm>
                                <strong>Log in with</strong>
                            </CenterTextForm>
                            <Button fullWidth mb1 clear>
                                <GooglePng />
                            </Button>
                            <Button secondary fullWidth mb3>
                                <strong>facebook</strong>
                            </Button>

                            <Form onSubmit={handleSubmit}>
                                <Label>Phone Number:</Label>
                                <Input type="text" placeholder="+234 8154681215" />
                                <Label>Password:</Label>
                                <Input type = "password" placeholder="password" />
                                {/* <Button warning fullWidth type="submit" mb2> */}
                                    <MyModal />
                                {/* </Button> */}
                            </Form>

                            <FormSeperator>
                                <SignUpLink>
                                    <strong>Sign Up!</strong>
                                </SignUpLink>
                                <ForgotPasswordLink>
                                    <strong>Forgot Password ?</strong>
                                </ForgotPasswordLink>
                            </FormSeperator>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>
                    <Grid item xs={1} md={3} lg={4} />
                </Grid>
            </FormWrapper>
        </Background>
    )
}

export default Login
