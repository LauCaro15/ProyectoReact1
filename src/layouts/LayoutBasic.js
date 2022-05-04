import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props){
    const { children } = props;
    return(
        <Layout>
            <Layout>
                <h2>Menu</h2>
                {children}
                <h2>Footer</h2>
            </Layout>
        </Layout>
    );
}