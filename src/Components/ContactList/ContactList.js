

import React from 'react';
import './ContactList.css';
import NameList from '../Namelist/NameList';
class ContactList extends React.Component {
    render(){
        return(
            <div className="ContactList">
                <h2>Contacts</h2>
                <NameList contacts={this.props.contactList} onAdd={this.props.onAdd}/>
            </div>
        )
    }
}

export default ContactList;