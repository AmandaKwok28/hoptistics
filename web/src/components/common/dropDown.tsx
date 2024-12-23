import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";
import { ChevronsUpDown, Check } from 'lucide-react';
import { cn } from "../../lib/utils";
import { options } from "../../data/types";


const DropDown = ({ 
  opts,
  defaultVal,
  width = 300,
}: { 
  opts: options[],
  defaultVal: string,
  width?: number,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          style={{
            width: `${width}px`, 
            fontSize: "1.25rem",
            height: "50px"
          }}
        >
          {
            value
              ? opts.find((op) => op.value === value)?.label
              : defaultVal
          }
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent 
        style={{
          width: `${width}px`, 
          fontSize: "1.25rem",
        }}
        className="p-0"
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {opts.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  style={{fontSize: "1.25rem"}}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropDown;
