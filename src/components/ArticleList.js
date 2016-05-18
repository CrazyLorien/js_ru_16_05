import React, { PropTypes } from 'react'
import Article from './Article'
require("../../node_modules/bootstrap/dist/css/bootstrap.css")
require("../css/main.css")

function ArticleList(props) {
    const { articles } = props
    const articleItems = articles.map((article) => <li key={article.id}><Article article = {article} /></li>)
    return (
    	<div className="container">
        <ul>
            {articleItems}
        </ul>
        </div>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList