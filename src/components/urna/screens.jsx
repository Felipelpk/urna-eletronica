import { Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { valueContext } from "../../contexts/valueContext";
import ReportComponent from "./reportComponent";

export default function Screens({ screen, error, data, reportData }) {

    const { _value } = useContext(valueContext);

    return (
        <Flex
            borderRadius="8px"
            bgColor="gray.800"
            color="whiteAlpha.900"
            justifyContent={screen !== 4 ? "flex-start" : "center"}
            alignItems={screen !== 4 ? "flex-start" : "center"}
            padding="2rem 2rem 1rem 2rem"
            flexDir="column"
        >
            {(data && screen !== 4) && (
                <Flex
                    width="100%"
                    bgColor="gray.700"
                    borderRadius="8px"
                    padding="1rem"
                    marginBottom="1rem"
                    flexDir="column"
                >
                    <Text>
                        Nome: {data.voterName}
                    </Text>
                    {data.snack !== undefined && (
                        <Text>
                            Lanche: {data.snack !== '' ? data.snack : "Nulo"}
                        </Text>
                    )}
                    {data.drink !== undefined && (
                        <Text>
                            Bebida: {data.drink !== '' ? data.drink : "Nulo"}
                        </Text>
                    )}
                </Flex>
            )}
            {screen === 1 && (
                <Stack
                    flexDir="column"
                    gap="1rem"
                >
                    <Heading
                        fontSize="1.5rem"
                        letterSpacing="-0.06rem"
                    >
                        Digite o código do Eleitor:
                    </Heading>
                    <Input 
                        value={_value || ''}
                        bgColor="white"
                        color="gray.900"
                        w="300px"
                        readOnly
                    />
                </Stack>
            )}
            {screen === 2 && (
                <Stack
                    flexDir="column"
                    gap="1rem"
                >
                    <Heading
                        fontSize="1.5rem"
                        letterSpacing="-0.06rem"
                    >
                        Digite o código do seu Lanche:
                    </Heading>
                    <Input 
                        value={_value || ''}
                        bgColor="white"
                        color="gray.900"
                        w="300px"
                        readOnly
                    />
                </Stack>
            )}
            {screen === 3 && (
                <Stack
                    flexDir="column"
                    gap="1rem"
                >
                    <Heading
                        fontSize="1.5rem"
                        letterSpacing="-0.06rem"
                    >
                        Digite o código da sua Bebida:
                    </Heading>
                    <Input 
                        value={_value || ''}
                        bgColor="white"
                        color="gray.900"
                        w="300px"
                        readOnly
                    />
                </Stack>
            )}
            {screen === 4 && (
                <Heading>
                    Fim
                </Heading>
            )}
            {error && (
                <Text 
                    marginTop="1rem" 
                    color="red.500"
                    fontWeight="bold"
                    letterSpacing="-0.06rem"
                >
                    {error}
                </Text>
            )}
            {screen === 0 && (
                <ReportComponent
                    reportData={reportData}
                />
            )}
        </Flex>
    )
}