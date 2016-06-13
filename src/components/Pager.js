import React, { Component, PropTypes } from 'react'
import { HandlePageChange } from '../AC/comments'
import PageButton from './PageButton'

class Pager extends Component {
    render() {
        var  { pages } = this.props
        let pageButtons = []
        while(pages > 0)
        {
            pageButtons.push(<PageButton changepage={this.changePage}  Page={pages}/>)
            pages--;
        }
        return (
            <div>
            {pageButtons}
            </div>
        )
    }
    
    changePage = (ev) => {
        ev.preventDefault()
        console.log(ev)
        HandlePageChange(ev.target.outerText*1)
    }
}

export default Pager