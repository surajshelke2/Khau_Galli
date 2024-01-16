import React from "react";
import { Flex, IconButton, Button, Icon, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Navbar = () => {

  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {

    signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
      toast({
        title: "Logout Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      toast({
        title: "Logout Failed",
        description: "An error occurred during logout.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
    
  };

  const handleCardButtonClick = () => {
    console.log("Card button clicked");
  };

  return (
    <div>
      <Flex align="center" justify="space-between" p={4} bg="gray.800">
        <Heading size="lg" color="white" fontFamily='cursive'  fontSize="xl">
          Khau Galli
        </Heading>

        <Flex align="center">
          <IconButton
            icon={<i className="fa-solid fa-cart-shopping" />}
            size="md"
            aria-label="Card Icon Button"
            onClick={handleCardButtonClick}
            mr={2}
          />

          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
