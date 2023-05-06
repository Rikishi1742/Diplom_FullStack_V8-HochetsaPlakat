import LazyShow from "../Anims/LazyShow"
import ConsoleWindow from "./ConsoleWindow";

const AboutUsMoreContent = () => {
    return (
        <>
            <LazyShow>
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{width: "45%", height:"auto"}}>
                        <p>Our instructors are highly qualified professionals with many years of experience in the field of information security. They will help you learn how to properly configure web applications, protect them from possible attacks, and analyze system security.</p>
                    </div>
                    <div style={{width: "45%", height:"auto"}}>
                        <ConsoleWindow>We offer a wide range of courses that cover all aspects of web application security, from basic knowledge to advanced techniques.</ConsoleWindow>
                    </div>
                </div>
            </LazyShow>
            <br />
            <LazyShow>
            
                <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{width: "45%", height:"auto"}}>
                        <ConsoleWindow>We believe that knowledge of web application security is an important part of a successful career in the IT industry.</ConsoleWindow>
                    </div>
                    <div style={{width: "45%", height:"auto"}}>
                        <p>Therefore, we strive to provide our students with all the information they need to help them become true professionals in this field.</p>
                        <p>We hope that you will find here everything you need to develop your knowledge of web application security.</p>
                    </div>
                </div>
            </LazyShow>
            <br />
            
        </>
    );

}

export default AboutUsMoreContent