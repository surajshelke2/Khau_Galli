import React, { useState } from "react";
import { app } from "../firebase";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Container,
  Center,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User is Logged In :" + user);
        navigate("/menuPage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error appropriately
      });
  };

  return (
    <Center
      height="100vh"
      boxShadow="md"
      background="linear-gradient(45deg, #2196F3, #4CAF50)"
      borderRadius="xl"
      padding="4"
    >
      <Box>
        <Box
          mt={8}
          p={4}
          borderRadius="md"
          backgroundColor="rgba(255, 255, 255, 0.8)"
          boxShadow="lg"
          width="140%"
          height="400px"
        >
          <Text textAlign='center'  fontSize='x-large' fontFamily='cursive'>Login Here ...</Text>

          <FormControl isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Center>
            <Button onClick={loginUser} width="100%" mb={4} colorScheme="teal">
              Login
            </Button>
          </Center>
          <Text textAlign="center" mb={4}>
            Don't have an account?{" "}
            <Button
              onClick={handleSignUpClick}
              colorScheme="teal"
              variant="link"
            >
              Sign Up
            </Button>
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default Login;
