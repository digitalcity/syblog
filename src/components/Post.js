import React from 'react';

import axios from 'axios';
import Spin from 'antd/lib/spin';
import marked from 'marked';
import hljs from 'highlight.js';

export default class Post extends React.Component{
  constructor(){
    super();
    this.state={
      post: '',
      wait: true
    }
  }
  componentWillMount(){
    axios.get(`https://raw.githubusercontent.com/newming/demodata/master/blog/${this.props.params.title}.md`)
      .then( res => this.setState({post: res.data,wait: false}))
      .catch( err => alert(err) )
  }
  componentDidMount(){
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }
  render(){
    return(
      <div style={{padding: '10px',width: '100%'}}>
        {
          this.state.wait ? <div style={{textAlign: 'center', margin: '20px'}}><Spin size="large" /></div> : <div className='post-content' dangerouslySetInnerHTML={{__html: marked(this.state.post)}}/>
        }
      </div>
    )
  }
}
