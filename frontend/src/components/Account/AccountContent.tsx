import { useParams } from "react-router-dom";
import './AccountContent.css';

import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../GraphQL/queries";


const AccountContent = () => {
    const { UserId } = useParams();

    const { data } = useQuery(GET_USER_BY_ID, {
        variables: {"where": { "id": UserId }}
    });

    console.log(data?.user.username)

    return (
        
            <div className="Container" style={{alignItems: "start"}}>
            <div className="AccountContent">
                <div>
                    <img src="../ImgPerson/1.svg" alt="" />
                    <h2>{data?.user.username}</h2>
                    <h3>ID: {data?.user.id}</h3>
                </div>

                <div>

                </div>
            </div>
        </div>
        

        

    );
}

export default AccountContent