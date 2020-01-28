import React, {Component} from 'react';
import {ProductConsumer} from '../Context.js'
import {Link} from "react-router-dom"
import ButtonContainer from "./ButtonContainer.js"



class Details extends Component{
    render(){
        return(
            <ProductConsumer>
                {x => {
                                               
                        const {id,title, img, price, company, info, inCart} = x.detailProduct;
                         return (
                              <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                
                                <div className="col-10mx-auto col-md-6 my-3">
                                    <img src={img} alt={title} className="img-fluid"/>
                                </div>
                                <div className="col-10mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>Model name: {title}</h1>    
                                    <h4 className="text-title tetx-uppercase text-muted mb-3 mt-3">
                                        Made by: {company}
                                    </h4>
                                    <h4 className="text-blue"><strong>price: <span>$</span> {price}</strong>  </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some more info</p>
                                    <p className="text-muted lead">{info}</p>
                                    <Link to="/"> 
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {x.addToCard(id); x.openModal(id);}}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>

                                        </div>
                                </div>
                            </div>);}
                            
                    
                }
            </ProductConsumer>
        );
    }
}

export default Details;
