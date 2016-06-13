import React, { Component, PropTypes } from 'react'
import { HandlePageChange } from '../AC/comments'

class PageButton extends Component {
    render() { 
        const {changepage,Page } = this.props   
        return (<div onClick={changepage} >{Page}</div>)
    }
    
  
}

export default PageButton