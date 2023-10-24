import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onChange,
  title,
  description,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content
          className="fixed drop-shadow-md border border-neutral-700 
        top-1/2 left-1/2 max-h-full h-full md:h-auto md-max-h-[85vh] w-full md:w-[90vw] md:max-w-[4500px]
        translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] "
        ></Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
