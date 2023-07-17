import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
  let   {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2023-07/m9e2a7ig_rain_625x300_09_July_23.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">by{author} on {date}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
// style={{width : "18rem"}}

export default NewsItem
