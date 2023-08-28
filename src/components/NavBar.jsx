import { Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Flex position={"fixed"} top={"0"} bgColor={"gray.200"} width={"100vw"}>
        <HStack
          justifyContent={"space-between"}
          width={"40vw"}
          left={"0"}
          margin={"auto"}
        >
          <Link to='/'>Home</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/stopwatch'>Stopwatch</Link>
          <Link to='/fetch-api'>Fetch Api</Link>
          <Link to='/filter-page'>Filter Page</Link>
          <Link to='/chitchat'>Filter Page</Link>
        </HStack>
      </Flex>
    </>
  );
}
