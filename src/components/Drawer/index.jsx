import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    HStack,
    UnorderedList,
    ListItem,
    VStack,
    Text,
    Box
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHome, faList, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

  

export default function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <HStack  alignSelf="flex-end" justifySelf="space-between">
 
        <Button ref={btnRef} colorScheme='whiteAlpha' onClick={onOpen} padding="30px">
          <FontAwesomeIcon size="2x" icon={faBars} color="#E53E3E"/>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
            <VStack height={"full"} align="flex-start" marginTop={"16"} spacing="16">
              
                <VStack width="full">
                  <Button colorScheme='red' size='lg' width={"full"}>
                    <HStack align="center" justify="center"><FontAwesomeIcon icon={faHome} fontSize="16px"/> <Link to="conta"><Text>Minha Conta</Text></Link></HStack>
                   
                  </Button>
                </VStack>
                

                
                <VStack width="full">
                
                <Button colorScheme='red' size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faList} fontSize="16px"/><Link to="pedidos"><Text>Meus Pedidos</Text></Link></HStack>
                   
                  </Button>
              
                </VStack>
                

                <VStack width="full">
                  <Button colorScheme='red' size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faLocationDot} fontSize="16px"/> <Text>Minha Unidade</Text></HStack>
                  </Button>
                </VStack>

                <VStack width="full">
                  <Button colorScheme='red' size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faPhone} fontSize="16px"/> <Text>Contato</Text></HStack>
                  </Button>
                </VStack>
            </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    )
}
