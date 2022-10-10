
import React from 'react';
import './NameList.css';
import Name from '../Name/Name';

class NameList extends React.Component{
    render(){
        return(
            <div className="NameList">
                
                {this.props.contacts.map(contact => {
                    return <Name contact={contact} key={contact.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}
                    />
                })}
            </div>
        )
    }
}

export default NameList;