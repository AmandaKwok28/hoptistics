import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const semesters = [
    {
        value: "fall",
        label: "Fall",
    },
    {
        value: "spring",
        label: "Spring",
    }
]

const Home = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {
                        value
                        ? semesters.find((semester) => semester.value === value)?.label
                        : "Select Semester" 
                    }
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
            
            </PopoverContent>
        </Popover>
    )
}

export default Home;