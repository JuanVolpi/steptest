import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App({
  isOpen,
  onOpen,
  onClose,
  click,
  title,
}: {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  click: () => void;
  title: string;
}) {
      return (
        <>
          <Modal isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {`Deseja mesmo apagar ${title} ?`}
                  </ModalHeader>
                  <ModalFooter>
                    <Button color="default" variant="light" onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => {
                        onClose();
                        click();
                      }}
                    >
                      Confirmar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
  }
