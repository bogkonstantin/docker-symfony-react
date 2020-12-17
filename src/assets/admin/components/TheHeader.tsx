import React, {useContext} from "react";
import {
    CBreadcrumbRouter,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
    CSubheader,
    CToggler
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {GlobalContext} from "../state/GlobalStore";
import routes from "../routes";

const TheHeader = (): JSX.Element => {
    const [state, dispatch] = useContext(GlobalContext);

    const toggleSidebar = () => {
        if (state.sidebarShow) {
            dispatch({type: 'SIDEBAR_HIDE', payload: null});
        } else {
            dispatch({type: 'SIDEBAR_SHOW', payload: null});
        }
    }

    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={toggleSidebar}
            />
            <CToggler
                inHeader
                className="ml-3 d-md-down-none"
                onClick={toggleSidebar}
            />
            <CHeaderBrand className="mx-auto d-lg-none" to="/">
                <CIcon name="logo" height="48" alt="Logo"/>
            </CHeaderBrand>

            <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/">Dashboard</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/profile">Profile</CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>

            <CHeaderNav className="px-3">
                {/*<TheHeaderDropdownNotif/>*/}
                {/*<TheHeaderDropdownTasks/>*/}
                {/*<TheHeaderDropdownMssg/>*/}
                {/*<TheHeaderDropdown/>*/}
            </CHeaderNav>

            <CSubheader className="px-3 justify-content-between">
                <CBreadcrumbRouter
                    className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                    routes={routes}
                />
            </CSubheader>
        </CHeader>
    );
}

export default TheHeader;
