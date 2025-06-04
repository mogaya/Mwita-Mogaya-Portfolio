import {
  Box,
  Flex,
  useDisclosure,
  Text,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface NavBarProps {
  label: string;
  uri: string;
}

const NavBarItems: NavBarProps[] = [
  { label: "Home", uri: "/" },
  // { label: "About", uri: "/about" },
  { label: "Tech-lab", uri: "/dev-projects" },
  { label: "Design-lab", uri: "/graphic-projects" },
  { label: "Services", uri: "/#services" },
  { label: "Contact", uri: "/#contact" },
];

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={"sticky"}
      borderBottom={"1px"}
      boxShadow={"sm"}
      borderColor={"primary"}
      w={"100vw"}
      transition={"all 0.2s"}
      backgroundColor={"background"}
    >
      <Box maxW={"1200px"} mx={"auto"} px={{ base: 4, md: 6 }} py={4}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box
            as={NavLink}
            to={"/"}
            _hover={{ textDecoration: "none" }}
            transition={"transform 0.2s"}
            cursor={"pointer"}
          >
            <Flex>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight={"extrabold"}
                color={"foreground"}
                letterSpacing={"tight"}
              >
                Mwita's
                <Text as={"span"} color={"primary"}>
                  .space
                </Text>
              </Text>
            </Flex>
          </Box>

          {/* DeskTop */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {NavBarItems.map((item) => {
              const isHashRoute = item.uri.includes("#");
              const currentPath = location.pathname;
              const currentHash = location.hash;

              let isActive = false;

              if (isHashRoute) {
                const [itemPath, itemHash] = item.uri.split("#");
                isActive =
                  currentPath === itemPath && currentHash === `#${itemHash}`;
              } else {
                isActive = currentPath === item.uri;
              }

              return (
                <Box
                  key={item.uri}
                  as={NavLink}
                  to={item.uri}
                  fontSize={"md"}
                  fontWeight={isActive ? "bold" : "medium"}
                  color={isActive ? "primary" : "foreground"}
                  _hover={{ color: "primary", textDecoration: "none" }}
                  transition={"all 0.2s"}
                  cursor={"pointer"}
                >
                  {item.label}
                </Box>
              );
            })}
          </HStack>

          {/* Mobile Menu Btn */}
          <IconButton
            aria-label={"Toggle menu"}
            display={{ base: "flex", md: "none" }}
            icon={
              isOpen ? (
                <X style={{ border: "none" }} />
              ) : (
                <Menu style={{ border: "none" }} />
              )
            }
            variant={"ghost"}
            border={"none"}
            onClick={onToggle}
            bg={"transparent"}
            borderRadius={"full"}
            color={"foreground"}
            _active={{
              backgroundColor: "transparent",
              borderColor: "primary",
            }}
            _focus={{
              backgroundColor: "transparent",
              borderColor: "primary",
            }}
            _hover={{
              backgroundColor: "transparent",
              borderColor: "primary",
            }}
          />
        </Flex>
        {/* Mobile Navigation */}
        {isOpen && (
          <VStack
            display={{ base: "flex", md: "none" }}
            align={"flex-start"}
            spacing={4}
            my={2}
            pt={4}
            borderTop={"1px"}
            borderColor={"primary"}
          >
            {NavBarItems.map((item) => (
              <Box
                key={item.uri}
                as={NavLink}
                to={item.uri}
                fontSize={"md"}
                fontWeight={location.pathname === item.uri ? "bold" : "medium"}
                color={
                  location.pathname === item.uri ? "primary" : "foreground"
                }
                _hover={{ color: "primary", textDecoration: "none" }}
                transition={"all 0.2s"}
                cursor={"pointer"}
                onClick={() => {
                  onToggle();
                  navigate(item.uri);
                }}
              >
                {item.label}
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
