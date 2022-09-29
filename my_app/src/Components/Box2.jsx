// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Grid,
  Text,
  Stack,
  Container,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
export default function WithSpeechBubbles() {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>LET'S GET SOME </Heading> 
            <Heading textColor={'rgb(221, 31, 45)'}> WORK EXPERIENCE </Heading>
            
            <Text>We have been working with clients around the world</Text>
            </Stack>
            <Grid templateColumns='repeat(4,1fr)' gap={3}>
           {/* <Stack direction='row'> */}
             <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg'
             alt='Disneip'
           />
            <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/BD.jpg'
             alt='Disneip'
           />
            
            <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg'
             alt='Disneip'
           />
             <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/Graphic.jpg'
             alt='Disneip'
           />
            <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/Finance.jpg'
             alt='Disneip'
           />
             <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/HR.jpg'
             alt='Disneip'
           />
             <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/Eng.jpg'
             alt='Disneip'
           />
             <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-internships/All-Internships.jpg'
             alt='Disneip'
           />
           </Grid>
        </Container>
        </Box>
        );
  }
 