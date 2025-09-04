import { Container, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return <Container maxW={"1140px"} px={4}>>
    <Flex
    h={16}
    align={"center"}
    justifyContent={"space-between"}
    flexDir={
        { base: "column", sm: "row" }
    }>

    </Flex>
    </Container>
  );
};

export default Navbar;