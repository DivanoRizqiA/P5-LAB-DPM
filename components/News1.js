import React from 'react';
import { Box, Text, Image } from 'native-base';

const News1 = () => {
  return (
    <Box flex={1} p="4" bg="white">
      <Image
        source={{
          uri: 'https://gaper.io/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-27-at-2.32.38-PM.jpeg',
        }}
        alt="Perkembangan Teknologi"
        width="100%"
        height="200px"
        mb="4"
        borderRadius="md"
      />
      <Text fontSize="2xl" bold mb="4">Berita 1: Artificial Intelligence</Text>
      <Text fontSize="md">
        Teknologi AI semakin maju setiap hari. Ini memberikan dampak besar pada berbagai industri. llama, chatgpt, dan gemini adalah contoh teknologi AI yang sedang populer. AI membantu dalam berbagai bidang, seperti kesehatan, keuangan, dan pendidikan. Namun, ada juga risiko potensial seperti kehilangan pekerjaan dan privasi yang terancam.
      </Text>
    </Box>
  );
};

export default News1;
