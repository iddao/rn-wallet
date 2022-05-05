import { useStoreActions, useStoreState } from "../../stores";
import React, { ReactNode, useEffect } from "react";
import { Center, Skeleton, VStack } from "native-base";

export function Initializer({ children }: { children: ReactNode }) {
  const initialized = useStoreState((state) => state.initialized);
  const initialize = useStoreActions((actions) => actions.initialize);
  useEffect(() => {
    initialize();
  }, []); // never do inits twice, even if variable is changed

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
