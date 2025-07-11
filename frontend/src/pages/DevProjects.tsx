import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  SimpleGrid,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import projectImgMap from "../data/projectImgMap";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const DevProjects = () => {
  return (
    <Box maxW="1200px" w={{ base: "90vw", md: "80vw" }} mx={"auto"} py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mx={"auto"}>
        {projects.map((project) => (
          <Card
            key={project.id}
            borderRadius="xl"
            overflow="hidden"
            mx={"auto"}
            // maxW={"300px"}
          >
            <Image
              src={projectImgMap[project.image]}
              alt={project.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <CardBody>
              <Stack>
                {/* Card Heading */}
                <Text fontSize="xl" fontWeight="bold" color="primary">
                  {project.title}
                </Text>

                {/* Card Desc */}
                <Text
                  as={"p"}
                  fontSize={"md"}
                  fontWeight={"medium"}
                  color={"foreground"}
                  opacity={0.8}
                >
                  {project.description}
                </Text>

                {/* Card Tech Stack  */}
                <Flex gap={2} flexWrap="wrap">
                  {project.tech.map((tech) => (
                    <Badge
                      mt={2}
                      key={tech}
                      size="md"
                      variant="outline"
                      colorScheme="green"
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Stack>
            </CardBody>
            <CardFooter
              display={"flex"}
              justify={"space-between"}
              gap={{ base: 0, md: 2 }}
            >
              <Button
                size={{ base: "sm", md: "md" }}
                variant="outline"
                borderRadius={"lg"}
                borderColor={"primary"}
                _hover={{
                  borderColor: "teal",
                  color: "teal",
                }}
              >
                Live Demo
              </Button>
              <Button
                as={Link}
                to={"/#contact"}
                size={{ base: "sm", md: "md" }}
                borderRadius={"lg"}
                backgroundColor={"primary"}
                color={"white"}
                _hover={{
                  backgroundColor: "teal",
                  color: "white",
                  borderColor: "teal",
                }}
              >
                Discuss Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DevProjects;
