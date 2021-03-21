import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BlockButton, Button } from '../styles/Button';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import { Input, Label } from '../styles/Form';
import { modalStyles } from '../styles/ModalStyles';


const useStyles = makeStyles(() => (modalStyles));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ { }, dispatch] = useStateValue()
  const [inputVal, setInputVal] = useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSecondModal = () => {
    setOpen(false);
    dispatch({
      type: actionTypes.SET_INNER_MODAL,
      innerModal: true
    })
  }

  return (
    <div>
      <Button onClick={handleOpen} warning fullWidth type="submit" mb2>
        <strong>Login</strong>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.modalLeft} />
            <div className={classes.modalRight}>
              <div className={classes.modalRightContent}>
                <div className={classes.modalText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus risus et vulputate. Maecenas congue massa dui, at pulvinar arcu tincidunt ac. Fusce quis ornare lectus, id placerat lorem. 
                </div>
                <div>
                  <Label dark>enter OTP :</Label>
                  <div className={classes.otpContainer}>
                    <div className={classes.otpInput}>
                      <Input type="text" dark value={inputVal} onChange={e => setInputVal(e.target.value)} />
                    </div>
                    <div className={classes.otp}><small>send OTP</small></div>
                  </div>
                </div>
                <div className={classes.btn} onClick={handleSecondModal}>
                  <BlockButton>
                    <strong>Let's go</strong>
                  </BlockButton>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
