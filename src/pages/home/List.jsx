import {
  Box,
  Button,
  Center,
  Grid,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function ListPage() {
  const listRef = useRef(null);

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState(() => {
    const storedReply = localStorage.getItem("replyChat");
    return storedReply ? JSON.parse(storedReply) : [];
  });

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
    localStorage.setItem("replyChat", JSON.stringify(reply));
  }, [reply]);

  const sendMessage = () => {
    setMessage("");
    setReply([...reply, message]);
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
          overflowY={"scroll"}
          ref={listRef}
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
          {reply
            ? reply.map((item, index) => (
                <Text
                  key={item}
                  margin={2}
                  backgroundColor={"facebook.900"}
                  color={"white"}
                  width={"fit-content"}
                  padding={"5px"}
                  pl={"10px"}
                  pr={"10px"}
                  borderRadius={"10px"}
                  ml={"auto"}
                >
                  {item}
                </Text>
              ))
            : null}
        </Box>
        <Grid templateColumns={"5fr 1fr"} gap={"10px"}>
          <Input
            placeholder='Type message here...'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            value={message}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </VStack>
    </Center>
  );
}
