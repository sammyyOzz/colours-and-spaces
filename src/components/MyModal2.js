import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { modalStyles } from '../styles/ModalStyles';
import { ApplePng, PaypalPng, CardPng, InnerModalForm, Input, Label, RadioCapsule, RadioLeft, RadioRight } from '../styles/Form';
import { BlockButton } from '../styles/Button';

const useStyles = makeStyles(() => (modalStyles));

export default function Modal2() {
  const classes = useStyles();
  const [ { innerModal }, dispatch] = useStateValue()
  const [paymentOption, setPaymentOption] = useState(null)

  const handleClose = () => {
    dispatch({
      type: actionTypes.SET_INNER_MODAL,
      innerModal: false
    })
  };

  const handleSubmit = e => {
    e.preventDefault()
    //
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={innerModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={innerModal}>
        <div className={classes.paperInnerModal}>
            <div className={classes.modalLeft}>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
            <div className={classes.modalRight}>
              <InnerModalForm onSubmit={handleSubmit}>
                <div className={classes.modalRightContent}>
                  <div>
                    <div className={classes.innerModalTextInputSect}>
                      <div className={classes.innerModalTextInputTag}>
                        <Label dark>Name:</Label>
                      </div>
                      <div className={classes.innerModalTextInput}>
                        <Input type="text" dark />
                      </div>
                    </div>
                    <div className={classes.innerModalTextInputSect}>
                      <div className={classes.innerModalTextInputTag}>
                        <Label dark>Email:</Label>
                      </div>
                      <div className={classes.innerModalTextInput}>
                        <Input type="text" dark />
                      </div>
                    </div>
                    <div className={classes.modalText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus risus et vulputate. 
                    </div>
                  </div>
                  
                  <div>
                    <RadioCapsule onClick={() => setPaymentOption("card")}>
                      <RadioLeft>
                        <CardPng />
                        <small>Card</small>
                      </RadioLeft>
                      <RadioRight selected={paymentOption === 'card' && true} />
                    </RadioCapsule>
                    <RadioCapsule onClick={() => setPaymentOption("apple")}>
                      <RadioLeft>
                        <ApplePng />
                        <small>Apple Pay</small>
                      </RadioLeft>
                      <RadioRight selected={paymentOption === 'apple' && true} />
                    </RadioCapsule>
                    <RadioCapsule onClick={() => setPaymentOption("paypal")}>
                      <RadioLeft>
                        <PaypalPng />
                      </RadioLeft>
                      <RadioRight selected={paymentOption === 'paypal' && true} />
                    </RadioCapsule> 
                  </div>
                  <div className={classes.btn}>
                    <BlockButton>
                      <strong>Let's go</strong>
                    </BlockButton>
                  </div>
                </div>
              </InnerModalForm>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
