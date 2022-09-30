import { Flex, Grid, HStack, Text } from "@chakra-ui/react";

export default function Keyboard({ setValue, setScreen, screen, handleConfirm, handleWhiteVote, removeLastCharacter }) {
    return (
        <Flex
            bgColor="gray.800"
            borderRadius="8px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="whiteAlpha.900"
        >
            <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateRows="50px 50px 50px"
                gap="1rem"
                w="100%"
                justifyContent="center"
                alignItems="center"
                padding="2rem 2rem 1rem 2rem"
            >
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'1')}
                >
                    <Text>1</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'2')}
                >
                    <Text>2</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'3')}
                >
                    <Text>3</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'4')}
                >
                    <Text>4</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'5')}
                >
                    <Text>5</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'6')}
                >
                    <Text>6</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'7')}
                >
                    <Text>7</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'8')}
                >
                    <Text>8</Text>
                </Flex>
                <Flex
                    bgColor="gray.600"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => setValue(prevState => prevState+'9')}
                >
                    <Text>9</Text>
                </Flex>
            </Grid>
            <Flex
                w="88.53px"
                bgColor="gray.600"
                justifyContent="center"
                alignItems="center"
                borderRadius="8px"
                h="40px"
                cursor="pointer"
                onClick={() => setValue(prevState => prevState+'0')}
            >
                <Text>0</Text>
            </Flex>
            <HStack
                w="100%"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
                marginTop="2rem"
            >
                {screen !== 1 && (
                    <Flex
                        w="88.53px"
                        bgColor="white"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="8px"
                        h="40px"
                        cursor="pointer"
                        color="gray.900"
                        onClick={() => handleWhiteVote(screen)}
                    >
                        <Text>Branco</Text>
                    </Flex>
                )}
                <Flex
                    w="88.53px"
                    bgColor="red.500"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={removeLastCharacter}
                >
                    <Text>Corrige</Text>
                </Flex>
                <Flex
                    w="88.53px"
                    bgColor="green"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="8px"
                    h="40px"
                    cursor="pointer"
                    onClick={() => handleConfirm(screen)}
                >
                    <Text>Confirma</Text>
                </Flex>
            </HStack>
        </Flex>
    )
}