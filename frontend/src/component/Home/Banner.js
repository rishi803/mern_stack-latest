import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../Home/Banner.css";

const data = [
    "https://sparepartsonline.in/wp-content/uploads/2018/08/mobile-phone-accessories-banner.jpg",
    "https://assets-static.invideo.io/images/origin/Creative_Clothing_Advertisement_Ideas_To_Boost_Sales_revised_3_1_cefa9cda88.png",
    "https://img.freepik.com/free-vector/fashion-template-design_23-2150745900.jpg?w=2000",
    "https://www.heliocentrix.in/wp-content/uploads/2020/05/hp-340-laptop-price-banner.jpg",
    "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Style_Call_WEB_1_1440x.jpg?v=1695129521",


]

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                showThumbs={false}
                autoPlay={true}
                interval={5000}
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
