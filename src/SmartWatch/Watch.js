import React, { Component } from "react";
import "./Watch.css"
import ProductPreview from "./ProductPreview/ProductPreview"
import ProductDetails from "./ProductDetails/ProductDetails";
import Topbar from "./Topbar/Topbar";
import ProductData from "./Utils/ProductData";


class Watch extends Component {
    state = {
        productData: ProductData,
        currentPreviewImagePos: 0,
        currentSelectedFeature: 0,
    }

    onColorOptionClick = (pos) => {
        this.setState({ currentPreviewImagePos: pos })
    }

    onFeatureItemClick = (pos) => {
        this.setState({ currentSelectedFeature: pos })
    }

    render() {
        return (
            <div className="Watch">
                <header>
                    <Topbar />
                </header>

                <div className="mainContainer">

                    <ProductPreview currentPreviewImage={this.state.productData.colorOptions[
                        this.state.currentPreviewImagePos].imageUrl}
                        currentSelectedFeature={this.state.currentSelectedFeature}
                    />

                    <ProductDetails data={this.state.productData}
                        onColorOptionClick={this.onColorOptionClick}
                        currentPreviewImagePos={this.state.currentPreviewImagePos}
                        onFeatureItemClick={this.onFeatureItemClick}
                        currentSelectedFeature={this.state.currentSelectedFeature}
                    />
                </div>
            </div>
        );
    }
}

export default Watch