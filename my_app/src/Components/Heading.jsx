import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
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
        </VStack>
      </Flex>
    );
  }
  