import { Grid,Box,Container,Stack,Heading,useColorModeValue,Image } from '@chakra-ui/react'
export default function WithSpeechBubbles() {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>HOW ABOUT</Heading> 
            <Heading textColor={'rgb(221, 31, 45)'}> UPSKILLING ? </Heading>
            
            </Stack>

<Grid templateColumns='repeat(3, 1fr)' gap={6}>
   <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg'
             alt=''
           />
          <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg'
             alt=''
           />
           <Image
             boxSize='100px' 
             width={400}
             height={180}
             borderRadius={4}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg'
             alt=''
           />
  
</Grid>
</Container>
        </Box>
      );
    }
    