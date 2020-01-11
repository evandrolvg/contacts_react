import React, { Component } from "react";
import "./App.css";
import ContactList from "./ContactList.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addContact,
  deleteContact,
  updateContact
} from "./actions/contactActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewContact = this.addNewContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContactSubmit = this.editContactSubmit.bind(this);
  }
  componentWillMount() {}

  addNewContact() {
    console.log("addNewContact - App");

    this.props.addContact({
      id:
        Math.max(
          ...this.props.contactList.map(function(o) {
            // console.log("ID: " + o.id);
            return o.id != null ? o.id : 1;
          })
        ) + 1,
      name: "",
      email: "",
      phone: ""
    });
  }

  deleteContact(id) {
    let r = window.confirm("Deseja excluir este contato?");
    if (r === true) {
      this.props.deleteContact(id);
    }
  }

  editContactSubmit(id, name, email, phone) {
    console.log("editContactSubmit - App");
    this.props.updateContact({
      id: id,
      name: name,
      email: email,
      phone: phone
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                Contatos <small>(145926)</small>{" "}
              </div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th className="text-center">Nome</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Telefone</th>
                      <th className="text-center">Editar/Salvar</th>
                      <th className="text-center">Excluir</th>
                    </tr>
                  </thead>
                  <ContactList
                    deleteContact={this.deleteContact}
                    contactList={this.props.contactList}
                    editContactSubmit={this.editContactSubmit}
                  />
                </table>
                <button
                  className="btn btn-dark pull-left"
                  onClick={this.addNewContact}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addContact: addContact,
      deleteContact: deleteContact,
      updateContact: updateContact
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
