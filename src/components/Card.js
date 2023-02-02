import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack spacing={4} p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <Image src={imageSrc} />
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text fontSize="sm">{description}</Text>
      <HStack justifyContent="flex-end">
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
          style={{transition: "all .3s ease-in-out",}}
          className="icon"
        />
      </HStack>
      <style jsx>
        {`
          .icon:hover {
            color: #3f3d56;
            transform: translateX(5px);
          }
        `}
      </style>
    </VStack>
  );
};



export default Card;
