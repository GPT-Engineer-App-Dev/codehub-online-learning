import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to CodeMaster</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate platform to learn coding online. Start your journey with us today!</Text>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" variant="solid" size="lg" mr={2}>
            Start Learning
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="teal" variant="outline" size="lg" ml={2}>
            Browse Courses
          </Button>
        </Box>
        <Box mt={8}>
          <Image src="/images/learning-platform.png" alt="Learning Platform" borderRadius="md" />
        </Box>
        <Box mt={8} textAlign="center">
          <Heading as="h2" size="lg">Why CodeMaster?</Heading>
          <Text mt={4}>We offer a variety of coding courses, from beginner to advanced levels, taught by industry experts.</Text>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button leftIcon={<FaChalkboardTeacher />} colorScheme="teal" variant="solid" size="lg">
              Meet Our Instructors
            </Button>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;