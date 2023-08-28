import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import "./index.css";
import { useEffect, useState } from "react";
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const scroll = () => {
    const section = document.querySelector("#stopwatch");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toStringPadStart = (num) => {
    return String(num).padStart(2, "0");
  };

  //   const changeInterval = () => {
  //     const intervalId = setInterval(() => {
  //       setTime(time + 1);
  //     }, 10);
  //     return () => clearInterval(intervalId);
  //   };
  useEffect(() => {
    console.log("time", time);
    console.log("isRunning", isRunning);
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setSeconds(time % 60);
      setMinutes(Math.floor(time / 60) % 60);
      setHours(Math.floor(time / 3600));
      return () => clearInterval(intervalId);
    }
  }, [isRunning, time]);

  useEffect(() => {
    scroll();
  }, []);
  return (
    <Center className='main' id={"stopwatch"}>
      <VStack className='body-stopwatch'>
        <Text fontSize='38px' mt={3} mb={2}>
          Stopwatch
        </Text>
        <Text fontSize='100px' color={"gray.800"} mb={6}>
          {toStringPadStart(hours)}:{toStringPadStart(minutes)}:
          {toStringPadStart(seconds)}
        </Text>
        <HStack>
          <Button
            className='btn'
            backgroundColor={isRunning ? "red.400" : "green.200"}
            onClick={() => {
              setIsRunning(true);
            }}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            className='btn'
            onClick={() => {
              setSeconds(0);
              setMinutes(0);
              setHours(0);
              setTime(0);
              setIsRunning(false);
            }}
          >
            Reset
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
