import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    //sets term in state to whatever is typed into the input field
    onChange = e => {
        this.setState({
            term: e.target.value
        })
    }

    //runs the search function with the term typed into the input field and clears the term state when the search is run
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.term);
        this.setState({
            term: ''
        })
    }

    render(){
        return(
            <form className="search" onSubmit={this.handleSubmit}> 
                <input className="search__input" type="text" onChange={this.onChange} value={this.state.term} placeholder="search"/>
                <div className="search__icon">
                    <FontAwesomeIcon icon={['far',"search"]} />
                </div>
            </form>
        );
    }
}

export default SearchBar;