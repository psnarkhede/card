import React, { useState } from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Styles from "./Form.module.css";
import { PhoneIcon } from '@chakra-ui/icons'
import { BsPenFill } from 'react-icons/bs';
import { FaCreditCard } from 'react-icons/fa';
import { BsCalendarMonthFill } from 'react-icons/bs';
import { AiFillCalendar, AiOutlineLock } from 'react-icons/ai';


const Form = () => {


    const handlesubmit = () => {
        alert("Success")
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.namebox}>
        <p className={Styles.name}>CARDHOLDER NAME</p>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={BsPenFill} color='pink.400'/>}
          />
          <Input variant='flushed' focusBorderColor='pink.400' type="text" placeholder="John Smith" />
        </InputGroup>
      </div>

      <div className={Styles.namebox}>
        <p className={Styles.name}>CARD NUMBER</p>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaCreditCard} color='pink.400'/>}
          />
          <Input variant='flushed' focusBorderColor='pink.400' type="number" placeholder="4444 8888 9999" />
        </InputGroup>
      </div>

      <div className={Styles.flexbox}>
      <div className={Styles.namebox}>
        <p className={Styles.name}>EXPIRY MONTH</p>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={BsCalendarMonthFill} color='pink.400'/>}
          />
          <Input width='100px' variant='flushed' focusBorderColor='pink.400' type="number" placeholder="08" />
        </InputGroup>
      </div>

      <div className={Styles.namebox}>
        <p className={Styles.name}>EXPIRY YEAR</p>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={AiFillCalendar} color='pink.400'/>}
          />
          <Input width='100px' variant='flushed' focusBorderColor='pink.400' type="number" placeholder="2015" />
        </InputGroup>
      </div>


      <div className={Styles.namebox}>
        <p className={Styles.name}>CVC</p>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={AiOutlineLock} color='pink.400'/>}
          />
          <Input width='100px' variant='flushed' focusBorderColor='pink.400' type="number" placeholder="828" />
        </InputGroup>
      </div>
      </div>

      <p className={Styles.pay}>Payment amount: Rs. 12,00</p>

      <Button onClick={() => (handlesubmit())} className={Styles.btn} colorScheme="pink" width='120px' size="sm">
        PAY
      </Button>
    </div>
  );
};

export default Form;
