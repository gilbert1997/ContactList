
import React from 'react';
import './Name.css';

class Name extends React.Component {

    constructor(props){
        super(props);

        this.addContact = this.addContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
    }

    renderAction(){
        
        return <button className="Name-action" onClick={this.addContact}>Details</button>
        
    }

    addContact(){
        //Check if the passed in contact is in playlist already, if it's not we add it to the list and update app state with new playlist. look at app.js for the addContact function
        this.props.onAdd(this.props.contact);
    }
    removeContact(){
        this.props.onRemove(this.props.contact); 
    }

    render(){

        return(
            <div className="Name">
                <div className="Name-information">
                    <h3>{this.props.contact.name} </h3>
                    
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Name;