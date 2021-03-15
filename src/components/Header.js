import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderActive, HeaderButton, HeaderRight, HeaderStyle, HeaderTitle, HeaderTitleText1, HeaderTitleText2 } from '../styles/HeaderStyle'

function Header() {
    return (
        <HeaderStyle>
            <HeaderTitle>
                <HeaderTitleText1>
                    <strong>Colours</strong>
                </HeaderTitleText1>
                <HeaderTitleText2>
                    <small>&</small>
                </HeaderTitleText2>
                <HeaderTitleText1>
                    <strong>Spaces</strong>
                </HeaderTitleText1>
            </HeaderTitle>
            <HeaderRight>
                <NavLink exact to="/" style={HeaderButton} activeStyle={HeaderActive}>
                    <strong>HOME</strong>
                </NavLink>
                <NavLink exact to="/about-us" style={HeaderButton} activeStyle={HeaderActive}>
                    <strong>ABOUT US</strong>
                </NavLink>
                <NavLink exact to="/login" style={HeaderButton} activeStyle={HeaderActive}>
                    <strong>LOGIN</strong>
                </NavLink>
                <NavLink exact to="/contact" style={HeaderButton} activeStyle={HeaderActive}>
                    <strong>CONTACT</strong>
                </NavLink>
            </HeaderRight>
        </HeaderStyle>
    )
}

export default Header
