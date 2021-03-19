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
      height: '80vh',
      display: 'flex',
      paddingRight: '10px',

      paddingTop: '30px',

      '@media (max-width: 960px)' : {
        height: '100vh',
        width: '100vw'
      }
    },
    modalLeft: {
      height: '100%',
      width: '50%',
      '@media (max-width: 960px)' : {
        display: 'none'
      }
    },
    modalRight: {
      // backgroundColor: 'red',
      height: '100%',
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 960px)' : {
        height: '100%',
        width: '100%'
      }
    },
    modalRightContent: {
      height: '85%',
      width: '90%',
      // backgroundColor: 'green',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    modalText: {
      fontSize: '13px',
      lineHeight: '15px',
      color: 'gray'
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
      color: 'gray'
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