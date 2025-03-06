import "./App.css";
import InitialContact from "../../contacts.json";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : InitialContact;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
