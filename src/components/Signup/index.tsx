import { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Container,
  Image,
  Link as ChakraLink,
  useToast,
  CircularProgress,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Lock } from "react-feather";
import { Formik, Field } from "formik";

import { SignupTypes } from "./types";
import { signupValidation } from "./validation";
import Link from "next/link";
import { pb } from "@/utils";
import { useRouter } from "next/router";
export const Signup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const route = useRouter();
  const handleSignUp = async (values: SignupTypes) => {
    try {
      setLoading(true);
      const record = await pb.collection("users").create(values);
      if (record) {
        toast({
          description: "Account successfully created.",
          status: "success",
        });
        setLoading(false);
        route.push("/login");
      }
      await pb.collection("users").requestVerification(values.email);
    } catch (error: any) {
      setLoading(false);
      console.log(error?.data.data.email.message);
      if (error?.data.data.email) {
        return toast({
          description: error?.data.data.email.message,
          status: "warning",
        });
      }
      if (error?.data.data.username) {
        return toast({
          description: error?.data.data.username.message,
          status: "warning",
        });
      }
      toast({
        description: error.message,
        status: "error",
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        bg="white"
        rounded="md"
        mx="2"
        w={["100%", "90%", "90%", "75%", "60%", "47%"]}
        justifyContent="space-around"
        alignItems="center"
        p={["0", "14"]}
        shadow="md"
        h="auto"
        py="5"
        border="1px"
        borderColor="gray.100"
      >
        <Container
          display={["none", null, "flex"]}
          alignItems="center"
          h="full"
          width="50%"
        >
          <Image
            src={"/signup.webp"}
            alt="login pic"
            width={400}
            height={350}
          />
        </Container>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          onSubmit={handleSignUp}
          validationSchema={signupValidation}
        >
          {({ handleSubmit, errors, touched, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                flexGrow: 1,
                marginRight: "5px",
                marginLeft: "5px",
                height: "auto",
              }}
            >
              <Container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="full"
                mb="6"
              >
                <Lock size={37} />
              </Container>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.username && touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Field as={Input} id="username" name="username" />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field as={Input} id="email" name="email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        color="gray.500"
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    !!errors.passwordConfirm && touched.passwordConfirm
                  }
                >
                  <FormLabel htmlFor="passwordConfirm">
                    Confirm Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      onChange={handleChange}
                      id="passwordConfirm"
                      name="passwordConfirm"
                      type="password"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.passwordConfirm}</FormErrorMessage>
                </FormControl>
                <Flex w="full" justify="flex-end">
                  <ChakraLink fontSize={["xs", "sm"]} color="text">
                    <Link href="/login">Have an account?, login!</Link>
                  </ChakraLink>
                </Flex>
                <Button
                  isDisabled={loading}
                  bg="primary"
                  color="white"
                  type="submit"
                  w="full"
                >
                  {loading ? (
                    <CircularProgress
                      isIndeterminate
                      color="green.300"
                      size={25}
                    />
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};
