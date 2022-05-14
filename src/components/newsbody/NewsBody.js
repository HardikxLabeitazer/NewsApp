import React, { Component } from 'react'
import Newsmodel from './Newsmodel';
import InfiniteScroll from "react-infinite-scroll-component"

export class NewsBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageResults: props.pageResults,
            articles: []
        }
    }

    async componentDidMount() {
       
        this.updateNews()
    }
     updateNews=async ()=>{
        document.title = "EveryDay-News"
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6afdc30f902148d0a74db6e2ddddd83d&page=${this.state.page+1 }&pageSize=${this.state.pageResults}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: parseData.articles,
            pageResults: parseData.totalResults
        })
    }


    fetchMoreData = async () => {
        
        this.setState({page:this.state.page +1})
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6afdc30f902148d0a74db6e2ddddd83d&page=${this.state.page+1}&pageSize=${this.state.pageResults}`
       
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            pageResults: parseData.pageResults,
            
        })
    }
    render() {

        return (

            <>
                <h1 className='text-center my-2'>Latest News</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.pageResults}

                >
                    <div className='container'>

                        <div className='row'>
                            {
                                this.state.articles.map((element) => {
                                    return <div className='col-md-4' key={element.url}>
                                        <Newsmodel title={element.title ? element.title.slice(0, 40) + "......" : ""}
                                            description={element.description ? element.description.slice(0, 80) : ""}
                                            imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt}
                                        />

                                    </div>
                                })
                            }


                        </div>
                    </div>
                </InfiniteScroll>




            </>
        )
    }
}

export default NewsBody