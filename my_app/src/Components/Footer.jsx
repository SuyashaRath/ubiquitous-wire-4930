import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { FaTwitter,FaFacebookF } from 'react-icons/fa';
import {GrLinkedinOption,GrInstagram } from 'react-icons/gr';


const ListHeader = () => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>

    </Text>
  );
};
const SocialButton = ({
    
  }) 

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('#446478')}
      color={useColorModeValue('gray.700', 'white.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Button label={'Facebook'} href={'https://www.facebook.com/interntheory'}>
            <FaFacebookF /></Button>
            <Button label={'Linkedin'} href={'https://www.linkedin.com/company/interntheory'}>
            <GrLinkedinOption/></Button>
            <Button label={'Twitter'} href={'https://twitter.com/InternTheory'}>
            <FaTwitter /></Button>
            <Button label={'Instagram'} href={'https://www.instagram.com/interntheory/'}>
                <GrInstagram /></Button>
                </Stack>

            <Stack align={'flex-start'} textColor='white'>
            <ListHeader>Product</ListHeader>
            <Text as='u'>BY PLACE</Text>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'https://www.interntheory.com/internships/internships-in-mumbai'}>
                Internship in Mumbai</Link>
            </Stack>
            <Link href={'https://www.interntheory.com/internships/internships-in-delhi'}>
              Internship in Delhi</Link>
            <Link href={'https://www.interntheory.com/internships/internships-in-bangalore'}>
              Internship in Bangalore</Link>
            <Link href={'https://www.interntheory.com/internships/internships-in-pune'}>
              Internship in Pune</Link>
            <Link href={'https://www.interntheory.com/internships/internships-in-hyderabad'}>
              Internship in Hyderabad</Link>
          </Stack> 
          <Stack align={'flex-start'} textColor='white'>
            <ListHeader>Company</ListHeader>
            <Text as ='u'>BY PROFILE</Text>
            <Link href={'https://www.interntheory.com/internships/marketing-internships'}>
              Marketing Internships</Link>
            <Link href={'https://www.interntheory.com/internships/business-development-internships'}>
              Business Development Internships</Link>
            <Link href={'https://www.interntheory.com/internships/content-writing-internships'}>
              Content Writing Internships</Link>
            <Link href={'https://www.interntheory.com/internships/graphic-designing-internships'}>
              Graphic Designing Interships</Link>
            <Link href={'https://www.interntheory.com/internships/human-resources-internships'}>
              HR Internships</Link>
            <Link href={'https://www.interntheory.com/internships/engineering-internships'}>
              Engineering Interships</Link>
          </Stack>
          <Stack align={'flex-start'} textColor='white'>
            <ListHeader>Legal</ListHeader>
            <Text as='u'>BY TYPE</Text>
             <Link href={'https://www.interntheory.com/full-time-internships/internships'}>
              Full Time Internships</Link>
            <Link href={'https://www.interntheory.com/part-time-internships/internships'}>
              Part Time Internships</Link>
            <Link href={'https://www.interntheory.com/work-from-home-internships/internships'}>
              Work From Home Internships</Link>
          </Stack>
        
        </SimpleGrid>
      </Container>
      <Box py={10}>
      <Stack direction='row' spacing='14' fontSize='md' marginLeft='20' textColor='white'>
          <Link href={'https://www.interntheory.com/refund-and-cancellation-policy'}>
            REFUND & CANCELLATION POLICY</Link>
          <Link href={'https://www.interntheory.com/courses'}>COURSES</Link>
          <Link href={'https://www.interntheory.com/terms'}>TERMS AND CONDITIONS</Link>
          <Link href={'https://www.interntheory.com/privacy'}>PRIVACY POLICY</Link>
          <Link href={'https://www.interntheory.com/contact'}>CONTACT US</Link>
          <Link href={'https://www.interntheory.com/about'}>ABOUT US</Link>
          <Link href={'https://www.interntheory.com/sitemap.xml'}>SITEMAP</Link>
        </Stack>

        <Flex
        borderTopWidth={1}
        borderStyle={'solid'}
        align={'center'}>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'} textColor='white'>
          © 2015-2022 INTERNTHEORY.ALL RIGHTS RESERVED.
        </Text>
      </Box>
    </Box>
  );
}
