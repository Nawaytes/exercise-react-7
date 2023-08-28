import {
  Button,
  Flex,
  Grid,
  Image,
  Input,
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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilterPage() {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getEmployees() {
      const employees = await axios.get(
        "https://64ec88cff9b2b70f2bfa802e.mockapi.io/api/v1/employee"
      );
      setEmployees(employees.data);
      setFilter(employees.data);
      console.log("employees", employees.data[0]);
    }
    getEmployees();
  }, []);

  const updateFilter = (search) => {
    const filter = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(filter);
  };

  useEffect(() => {
    updateFilter(search);
    // eslint-disable-next-line
  }, [search]);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
    updateFilter(e.target.value);
  };

  return (
    <>
      <Flex
        position={"fixed"}
        top={"0"}
        width={"100vw"}
        bgColor={"white"}
        pb={"5px"}
        mt={"30"}
      >
        <Grid
          width={"40vw"}
          templateColumns={"1fr 3fr 1fr"}
          gap={"10px"}
          alignItems={"center"}
          margin={"auto"}
        >
          <Text textAlign={"center"}>Filter By Name</Text>
          <Input placeholder='Filter' onChange={handlerSearch} />
          <Button>Filter</Button>
        </Grid>
      </Flex>

      <VStack width={"100vw"} mt={"90px"}>
        <TableContainer border={"1px solid #bbbbbb"} borderRadius={"10px"}>
          <Table variant='striped' colorScheme='gray'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th isNumeric>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filter.length > 0 ? (
                filter.map((employee) => (
                  <Tr key={employee?.id}>
                    <Td>
                      <Image
                        src={employee.avatar}
                        height={"100px"}
                        width={"100px"}
                      ></Image>
                    </Td>
                    <Td>{employee.name}</Td>
                    <Td>{employee.email}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={3}>No Data</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </>
  );
}
