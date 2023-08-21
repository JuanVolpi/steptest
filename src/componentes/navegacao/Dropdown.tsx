import React, { SetStateAction, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface CustomDropdownProps {
  initialSelectedKeys: Set<string>;
  onSelectChange: (keys: Set<string>) => void;
  options: { key: string; label: string }[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  initialSelectedKeys,
  onSelectChange,
  options,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(initialSelectedKeys);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
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
};

export default CustomDropdown;
