import React from "react";
import "../Watch.css"

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return (
        <div className="productPreview">
            <img src={props.currentPreviewImage} alt="Product Preview" />

            {
                props.currentSelectedFeature === 1 ?

                    <div className="heartBeatSection">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <p>78</p>
                    </div>
                    :
                    <div className="timeSection">
                        <p>{`${currentHour}:${currentMinute}`}</p>
                    </div>
            }

        </div>
    );
}

export default ProductPreview;