import Home from "../pages/home";
import { Input } from "../ui/input";
import Header from "./header";


const Feed = () => {
    return (
        <div 
            className="flex flex-col justify-center"
        >
            <Header />
            {/* add home page ui here and move later */}

            <div 
                className="flex flex-row justify-center items-center p-4"
            >
                <Input 
                    type="Instructor Name" 
                    placeholder="Instructor Name" 
                    className="w-1/3"
                />

                <Home />

            </div>

        </div>
    )
}

export default Feed;