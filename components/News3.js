import React from 'react';
import { Box, Text, Image } from 'native-base';

const News3 = () => {
  return (
    <Box flex={1} p="4" bg="white">
      <Image
        source={{
          uri: 'https://asset.kompas.com/crops/NhyHTUAAO_6JCon_FgxHDWnz0-4=/0x0:4002x2668/750x500/data/photo/2024/05/31/665a0020aaae1.jpeg',
        }}
        alt="Sepak Bola"
        width="100%"
        height="200px"
        mb="4"
        borderRadius="md"
      />
      <Text fontSize="2xl" bold mb="4">Persib Bandung sebagai Juara Liga 1 2023/2024</Text>
      <Text fontSize="md">
      Persib Bandung berhasil meraih gelar juara Liga 1 2023/2024 setelah mengalahkan Persija Jakarta dengan skor 2-1 di Stadion Gelora Bung Karno, Senin (1/5/2023).
      </Text>
    </Box>
  );
};

export default News3;
