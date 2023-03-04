import { pb } from "@/utils";
import { redirectUrl } from "@/utils/constant";
import { Button, Card, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AuthProviderInfo } from "pocketbase";
import React, { useEffect, useCallback, useState } from "react";
import { GitHub } from "react-feather";

export const AuthLogin = ({ signInText }: { signInText: string }) => {
  const [providers, setProviders] = useState<AuthProviderInfo[]>();
  const fetchProviders = useCallback(async () => {
    pb.autoCancellation(false);
    const providers = await pb.collection("users").listAuthMethods();
    setProviders(providers.authProviders);
  }, []);

  useEffect(() => {
    fetchProviders();
    console.log("first");
  }, [fetchProviders]);
  const loginWithAuth = (prov: AuthProviderInfo) => {
    localStorage.setItem("provider", JSON.stringify(prov));

    const url = prov.authUrl + redirectUrl;

    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };
  const iconSet: { [key: string]: any } = {
    github: <GitHub size={20} />,
    google: <Image src="/G.png" alt="Google logo" width={20} height={20} />,
  };
  return (
    <Flex flexWrap={["wrap", "nowrap"]} my="2" justify="center" width="full">
      {providers?.map((item, key) => (
        <Card
          m="2"
          cursor="pointer"
          _hover={{
            shadow: "lg",
          }}
          width="full"
          height="10"
          display="flex"
          justifyContent="center"
          onClick={() => {
            loginWithAuth(item);
          }}
          mr="3"
          key={key}
        >
          <Center>
            {iconSet[item?.name]}
            <Text ml="1">{signInText.toUpperCase()}</Text>
          </Center>
        </Card>
      ))}
    </Flex>
  );
};
