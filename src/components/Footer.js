import React from 'react';
import {Link} from 'react-router';

import Icon from 'antd/lib/icon';

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <Link to='/' activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}><Icon type="home" /><br />Home</Link>
        <Link to='/blog' activeStyle={{color: '#E91E63'}}><Icon type="home" /><br />Blog</Link>
        <Link to='/work' activeStyle={{color: '#E91E63'}}><Icon type="home" /><br />Work</Link>
        <Link to='/about' activeStyle={{color: '#E91E63'}}><Icon type="home" /><br />About</Link>
      </footer>
    )
  }
}

export default Footer
