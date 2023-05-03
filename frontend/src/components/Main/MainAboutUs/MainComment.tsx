import { LazyMotion } from 'framer-motion';
import './MainComment.css';
import Stars from './CommentStars/Stars';
import LazyShow from '../../Anims/LazyShow';

const MainComment = props => {

    return (
        <LazyShow>
            <div className={"Comment"}>
                
                <div className={"Person"}>
                    <img src="../ImgPerson/1.svg" alt="" />
                    <h3>{props.personName}</h3>
                </div>

                <div className={"ComText"}>
                    <p>{props.commentText}</p>
                    <Stars quantity={5} />
                </div>

            </div>
        </LazyShow>

    );
}

export default MainComment;