import "./App.css";
import InitialContact from "../../contacts.json";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(InitialContact);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
