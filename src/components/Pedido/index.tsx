import { Button, Flex, Container, Heading, HStack, Input, Spinner, Text, VStack, Select, Icon, Divider, Checkbox, Radio, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Logo'
import { faArrowLeft, faArrowRotateBack, faBackward, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Pedido() {

    const [pedido, setPedido] = useState(false)

    let navigate = useNavigate();
  
    function handleClick() {
      navigate('/')
    }

  return (
    !!pedido? (
        <VStack width="full" bg='whiteAlpha.200' 
        align={"center"} 
        justifyContent={"center"}
        fontFamily={"Poppins"}
        spacing={"20"}
        >
        
        <Logo/>
        <Heading>App Hospital</Heading>
        <VStack padding="20px" spacing={"20"}>
        <Heading fontSize="2xl" textAlign="center">
            Pedido/Feedback realizado com sucesso!
        </Heading>

        <VStack width="full"  paddingLeft="20px" paddingRight="20px" paddingBottom="30px">
            <Button colorScheme='red' size='lg' width={"full"} onClick={handleClick}>
              Sair
            </Button>
          </VStack>
        </VStack>
        
    
        </VStack>
    ) : (
        <VStack width="full" bg='whiteAlpha.200' 
        align={"center"} 
        justifyContent={"center"}
        fontFamily={"Poppins"}
        spacing={"10"}
        >
    
    
        <HStack alignSelf={"flex-start"} width="-webkit-max-content" paddingLeft="5">
          <FontAwesomeIcon icon={faArrowLeft} />  <Link to="/pedidos"><Text>Voltar</Text></Link>
        </HStack>
        
        <Logo/>
        
        <VStack  width="full" spacing={"4"}>
          <Heading fontWeight="normal">
            Pedido #12345!
          </Heading>
          <VStack width="full" paddingLeft="20px" paddingRight="20px" align="flex-start" justify="flex-start" paddingTop="20px" paddingBottom="20px">
            <Text fontSize='md' fontWeight={"normal"}>Material: cátetere</Text>
            <Text fontSize='md' fontWeight={"normal"}>Quantidade: 100</Text>
            <Text fontSize='md' fontWeight={"normal"}>Unidade: Hospital ABC</Text>
            <Text fontSize='md' fontWeight={"normal"}>Endereço: Avenida dos Arcanjos, 203</Text>
            <Text fontSize='md' fontWeight={"normal"}>Valor unitário: R$40.00</Text>
          </VStack>
    
          <Divider background="gray.500" height="2px"/>
    
    
    
        <VStack width="full"  paddingLeft="20px" paddingRight="20px">
          <HStack 
            as="label"
            py="4"
            px="4"
            bg="whiteAlpha.200"
            maxWidth={600}
            width="100%"
            alignSelf="center"
            color="gray.700"
            borderRadius="10px"
            zIndex={333}
            >
          <Radio colorScheme='red' defaultChecked/>
              <Text>Material com defeito</Text>
         
            </HStack>
    
    
    
            <HStack 
            as="label"
            py="4"
            px="4"
            bg="whiteAlpha.200"
            maxWidth={600}
            width="100%"
            alignSelf="center"
            color="gray.700"
            borderRadius="10px"
            zIndex={333}
            >
          <Radio colorScheme='red' defaultChecked/>
              <Text>Material frágil</Text>
         
            </HStack>
    
            <HStack 
            as="label"
            py="4"
            px="4"
            bg="whiteAlpha.200"
            maxWidth={600}
            width="100%"
            alignSelf="center"
            color="gray.700"
            borderRadius="10px"
            zIndex={333}
            >
          <Radio colorScheme='red' defaultChecked/>
              <Text>Não entregue</Text>
         
            </HStack>
    
    
        <VStack paddingTop="20px" paddingBottom="20px" justify="flex-start" align="flex-start">
            <Text fontWeight="bold" fontSize="lg">Comentário:</Text>
            <Box border="1px solid #cccccc" padding="4px" borderRadius="4px">
                <Text fontSize="sm">Material chegou deformado, sem condições de uso.</Text>
                <Text fontSize="sm" fontWeight="bold">Ass. Eduardo - Médico</Text>
            </Box>
        </VStack>
         
        </VStack>
    
        <Divider background="gray.500" height="2px"/>
    
    
          <VStack width="full"  paddingLeft="20px" paddingRight="20px">
            <Button colorScheme='red' size='lg' width={"full"} onClick={() => setPedido(true)}>
              Responder
            </Button>
          </VStack>
    
          <VStack width="full"  paddingLeft="20px" paddingRight="20px" paddingBottom="30px">
            <Button colorScheme='red' size='lg' width={"full"} onClick={() => setPedido(true)}>
              Pedir novamente
            </Button>
          </VStack>
    
    
        </VStack>
    
        </VStack>
    )
  )
}
