import { Checkbox } from "../ui/checkbox";


const CheckBox = ({
    title
}: {
    title:string
}) => {
    return (
        <div 
            className="flex flex-row 
            justify-center 
            items-center p-4 
            space-x-2"
        >
        <Checkbox 
            id={title} 
            className="w-7 h-7"
        />
        <label
            htmlFor={title}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            style={{
                fontSize: "1.25rem"
            }}
        >
            {title}
        </label>
        </div>
    )
}

export default CheckBox;