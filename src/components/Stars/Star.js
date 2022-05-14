import React, { Component } from 'react'
import {FaStar} from 'react-icons/fa'
export default class Star extends Component {
    constructor(){
        super();
        this.state=(
            {
                selected:false,
                onSelect:0

            }
        )
    }
  render() {
      let{selected,onSelect}=this.props;
      this.setState({
          selected:selected,
          onSelect:onSelect
      })
    return (
      <>
          <FaStar color={this.state.selected?"red":"grey"} onClick={onSelect}/>
      </>
    )
  }
}
