import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Badge,
  Stack,
  SimpleGrid,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <Box bgColor={"secondary"} py={10}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={8}
      >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          Featured Projects
        </Heading>

        <Text
          pt={4}
          fontSize={"lg"}
          fontWeight={"medium"}
          color={"foreground"}
          opacity={0.8}
        >
          A selection of my recent work, showcasing my skills in web development
          and design.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} p={4}>
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
                  <Text fontSize="xl" fontWeight="bold" color="primary">
                    {project.title}
                  </Text>
                  <Text
                    fontSize={"md"}
                    fontWeight={"medium"}
                    color={"foreground"}
                    opacity={0.8}
                  >
                    {project.description}
                  </Text>

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
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
