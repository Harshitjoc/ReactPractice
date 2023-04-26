import React from "react";
import "../Watch.css"
import classes from "./ProductDeatils.module.css"

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.selectedProductImage);
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.featureItem];
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.selectedFeatureItem);
        }
        return (
            <button onClick={() => props.onFeatureItemClick(pos)}
                key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })

    return (
        <div className={classes.productData}>
            <h1 className={classes.productTitle}>{props.data.title}</h1>
            <p className={classes.productDescription}>{props.data.description}</p>

            <h3 className={classes.sectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
                {/* <img className={["productImage", "selectedProductImage"].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
                <img className="productImage" src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
                <img className="productImage" src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
                <img className="productImage" src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" /> */}
            </div>
            <h3 className={classes.sectionHeading}>Features</h3>
            <div>
                {featureList}
                {/* <button className={[classes.featureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.featureItem}>Heart Rate</button> */}
            </div>
            <button className={classes.primaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;