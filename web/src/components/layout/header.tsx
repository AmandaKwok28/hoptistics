
import { openPage } from "@nanostores/router";
import { $router } from "../../lib/router";

const Header = () => {

    return (
        <div className="flex flex-row">
        <div 
            className="flex p-4 border-b w-full justify-center items-center"
            style={
                { 
                    backgroundColor: '#6495ED', 
                    color: 'white', 
                    padding: '3rem',   
                    fontSize: '5rem',  
                    fontWeight: 'bold', 
                    borderBottom: '1px solid #ccc' ,
                    fontFamily: 'outfit, Arial, sans-serif',
                }
            }
        >
            <div
                style={{
                    cursor: "pointer",
                }}
                onClick={() => openPage($router, "home")}
            >
                Hoptistics
            </div>
            <div
                className="absolute right-24 flex flex-row space-x-4"
                style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                <div
                    onClick={() => openPage($router, "info")}
                >
                    Info
                </div>
                <div
                    onClick={() => openPage($router, "feedback")}
                >
                    Feedback
                </div>
            </div>
        
        </div>
        </div>
    )
}

export default Header;