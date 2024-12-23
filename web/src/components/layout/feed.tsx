import Header from "./header";
import UserInput from "./userInput";



const Feed = () => {

    return (
        <div 
            className="flex flex-col justify-center"
        >
            <Header />
            {/* add home page ui here and move later */}

            <UserInput />

            <img
                src="jayBlueJay.jpg"
                alt="Blue Jay mascot"
                className="absolute bottom-0 left-0"
                style={{ width: '500px', height: '500px' }}
            />

        </div>
    )
}

export default Feed;