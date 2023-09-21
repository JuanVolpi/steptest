import {
  TrashIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { Button, Tooltip } from '@nextui-org/react';
import { type } from 'os';

export type SmallChevronUpProps = {
  click?: () => void;
};

export default function SmallChevronDownButton(props: SmallChevronUpProps) {
  return (
    <>
      <Tooltip content="Mover para baixo" placement="right">
        <Button
          size="sm"
          variant="flat"
          radius="sm"
          color="default"
          endContent={<ChevronDownIcon className="w-5 h-5" />}
          isIconOnly
          onClick={props.click}
        />
      </Tooltip>
    </>
  );
}
