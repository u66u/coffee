import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";

function Help() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
      rounded={'lg'}
      size={'lg'}
      onClick={() => setIsOpen(true)}>How it works</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              1. Login in with your wallet provider, confirm the network switch to Polygon Mumbai Testnet.
            </p>
            <p>
              (You can get free MATIC from the faucet: <a href="https://mumbaifaucet.com/" target = '_blank' rel="noreferrer">click!</a>)
            </p>
            <br />
            <p>2. You enter your message and choose the donation sum.</p>
            <br />
            <p>3. Confirm the transaction.</p>
            <br />
            <p>4. Wait until the success message pops up.</p>
            <br />
            <p>5. Check your message down below!</p>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => setIsOpen(false)}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Help;