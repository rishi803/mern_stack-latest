import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../Home/Banner.css";

const data = [
    "https://assets-static.invideo.io/images/origin/Creative_Clothing_Advertisement_Ideas_To_Boost_Sales_revised_3_1_cefa9cda88.png",
    "https://assets-static.invideo.io/images/large/181_Fashion_Clothing_Ads_1_33b060017f.png",
    "https://img.freepik.com/free-psd/fashion-event-facebook-template_23-2150283919.jpg?w=2000",


]

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "100px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;
