import Header from "../layout/header";

const Info = () => {
    return (
      <div className="flex flex-col">
          <Header />
          <div 
            className="flex items-center justify-center min-h-dvh"
            style={{fontSize: "3rem"}}
          >
            Info
          </div>
        </div>
      );
}

export default Info;