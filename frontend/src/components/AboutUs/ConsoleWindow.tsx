const ConsoleWindow = ({ children } ) => {
    return (
        <>
                <div className="TitleWindow">
                    <h3></h3>
                    <div className="Design">
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                    </div>
                </div>

                <div className="ConsoleWindow">
                    <p>{children}</p>
                </div>
         </>    
    );
}   

export default ConsoleWindow 