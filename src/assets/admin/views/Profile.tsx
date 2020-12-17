import React, {FormEvent, useEffect, useState} from "react";
import CIcon from "@coreui/icons-react";
import {
    CCardHeader,
    CCard,
    CCol,
    CRow,
    CCardBody,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CCardFooter,
    CButton
} from "@coreui/react";
import {getUser, updateUser} from "../repository/user";
import User from "../models/User";
import Loading from "../components/Loading";

const Profile: React.FunctionComponent = () => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onEmailChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        if (typeof user !== 'undefined') {
            user.email = target.value;
            setUser(user);
        }
    }

    useEffect(() => {
        getUser()
            .then(user => {
                setUser(user);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    const onSubmit = (event: FormEvent) => {
        if (typeof user === 'undefined') {
            return;
        }

        if (!user.email) {
            return; // TODO use form validation
        }

        setIsLoading(true);
        updateUser(user).finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return (<Loading/>);
    }

    let email = '';
    if (typeof user !== 'undefined') {
        email = user.email;
    }

    return (
        <>
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            Profile
                        </CCardHeader>
                        <CCardBody>
                            <CCol sm="6">
                                <CForm action="" method="post">
                                    <CFormGroup row>

                                        <CLabel htmlFor="nf-email">Email</CLabel>
                                        <CInput type="email"
                                                required
                                                name="nf-email"
                                                defaultValue={email}
                                                onChange={onEmailChange}
                                                autoComplete="email"/>
                                    </CFormGroup>
                                </CForm>
                            </CCol>
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit"
                                     size="sm"
                                     color="primary"
                                     onClick={onSubmit}
                            >
                                <CIcon size="sm" name="cil-save"/> Update</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
}

export default Profile;
