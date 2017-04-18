import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';

export default class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      cards: [],
      wait: true
    }
  }
  componentWillMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/card.json')
      .then( res => this.setState({cards: res.data,wait: false}) )
      .catch( err => alert(err) )
  }
  render(){
    return(
      <div style={{padding: '10px',width: '100%'}}>
        {
          this.state.wait ?
            <div style={{textAlign: 'center', margin: '20px'}}><Spin size="large" /></div>
            :
            this.state.cards.map( (item,index) =>
              <Card style={{margin: '0 auto', marginBottom: '10px', maxWidth: '500px'}} bodyStyle={{ padding: 0,width: '100%'}} key={index}>
                <div>
                  <Link to={`/post/${item.url}`}><img style={{display: 'block'}} alt="example" width="100%" src={item.img} /></Link>
                </div>
                <div style={{padding: '10px 16px'}}>
                  <h3>{item.title}</h3>
                  <p style={{color: '#999'}}>{item.desc}</p>
                </div>
              </Card>
            )
        }
      </div>
    )
  }
}
