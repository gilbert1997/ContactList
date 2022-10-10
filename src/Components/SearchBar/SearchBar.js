import React from 'react';

import './Intro.css';

class Intro extends React.Component {
    constructor(props){
        super(props);

        this.state={
            term: ''
        }
        
        this.search=this.search.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    render(){
        return(
            <div className="Intro">
                Click to Open Contact Details
            </div>
        )
    }
}

export default Intro;