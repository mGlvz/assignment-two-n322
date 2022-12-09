import styles from "./openingParagraph.css"

function OpeningParagraph(){
    return(
        <div className="grid-holder">
        <div className="grid">
            <div className="row">
                <div className="col seller-1">
                    <h2>Best Sellers</h2>
                    <div className=" larger button-holder">
                        <a href="#" className="button button-black">Shop Now</a>
                    </div>
                </div>
                <div className="col">
                    <div className="seller-2">
                        <h2>Men</h2>
                        <div className="button-holder">
                            <a href="#" className="button button-black">Shop Now</a>
                        </div>
                    </div>
                    <div className="seller-3">
                        <h2>Women</h2>
                        <div className="button-holder">
                            <a href="#" className="button button-black">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default OpeningParagraph;