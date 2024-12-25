import Header from "../layout/header";

const Info = () => {

    return (
      <div className="flex flex-col outfit">

          <Header />
          {/* The words and bird pic */}
          <div className="flex flex-row">
          <p
            style={{
              position: "relative",
              fontSize: "5rem",
              fontWeight: "bold",
              right: "-8vw",
              bottom: "-1vw"
            }}
          >
            Hoptistics
          </p>
          <div
            className="text-box"
            style={{
              maxWidth: "1200px", // Set the maximum width of the container
              padding: "20px", // Add padding for the box
              wordWrap: "break-word", // Allow text to wrap if it's too long
              fontSize: "2rem", // Font size for the contained box
              fontWeight: "600",
              position: "relative",
              right: "-9vw",
              bottom: "-2vw"
            }}
          >
            Hoptistics is a minimalistic clone of{" "}
            <a href="https://zotistics.com" target="_blank" rel="noopener noreferrer">
              https://zotistics.com
            </a>
            , which is the equivalent website for UC Irvine. 
            We built this clone solely for educational purposes.
            <br />
            <br />
            This repository contains the CRUD operations for data
            from the JHU course statistics webpage. It focuses 
            on the frontend part of the application. 
            The backend part is a mock server API that serves 
            the frontend with data.
          </div>

          <img
                src="bjcheck.svg"
                alt="Blue Jay mascot"
                className="relative"
                style={{ 
                  width: '700px',
                  bottom: '-5vw',
                  left: '10vw' 
                }}
            />

          </div>

          {/* Second set of words */}
          <div className="flex flex-row">

          <img
                src="computerIcon.svg"
                alt="Blue Jay mascot"
                className="relative"
                style={{ 
                  width: '700px',
                  bottom: '-1vw',
                  right: '-8vw'
                }}
          />

        <div className="flex flex-col items-start justify-start">
          <p
            style={{
              position: "relative",
              fontSize: "5rem",
              fontWeight: "bold",
              right: "-12vw",
              bottom: "-1vw"
            }}
          >
            Run Locally
          </p>
          
          <div
            className="text-box"
            style={{
              maxWidth: "1200px", // Set the maximum width of the container
              padding: "20px", // Add padding for the box
              wordWrap: "break-word", // Allow text to wrap if it's too long
              fontSize: "2rem", // Font size for the contained box
              fontWeight: "600",
              position: "relative",
              right: "-11.4vw",
              bottom: "-1vw"
            }}
          >
            1. Clone this repository.
            <br />
            2. Navigate to the project directory.
            <br />
            3. To run the mock server API, please navigate to the
             api directory and run pnpm start. 
             This will start the mock server on http://localhost:3000.
            <br />
            4. Next, add .env file to web directory with the following 
            content:
            <br />
            
            <span className="pl-16">VITE_API_URL=http://localhost:3000</span>

            <br />
            5. Finally, start the Hoptistics web application 
            with pnpm run dev inside the web directory. This will run the 
            application on http://localhost:5173.
           
          </div>
          </div>


          </div>
        </div>
      );
}

export default Info;