import React, {useState} from 'react';
import { View, ScrollView, Text, StyleSheet,SafeAreaView,TextInput,TouchableOpacity, Button} from 'react-native';

const Mobilecontact = () => {
    const [searchQuery, setSearchQuery] = useState(''); //ADD
    const [contacts, setContacts] = useState( [
    { id: 1,  name: 'Alice Johnson', phone: '555-123-4567', email: 'alice@example.com' },
    { id: 2,  name: 'Bob Smith', phone: '555-234-5678', email: 'bob@example.com' },
    { id: 3,  name: 'Charlie Brown', phone: '555-345-6789', email: 'charlie@example.com' },
    { id: 4,  name: 'David Lee', phone: '555-456-7890', email: 'david@example.com' },
    { id: 5,  name: 'Emma Davis', phone: '555-567-8901', email: 'emma@example.com' },
    { id: 6,  name: 'Frank Wilson', phone: '555-678-9012', email: 'frank@example.com' },
    { id: 7,  name: 'Grace Miller', phone: '555-789-0123', email: 'grace@example.com' },
    { id: 8,  name: 'Henry Thompson', phone: '555-890-1234', email: 'henry@example.com' },
    { id: 9,  name: 'Ivy Harris', phone: '555-901-2345', email: 'ivy@example.com' },
    { id: 10, name: 'Jack Robinson', phone: '555-012-3456', email: 'jack@example.com' },
    { id: 11, name: 'Kate White', phone: '555-234-5678', email: 'kate@example.com' },
    { id: 12, name: 'Veeleena Agnihotri cutee', phone: '9811082558', email: 'veeleenaagnihotri@gmail.com' },
    { id: 13, name: 'Mia Clark', phone: '555-456-7890', email: 'mia@example.com' },
    { id: 14, name: 'Nathan Baker', phone: '555-567-8901', email: 'nathan@example.com' },
    { id: 15, name: 'Olivia Turner', phone: '555-678-9012', email: 'olivia@example.com' },
    { id: 16, name: 'Paula Martinez', phone: '555-789-0123', email: 'paula@example.com' },
    { id: 17, name: 'Quincy Scott', phone: '555-890-1234', email: 'quincy@example.com' },
    { id: 18, name: 'Ryan Rodriguez', phone: '555-901-2345', email: 'ryan@example.com' },
    { id: 19, name: 'Sophia Lopez', phone: '555-012-3456', email: 'sophia@example.com' },
    { id: 20, name: 'Thomas Perez', phone: '555-234-5678', email: 'thomas@example.com' },
    { id: 21, name: 'Uma Gonzalez', phone: '555-345-6789', email: 'uma@example.com' },
    { id: 22, name: 'Victor Nguyen', phone: '555-456-7890', email: 'victor@example.com' },
    { id: 23, name: 'Wendy King', phone: '555-567-8901', email: 'wendy@example.com' },
    { id: 24, name: 'Xavier Adams', phone: '555-678-9012', email: 'xavier@example.com' },
    { id: 25, name: 'Yara Hernandez', phone: '555-789-0123', email: 'yara@example.com' },
    { id: 26, name: 'Zachary Taylor', phone: '555-890-1234', email: 'zachary@example.com' },
    { id: 27, name: 'Ella Moore', phone: '555-901-2345', email: 'ella@example.com' },
    { id: 28, name: 'Finn Walker', phone: '555-012-3456', email: 'finn@example.com' },
    { id: 29, name: 'Gabriella Hill', phone: '555-234-5678', email: 'gabriella@example.com' },
    { id: 30, name: 'Holden Ramirez', phone: '555-345-6789', email: 'holden@example.com' },
    { id: 31, name: 'Isaac Baker', phone: '555-456-7890', email: 'isaac@example.com' },
    { id: 32, name: 'Jasmine Lee', phone: '555-567-8901', email: 'jasmine@example.com' },
    { id: 33, name: 'Kevin Foster', phone: '555-678-9012', email: 'kevin@example.com' },
    { id: 34, name: 'Lily Garcia', phone: '555-789-0123', email: 'lily@example.com' },
    { id: 35, name: 'Mason Martinez', phone: '555-890-1234', email: 'mason@example.com' },
    { id: 36, name: 'Nora Wilson', phone: '555-901-2345', email: 'nora@example.com' },
    { id: 37, name: 'Oscar Taylor', phone: '555-012-3456', email: 'oscar@example.com' },
    { id: 38, name: 'Penelope Lopez', phone: '555-234-5678', email: 'penelope@example.com' },
    { id: 39, name: 'Quinn Phillips', phone: '555-345-6789', email: 'quinn@example.com' },
    { id: 40, name: 'Robert Hill', phone: '555-456-7890', email: 'robert@example.com' },
    { id: 41, name: 'Samantha Carter', phone: '555-567-8901', email: 'samantha@example.com' },
    { id: 42, name: 'Theodore Allen', phone: '555-678-9012', email: 'theodore@example.com' },
    { id: 43, name: 'Ursula Bailey', phone: '555-789-0123', email: 'ursula@example.com' },
    { id: 44, name: 'Vincent Reed', phone: '555-890-1234', email: 'vincent@example.com' },
    { id: 45, name: 'Wendy Turner', phone: '555-901-2345', email: 'wendy@example.com' },
    { id: 46, name: 'Xavier Mitchell', phone: '555-012-3456', email: 'xavier@example.com' },
    { id: 47, name: 'Yvette Sanchez', phone: '555-234-5678', email: 'yvette@example.com' },
    { id: 48, name: 'Zane Rivera', phone: '555-345-6789', email: 'zane@example.com' },
    { id: 49, name: 'Aaron Gray', phone: '555-456-7890', email: 'aaron@example.com' },
    { id: 50, name: 'Bella Coleman', phone: '555-567-8901', email: 'bella@example.com' },
    { id: 51, name: 'Caleb Hughes', phone: '555-678-9012', email: 'caleb@example.com' },
    { id: 52, name: 'Diana Peterson', phone: '555-789-0123', email: 'diana@example.com' },
    { id: 53, name: 'Ethan Morris', phone: '555-890-1234', email: 'ethan@example.com' },
    { id: 54, name: 'Faith Griffin', phone: '555-901-2345', email: 'faith@example.com' },
    { id: 55, name: 'Gabriel Scott', phone: '555-012-3456', email: 'gabriel@example.com' },
    { id: 56, name: 'Hannah Ward', phone: '555-234-5678', email: 'hannah@example.com' },
    { id: 57, name: 'Ian Russell', phone: '555-345-6789', email: 'ian@example.com' },
    { id: 58, name: 'Julia Nelson', phone: '555-456-7890', email: 'julia@example.com' },
    { id: 59, name: 'Keith Campbell', phone: '555-567-8901', email: 'keith@example.com' },
    { id: 60, name: 'Luna Ramirez', phone: '555-678-9012', email: 'luna@example.com' },
    { id: 61, name: 'Maxwell Cooper', phone: '555-789-0123', email: 'maxwell@example.com' },
{ id: 62, name: 'Natalie Price', phone: '555-890-1234', email: 'natalie@example.com' },
{ id: 63, name: 'Oliver Hayes', phone: '555-901-2345', email: 'oliver@example.com' },
{ id: 64, name: 'Paige Morgan', phone: '555-012-3456', email: 'paige@example.com' },
{ id: 65, name: 'Quincy Edwards', phone: '555-234-5678', email: 'quincy@example.com' },
{ id: 66, name: 'Riley Bell', phone: '555-345-6789', email: 'riley@example.com' },
{ id: 67, name: 'Savannah Ross', phone: '555-456-7890', email: 'savannah@example.com' },
{ id: 68, name: 'Tristan Ward', phone: '555-567-8901', email: 'tristan@example.com' },
{ id: 69, name: 'Ulysses Gray', phone: '555-678-9012', email: 'ulysses@example.com' },
{ id: 70, name: 'Victoria Brooks', phone: '555-789-0123', email: 'victoria@example.com' },
{ id: 71, name: 'Winston Cole', phone: '555-890-1234', email: 'winston@example.com' },
{ id: 72, name: 'Xander Hayes', phone: '555-901-2345', email: 'xander@example.com' },
{ id: 73, name: 'Yasmine Foster', phone: '555-012-3456', email: 'yasmine@example.com' },
{ id: 74, name: 'Zara Phillips', phone: '555-234-5678', email: 'zara@example.com' },
{ id: 75, name: 'Adam Montgomery', phone: '555-345-6789', email: 'adam@example.com' },
{ id: 76, name: 'Brianna Sullivan', phone: '555-456-7890', email: 'brianna@example.com' },
{ id: 77, name: 'Carter Jenkins', phone: '555-567-8901', email: 'carter@example.com' },
{ id: 78, name: 'Daisy Weaver', phone: '555-678-9012', email: 'daisy@example.com' },
{ id: 79, name: 'Elijah Torres', phone: '555-789-0123', email: 'elijah@example.com' },
{ id: 80, name: 'Fiona Goodman', phone: '555-890-1234', email: 'fiona@example.com' },
{ id: 81, name: 'Gavin Chapman', phone: '555-901-2345', email: 'gavin@example.com' },
{ id: 82, name: 'Hazel Daniels', phone: '555-012-3456', email: 'hazel@example.com' },
{ id: 83, name: 'Isaiah Keller', phone: '555-234-5678', email: 'isaiah@example.com' },
{ id: 84, name: 'Jasmine Reed', phone: '555-345-6789', email: 'jasmine@example.com' },
{ id: 85, name: 'Kai Harrison', phone: '555-456-7890', email: 'kai@example.com' },
{ id: 86, name: 'Layla Nguyen', phone: '555-567-8901', email: 'layla@example.com' },
{ id: 87, name: 'Milo Silva', phone: '555-678-9012', email: 'milo@example.com' },
{ id: 88, name: 'Nina Tucker', phone: '555-789-0123', email: 'nina@example.com' },
{ id: 89, name: 'Owen Walsh', phone: '555-890-1234', email: 'owen@example.com' },
{ id: 90, name: 'Piper Johnston', phone: '555-901-2345', email: 'piper@example.com' }  
  ]);

  const sortContacts = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  };


  return (<SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Contact"
        onChangeText={setSearchQuery}
        value={searchQuery} 
      />
      <Button title="My Contacts" onPress={sortContacts} />
    <ScrollView style={styles.container}>
        {filterContacts().map(contact => (
          <TouchableOpacity key={contact.id} style={styles.contact}>
            <Text style={styles.name}>{contact.name}</Text>
            <Text style={styles.phone}>{contact.phone}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  contact: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: 'brown',
  },
});

export default Mobilecontact;

