import React from 'react';
import { Stack, Button, Text, Image, Icon, Divider, Heading, HStack, VStack, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { FaPlus, FaMinus, FaShoppingBag, FaUserCircle, FaFlag, FaCheckCircle } from 'react-icons/fa';

/* type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} */


const CheckoutStep = ({colorFirst,colorSecond, valueFirst, valueSecond})=> {

  return(
    <HStack pt={20} width="480px" display={["none","flex","flex","flex"]}>
      <Icon color="green" w={6} h={6} as={FaShoppingBag} />
      <Slider aria-label='slider-ex-4' defaultValue={30} isDisabled value={valueFirst}>
        <SliderTrack bg='red.100'>
          <SliderFilledTrack bg='green' />
        </SliderTrack>
      </Slider>
      <Icon color={colorFirst} w={6} h={6} as={FaUserCircle} />
      <Slider aria-label='slider-ex-4' defaultValue={30} isDisabled value={valueSecond}>
        <SliderTrack bg='red.100'>
          <SliderFilledTrack bg='green' />
        </SliderTrack>
      </Slider>
      <Icon color={colorSecond} w={6} h={6} as={FaFlag} />
    </HStack>
  )
}
export default CheckoutStep