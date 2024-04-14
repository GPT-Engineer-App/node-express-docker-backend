import { useState } from "react";
import { Box, Heading, Text, Image, Button, Input, Stack, useToast } from "@chakra-ui/react";
import { FaServer, FaDocker, FaNodeJs } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email to your backend API
    console.log(`Subscribing ${email} to the newsletter`);
    setEmail("");
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Backend Development with Node.js, Express & Docker
      </Heading>

      <Stack direction={["column", "row"]} spacing={8} mb={16}>
        <Box>
          <FaNodeJs size={100} color="green.500" />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Node.js
          </Text>
          <Text mt={2}>JavaScript 런타임 환경으로 서버 사이드 개발에 사용됩니다.</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleHByZXNzLmpzJTIwbG9nb3xlbnwwfHx8fDE3MTMwOTQ1MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Express.js" boxSize={100} objectFit="contain" />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Express
          </Text>
          <Text mt={2}>Node.js를 위한 웹 프레임워크로 API 개발을 간편하게 해줍니다.</Text>
        </Box>
        <Box>
          <FaDocker size={100} color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Docker
          </Text>
          <Text mt={2}>애플리케이션을 컨테이너화하여 배포와 관리를 용이하게 합니다.</Text>
        </Box>
      </Stack>

      <Box mb={8}>
        <Heading size="xl" mb={4}>
          Why Backend Development Matters
        </Heading>
        <Text fontSize="lg">백엔드는 웹 애플리케이션의 핵심 로직과 데이터를 다룹니다. Node.js와 Express로 확장성 있고 효율적인 API 서버를 구축하고, Docker로 애플리케이션을 컨테이너화하여 일관된 개발 및 배포 환경을 제공합니다. 백엔드 개발은 웹 애플리케이션의 성능, 보안, 확장성을 좌우하는 중요한 영역입니다.</Text>
      </Box>

      <Box>
        <Heading size="xl" mb={4}>
          Stay Updated on Backend Development
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack direction={["column", "row"]}>
            <Input placeholder="Enter your email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" size="lg" type="submit" leftIcon={<FaServer />}>
              Subscribe
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Index;
