import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
  } from '@chakra-ui/react';
  export default function SplitWithImage() {
    return (
      <Container maxW='5xl'py='12' bg='white'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded='md'
              alt='feature image'
              width='300px'
              marginBottom='40'
              src='https://assets.interntheory.com/creative/chart.png'
              objectFit='cover'
            />
          </Flex>
          <Stack spacing='4' marginTop='100px'>
          <Heading as='u' fontSize='2xl'>WE ARE CONSTANTLY </Heading>
            
            <Heading as='u' textColor={'rgb(221, 31, 45)'}>GROWING</Heading>
            <Text color='gray.500' fontSize='md'>
            we are on a mission to help every student in India.Upgrading your CV and getting you a meaningful 
            job remains our sole motive and we not stopping anytime soon.</Text>
           
          </Stack>
          

        </SimpleGrid>
      </Container>
    );
  }
  