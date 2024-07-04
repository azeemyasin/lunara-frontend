"use client";
import React from "react";
import "./entrySectionStyles/styles.css";
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
import { FaTrashAlt } from "react-icons/fa";
const EntriesSection = () => {
  const data = {
    optionData: 52232.0,
    optionSecData: 73567,
    optionThirdData: 23567,
  };
  const [date, setDate] = React.useState<Date>();
  // const [date, setDate] = React.useState<Date>();
  return (
    <main className="my-14 bg-primary">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 text-xs ">
            <th>
              <input type="checkbox" />
            </th>
            <th>Entry description</th>
            <th>Amount (PKR)</th>
            <th>Cost/Rev</th>
            <th>Frequency</th>
            <th>Applicable date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Starting Cash balance</td>
            <td>{data.optionData}</td>
            <td>
              <select name="cost" id="" className="bg-primary">
                <option value="cost">Cost</option>
                <option value="balance">Balance</option>
                <option value="revenue">Revenue</option>
                <option value="mercedes">Profit</option>
              </select>
            </td>
            <td>
              <select name="month" id="" className="bg-primary">
                <option value="volvo">year</option>
                <option value="audi">month</option>
                <option value="saab">day</option>
                <option value="mercedes">week</option>
              </select>
            </td>
            <td>
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
                    {date ? format(date, "PPP") : <span>Jan '22,2023</span>}
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
            </td>
            <td className="text-red-500">
              <FaTrashAlt />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Cloud Infrastructure</td>
            <td>{data.optionSecData}</td>
            <td>
              <select name="profit" id="" className="bg-primary">
                <option value="mercedes">Profit</option>

                <option value="cost">Cost</option>
                <option value="balance">Balance</option>
                <option value="revenue">Revenue</option>
              </select>
            </td>
            <td>
              <select name="week" id="" className="bg-primary">
                <option value="mercedes">week</option>

                <option value="volvo">year</option>
                <option value="audi">month</option>
                <option value="saab">day</option>
              </select>
            </td>
            <td>
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
                    {date ? format(date, "PPP") : <span>Jan '22,2023</span>}
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
            </td>
            <td className="text-red-500">
              <FaTrashAlt />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Engineering Salary</td>
            <td>{data.optionThirdData}</td>
            <td>
              <select name="revenue" id="" className="bg-primary">
                <option value="revenue">Revenue</option>

                <option value="cost">Cost</option>
                <option value="balance">Balance</option>
                <option value="mercedes">Profit</option>
              </select>
            </td>
            <td>
              <select name="month" id="" className="bg-primary">
                <option value="audi">month</option>

                <option value="volvo">year</option>
                <option value="saab">day</option>
                <option value="mercedes">week</option>
              </select>
            </td>
            <td>
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
                    {date ? format(date, "PPP") : <span>Jan '22,2023</span>}
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
            </td>
            <td className="text-red-500">
              <FaTrashAlt />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default EntriesSection;
