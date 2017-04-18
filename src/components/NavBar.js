import React from 'react';

import {Link} from 'react-router';
import Icon from 'antd/lib/icon';

export default class NavBar extends React.Component{
  render(){
    return(
      <div className='navbar'>
        <h1>NEWMING@{this.props.title.slice(1) ? this.props.title.slice(1) : 'home'}</h1>
        <Link to='/' activeStyle={{background: 'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><Icon type="home" />Home</Link>
        <Link to='/blog' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><Icon type="home" />Blog</Link>
        <Link to='/work' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><Icon type="home" />Work</Link>
        <Link to='/about' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><Icon type="home" />About</Link>

      </div>
    )
  }
}
