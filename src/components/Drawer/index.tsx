import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="purple"
        aria-label="Menu"
        size="lg"
        icon={<AiOutlineMenu />}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <p>Currículo</p>
            <p>Livros indicados</p>
            <p>Posts</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
