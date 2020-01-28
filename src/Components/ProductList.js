import React, {Component} from 'react';
import Product from "./Product.js";
import Title from "./Title.js"
import {ProductConsumer} from '../Context.js'

class ProductList extends Component{
    
    render(){
        
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(x) => {return (x.products.map(item => {return <Product key = {item.id} product={item}  /> }))} }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                
               
                
                
            
        )
    }
}

export default ProductList;
