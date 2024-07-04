"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as Icons from "./common/Icons";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];
import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
// import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaRegEye } from "react-icons/fa6";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "1",
    label: "1 Years",
  },
  {
    value: "1.5",
    label: "1.5 Years",
  },
  {
    value: "2",
    label: "2 Years",
  },
  {
    value: "2.5",
    label: "2.5 Years",
  },
  {
    value: "3",
    label: "3 Years",
  },
];

type Props = {
  setShowSidebar: any;
};

const Header = ({ setShowSidebar }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <header className="bg-primary">
      {/* main div */}
      <div className="p-5 flex justify-between flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div
            className="md:hidden flex"
            onClick={() => setShowSidebar(true)}
          >
            <Icons.HamburgerIcon />
          </div>
          <span className="text-3xl">
            {" "}
            <RiHome6Line />
          </span>
          <span className="text-gray-400">
            {" "}
            <MdKeyboardArrowRight />
          </span>
          <p className="text-gray-400">Runway</p>
          <span className="text-gray-400">
            {" "}
            <MdKeyboardArrowRight />
          </span>
          <p>Profit&Loss+Cash</p>
        </div>
        {/* second sec buttons */}
        <div className="bg-[#252525] flex items-center justify-center divide-x rounded-[8px] p-2 gap-2 w-[260px] ">
          <button className="flex items-center gap-2">
            <FaRegEye />
            354,575.00
          </button>
          {/* <hr className="h-full" /> */}
          <div className=" ">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  // variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className=" justify-between bg-[#252525] border-none outline-none"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Years.."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
