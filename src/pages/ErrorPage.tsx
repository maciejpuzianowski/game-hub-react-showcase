import { Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Heading>Ooopss.</Heading>
      <Text>Went wrong.</Text>
    </>
  );
};

export default ErrorPage;
