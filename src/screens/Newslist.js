import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Newslist = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    //fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=98649cd7fb29483896ebdf70ac6dc09c')
    //fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=98649cd7fb29483896ebdf70ac6dc09c')
    fetch('https://newsapi.org/v2/everything?q=apple&from=2024-07-17&to=2024-07-17&sortBy=popularity&apiKey=98649cd7fb29483896ebdf70ac6dc09c')
      .then(response => response.json())
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {articles.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Text style={styles.author}>Author: {article.author}</Text>
            <Text style={styles.publishedAt}>Published At: {article.publishedAt}</Text>
            {article.urlToImage && (
              <Image source={{ uri: article.urlToImage }} style={styles.image} />
            )}
            <Text style={styles.content}>{article.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  articleContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  publishedAt: {
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  content: {
    color: 'gray',
  },
});

export default Newslist;