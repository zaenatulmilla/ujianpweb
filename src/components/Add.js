import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';

function Add() {
    const [nama, setNama] = useState('');
    const [npm, setNpm] = useState('');
    const [kelas, setKelas] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = nama,
            b = npm,
            c = kelas;

        Mahasiswa.push({ id: uniqueId, Nama: a, Npm: b, Kelas: c });

        history("/home");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "10rem" }}>
                <h1>Add</h1>
                <br></br>
                <Form.Group as={Row} className="mb-3" controlId="forNama">
                    <Form.Label column sm="2">
                        Nama
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Masukkan Nama"
                            required
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="forNpm">
                    <Form.Label column sm="2">
                        NPM
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Masukkan NPM"
                            required
                            onChange={(e) => setNpm(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="forKelas">
                    <Form.Label column sm="2">
                        Kelas
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Masukkan Kelas"
                            required
                            onChange={(e) => setKelas(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Add;

