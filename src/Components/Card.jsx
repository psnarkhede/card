import React from "react";
import { Box, StylesProvider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import Styles from "./Card.module.css";

const Card = () => {
  return (
    <div>
      
      <Box bg="pink.300" w="400px" h="250" rounded="14px" p={4} color="white">
        <div className={Styles.visa}>
          <Icon as={RiVisaLine} w="100px" h="75px" left="50px" />
        </div>

        <div className={Styles.chip}>
          <Icon as={FcSimCardChip} w="100px" h="50px" left="50px" />
        </div>

        <p className={Styles.number}>4256 7890 5678 4532</p>

        <div className={Styles.details}>
          <div className={Styles.name}>
            <p>CARD HOLDER</p>
            <p>John Smith</p>
          </div>

          <div className={Styles.dare}>
            <p>Expires</p>
            <p>08/15</p>
          </div>

          <div className={Styles.cvc}>
            <p>CVC</p>
            <p>345</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Card;
