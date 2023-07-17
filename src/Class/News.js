import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:"general"
  }
  static PropsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

  article=[
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "",
        "title": "Video: 'What the hell is a blizzard?': Trump seemingly baffled at Dairy Queen on campaign trail | CNN Politics",
        "description": "Former President Donald Trump stopped at a Dairy Queen in Iowa as part of his 2024 presidential campaign. CNN’s Abby Phillip and Politico White House reporter Eli Stokols discuss his attempt at “retail politics.”",
        "url": "https://www.cnn.com/videos/politics/2023/07/09/trump-dairy-queen-iowa-2024-campaign-trail-ip-vpx.cnn",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230709114946-trump-dairy-queen.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-09T16:27:57Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "ABC News",
        "title": "Zelenskyy to ABC: How Russia-Ukraine war could end, thoughts on US politics and Putin's weakness - ABC News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vYWJjbmV3cy5nby5jb20vUG9saXRpY3MvemVsZW5za3l5LWFiYy1ydXNzaWEtdWtyYWluZS13YXItZW5kLXRob3VnaHRzLXVzL3N0b3J5P2lkPTEwMDkwMzI1NdIBZ2h0dHBzOi8vYWJjbmV3cy5nby5jb20vYW1wL1BvbGl0aWNzL3plbGVuc2t5eS1hYmMtcnVzc2lhLXVrcmFpbmUtd2FyLWVuZC10aG91Z2h0cy11cy9zdG9yeT9pZD0xMDA5MDMyNTU?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-07-09T15:04:34+00:00",
        "content": null
    },
    {
        "source": {
            "id": "msnbc",
            "name": "MSNBC"
        },
        "author": "Anthea Butler",
        "title": "How Moms for Liberty became a powerful force in the Republican Party",
        "description": "Moms for Liberty is a new powerful force in Republican politics because it's using tactics and political strategies conservatives have used for decades.",
        "url": "https://www.msnbc.com/opinion/msnbc-opinion/moms-for-liberty-republican-politics-rcna92395",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230703-tina-descovich-jm-1657-70954a.jpg",
        "publishedAt": "2023-07-08T13:08:27Z",
        "content": "The members of Moms for Liberty who invaded Philadelphia on the weekend before July 4 called their gathering the Joyful Warriors National Summit, but as a scholar who attended the conference to get a… [+6887 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jay Peters",
        "title": "Threads isn’t for news and politics, says Instagram’s boss",
        "description": "Instagram boss Adam Mosseri has taken a stance on news and politics in Threads. In a conversation with Alex Heath, Mosseri says those topics “aren’t worth the scrutiny, negativity (let’s be honest), or integrity risks.”",
        "url": "http://www.theverge.com/2023/7/7/23787334/instagram-threads-news-politics-adam-mosseri-meta-facebook",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/YavtHu47GBXbFJeKLrxkZwo474E=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24774110/STK156_Instagram_threads_1.jpg",
        "publishedAt": "2023-07-07T18:16:37Z",
        "content": "Threads isnt for news and politics, says Instagrams boss\r\nThreads isnt for news and politics, says Instagrams boss\r\n / Adam Mosseri ran Facebooks News Feed in 2016, and now he tells Alex Heath that p… [+2064 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "",
        "title": "Video: Michael Cohen has warning for Donald Trump aide Walt Nauta | CNN Politics",
        "description": "Former President Donald Trump’s attorney Michael Cohen weighs in on aide Walt Nauta pleading not guilty to multiple counts related to the mishandling of classified documents at Mar-a-Lago, including several obstruction and concealment-related charges.",
        "url": "https://www.cnn.com/videos/politics/2023/07/07/michael-cohen-walt-nauta-advice-donald-trump-cpt-vpx.cnn",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230706214351-michael-cohen-cnn-primetime-vpx.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-07T02:01:27Z",
        "content": null
    },
    {
        "source": {
            "id": "newsweek",
            "name": "Newsweek"
        },
        "author": "Mark Davis",
        "title": "Newsweek",
        "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
        "url": "https://www.newsweek.com/",
        "urlToImage": "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
        "publishedAt": "2023-03-01T12:07:28.8517009Z",
        "content": null
    },
    {
        "source": {
            "id": "the-american-conservative",
            "name": "The American Conservative"
        },
        "author": null,
        "title": "Politics Archives - The American Conservative",
        "description": null,
        "url": "https://www.theamericanconservative.com/category/politics/",
        "urlToImage": null,
        "publishedAt": "2022-07-07T21:37:27.3936289Z",
        "content": null
    },
    {
        "source": {
            "id": "the-jerusalem-post",
            "name": "The Jerusalem Post"
        },
        "author": null,
        "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
        "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
        "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
        "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
        "publishedAt": "2019-11-13T04:41:00Z",
        "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    }
]
  constructor(){
    super();
    // console.log("abc")
    this.state={
      article:[],
      loading:false,
      page:1
    }
    
  }
  handlePrev=async()=>{
    console.log("opre")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2c37b745b44dbbab66589804fec37c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData)
  

    this.setState({
      page:this.state.page-1,
      article: parseData.articles,
    loading:false
    })


  }
  handleNext=async ()=>{
    console.log("me")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2c37b745b44dbbab66589804fec37c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
      let data=await fetch(url);
    let parseData=await data.json()
    // console.log(parseData)
   
  

    this.setState({
      page:this.state.page+1,
      article: parseData.articles,
      loading:false
    })}

  }

  async componentDidMount(){
    console.log("render1")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2c37b745b44dbbab66589804fec37c&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData)
    this.setState({article: parseData.articles,
      totalResults:parseData.totalResults,
      loading:false})

  }
  render() {
    console.log("render")
    return (
      <>
      <div className='container my-3'>
       <h1 className='text-center'style={{margin:' 37px 0px'}}>NewsFree TopHeadLine</h1>
      {this.state.loading && <Spinner/>}
       <div className="row">
       {!this.state.loading && this.state.article.map((ele)=>{
       return  <div className="col-md-4" key={ele.url}>
        <NewsItem  title={ele.title ? ele.title.slice(0, 44) : ''} description={ele.description ? ele.description.slice(0, 44) : ''} imageUrl={ele.urlToImage} newsUrl={ele.url}  author={ele.author} date={ele.publishedAt}/>    
         </div>
       })}
       
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" onClick={this.handleNext}className="btn btn-dark">Next &rarr;</button>
        </div>

       </div>
        
        

      
      </>
    )
  }
}

export default News
