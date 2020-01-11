export function addContact(contact) {
  console.log("addContact - contactActions");
  // console.log(contact);
  if (contact.id == "-Infinity") {
    contact.id = 1;
    console.log("ok");
  }
  return {
    type: "ADD_CONTACT",
    payload: contact
  };
}

export function deleteContact(Id) {
  return {
    type: "DELETE_CONTACT",
    payload: Id
  };
}

export function updateContact(contact) {
  return {
    type: "UPDATE_CONTACT",
    payload: contact
  };
}
