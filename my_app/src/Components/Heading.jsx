import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Input,
    Select,
    Heading,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage={
          'url(https://assets.interntheory.com/creative/Homepage-Banner.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
              Let's Get You
            <Text
              backgroundColor={'rgb(221, 31, 45)'}
              color={'white'}
              fontWeight={'bold'}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
               Ready
            </Text> </Text>
            </Stack>
            <Stack maxW={'xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={50}
              display={'block'} margin={0} overflowWrap={'break-word'}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xs', md: 'xl' })}>
              The One Stop Upgrade Your Resume.Expand Your Skillset.Do An Internship.Get Placed.</Text>
              </Stack>
              <Stack> <Flex gap='3' marginTop='10'>
                <Input type='Text' placeholder='cities' bg='white'overflow='hidden' position='relative'>
                </Input>
                <Select type='Text' bg='white' placeholder='Type'>
                <option value='option1'>Full Time</option>
                <option value='option2'>Part Time</option>
               <option value='option3'>Work From Home Time</option> 
               </Select>
               <Select type='Text' bg='white' placeholder='Preferences'>
                <option value='option1'>Actuarial Science</option>
                <option value='option2'>Admin</option>
               <option value='option3'>Animation</option> 
               <option value='option3'>Architecture</option> 
               <option value='option3'>Software Development</option> 

               </Select>
               <Heading as='h5' size='md' marginTop='1'> OR </Heading>
               <input type='search' bg='white'>
               </input> 
               <Button colorScheme='red' size='md' width='220px' cursor='pointer'>SEARCH</Button>
               </Flex>
               </Stack>
     
        </VStack>
      </Flex>
    );
  }
  