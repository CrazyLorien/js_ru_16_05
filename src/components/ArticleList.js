import React, { PropTypes, Component } from 'react'
import Article from './Article'
<<<<<<< HEAD
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
=======
import Chart from './Chart'

class ArticleList extends Component {
    state = {
        openedArticle: null
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openedArticle: this.state.openedArticle == id ? null : id
        })
    }


    render() {
        const { articles } = this.props
        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.state.openedArticle}
                toggleOpen = {this.openArticle(article.id)}
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
>>>>>>> 22d11af12a5388d573769450826df33cc5d07833
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList