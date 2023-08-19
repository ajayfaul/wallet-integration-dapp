import {
  Container,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Events from "../components/Event";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} py={4}>
      <Flex>
        <Flex flexDirection={"row"} h={"75vh"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"xl"}>Transfer Token</Heading>
              <Heading fontSize={"6xl"}>
                Initiate Token Transfer to others.
              </Heading>
              <Text fontSize={"xl"}>
                You can transfer token to other wallet address. And send them
                message for the transfer. Connect your Wallet and enjoy the
                transfer!
              </Text>
              <Link href={"/transfer"}>
                <Button colorScheme={"purple"} w={"20%"}>
                  Transfer
                </Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <MediaRenderer
              src={HERO_IMAGE_URL}
              height="100%"
              width="100%"
            ></MediaRenderer>
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Flex>
          <MediaRenderer src={FEATURES_IMAGE_URL} height="100%" width="80%" />
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack spacing={4}>
            <FeatureCard
              step={"01"}
              title={"Select a Token"}
              description={"Select a verified Token from list."}
            />
            <FeatureCard
              step={"02"}
              title={"Reciever"}
              description={"Enter the wallet address of the reciever."}
            />
            <FeatureCard
              step={"03"}
              title={"Send a Message"}
              description={"Write a message to the reciever on the transfer."}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
      <Events />
    </Container>
  );
};

export default Home;
