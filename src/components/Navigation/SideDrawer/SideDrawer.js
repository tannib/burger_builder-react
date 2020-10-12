import React from 'react'
import './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems' 
import Backdrop from '../../UI/Backdrop'

const SideDrawer = ({show, closed}) => {
    let attachedClass = ['SideDrawer', 'Close']

    if(show) {
        attachedClass = ['SideDrawer', 'Open']
    }
    return (
        <div> 
            <Backdrop show={show} clicked={closed} />
            <div className={attachedClass.join(' ')}>
                <div className='LogoSideDrawer'>
                    <Logo />
                </div>
                <nav><NavigationItems/></nav>
            </div>
        </div>
    )
}

export default SideDrawer
