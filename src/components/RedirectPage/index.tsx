import { pb, setToLocalStorage } from "@/utils";
import { redirectUrl } from "@/utils/constant";
import { Center, Spinner, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

export const RedirectPage = () => {
  //@ts-ignore
  const params = new URL(window.location).searchParams;
  const provider = JSON.parse(localStorage.getItem("provider")!);
  const router = useRouter();
  const toast = useToast();
  pb.autoCancellation(false);

  const authenticate = useCallback(() => {
    if (provider?.state !== params?.get("state")) {
      console.log("State parameters don't match.");
      // throw "State parameters don't match.";
    }
    if (provider && params) {
      pb.collection("users")
        .authWithOAuth2(
          provider.name,
          params.get("code")!,
          provider.codeVerifier,
          redirectUrl,
          // pass optional user create data
          {
            emailVisibility: false,
          }
        )
        .then((authData) => {
          toast({
            description: "Successful Authentication, Redirecting...",
            status: "success",
            variant: "left-accent",
          });
          setToLocalStorage(authData.token);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          // toast({
          //   description:
          //     "Failed to exchange code. please try again by closing this tab.",
          //   status: "error",
          //   variant: "left-accent",
          // });
        });
    }
  }, []);

  useEffect(() => {
    authenticate();
    console.log("Inside Authentication");
  }, []);

  return (
    <Center flexDirection="column">
      <Spinner />
      <Text>Authenticating...</Text>
    </Center>
  );
};
