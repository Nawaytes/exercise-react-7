import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedId, setSelectedId] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("users", users);
      setUsers(users.data);
    }
    getUsers();
  }, []);

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  const deleteUser = (id) => {
    console.log("id", id);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <Center>
        <VStack>
          <Text fontSize='38px' mt={"100px"} mb={2}>
            Fetch Api
          </Text>
          <TableContainer border={"1px "} borderRadius={"20"}>
            <Table variant='striped' colorScheme='gray'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Username</Th>
                  <Th>Email</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.length > 0 ? (
                  users.map((user) => {
                    return (
                      <Tr key={`${user?.id}`}>
                        <Td>{user.id}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.username}</Td>
                        <Td>{user.email}</Td>
                        <Td>
                          <HStack>
                            <Button colorScheme='teal' size='sm'>
                              Edit
                            </Button>
                            <Button
                              colorScheme='red'
                              size='sm'
                              onClick={() => {
                                onOpen();
                                setSelectedId(user.id);
                              }}
                            >
                              Delete
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })
                ) : (
                  <Tr>
                    <Td colSpan={5} textAlign={"center"}>
                      No data
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Center>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  deleteUser(selectedId);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
