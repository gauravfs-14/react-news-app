import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=all&from=2022-03-01&to=2022-03-01&sortBy=popularity&apiKey=6b2937f3f1a4431fa0ea9b832b3aecea&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);
    this.setState({
      articles: parsed.articles,
      loading: false,
    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/everything?q=all&from=2022-03-01&to=2022-03-01&sortBy=popularity&apiKey=6b2937f3f1a4431fa0ea9b832b3aecea&page=${this
      .state.page--}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);
    this.setState({
      articles: parsed.articles,
      loading: false,
    });
    window.scrollTo(0, 0);
  };
  handleNxt = async () => {
    let url = `https://newsapi.org/v2/everything?q=all&from=2022-03-01&to=2022-03-01&sortBy=popularity&apiKey=6b2937f3f1a4431fa0ea9b832b3aecea&page=${this
      .state.page++}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);
    this.setState({
      articles: parsed.articles,
      loading: false,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <div className="container my-5 d-flex flex-wrap gap-4 justify-content-center">
          {this.state.loading && <Spinner />}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 150)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              );
            })}
        </div>
        <nav
          aria-label="Page navigation example"
          className="text-center container d-flex justify-content-center"
        >
          <ul className="pagination">
            <button
              disabled={this.state.page <= 1}
              className="page-item page-link"
              onClick={this.state.page <= 1 ? null : this.handlePrev}
            >
              Previous
            </button>
            <button
              disabled={this.state.articles.length <= 1}
              className="page-item page-link"
              onClick={this.state.articles.length <= 1 ? null : this.handleNxt}
            >
              Next
            </button>
          </ul>
        </nav>
      </>
    );
  }
}

export default News;
