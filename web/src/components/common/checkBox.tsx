import { Checkbox } from "../ui/checkbox";


const CheckBox = ({
    title,
    value,
    onChange,
}: {
    title:string,
    value:boolean,
    onChange: (value: boolean) => void;
}) => {
    return (
        <div 
            className="flex flex-row 
            justify-center 
            items-center p-4 
            space-x-2"
        >
        <Checkbox 
            checked={value}
            id={title} 
            className="w-7 h-7"
            onClick={() => onChange(!value)}
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