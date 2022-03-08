import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl != null
                ? imageUrl
                : "https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"
            }
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
