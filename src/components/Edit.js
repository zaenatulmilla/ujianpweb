import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [nama, setNama] = useState("");
    const [npm, setNpm] = useState("");
    const [kelas, setKelas] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

     var index = Mahasiswa.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Mahasiswa[index];
        a.Nama = nama;
        a.Npm = npm;
        a.Kelas = kelas;

        history("/home");
    }

    useEffect(() => {
        setNama(localStorage.getItem('Nama'))
        setNpm(localStorage.getItem('Npm'))
        setKelas(localStorage.getItem('Kelas'))
        setId(localStorage.getItem('Id'))
    }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "10rem" }}>
                <h1>Edit</h1>
                <br></br>
                <Form.Group as={Row} className="mb-3" controlId="forNama">
                    <Form.Label column sm="2">
                        Nama
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Masukkan Nama"
                            value={nama}
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
                            value={npm}
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
                            value={kelas}
                            required
                            onChange={(e) => setKelas(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default Edit;

