import React from 'react';
import { Box, Button, Image, VStack, HStack, Text, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Pastikan Anda menginstal @expo/vector-icons

const HomeScreen = ({ navigation }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="lightBlue.100" p="5">
      {/* Gambar menggantikan tulisan "Home" */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/82/34/0b/82340b2b18fe0a458dee71aa2596f8b7.jpg',
        }}
        alt="Home Logo"
        width="150px"
        height="150px"
        mb="8"
        borderRadius="full"
      />

      {/* Tombol Navigasi */}
      <VStack space="4" width="100%">
        <Pressable onPress={() => navigation.navigate('Berita')}>
          {({ isPressed }) => (
            <Box
              bg={isPressed ? 'primary.600' : 'primary.500'}
              py="4"
              px="6"
              rounded="lg"
              shadow="3"
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
            >
              <MaterialIcons name="article" size={24} color="white" />
              <Text ml="3" fontSize="lg" color="white" bold>
                Berita
              </Text>
            </Box>
          )}
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Information')}>
          {({ isPressed }) => (
            <Box
              bg={isPressed ? 'secondary.600' : 'secondary.500'}
              py="4"
              px="6"
              rounded="lg"
              shadow="3"
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
            >
              <MaterialIcons name="info" size={24} color="white" />
              <Text ml="3" fontSize="lg" color="white" bold>
                Informasi
              </Text>
            </Box>
          )}
        </Pressable>
      </VStack>
    </Box>
  );
};

export default HomeScreen;
