import React, { Component } from 'react'
import Stars from './Star'
const createArray = length =>[...Array(length)]
export default class StarRating extends Component {
    constructor(){
        super();
        this.state={
            Stars:0
        }
    }

  render() {
      let {totalstars}=this.props;
      this.setState({
          Stars:totalstars
      })
    return (
      <>
          {
              createArray((totalstars).map((n,i)=>(
                  <Stars key={i} selected={this.state.Stars >i} onSelect={()=>this.setState({Stars:i+1})}/>
              )))
          }

      </>
    )
  }
}
