import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Badge,
  Stack,
  SimpleGrid,
  Flex,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <Box as="section" bgColor={"secondary"} w={"100vw"}>
      <Box maxW="1200px" w={{ base: "90vw", md: "80vw" }} mx={"auto"} py={10}>
        {/* Section Header */}
        <Box mb={8}>
          <Text as={"h2"} fontSize={"3xl"} fontWeight="bold" mb={4}>
            Featured Projects
          </Text>

          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={"foreground"}
            opacity={0.8}
          >
            A selection of my recent work, showcasing my skills in web
            development and design.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {projects.map((project) => (
            <Card
              key={project.id}
              borderRadius="xl"
              overflow="hidden"
              maxW={"300px"}
            >
              <Image
                src={project.image}
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
              <CardFooter display={"flex"} justify={"space-between"}>
                <Button
                  size={{ base: "sm", md: "md" }}
                  variant="outline"
                  borderRadius={"lg"}
                  borderColor={"primary"}
                  _hover={{
                    borderColor: "navy",
                    color: "navy",
                  }}
                >
                  Live Demo
                </Button>
                <Button
                  size={{ base: "sm", md: "md" }}
                  borderRadius={"lg"}
                  backgroundColor={"primary"}
                  color={"white"}
                  _hover={{ backgroundColor: "navy", color: "white" }}
                >
                  Source Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
