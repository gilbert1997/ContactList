import React from "react";

import './ContactDetails.css';
import DetailList from "../DetailList/DetailList";

class ContactDetails extends React.Component {

    

    
    render(){
        return(
            <div className="ContactDetails">
                <h2>Contact Details</h2>
                <DetailList contacts={this.props.detailsDisplayed} onRemove={this.props.onRemove} />
                <button className="ContactDetails-save" onClick={this.props.onClear}>CLEAR</button>
            </div>
        )
    }
}

export default ContactDetails;