import LazyShow from "../Anims/LazyShow";
import Footer from "../Footer/Footer";
import "./AboutUsContent.css"
import AboutUsMoreContent from "./AboutusMoreContent";

const AboutUsContent = () => {
    return (
        <>
            <div className="Container" style={{ height: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="AboutUsPageContent">
                    <div className="Welcome">
                        <LazyShow>
                            <h2>Welcome to <b>Gecko</b> - an electronic training and methodological complex for web application security!</h2>
                        </LazyShow>
                    </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                            
                            <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
                                    <img src="../Logo.svg" alt="" style={{ width: "100%" }} />
                            </div>
                            
                            <div style={{ width: "50%" }}>
                                <LazyShow>
                                    <p>Our electronic Training and Methodological Complex is designed to ensure the security of web applications and is based on the best practices and standards in the field of information security. We offer a unique learning approach that helps students better understand web application security and learn how to prevent potential threats.</p>
                                </LazyShow>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container" style={{flexDirection: "column", marginBottom: "15vh", height: "auto"}}>
                <AboutUsMoreContent />
            </div>

            <Footer/>
        </>
    );
}

export default AboutUsContent