import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text, Pressable } from 'native-base';

const newsData = [
  { id: '1', title: 'Berita 1: Perkembangan Teknologi', screen: 'News1' },
  { id: '2', title: 'Berita 2: Cuaca Ekstrem', screen: 'News2' },
  { id: '3', title: 'Berita 3: Sepak Bola Indonesia', screen: 'News3' },
];

const News = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(item.screen)}>
      <Box p="4" my="2" bg="coolGray.100" rounded="md">
        <Text fontSize="lg" bold>{item.title}</Text>
      </Box>
    </Pressable>
  );

  return (
    <Box flex={1} bg="white" p="4">
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Box>
  );
};

export default News;
