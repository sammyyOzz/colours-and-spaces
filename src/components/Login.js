import Grid from '@material-ui/core/Grid'
import React from 'react'
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

function Login() {

    const handleSubmit = e => {
        e.preventDefault();
        //
    }

    return (
        <Background screen>
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
                                <Button warning fullWidth type="submit" mb2>
                                    <strong>Login</strong>
                                </Button>
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
