import { TrashIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { Button, Tooltip } from "@nextui-org/react";

export type SmallSelectAllButtonProps = {
  click?: () => void;
};

export default function SmallSelectAllButton(props: SmallSelectAllButtonProps) {
  return (
    <>
      <Tooltip content="Selecionar todas as opções.">
        <Button
          size="sm"
          variant="flat"
          radius="sm"
          color="success"
          endContent={<CheckCircleIcon className="w-5 h-5" />}
          isIconOnly
          onClick={props.click}
        />
      </Tooltip>
    </>
  );
}
