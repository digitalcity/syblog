import React from 'react';

import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      visible: false
    }
  }
  showModal(){
    this.setState({
      visible: true,
    });
  }
  handleCancel(){
    this.setState({
      visible: false,
    });
  }
  render(){
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div style={{textAlign: 'center'}}>
            <h1>HI,I AM NEWMING</h1>
            <p>a front-end development</p>
            <Button type="primary" onClick={this.showModal.bind(this)}>Contact Me</Button>
            <Modal title="我的信息" visible={this.state.visible} onOk={this.handleCancel.bind(this)} onCancel={this.handleCancel.bind(this)} >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
