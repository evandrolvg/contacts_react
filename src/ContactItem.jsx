import React, { Component } from "react";

export default class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editContact = this.editContact.bind(this);
    this.editContactSubmit = this.editContactSubmit.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  deleteContact() {
    const { id } = this.props.contact;
    this.props.deleteContact(id);
  }
  editContact() {
    console.log("state edt");
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  editContactSubmit() {
    console.log("editContactSubmit ContactItem");
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editContactSubmit(
      this.props.contact.id,
      this.nameInput.value,
      this.emailInput.value,
      this.phoneInput.value
    );
  }
  render() {
    const { name, email, phone } = this.props.contact;

    // console.log("render contact item");
    // console.log(this.props);
    // console.log(this.state);
    return this.state.isEdit === true ? (
      <tr className="bg-primary" key={this.props.index}>
        <td className="text-center">
          <input
            ref={nameInput => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td className="text-center">
          <input
            defaultValue={email}
            ref={emailInput => (this.emailInput = emailInput)}
          />
        </td>
        <td className="text-center">
          <input
            ref={phoneInput => (this.phoneInput = phoneInput)}
            defaultValue={phone}
          />
        </td>
        <td className="text-center">
          <i className="far fa-save" onClick={this.editContactSubmit}></i>
        </td>
        <td className="text-center"></td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td className="text-center">{name}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{phone}</td>
        <td className="text-center">
          <i className="far fa-edit" onClick={this.editContact}></i>
        </td>
        <td className="text-center">
          <i className="fas fa-trash" onClick={this.deleteContact}></i>
        </td>
      </tr>
    );
  }
}
