
import React, { Component } from 'react'

export default class States extends Component {
  constructor(props){
    super(props)
    this.state = props;
  }
  
  render() {
    const {input} = this.state
    return (
      <input placeholder='Vui lòng nhập tên' onChange={input} />,
      console.log(input)
 
    )
    
  }
}
