import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      pathname: '',
      mobile: true
    }
  }
  componentWillReceiveProps(){
    this.setState({pathname: this.props.location.pathname});
  }
  componentWillMount(){
    this.setState({pathname: this.props.location.pathname});
    this.checkMobile()
  }
  checkMobile(){
    this.setState({
      mobile: document.body.clientWidth<700 ? true : false
    })
  }
  componentDidMount(){
    window.onresize = this.checkMobile.bind(this)
  }
  render () {
    return(
      <div className='wrap'>
        {this.state.mobile ? <Header title={this.state.pathname}/>: <NavBar title={this.state.pathname}/>}

        <div className='main'>
          {this.props.children}
        </div>

        {this.state.mobile ? <Footer /> : null}
      </div>
    )
  }
}

export default App;
