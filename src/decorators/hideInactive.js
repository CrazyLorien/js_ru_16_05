import React, { Component } from 'react'

export default (CustomComponent) => {
    return class HideInaciveDecorator extends Component {
         state = {
                openedArticle: null
         }
         
        render() {
            return <CustomComponent {...this.props} openedArticle = {this.state.openedArticle } openArticle= {this.openArticle} />
        }
         
        openArticle = id => ev => {
                 if (ev) ev.preventDefault()
                    this.setState({
                        openedArticle: this.state.openedArticle == id ? null : id
                    })
        }
    }
}