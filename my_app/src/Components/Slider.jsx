import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {Container,Box,Stack,Text,WrapItem,Avatar, HStack, VStack, Heading } from '@chakra-ui/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
          <Box bg='white'>
        <Container height='250px' bg='rgb(226, 224, 238)'>
          <HStack spacing={0} align={'center'}>
          <WrapItem>
    <Avatar size='xl' marginTop='10px'src='https://assets.interntheory.com/img/testimonial-image/in3.jpg' />
       </WrapItem>
       <VStack><Heading as='h4' paddingLeft='10px' fontWeight='bold'>Amani Nagda</Heading>
       <Text fontWeight='bold' textColor='#4299E1'>Intern at Viacom 18</Text> 
       </VStack>
       </HStack>
       <HStack>
        <Text color='gray.500' fontSize='md' fontStyle='italic'>
         "I was on a look out for an internship to spend my summer productively and istumbled upon inter
                        Theory. Their team was very kind and kept me updated . I applied for viacom 18 and got through
                        .I thank Intern Theory team for giving me this Opportunity".
                       </Text>
                        
            </HStack>
           </Container>
        </Box>
      </SwiperSlide>
          <SwiperSlide>
          <Box bg='white'>
        <Container height='250px' bg='rgb(226, 224, 238)'>
           <HStack spacing={0} align={'center'}>
          <WrapItem>
    <Avatar size='xl'marginTop='10px'src='https://assets.interntheory.com/img/testimonial-image/in4.jpg' />
       </WrapItem>
       <VStack><Heading as='h4' paddingLeft='10px' fontWeight='bold'>Harshil Bhadra</Heading>
       <Text fontWeight='bold' textColor='#4299E1'>Intern at Porsche</Text> 
       </VStack>
       </HStack>
       <HStack>
        <Text color='gray.500' fontSize='md' fontStyle='italic'>
                        "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute.
                         Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! 
                         Thanks for giving me the best start."</Text>
                        
            </HStack>
           </Container>
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box bg='white'>
        <Container height='250px' bg='rgb(226, 224, 238)'>
        <HStack spacing={0} align={'center'}>
          <WrapItem>
    <Avatar size='xl'marginTop='10px'src='https://assets.interntheory.com/img/testimonial-image/in2.jpg' />
       </WrapItem>
       <VStack><Heading as='h4' paddingLeft='10px' fontWeight='bold'>Siddharth Viyyapu</Heading>
       <Text fontWeight='bold' textColor='#4299E1'>Intern at Gooseberry Homes</Text> 
       </VStack>
       </HStack>
       <HStack>
        <Text color='gray.500' fontSize='md' fontStyle='italic'>
         "I created my profile because I had before Intern Theory,not come across a consultancy that would 
         execute the responsibility of getting a result for your application irrespective of being failure
         or success the way they did.They've set the bars really high!Kudos team!"</Text>
                        
            </HStack>
           </Container>
        </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Box bg='white'>
        <Container height='250px' bg='rgb(226, 224, 238)'>
        <HStack spacing={0} align={'center'}>
          <WrapItem>
    <Avatar size='xl'marginTop='10px'src='https://assets.interntheory.com/img/testimonial-image/in1.jpg' />
       </WrapItem>
       <VStack><Heading as='h4' paddingLeft='10px' fontWeight='bold'>Sshikha Bodwaani</Heading>
       <Text fontWeight='bold' textColor='#4299E1'>Sr. Exec. HR at BookMyShow</Text> 
       </VStack>
       </HStack>
       <HStack>
        <Text color='gray.500' fontSize='md' fontStyle='italic'>
         "We have been using InternTheory for over a year now and are very happy with the quality of 
         applications that we receive.Their team has been very helpful in screening applications
         for the various internship requirements we had.It has been a delight working with them."
         </Text>   </HStack>
           </Container>
        </Box>
          </SwiperSlide>
          </Swiper>
          </>
  );
}  