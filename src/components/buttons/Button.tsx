import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export type JSX = React.JSX.Element;
export type ButtonContent = JSX | string | number;

export function SimpleBlue({
  endIcon,
  content,
  href,
}: {
  content: any;
  href?: string;
  endIcon?: JSX;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="primary"
      endContent={endIcon}
      href={href}
      as={Link}
    >
      {content}
    </Button>
  );
}

export function SimpleRed({
  endIcon,
  content,
  href,
}: {
  content: any;
  href?: string;
  endIcon?: JSX;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="danger"
      endContent={endIcon}
      href={href}
      as={Link}
    >
      {content}
    </Button>
  );
}

export function SimpleYellow({
  endIcon,
  content,
  href,
  onClick,
  selected,
}: {
  onClick?: () => void;
  selected: boolean;
  content: any;
  href?: string;
  endIcon?: JSX;
}) {
  return (
    <Button
      key={"fav"}
      variant="flat"
      radius="sm"
      size="sm"
      color="warning"
      endContent={endIcon}
      href={href}
      as={Link}
      style={{
        border: selected ? "2px solid orange" : "inherit",
      }}
      onClick={onClick}
    >
      {content}
    </Button>
  );
}
