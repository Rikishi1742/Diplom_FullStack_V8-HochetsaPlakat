const ConsoleWindow = ({ children } ) => {
    return (
        <>
                <div className="TitleWindow">
                    <h3></h3>
                    <div className="Design">
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>File</p>
                            <p>Edit</p>
                            <p>View</p>
                        </div>
                        <div style={{marginRight: "17px"}}>
                            <p>X</p>
                        </div>
                        
                    </div>
                </div>

                <div className="ConsoleWindow">
                    <p>{children}</p>
                </div>
         </>    
    );
}   

export default ConsoleWindow 