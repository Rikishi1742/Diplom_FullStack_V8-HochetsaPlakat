import Button from '../../Elements/Button';
import './MainInfoContent.css'

const MainInfoContent = () => {
    return (
        <div className="Container">
            <div className='MainInfoContent'>
                <div className='Text'>
                    <h2>Education</h2>
                    <p>
                        <b>Gecko</b> is a tutorial focused on providing testing and security for web applications.
                    </p>
                    <p>The purpose of this complex is to make education in the field of information security accessible, understandable and free</p>
                </div>
                <div>
                    <h2>Course program</h2>
                    <p className='UL'>
                    - Modern Network Security Threats <br />
                    - Securing Network Devices <br />
                    - Secure Network Management <br />
                    - Final control <br />
                    </p>
                    <Button Value="Apply for a course"></Button>
                </div>
            </div>
        </div>
        );
};

export default MainInfoContent;