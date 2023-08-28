import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Center>
        <VStack border={"1px solid gray"} mt={50} padding={50}>
          <Text fontSize={"6xl"}>Counter Page</Text>
          <Text fontSize={"xxx-large"}>{count}</Text>

          <Button
            colorScheme={"blue"}
            width={200}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </Button>
          <Button
            colorScheme={"red"}
            width={200}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </Button>
        </VStack>
      </Center>
    </>
  );
}
