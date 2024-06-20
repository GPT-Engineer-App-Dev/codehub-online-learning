import { useState } from "react";
import { Container, Heading, VStack, Box, Button, Text } from "@chakra-ui/react";

const coursesData = [
  { id: 1, title: "Introduction to JavaScript", description: "Learn the basics of JavaScript, the most popular programming language in web development." },
  { id: 2, title: "Advanced React", description: "Dive deep into React and learn advanced concepts and patterns for building scalable applications." },
  { id: 3, title: "Python for Data Science", description: "Master Python and its libraries to analyze data and build machine learning models." },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h1" size="2xl" mb={8}>Available Courses</Heading>
      <VStack spacing={4} width="100%">
        {coursesData.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{course.title}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => handleEnroll(course.id)}
              isDisabled={enrolledCourses.includes(course.id)}
            >
              {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Courses;