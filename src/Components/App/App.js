
import React from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import ContactList from '../ContactList/ContactList';
import ContactDetails from '../ContactDetails/ContactDetails';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      contactList: [{name:'Leanne Graham', username:'Bret', id:1,email:'Sincere@april.biz', phone: '1-770-736-8031 x56442'},{name:'Ervin Howell', username:'Antonette', id:2, 
      email:'Shann@melissa.tv', phone:'010-692-6593 x09125'},{name:'Clementine Bauch', username:'Samantha', id:3, email:'Nathan@yesenia.net', phone: '1-463-123-4447'}, 
      {name:'Patricia Lebsack', username:'Karianne', id:4, email:'Julianne.OConner@kory.org', phone: '493-170-9623 x156'}, {name:'Chelsey Dietrich', username:'Kamren', id:5, email:'Lucio_hettinger@annie.ca', phone: '(254)954-1289'},
      {name:'Mrs. Dennis Schulist', username:'Leopoldo_Corkery', id:6, email:'Karley_Dach@jasper.info', phone: '1-477-935-8478 x6430'},{name:'Kurtis Weissnat', username:'Elwyn.Skiles', id:7, email:'Telly.Hoegar@billy.biz', phone: '210.067.6132'},
      {name:'Nicholas Runolfsdottir V', username:'Maxime_Nienow', id:8, email:'Sherwood@rosamond.me', phone: '586.493.6943 x140'},{name:'Glenna Reichert', username:'Delphine', id:9, email:'Chaim_McDermott@dana.io', phone: '(775)976-6794 x41206'},
      {name:'Clementina DuBuque', username:'Moriah.Stanton', id:10, email:'Rey.Padberg@karina.biz', phone: '024-648-3804'}],
      
      detailsDisplayed: []
    };

    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    
    this.clearList = this.clearList.bind(this);
    
  }

  addContact(contact){
    let contacts = this.state.detailsDisplayed;
    if(contacts.find(savedContact=>savedContact.id===contact.id)){
      return;
    }

    contacts.push(contact);
    this.setState({detailsDisplayed: contacts});
  }
  removeContact(contact){
    let contacts = this.state.detailsDisplayed;
    //Create new contacts array with only the passed in contact excluded and the other contacts remaining inside, filter makes new array with elements satisfying requirment
    contacts = contacts.filter(currentContact=>currentContact.id !== contact.id);

    this.setState({detailsDisplayed: contacts});
  }


  

  clearList(){
     this.setState({detailsDisplayed: []});
  }

  render(){
    return(
      <div>
        <h1><span className="highlight">Contact List</span> App</h1>
        <div className="App">
          <Intro/>
          <div className="App-contact">
            <ContactList contactList={this.state.contactList} onAdd={this.addContact}/>
            <ContactDetails  detailsDisplayed={this.state.detailsDisplayed} onRemove={this.removeContact} 
             onClear={this.clearList}/>
          </div>
        </div>
        <footer>
          <div class="content">
            <span class="copyright">© 2022  Gilbert Choi, All Rights Reserved</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
