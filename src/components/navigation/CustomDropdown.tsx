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
  title: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  initialSelectedKeys,
  onSelectChange,
  options,
  title,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(initialSelectedKeys);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="p-2 h-fit w-full flex flex-col bg-lblue rounded-lg">
      <p className="text-sm">{title}</p>
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="capitalize bg-white"
            endContent={<ChevronDownIcon className="w-5 h-5 text-end  " />}
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
    </div>
  );
};

export default CustomDropdown;
