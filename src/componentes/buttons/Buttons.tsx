import { Button } from "@nextui-org/react";
import { ReactNode } from "react";

export function SimpleBlueButton({
  endIcon,
  content,
}: {
  endIcon?: ReactNode;
  content: any;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="primary"
      endContent={endIcon}
    >
      {content}
    </Button>
  );
}

export function SimpleRedButton({
  endIcon,
  content,
}: {
  endIcon?: ReactNode;
  content: any;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="danger"
      endContent={endIcon}
    >
      {content}
    </Button>
  );
}

export function SimpleYellowButton({
  endIcon,
  content,
}: {
  endIcon?: ReactNode;
  content: any;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="warning"
      endContent={endIcon}
    >
      {content}
    </Button>
  );
}
