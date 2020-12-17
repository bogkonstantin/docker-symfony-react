import React, {useContext} from 'react'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
} from '@coreui/react'

import {GlobalContext} from "../state/GlobalStore";
import CIcon from '@coreui/icons-react';

const TheSidebar = (): JSX.Element => {
    const [state, dispatch] = useContext(GlobalContext);

    let navigation = [
        {
            _tag: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/',
            icon: 'cil-speedometer',
        },
        {
            _tag: 'CSidebarNavTitle',
            _children: ['Settings']
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Profile',
            to: '/profile',
            icon: 'cil-user',
        },
    ];

    return (
        <CSidebar
            show={state.sidebarShow}
            onShowChange={() => {
                dispatch({
                    type: state.sidebarShow ? 'SIDEBAR_HIDE' : 'SIDEBAR_SHOW',
                    payload: null,
                })
            }
            }
        >
            <CSidebarBrand className="d-md-down-none" to="/">
                <CIcon
                    className="c-sidebar-brand-full"
                    name="logo-negative"
                    height={35}
                />
                <CIcon
                    className="c-sidebar-brand-minimized"
                    name="sygnet"
                    height={35}
                />
            </CSidebarBrand>
            <CSidebarNav>

                <CCreateElement
                    items={navigation}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                />
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none"/>
        </CSidebar>
    )
}

export default TheSidebar;
