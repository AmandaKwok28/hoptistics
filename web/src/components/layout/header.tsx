
const Header = () => {
    return (
        <div 
            className="flex p-4 border-b w-full justify-center"
            style={
                { 
                    backgroundColor: '#6495ED', 
                    color: 'white', 
                    padding: '3rem',   
                    fontSize: '3rem',  
                    fontWeight: 'bold', 
                    borderBottom: '1px solid #ccc' ,
                    fontFamily: 'Roboto, Arial, sans-serif'
                }
            }
        >
            Hoptistics
        </div>
    )
}

export default Header;