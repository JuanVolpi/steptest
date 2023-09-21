import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Button, Tooltip } from '@nextui-org/react';

export type SmallChevronDownProps = {
  click?: () => void;
};

export default function SmallChevronUpButton(props: SmallChevronDownProps) {
  return (
    <>
      <Tooltip content="Mover para cima" placement="right">
        <Button
          size="sm"
          variant="flat"
          radius="sm"
          color="default"
          endContent={<ChevronUpIcon className="w-5 h-5" />}
          isIconOnly
          onClick={props.click}
        />
      </Tooltip>
    </>
  );
}
