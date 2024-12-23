
import { openPage, redirectPage } from "@nanostores/router";
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
                    fontSize: '3rem',  
                    fontWeight: 'bold', 
                    borderBottom: '1px solid #ccc' ,
                    fontFamily: 'Roboto, Arial, sans-serif',
                }
            }
        >
            <div
                style={{
                    cursor: "pointer"
                }}
                onClick={() => redirectPage($router, "home")}
            >
                Hoptistics
            </div>
            <div
                className="absolute right-10 flex flex-row space-x-4"
                style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
            >
                <div
                    onClick={() => redirectPage($router, "info")}
                >
                    Info
                </div>
                <div
                    onClick={() => redirectPage($router, "feedback")}
                >
                    Feedback
                </div>
            </div>
        
        </div>
        </div>
    )
}

export default Header;