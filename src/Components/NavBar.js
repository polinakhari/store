import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import ButtonContainer from './ButtonContainer.js' 



class NavBar extends Component{
    render(){
        return(
            <NavWrapper>
                <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">                 
                    <Link to='/'><img src={logo} alt="store" className='navbar-brand'/></Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className='nav-link'>Products</Link>
                        </li>
                    </ul>
                    <Link to='/card' className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus"> </i>
                             My Card
                            </span>
                        </ButtonContainer>
                    </Link>
                </nav>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;    }


`


export default NavBar;