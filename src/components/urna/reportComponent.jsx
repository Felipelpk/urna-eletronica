import { Stack, Text, Heading } from "@chakra-ui/react";

export default function ReportComponent({ reportData }) {
    return (
        <Stack>
            <Heading>
                Relatório da Votação
            </Heading>
            <Text>
                Quantidade de votos em Pizza: 
                <Text as='span' fontWeight="bold">
                    {reportData.pizzaVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em Hamburguer: 
                <Text as='span' fontWeight="bold">
                    {reportData.hamburguerVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em Pastel: 
                <Text as='span' fontWeight="bold">
                    {reportData.pastelVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em Suco: 
                <Text as='span' fontWeight="bold">
                    {reportData.juiceVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em Água: 
                <Text as='span' fontWeight="bold">
                    {reportData.waterVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em Refrigerante: 
                <Text as='span' fontWeight="bold">
                    {reportData.sodaVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em branco em Lanches: 
                <Text as='span' fontWeight="bold">
                    {reportData.snackEmpetyVotes}
                </Text>
            </Text>
            <Text>
                Quantidade de votos em branco em Bebidas: 
                <Text as='span' fontWeight="bold">
                    {reportData.drinkEmpetyVotes}
                </Text>
            </Text>
            <Text>
                Quantidade total de votos:
                <Text as='span' fontWeight="bold">
                    {reportData.allVotes}
                </Text>
            </Text>
        </Stack>
    )
}