import React, {Component} from 'react';
import styled from "styled-components"
import {ProductConsumer} from '../Context.js'
import ButtonContainer from "./ButtonContainer.js"
import {Link} from "react-router-dom"


class Modal extends Component{
    render(){
        return(
            <ProductConsumer>
                {x => {
                    const {modalOpen, closeModal} = x;
                    const {img, title, price} = x.modalProduct;
                    if (modalOpen)  {return(
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>Item added to the card</h5>
                                    <img src={img} alt={title} className="img-fluid"/>
                                    <h5>Model: {title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to="/"> 
                                        <ButtonContainer onClick={() => closeModal()}>
                                            Continue shopping
                                        </ButtonContainer>
                                        </Link>
                                        <Link to="/Card"> 
                                        <ButtonContainer onClick={() => closeModal()}>
                                            Go to cart
                                        </ButtonContainer>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>);}
                    
                    
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div `
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0 ,0 , 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite)
}

`
export default Modal;
