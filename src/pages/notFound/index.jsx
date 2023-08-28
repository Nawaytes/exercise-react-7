import { Center, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Center className='main'>
      <VStack>
        <Text fontSize='38px' mt={3} mb={2}>
          404
        </Text>
        <Text fontSize='100px' color={"gray.800"} mb={6}>
          Not Found
        </Text>
      </VStack>
    </Center>
  );
}
