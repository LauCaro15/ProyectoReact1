import React from "react";
import{Layout}from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import "./LayoutAdmin.scss";
export default function LayoutAdmin(props){
    const{children}=props; 
    /* Especificas Los componentes que quieres obtener de este Layout */
    const{Header, Content, Footer}=Layout;
    return(
        <Layout>
        <Layout className="layout-admin">
            <Header clossName="layout-admin_header">
            <MenuTop></MenuTop>
            </Header>
            <Content className="layout-admin_content">{children}</Content>
            <Footer className="layout-admin_footer">React Project 2022</Footer>
        </Layout>
        </Layout>
    );
}