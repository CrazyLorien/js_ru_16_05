
require("../../node_modules/bootstrap/dist/css/bootstrap.css")
require("../css/main.css")
import React, { PropTypes, Component } from 'react'
import Article from './Article'
import HideInactive from '../decorators/hideInactive'

import Chart from './Chart'

class ArticleList extends Component {

    render() {
        const { articles } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.props.openedArticle}
                toggleOpen = {this.props.openArticle(article.id)}
            />
        </li>)
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart articles = {articles}/>
            </div>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default HideInactive(ArticleList)