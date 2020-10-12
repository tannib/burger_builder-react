import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = ({open}) => {

    return (
        <header className="Toolbar">
          <DrawerToggle clicked={open}/> 
          <div className="LogoToolbar">
            <Logo />
          </div>
          <nav className="DesktopOnly"><NavigationItems/></nav>  
        </header>
    )
}

export default Toolbar
