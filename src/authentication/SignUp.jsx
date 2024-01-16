import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Container,
  useToast,
  Center,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleLoginClick = () => {
    navigate("/");
  };

  const createNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        toast({
          title: "Account created successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/menuPage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
        toast({
          title: `Error: ${errorCode} - ${errorMessage}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };



  return (
    <Center
      height="120vh"
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
        >
           <Text textAlign='center'  fontSize='x-large' fontFamily='cursive'>Create Food Account Here ...</Text>
           <br></br>
          <FormControl isRequired padding="10px" width="100%" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              width="90%"
              padding="6px"
              borderRadius="4px"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired padding="10px" width="100%" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              width="90%"
              padding="6px"
              borderRadius="4px"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired padding="10px" width="100%" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              width="90%"
              padding="6px"
              borderRadius="4px"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired padding="10px" width="100%" mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              width="90%"
              padding="6px"
              borderRadius="4px"
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
           
          </FormControl>
          <Center>
          <Button
            onClick={createNewAccount}
            width="50%"
            padding="6px"
            borderRadius="4px"
            mb={4}
          >
            Sign Up
          </Button>
          </Center>
          <Text  textAlign= 'center' width="100%" mb={4}>
            Already have an account?{" "}
            <Button onClick={handleLoginClick}  colorScheme="teal" variant="link" color="blue.400">
              Login
            </Button>
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default SignUp;
