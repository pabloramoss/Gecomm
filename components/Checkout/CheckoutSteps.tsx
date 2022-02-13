import React from 'react';
import { Stack, Button, Text, Image, Icon, Divider, Heading, HStack, VStack, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { FaPlus, FaMinus, FaShoppingBag, FaUserCircle, FaFlag, FaCheckCircle } from 'react-icons/fa';

/* type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} */


const CheckoutStep = ({value})=> {

  return(
    <HStack my={20} display={["none","flex","flex","flex"]}>
      <Slider aria-label='slider' isDisabled value={value}>
        <SliderTrack>
          <SliderFilledTrack bg='green' />
        </SliderTrack>
      </Slider>
    </HStack>
  )
}
export default CheckoutStep