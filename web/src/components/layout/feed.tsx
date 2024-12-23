import { options } from "../../data/types";
import CheckBox from "../common/checkBox";
import DropDown from "../common/dropDown";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Header from "./header";


const Feed = () => {
    const semesters: options[] = [
        {
          value: "fall",
          label: "Fall",
        },
        {
          value: "spring",
          label: "Spring",
        }
    ];

    // populate this later...
    const years: options[] = [
        {
            value: "2024",
            label: "2024",
        },
        {
            value: "2023",
            label: "2023",
        },
        {
            value: "2022",
            label: "2022",
        }
    ];

    const departments: options[] = [
        {
            value: "Biomedical Engineering",
            label: "Biomedical Engineering",
        },
        {
            value: "Computer Science",
            label: "Computer Science",
        },
        {
            value: "Applied Mathematics and Statistics",
            label: "Applied Mathematics and Statistics",
        }
    ]
        
    

    return (
        <div 
            className="flex flex-col justify-center"
        >
            <Header />
            {/* add home page ui here and move later */}

            <div 
                className="flex flex-row 
                           justify-center 
                           items-center p-4 
                           space-x-4"
            >
                <Input 
                    type="Instructor Name" 
                    placeholder="Instructor Name" 
                    className="w-1/5"
                    style={{
                        height: "50px",
                        fontSize: "1.25rem"
                    }}
                />

                <DropDown opts={semesters} defaultVal="Select Semester"/>
                <DropDown opts={years} defaultVal="Select Year"/>
            </div>
            <div 
                className="flex flex-row 
                justify-center 
                items-center p-4 
                space-x-4"
                style={{margin: `${-15}px`}}
            >
                <DropDown 
                    opts={departments} 
                    defaultVal="Include All Departments"
                    width={500}
                />
                <Input 
                    type="Class Number" 
                    placeholder="Class Number (Ex: EN.404.601)" 
                    className="w-1/5 "
                    style={{
                        height: "50px",
                        fontSize: "1.25rem"
                    }}
                />
            </div>

            {/* Check boxes here! */}
            <div
                className="flex flex-row 
                justify-center 
                items-center p-4"
                style={{margin: -15}}
            >
                <CheckBox title="Exclude P/NP" />
                <CheckBox title="Exclude COVID-19" />
                <CheckBox title="UpperDiv Only" />
                <CheckBox title="LowerDiv Only" />
            </div>
            
            <div 
                className="flex flex-row 
                           justify-center 
                           items-center p-4 
                           space-x-4"
            >
                <Button
                    style={{
                        backgroundColor: '#6495ED',
                        fontSize: "1.25rem",
                        width: "100px",
                        height: "40px"
                    }}
                >
                    Submit
                </Button>
                <Button
                    style={{
                        backgroundColor: '#6495ED',
                        fontSize: "1.25rem",
                        width: "100px",
                        height: "40px"
                    }}
                >
                    Clear
                </Button>
            </div>
            
            <img
                src="/jayBlueJay.jpg"
                alt="Blue Jay mascot"
                className="absolute bottom-0 left-0"
                style={{ width: '500px', height: '500px' }}
            />

        </div>
    )
}

export default Feed;