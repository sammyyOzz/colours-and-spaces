import coloursSpaces from './images/colours-and-spaces.png'

export const modalStyles = {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'white',
      border: '2px solid #000',
      width: '45vw',
      height: '54vh',
      display: 'flex',
      '@media (max-width: 960px)' : {
        height: '100vh',
        width: '100vw'
      }
    },
    paperInnerModal: {
      backgroundColor: 'white',
      border: '2px solid #000',
      width: '60vw',
      height: '85vh',
      display: 'flex',
      paddingRight: '10px',

      '@media (max-width: 960px)' : {
        height: '100vh',
        width: '100vw',
        paddingRight: '0px'
      }
    },
    modalLeft: {
      height: '100%',
      width: '50%',
      backgroundImage: `url(${coloursSpaces})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '@media (max-width: 960px)' : {
        display: 'none'
      }
    },
    modalRight: {
      height: '100%',
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 960px)' : {
        height: '100%',
        width: '100%',
        backgroundImage: 'linear-gradient(205deg, #ff0081, #6827b0)',
      }
    },
    modalRightContent: {
      height: '85%',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '@media (max-width: 960px)' : {
        height: '75%',
        marginTop: '50px'
      }
    },
    modalText: {
      fontSize: '13px',
      lineHeight: '15px',
      color: 'gray',
      '@media (max-width: 960px)' : {
        color: 'white'
      }
    },
    otpContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    },
    otpInput: {
      width: '60%'
    },
    otp: {
      color: 'gray',
      '@media (max-width: 960px)' : {
        color: 'white'
      }
    },
    btn: {
      display: 'flex',
      justifyContent: 'center'
    },
    innerModalTextInputTag: {
      width: '20%', 
    },
    innerModalTextInput: {
      width: '80%'
    },
    innerModalTextInputSect: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }