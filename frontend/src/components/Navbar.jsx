import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { LiaPlusSquare } from "react-icons/lia";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Container maxW={"1140px"} px={4}> 
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row",

      }}
    >
  <Text
          fontSize={{ base: "22" , sm: "28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
          bgClip={"text"}
         > 
          <Link to="/">Product Store 🛒 </Link>
      </Text>
      
      <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
             <Button>
               <LiaPlusSquare fontSize={"20"} />
             </Button>
           </Link>  
            <Button onClick={toggleColorMode}>{colorMode ==="light" ? "Dark" : "Light"}</Button>
      </HStack>

    </Flex>
  
  
  
  </Container>
  
};

export default Navbar;