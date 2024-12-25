import Header from "../layout/header";

const Feedback = () => {
  return (
    <div className="flex flex-col">
        <Header />
        <div 
          className="flex items-center justify-center min-h-dvh"
          style={{fontSize: "3rem"}}
        >
          Why are you here? Our app is perfect. Get out.
        </div>
      </div>
    );
}

export default Feedback;