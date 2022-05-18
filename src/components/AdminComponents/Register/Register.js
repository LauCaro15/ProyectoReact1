import React, {useState} from "react";
import { Form, Input, Button, Checkbox} from "antd";
import { UserOutlined } from"@ant-design/icons";
import "./Register.scss";
export default function Register(){
    const [ inputs, setInputs] = useState({
        email: "",
        name: "",
        lastname: "",
        password: "",
        repeatPassword:"",
        privacyPolicy:false,
    });
    const changeForm = (event) => {
        if(event.target.name === "privacyPolicy"){
            setInputs({
                ... inputs,
                [event.target.name]: event.target.checked,
            });
        }else{
            setInputs({
                ... inputs,
                [event.target.name]:event.target.value,
            });
        }
    };
    return(
        <Form className = "register-form" onChange={changeForm}>
           <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form_input"
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form_input"
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={
                        <UserOutlined/>
                    }
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    className="register-form_input"
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leido y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button html Type="submit" className="register-form_button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    );    
}