import { Box, Button, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import heroImage from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <Box as="section" w="100vw">
      <Box maxW="1200px" w={{ base: "90vw", md: "80vw" }} mx="auto" py={10}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
          {/* Text Section */}
          <GridItem
            order={{ base: 2, md: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
                <Text as="span" color="foreground">
                  Hi, I'm{" "}
                </Text>
                <Text as="span" color="primary">
                  Mwita Mogaya
                </Text>
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="medium"
                color="foreground"
                opacity={0.8}
              >
                Full Stack Developer & Graphic Designer
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="primary"
                opacity={0.8}
                maxW={{ base: "100%", md: "80%" }}
                mx={{ base: "auto", md: "0" }}
              >
                I craft seamless digital experiences with the precision of a
                developer and the eye of a designer.
              </Text>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap={4}
                justifyContent={{ base: "center", md: "flex-start" }}
                mt={6}
              >
                <Button
                  as={NavLink}
                  to="/projects"
                  variant="solid"
                  color="white"
                  borderRadius="full"
                  bg="primary"
                  size="lg"
                  _hover={{
                    backgroundColor: "teal",
                  }}
                >
                  View My Work
                </Button>
                <Button
                  as={NavLink}
                  to="/"
                  variant="outline"
                  color="primary"
                  borderColor="primary"
                  borderRadius="full"
                  size="lg"
                  _hover={{
                    color: "teal",
                    borderColor: "teal",
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </GridItem>

          {/* Image Section */}
          <GridItem
            order={{ base: 1, md: 2 }}
            display="flex"
            justifyContent="center"
          >
            <Image
              src={heroImage}
              alt="Hero Image"
              pt={20}
              w="100%"
              maxW="500px"
              h="auto"
              objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
