////////HOC - Hi Order Component - компонент высшего порядка, с помощью которой можно обернуть компонент
import { Component, ComponentType, ReactElement, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const withAuth = (Component: ComponentType) => (props: any) => {
    const {user} = useContext(AuthContext)

    if(!user) return <p>You are not authorized to view this page</p> 

    return <Component {...props} />
}