import React, { ReactNode } from "react";
import { Center, Skeleton, VStack } from "native-base";
import { useStoreRehydrated } from "easy-peasy";

export function Initializer({ children }: { children: ReactNode }) {
  const initialized = useStoreRehydrated();

  if (!initialized) {
    return (
      <>
        <Center w="100%" h="100%">
          <VStack
            w="90%"
            maxW="400"
            space={8}
            overflow="hidden"
            rounded="md"
            _dark={{
              borderColor: "coolGray.500",
            }}
            _light={{
              borderColor: "coolGray.200",
            }}
          >
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
          </VStack>
        </Center>
      </>
    );
  } else {
    return <>{children}</>;
  }
}
