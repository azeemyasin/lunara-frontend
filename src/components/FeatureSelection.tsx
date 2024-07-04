"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SlReload } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
const FeatureSelection = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <main className="bg-primary">
      {/* main div */}
      <div className="flex px-5 py-2 justify-between flex-col md:flex-row gap-4">
        <div className="flex gap-2 divide-x items-center">
          <p className="text-gray-400 text-xs">
            Projected runway: <span className="font-bold text-white">18</span>
          </p>
          <hr className="h-full" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "  text-left font-normal",
                  !date &&
                    "text-muted-foreground bg-primary text-blue-400 border-none"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span>starting date, Jan '22,2023</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* icons section */}
        <div className="flex gap-2 divide-x">
          <div className="flex gap-3">
            <div className="bg-yellow-700 rounded-full py-2 px-3">
              <h1 className="text-yellow-400">bs</h1>
            </div>
            <div className="bg-green-700 rounded-full py-2 px-3">
              <h1 className="text-green-400 w-6 h-7 flex items-center justify-center ">bs</h1>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#383838] px-2 rounded-2xl">
              
              <MdOutlinePeopleAlt className="text-2xl" />
              Share
           
            </button>
          </div>
          {/* <hr className="h-[30px]" /> */}
          <div className="flex items-center gap-3 text-2xl">
            <FaRegEyeSlash className="ml-2" />
            <SlReload />
            <IoMdSettings />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeatureSelection;
