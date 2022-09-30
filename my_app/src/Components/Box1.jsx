import {
    Container,
    SimpleGrid,
    Image,
    Heading,
    Text,
    Stack,
    StackDivider,
    Grid,
    useColorModeValue,
  } from '@chakra-ui/react';
 
  

  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading as='u' fontSize={'3xl'}>PLETHORA OF OPPORTUNITIES </Heading>
            
            <Heading as='u' textColor={'rgb(221, 31, 45)'}>FOR YOU</Heading>
            

            <Text color={'gray.500'} fontSize={'lg'} >
            We are on a mission to connet employers to young talent all over India.
            With our strong coperate network ,it will no longer be a challenge to find the right internship 
            for you.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
            </Stack>
          </Stack>
          <Grid templateColumns='repeat(4,1fr)' gap={3}>
           {/* <Stack direction='row'> */}
             <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-1.png'
             alt='Disneip'
           />
           <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-2.png'
             alt=''
           />
           <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-3.png'
             alt=''
           />
           <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-4.png'
             alt=''
           />
             <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-21.png'
             alt='Disneip'
           />
             <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-6.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-7.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-8.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-9.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-10.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-11.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-12.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-13.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-14.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-15.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-16.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-17.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-18.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-19.png'
             alt='Disneip'
           />
            <Image
             boxSize='70px' 
             width={100}
             objectFit='cover'
             src='https://assets.interntheory.com/creative/home-logo/logo-20.png'
             alt='Disneip'
           />
           
           

             
        </Grid>
        </SimpleGrid>
      </Container>
    );
  }