import LazyShow2 from "../Anims/LazyShow2";
import ConsoleWindow from "./ConsoleWindow";

const AboutUsContactUs = () => {
    return (
        <div className="AboutUsContactUs">
            <h2>Contact us</h2>

            <div className="MainContentAboutUs">
                <div className="wrap">
                    
                    <p>Email:  <br />
                    Gecko123@ggmail.ru </p>
                    <p>User Care Department: <br />
                    +7 80 333 26 05</p>
                    <p>Contact Center: <br />
                    +7 800 555 35 35</p>
                    <p>Cheboksary, avenue. Mira, 40</p>
                    
                </div>

                <div className="wrap">
                    <LazyShow2>
                            <ConsoleWindow>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.146999680125!2d47.27610629729502!3d56.121246321099555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415a37bd1231de8b%3A0x1ea44f5951e4875d!2z0KfQtdCx0L7QutGB0LDRgNGB0LrQuNC5INGN0LvQtdC60YLRgNC-0LzQtdGF0LDQvdC90LjRh9C10YHQutC40Lkg0LrQvtC70LvQtdC00LYsINC60L7RgNC_0YPRgSA0!5e0!3m2!1sru!2sru!4v1683551639507!5m2!1sru!2sru" width="100%" height="425vh" style={{ border: "0" }} loading="lazy"></iframe>
                            </ConsoleWindow>
                    </LazyShow2>
                </div>
            </div>
        </div>
    );
}

export default AboutUsContactUs