import { Box, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import { FaInstagram, FaSquareGithub, FaWhatsapp } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import signature from "../../assets/signature.gif";
// import signature from "../../assets/signature.mp4";

const Footer = () => {
  return (
    <Box
      as={"footer"}
      w={"100vw"}
      transition={"all 0.2s"}
      py={6}
      // bgColor={"secondary"}
    >
      <Box maxW={"1200px"} mx={"auto"} px={4}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify={"space-between"}
          alignItems={{ base: "start", md: "end" }}
        >
          <Box mb={{ base: 6, md: 0 }}>
            {/* mp4 */}
            {/* <Box
              as="video"
              src={signature}
              autoPlay
              // loop
              muted
              playsInline
              borderRadius={"md"}
              objectFit={"cover"}
              w={"300px"}
              h={"100px"}
            ></Box> */}

            {/* gif */}
            <Image
              src={signature}
              alt="A fun GIF"
              objectFit="cover"
              borderRadius="md"
              w={"300px"}
            />

            {/* Title */}
            {/* <Text as={"h3"} fontSize={"xl"} fontWeight={"bold"}>
              Mwita Mogaya
            </Text> */}
            <Text color={"foreground"} fontWeight={"medium"} opacity={0.8}>
              Full Stack Developer & Graphic Designer
            </Text>
          </Box>

          <Flex flexDirection={"row"} gap={1} justifyContent={"center"}>
            <IconButton
              as={"a"}
              href={"https://wa.me/254704379546"}
              aria-label={"linkedin"}
              icon={<FaWhatsapp style={{ fontSize: 25 }} />}
              backgroundColor={"transparent"}
              _focus={{ border: "none", color: "primary" }}
              _hover={{ border: "none", color: "primary" }}
              borderRadius={"full"}
              color={"foreground"}
            />
            <IconButton
              as={"a"}
              href={"https://github.com/mogaya"}
              aria-label={"linkedin"}
              icon={
                <FaSquareGithub
                  style={{
                    fontSize: 25,
                  }}
                />
              }
              backgroundColor={"transparent"}
              borderRadius={"full"}
              _focus={{ border: "none", color: "primary" }}
              _hover={{ border: "none", color: "primary" }}
              color={"foreground"}
            />
            <IconButton
              as={"a"}
              href={"https://www.instagram.com/_mogaya/"}
              aria-label={"linkedin"}
              icon={<FaInstagram style={{ fontSize: 25 }} />}
              backgroundColor={"transparent"}
              borderRadius={"full"}
              _focus={{ border: "none", color: "primary" }}
              _hover={{ border: "none", color: "primary" }}
              color={"foreground"}
            />
            <IconButton
              as={"a"}
              href={"https://www.linkedin.com/in/mwita-mogaya/"}
              aria-label={"linkedin"}
              borderRadius={"full"}
              icon={<TfiLinkedin style={{ fontSize: 25 }} />}
              backgroundColor={"transparent"}
              _focus={{ border: "none", color: "primary" }}
              _hover={{ border: "none", color: "primary" }}
              color={"foreground"}
            />
          </Flex>
        </Flex>
        <Text
          as={"p"}
          // fontSize={"sm"}
          px={2}
          textAlign={{ base: "start", md: "end" }}
          color={"foreground"}
          fontWeight={"medium"}
          opacity={0.8}
          mt={6}
        >
          {" "}
          &copy; {new Date().getFullYear()} mmogaya.com. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
