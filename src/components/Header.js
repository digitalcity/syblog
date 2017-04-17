import React from 'react';
import {hashHistory} from 'react-router';

import Button from 'antd/lib/button';

class Header extends React.Component{
  handleGo(num){
    hashHistory.go(num)
  }
  render(){
    return(
      <header>
        <Button shape="circle" icon="left" onClick={this.handleGo.bind(this,-1)}/>
        <h2>NEWMING@{this.props.title.slice(1) ? this.props.title.slice(1) : 'home'}</h2>
        <Button shape="circle" icon="right" onClick={this.handleGo.bind(this,1)} />
      </header>
    )
  }
}

export default Header
