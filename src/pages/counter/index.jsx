import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../app/features/counter/counterSlicer";

export default function CounterPage() {
  // const count2 = useSelector((state) => state);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  return (
    <>
      <Center>
        <VStack
          border={"1px solid gray"}
          mt={50}
          padding={50}
          borderRadius={10}
        >
          <Text fontSize={"6xl"}>Counter Page using Redux</Text>
          <Text fontSize={"xxx-large"}>{counter}</Text>

          <Button
            colorScheme={"blue"}
            width={200}
            onClick={() => {
              dispatch(increment());
              // setCount(count + 1);
            }}
          >
            Increment
          </Button>
          <Button
            colorScheme={"red"}
            width={200}
            onClick={() => {
              dispatch(decrement());
              // setCount(count - 1);
            }}
          >
            Decrement
          </Button>
        </VStack>
      </Center>
    </>
  );
}
