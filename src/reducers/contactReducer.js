const contactReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      let stateCopy = [...state, action.payload];
      console.log("ADD_CONTACT contactReducer");
      localStorage.setItem("contacts", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_CONTACT":
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(stateCopy));
      return stateCopy;

    case "UPDATE_CONTACT":
      console.log("UPDATE_CONTACT contactReducer");
      stateCopy = state.map(contact => {
        const { id, name, email, phone } = action.payload;
        // console.log(contact.id);
        // console.log(id);
        if (contact.id === id) {
          contact.name = name;
          contact.email = email;
          contact.phone = phone;
        }
        return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(stateCopy));
      return stateCopy;

    default:
      return state;
  }
};
export default contactReducer;
