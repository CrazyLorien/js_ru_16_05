import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'

class ArticlesIndex extends Component {
    static propTypes = {

    };

    state = {
        user: null
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }
    
    setName = (event) => {
        this.setState({ user : event.target.value })
    }

    render() {
        return (
            <div>
                <h1>News app: Articles</h1>
                <Link to="/articles/new">New article</Link>
                <h3 onClick = {this.switchUser}>Switch User</h3>
                <p>Add user name<input type="text" name="user"  onChange={this.setName} />                
                 </p>
                <Navigation />
                {this.props.children}
            </div>
        )
    }

    switchUser = (ev) => {
        this.setState({
            user: 'Other User'
        })
    }
}

export default ArticlesIndex