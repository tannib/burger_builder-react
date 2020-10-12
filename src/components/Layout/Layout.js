import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  openSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: true
    })
  }

  render () {
    return (
      <div className='Layout'>
        <SideDrawer show={this.state.showSideDrawer} closed={this.closeSideDrawerHandler} />
        <Toolbar open={this.openSideDrawerHandler} />
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
