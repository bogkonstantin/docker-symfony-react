import React, {Suspense} from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import {CContainer, CFade} from '@coreui/react'

import routes from '../routes'
import Loading from "./Loading";

const TheContent: React.FunctionComponent = () => {
    return (
        <main className="c-main">
            <CContainer fluid>
                <Suspense fallback={Loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        <CFade>
                                            <route.component {...props} />
                                        </CFade>
                                    )}/>
                            )
                        })}
                    </Switch>
                </Suspense>
            </CContainer>
        </main>
    )
}

export default TheContent;
