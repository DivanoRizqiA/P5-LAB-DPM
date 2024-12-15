import React from 'react';
import { Box, Image, VStack, Text, Pressable, HStack } from 'native-base';
import { Linking } from 'react-native';

const Information = () => {
  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };

  return (
    <Box flex={1} bg="lightGreen.100" p="5">
      {/* Bagian Atas */}
      <Box alignItems="center" mb="10">
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/82/34/0b/82340b2b18fe0a458dee71aa2596f8b7.jpg',
          }}
          alt="App Logo"
          size="20"
          mb="5"
        />
        {/* Informasi Deskripsi */}
        <Text fontSize="xl" bold mb="2">
          About This App
        </Text>
        <Text fontSize="md" textAlign="center">
          Aplikasi ini dibuat untuk memberikan pengalaman navigasi yang sederhana dan efisien. 
          Anda dapat melihat halaman utama, daftar berita, dan informasi lebih lanjut di sini.
        </Text>
      </Box>

      <HStack space="8" alignItems="center" justifyContent="center" mt="auto">
        {/* LinkedIn */}
        <Pressable onPress={() => openLink("https://www.linkedin.com/in/Divano Rizqi Anandra")}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
            }}
            alt="LinkedIn Logo"
            size="10"
          />
        </Pressable>
        
        {/* Email */}
        <Pressable onPress={() => openLink("mailto:divanorizqi@gmail.com")}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
            }}
            alt="Gmail Logo"
            size="10"
          />
        </Pressable>

        {/* Instagram */}
        <Pressable onPress={() => openLink("https://www.instagram.com/divanorizqi")}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
            }}
            alt="Instagram Logo"
            size="10"
          />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Information;
