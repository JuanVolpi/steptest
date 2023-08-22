"use client";

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { Link } from "@nextui-org/react";

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

export function SimpleYellowButtonLink({
  endIcon,
  content,
  href,
}: {
  endIcon?: ReactNode;
  content: any;
  href: string;
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
    >
      {content}
    </Button>
  );
}
