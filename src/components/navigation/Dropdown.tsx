import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";

interface CustomDropdownProps {
  initialSelectedKeys: Set<string>;
  onSelectChange: (keys: Set<string>) => void;
  options: { key: string; label: string }[];
}

export function CustomDropdown({
  initialSelectedKeys,
  onSelectChange,
  options,
}: CustomDropdownProps) {
  const [selectedKeys, setSelectedKeys] = useState(initialSelectedKeys);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
          endContent={<ChevronDownIcon className="w-5 h-5" />}
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection actions"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(newSelectedKeys) => {
          setSelectedKeys(newSelectedKeys as Set<string>);
          onSelectChange(newSelectedKeys as Set<string>);
        }}
      >
        {options.map((option) => (
          <DropdownItem key={option.key}>{option.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CustomDropdown;
