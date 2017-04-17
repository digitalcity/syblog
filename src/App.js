import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      pathname: ''
    }
  }
  componentWillReceiveProps(){
    this.setState({pathname: this.props.location.pathname})
  }
  componentWillMount(){
    this.setState({pathname: this.props.location.pathname})
  }
  render () {
    return(
      <div className='wrap'>
        <Header title={this.state.pathname}/>

        <div className='main'>
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
