import React, { Component } from "react";
import ContactItem from "./ContactItem.jsx";

export default class ContactList extends Component {
  render() {
    let contacts = this.props.contactList;
    const trItem = contacts.map((item, index) => (
      <ContactItem
        key={index}
        contact={item}
        index={index}
        editContactSubmit={this.props.editContactSubmit}
        deleteContact={this.props.deleteContact}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}
