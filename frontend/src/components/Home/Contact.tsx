import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Box as="section" w={"100vw"} bgColor={"secondary"}>
      <Box maxW="1200px" w={{ base: "80vw", md: "80vw" }} mx={"auto"} py={10}>
        <Box mb={8}>
          <Text as={"h2"} fontSize={"3xl"} fontWeight="bold" mb={4}>
            Get In Touch
          </Text>

          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={"foreground"}
            opacity={0.8}
          >
            Interested in working together? Have a question? Feel free to reach
            out!
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          {/* Contact Info */}
          <GridItem>
            <Card borderRadius={"xl"} overflow="hidden" shadow={"md"}>
              <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <VStack spacing={4}>
                    {/* Name */}
                    <FormControl isRequired>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder="Your name"
                        focusBorderColor="primary"
                        autoComplete="name"
                        borderRadius={"lg"}
                      ></Input>
                    </FormControl>

                    {/* Email */}
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="text"
                        {...register("email")}
                        placeholder="Your email"
                        focusBorderColor="primary"
                        autoComplete="email"
                        borderRadius={"lg"}
                      ></Input>
                    </FormControl>

                    {/* Message */}
                    <FormControl isRequired>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Type your message ..."
                        focusBorderColor="primary"
                        borderRadius={"lg"}
                      ></Textarea>
                    </FormControl>

                    {/* Button */}
                    <Button
                      color={"white"}
                      bgColor={"primary"}
                      width={"100%"}
                      type="submit"
                      borderRadius={"lg"}
                      _hover={{
                        bgColor: "teal",
                        color: "white",
                        borderColor: "teal",
                      }}
                    >
                      <Icon as={Send} boxSize={6} mr={2} />
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </CardBody>
            </Card>
          </GridItem>

          {/* Contact Form */}
          <GridItem>
            <Box mb={6}>
              <Text as={"h3"} fontWeight={"semibold"} mb={2}>
                Contact Information
              </Text>
              <Text as={"p"}>
                Feel free to reach out through the form or use my contact
                information below
              </Text>
            </Box>

            <Flex flexDirection={"column"} gap={4} mb={8}>
              {/* Phone */}
              <HStack>
                <Box
                  border={"2px solid"}
                  borderColor="primary"
                  p={2}
                  borderRadius="100%"
                  display="flex"
                >
                  <Icon as={Phone} boxSize={5} />
                </Box>
                <VStack align={"start"} spacing={0}>
                  <Text as={"h4"} fontWeight={"medium"} fontSize={"sm"}>
                    Phone
                  </Text>
                  <Text as={"p"} fontSize={"sm"}>
                    +254 704 379 546
                  </Text>
                </VStack>
              </HStack>

              {/* Email */}
              <HStack>
                <Box
                  border={"2px solid"}
                  borderColor="primary"
                  p={2}
                  borderRadius="100%"
                  display="flex"
                >
                  <Icon as={Mail} boxSize={5} />
                </Box>
                <VStack align={"start"} spacing={0}>
                  <Text as={"h4"} fontWeight={"medium"} fontSize={"sm"}>
                    Email
                  </Text>
                  <Text as={"p"} fontSize={"sm"}>
                    mogayainnocent@gmail.com
                  </Text>
                </VStack>
              </HStack>

              {/* Location */}
              <HStack>
                <Box
                  border={"2px solid"}
                  borderColor="primary"
                  p={2}
                  borderRadius="100%"
                  display="flex"
                >
                  <Icon as={MapPin} boxSize={5} />
                </Box>
                <VStack align={"start"} spacing={0}>
                  <Text as={"h4"} fontWeight={"medium"} fontSize={"sm"}>
                    Location
                  </Text>
                  <Text as={"p"} fontSize={"sm"}>
                    Nairobi, Kenya
                  </Text>
                </VStack>
              </HStack>
            </Flex>
            <Box>
              <Text as={"h4"} fontWeight={"medium"} mb={3}>
                Availability
              </Text>
              <Box
                bgColor={"green.100"}
                color={"green"}
                py={2}
                px={4}
                borderRadius={"full"}
                display={"inline-block"}
              >
                Open to new opportunities
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
