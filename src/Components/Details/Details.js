
import React from 'react';
import './Details.css';

class Details extends React.Component {

    constructor(props){
        super(props);

        this.addContact = this.addContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
    }

    renderAction(){
        
        return <button className="Contact-action" onClick={this.removeContact}>Close</button>
        
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
            <div className="Contact">
                <div className="Contact-information">
                    <h3>{this.props.contact.name} </h3>
                    <p>{this.props.contact.phone} </p>
                    <p>{this.props.contact.email}</p>
                    <p>Username: {this.props.contact.username}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Details;