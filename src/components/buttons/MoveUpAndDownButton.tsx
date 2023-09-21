import {
  SmallChevronUpButton,
  SmallChevronDownButton,
} from '@/components/buttons';
import { Divider } from '@nextui-org/react';
import { isPropertyAccessOrQualifiedName } from 'typescript';

export type MoveUpAndDownProps = {
  clickUp: () => void;
  clickDown: () => void;
};

export default function MoveUpAndDownButton(props: MoveUpAndDownProps) {
  return (
    <>
      <div className="flex flex-col self-center mr-5 gap-2 p-2 rounded-lg">
        <SmallChevronUpButton click={props.clickUp}></SmallChevronUpButton>
        <Divider></Divider>
        <SmallChevronDownButton
          click={props.clickDown}
        ></SmallChevronDownButton>
      </div>
    </>
  );
}
