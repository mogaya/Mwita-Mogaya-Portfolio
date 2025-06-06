import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import services from "../../data/services";
import iconMap from "../../data/iconMap";

const Services = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box as="section" w={"100vw"} bgColor={"secondary"} id="services">
      <Box maxW="1200px" w={{ base: "80vw", md: "80vw" }} mx={"auto"} py={8}>
        {/* Section Header */}
        <Box mb={8}>
          <Text as={"h2"} fontSize={"3xl"} fontWeight="bold" mb={4}>
            Services I Offer
          </Text>

          <Text
            fontSize={"lg"}
            fontWeight={"medium"}
            color={"foreground"}
            opacity={0.8}
          >
            From concept to deployment, I provide comprehensive digital
            solutions tailored to your needs
          </Text>
        </Box>

        <Box
          sx={{
            ".slick-prev:before, .slick-next:before": {
              color: "black",
            },
          }}
        >
          <Slider {...settings}>
            {services.map((service) => (
              <Box key={service.title} p={4}>
                <Card h={"auto"} minH={"250px"} maxW={"350px"}>
                  <CardHeader>
                    <VStack>
                      <Icon
                        as={iconMap[service.icon]}
                        boxSize={8}
                        color={"primary"}
                      />
                      <Text as={"h3"} size={"2xl"} fontWeight={"bold"}>
                        {service.title}
                      </Text>
                    </VStack>
                  </CardHeader>
                  <CardBody pt={0} textAlign={"center"}>
                    <Text as={"p"}>{service.description}</Text>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
