import { Box, Button, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import heroImage from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem
          w={{ base: "100vw", md: "60vw" }}
          p={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={2}
            w={"90%"}
            h={"80%"}
          >
            <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={"bold"}>
              <Text as={"span"} color={"foreground"}>
                Hi, I'm{" "}
              </Text>
              <Text as={"span"} color={"primary"}>
                Mwita Mogaya
              </Text>
            </Text>
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight={"medium"}
              color={"foreground"}
              opacity={0.8}
            >
              Full Stack Developer & Graphic Designer
            </Text>
            <Text
              as={"p"}
              fontSize={{ base: "md", md: "lg" }}
              color={"primary"}
              opacity={0.8}
              maxW={{ base: "100%", md: "80%" }}
            >
              I craft seamless digital experiences with the precision of a
              developer and the eye of a designer.
            </Text>
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              gap={2}
              mt={{ base: 4, md: 8 }}
            >
              <Button
                as={NavLink}
                to="/projects"
                variant="solid"
                color={"white"}
                borderRadius={"full"}
                backgroundColor={"primary"}
                size={{ base: "md", md: "lg" }}
                _hover={{
                  backgroundColor: "accent",
                  color: "white",
                  borderColor: "accent",
                }}
              >
                View My Work
              </Button>
              <Button
                as={NavLink}
                to="/"
                variant="outline"
                color={"primary"}
                borderRadius={"full"}
                borderColor={"primary"}
                size={{ base: "md", md: "lg" }}
                _hover={{
                  backgroundColor: "accent",
                  color: "white",
                  borderColor: "accent",
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem display={{ base: "none", md: "block" }} w={"40vw"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"90%"}
            h={"100%"}
          >
            <Image
              pt={"20"}
              src={heroImage}
              alt="Hero Image"
              w={"100%"}
              h={"auto"}
              objectFit={"cover"}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Hero;
