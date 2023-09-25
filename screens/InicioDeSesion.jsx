import { StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function InicioDeSesion({ navigation }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
        navigation.navigate('Home')
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                            pattern="challenge@alkemy.org"
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo debe estar completo.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="formPlaintextPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required pattern="react"/>
                    <Form.Control.Feedback type="invalid">
                        Este campo debe estar completo.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
    )
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        fontFamily: "Alata",
        backgroundColor: 'white',
    },
    titulo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: "3rem",
        marginBottom: "3rem",
    },
    footer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem",
        width: "100%",
        alignContent: 'space-around',
        paddingLeft: '5rem',
        paddingRight: '5rem'
    },
});
