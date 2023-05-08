import LazyShow from "../Anims/LazyShow";
import LazyShow2 from "../Anims/LazyShow2";
import Footer from "../Footer/Footer";
import AboutUsContactUs from "./AboutUsContactUs";
import "./AboutUsContent.css"
import AboutUsMoreContent from "./AboutusMoreContent";

const AboutUsContent = () => {
    return (
        <>
            <div className="Container" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "" }}>
                <div className="AboutUsPageContent">
                    <div className="Welcome">
                        <LazyShow>
                            <h2>Welcome to <b>Gecko</b> - an electronic training and methodological complex for web application security!</h2>
                        </LazyShow>
                    </div>

                        <div className="WelcomContent">
                            
                            <div className="gg">
                                    <img src="../Logo.svg" alt="" />
                            </div>
                            
                            <div className="gg">
                                <LazyShow>
                                    <p>Our electronic Training and Methodological Complex is designed to ensure the security of web applications and is based on the best practices and standards in the field of information security. We offer a unique learning approach that helps students better understand web application security and learn how to prevent potential threats.</p>
                                </LazyShow>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Container" style={{flexDirection: "column", height: "auto"}}>
                <AboutUsMoreContent />
                <br />
            </div>

            <div className="Container" style={{marginBottom: "10vh",height: "auto",flexDirection: "column"}}>
                <AboutUsContactUs />
            </div>

            <Footer/>
        </>
    );
}

export default AboutUsContent