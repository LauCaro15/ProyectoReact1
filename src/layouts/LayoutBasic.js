import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props){
    const { children } = props;
    return(
        <Layout>
            {children}
        </Layout>
    );
}