import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert('All fields are required');
      return;
    }

    // Simulate sending message
    console.log('Message sent:', { name, email, message });
    Alert.alert('Message sent successfully!');

    // Clear fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/726/726623.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>📧 Email:</Text>
        <Text style={styles.infoText}>sales@justping.com</Text>

        <Text style={styles.infoLabel}>📞 Phone:</Text>
        <Text style={styles.infoText}>+91 98181 33151</Text>
      </View>

      <Text style={styles.formTitle}>Send a Message</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  infoContainer: {
    alignSelf: 'stretch',
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  infoLabel: {
    fontWeight: '600',
    color: '#666',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ContactUsPage;
