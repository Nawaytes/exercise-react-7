import {
  Box,
  Button,
  Center,
  Grid,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export default function HomePage() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    localStorage.clear("replyChat");
  }, []);

  const sendMessage = () => {
    console.log("message", message);
    localStorage.setItem("replyChat", message);
    window.location.href = "/list";
  };
  return (
    <Center height={"100vh"} mt={"20px"}>
      <VStack
        spacing={2}
        border={"1px"}
        borderColor={"gray.200"}
        borderRadius={"10px"}
        padding={"10px"}
        width={"25vw"}
      >
        <Box
          height={"200px"}
          width={"100%"}
          backgroundColor={"whatsapp.100"}
          borderRadius={"10px"}
        >
          <Text
            margin={2}
            backgroundColor={"whiteAlpha.800"}
            width={"fit-content"}
            padding={"5px"}
            pl={"10px"}
            pr={"10px"}
            borderRadius={"10px"}
          >
            Hi, I'm a chatbot, how can I help you?
          </Text>
        </Box>
        <Grid templateColumns={"5fr 1fr"} gap={"10px"}>
          <Input
            placeholder='Type message here...'
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </VStack>
    </Center>
  );
}
