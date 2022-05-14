import React, { Component } from 'react'

export default class Newsmodel extends Component {
    
    
  render() {
      let {title,description,imageUrl,newsUrl,date} = this.props;
    return (
      <div className='my-3 mycard'>
          <div className='card'>
             
             <img className='card-image-top newsimage'  src={imageUrl} alt=""/>
             <div className='card-body'>
                 <h5 className='card-title'>{title}</h5>
                 <p className='card-text myinfo'>{description}.......</p>
                 <p className='card-text myinfo'>Published at { new Date(date).toGMTString()}</p>
                 <a href={newsUrl} className="readmore" style={{textDecoration:"none",border:'solid pink 1px',padding:'5px'}}>Read More</a>
                
             </div>
          </div>
          
      </div>
    )
  }
}
