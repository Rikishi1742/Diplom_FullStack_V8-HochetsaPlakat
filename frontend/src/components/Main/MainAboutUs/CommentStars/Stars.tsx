const StarEl = (props) => {
    return (
        <img src="../SiteElements/Star.svg" alt="" key={props.id} />
    );
}

const Stars = props => {


    let starsQuantity = props.quantity;
    let StarsElem = [];

    if (starsQuantity > 5) {
        starsQuantity = 5;
    }

    if (starsQuantity < 1) {
        starsQuantity = 1;
    }

    for (let i = 0; i < starsQuantity; i++) {
        StarsElem[i] = <StarEl key={i} />
    }

    return (
            <div className={"Stars"}>
                {StarsElem}
            </div>
    );
}

export default Stars;