import { TrashIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { Button, Tooltip } from "@nextui-org/react";
import { type } from "os";

export type SmallDeleteButtonProps = {
  click?: () => void;
};

export default function SmallDeleteButton(props: SmallDeleteButtonProps) {
  return (
    <>
      <Tooltip content="Limpar todas as opções.">
        <Button
          size="sm"
          variant="flat"
          radius="sm"
          color="danger"
          endContent={<TrashIcon className="w-5 h-5" />}
          isIconOnly
          onClick={props.click}
        />
      </Tooltip>
    </>
  );
}
