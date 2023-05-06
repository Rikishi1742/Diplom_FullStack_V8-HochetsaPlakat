import LazyShow from "../Anims/LazyShow";
import Footer from "../Footer/Footer";
import "./AboutUsContent.css"
import AboutUsMoreContent from "./AboutusMoreContent";

const AboutUsContent = () => {
    return (
        <>
            <div className="Container" style={{ height: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="AboutUsPageContent">
                    <LazyShow>
                        <h2>Welcome to <b>Gecko</b> - an electronic training and methodological complex for web application security!</h2>
                        <LazyShow>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
                                    <LazyShow>
                                        <img src="../PlaceHolder.svg" alt="" style={{ width: "70%" }} />
                                    </LazyShow>
                                </div>
                                <div style={{ width: "50%" }}>
                                    <p>Our electronic Training and Methodological Complex is designed to ensure the security of web applications and is based on the best practices and standards in the field of information security. We offer a unique learning approach that helps students better understand web application security and learn how to prevent potential threats.</p>
                                </div>
                            </div>
                        </LazyShow>
                    </LazyShow>
                </div>
            </div>
            <div className="Container" style={{flexDirection: "column", marginBottom: "15vh"}}>
                <AboutUsMoreContent />
            </div>

            <Footer/>
        </>
    );
}

export default AboutUsContent