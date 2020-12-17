import React from "react";
import TheSidebar from "../components/TheSideBar";
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
import TheContent from "../components/TheContent";

const DefaultLayout: React.FunctionComponent<any> = () => {
    return (
        <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">

                <TheHeader/>

                <div className="c-body">
                    <TheContent/>
                </div>

                <TheFooter/>
            </div>
        </div>
    );
}

export default DefaultLayout;
