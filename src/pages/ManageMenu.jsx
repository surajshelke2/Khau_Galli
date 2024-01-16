import React, { useEffect, useState } from 'react';
import { Flex, Heading, Image, Text, Button, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ManageMenu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://adorable-bat-fatigues.cyclic.app/best-foods"
        );

        const foodData = response.data;
        setFoodItems(foodData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addNotification = () => {
    toast({
      title: 'Item Added ⬆',
      status: 'success',
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    });
  };

  const imageOnError = (event) => {
    event.target.src = 'https://www.pngwing.com/en/free-png-pgtkj'; 
  };

  return (
    <>
      <Navbar />
      <Flex p={6} flexWrap="wrap" justifyContent="center">
        <Heading mb={6} w="100%">
          Best Menu Items 
        </Heading>
        {foodItems.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            m={2}
            w="250px" 
            bgGradient="linear(to-b, lightPink, white)" 
          >
            <Image
              src={item.img}
              alt={item.name}
              onError={imageOnError}
              boxSize="200px" 
            />
            <Text fontWeight="bold" fontSize="lg" mt={2}>
              {item.name}
            </Text>
            <Text fontSize="md">${item.price}</Text>
            <Button colorScheme="teal" mt={4} onClick={() => addNotification()}>
              Add to Menu
            </Button>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default ManageMenu;
