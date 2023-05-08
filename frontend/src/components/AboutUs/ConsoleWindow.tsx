const ConsoleWindow = ({ children } ) => {
    return (
        <div style={{width: "100%", height: "100%"}}>
                <div className="TitleWindow">
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
         </div>    
    );
}   

export default ConsoleWindow 