import React from 'react';
import { Box, Text, Image } from 'native-base';

const News2 = () => {
  return (
    <Box flex={1} p="4" bg="white">
      <Image
        source={{
          uri: 'https://asset-2.tstatic.net/pekanbaru/foto/bank/images/mendung-pku-senin.jpg',
        }}
        alt="Cuaca Ekstrem"
        width="100%"
        height="200px"
        mb="4"
        borderRadius="md"
      />
      <Text fontSize="2xl" bold mb="4">Berita 2: Cuaca Pekanbaru</Text>
      <Text fontSize="md">
        Cuaca Pekanbaru sedang dalam keadaan ekstrem. Perhatikan keamanan saat beraktivitas di luar ruangan. Curah hujan tinggi dan angin kencang dapat membahayakan. Banjir dapat terjadi di beberapa daerah.
      </Text>
    </Box>
  );
};

export default News2;
