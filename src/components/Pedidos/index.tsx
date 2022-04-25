import { Button, Flex, Container, Heading, HStack, Input, Spinner, Text, VStack,Select, Icon, Divider, Checkbox } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Logo'
import { faArrowLeft, faArrowRotateBack, faBackward, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Pedidos() {
  


  return (
    <VStack width="full" bg='whiteAlpha.200' 
    align={"center"} 
    justifyContent={"center"}
    fontFamily={"Poppins"}
    spacing={"10"}
    >
    <Logo/>
    
    <VStack  width="full" spacing={"4"}>
      
      <Heading fontWeight="normal">
        Pedidos realizados
      </Heading>
      <VStack width="full" paddingLeft="20px" paddingRight="20px">
        <Text fontSize='xl' fontWeight={"normal"}>Procure seu pedido</Text>
        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >

          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar um pedido..."
            _placeholder={{color:'gray.400'}}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
    </Flex>
      </VStack>

      <VStack width="full"  paddingLeft="20px" paddingRight="20px">
        <Text fontSize='xl' fontWeight={"normal"}>Procure sua unidade</Text>
        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >

          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar um pedido..."
            _placeholder={{color:'gray.400'}}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
        </Flex>
      </VStack>

      <Divider background="gray.500" height="2px"/>



    <VStack width="full"  paddingLeft="20px" paddingRight="20px">
      <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >
      <Checkbox colorScheme='red'/>
      <Link to="pedido/12345">
          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Pedido 1"
            _placeholder={{color:'gray.400'}}
           
        />
        </Link>
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
     
        </Flex>



        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >
      <Checkbox colorScheme='red' />
          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Pedido 2"
            _placeholder={{color:'gray.400'}}
            disabled={true}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
     
        </Flex>


        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >
      <Checkbox colorScheme='red' />
          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Pedido 3"
            _placeholder={{color:'gray.400'}}
            disabled={true}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
     
        </Flex>

        <Flex 
        as="label"
        py="4"
        px="4"
        bg="#CBD5E0"
        maxWidth={600}
        width="100%"
        alignSelf="center"
        color="gray.700"
        borderRadius="10px"
        zIndex={333}
        >
      <Checkbox colorScheme='red' />
          <Input 
            color="gray.700"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Pedido 4"
            _placeholder={{color:'gray.400'}}
            disabled={true}
        />
      <FontAwesomeIcon icon={faSearch} fontSize="20px" color="#2D3748"/>
     
        </Flex>
     
    </VStack>




      <VStack width="full"  paddingLeft="20px" paddingRight="20px">
        <Button colorScheme='red' size='lg' width={"full"}>
          Procurar
        </Button>
      </VStack>

      <VStack width="full"  paddingLeft="20px" paddingRight="20px" paddingBottom="30px">
        <Button colorScheme='red' size='lg' width={"full"}>
          Pedir novamente
        </Button>
      </VStack>


    </VStack>

    </VStack>
  )
}
