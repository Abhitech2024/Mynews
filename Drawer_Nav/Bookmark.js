// BookmarkScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const BookmarkScreen = ({ route }) => {
  const { bookmarks } = route.params || { bookmarks: [] };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookmarks.length === 0 ? (
        <Text style ={{fontSize : 25 , fontWeight : 'bold'}}>No bookmarks yet.</Text>
      ) : (
        bookmarks.map((article, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{article.title}</Text>
            <Text>{article.description}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookmarkScreen;
