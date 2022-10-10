
import React from 'react';
import './DetailList.css';
import Details from '../Details/Details';

class DetailList extends React.Component{
    render(){
        return(
            <div className="TrackList">
                
                {this.props.contacts.map(contact => {
                    return <Details contact={contact} key={contact.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}
                    />
                })}
            </div>
        )
    }
}

export default DetailList;