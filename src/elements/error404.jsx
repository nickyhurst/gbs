import React, { Component } from 'react';
import Helmet from "../component/common/Helmet";
import GBSHeader from "../component/header/GbsHeader";
import GBSFooter from "../component/footer/GbsFooter";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

class error404 extends Component {

    render() {
        return (
            <>
                <Helmet pageTitle="Greenblood Sounds - Ska and Punk Vinyl DJ in Dallas!" />
                <GBSHeader logo="symbol-dark" color="color-black" />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">404!</h1>
                                    <h3 className="sub-title">Page not found</h3>
                                    <span>The page you were looking for could not be found.</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <GBSFooter />
            </>
        )
    }
}
export default error404;