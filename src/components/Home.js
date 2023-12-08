import React, { Fragment, useState } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleEdit = (id, nama, npm, kelas) => {
        localStorage.setItem('Nama', nama);
        localStorage.setItem('Npm', npm);
        localStorage.setItem('Kelas', kelas);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id) => {
        setDeleteItemId(id);
        setShowDeleteModal(true);
    }

    const confirmDelete = () => {
        var index = Mahasiswa.map(function (e) {
            return e.id;
        }).indexOf(deleteItemId);

        Mahasiswa.splice(index, 1);

        setShowDeleteModal(false);
        setDeleteItemId(null);

        history('/home');
    }

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setDeleteItemId(null);
    }

    const handleLogout = () => {
        setShowLogoutModal(true);
    }

    const confirmLogout = () => {
        setShowLogoutModal(false);
        history('/');
    }

    const cancelLogout = () => {
        setShowLogoutModal(false);
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <h1>Daftar Mahasiswa</h1>
                <br></br>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Nama
                            </th>
                            <th>
                                Npm
                            </th>
                            <th>
                                Kelas
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Mahasiswa && Mahasiswa.length > 0
                                ?
                                Mahasiswa.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Nama}
                                            </td>
                                            <td>
                                                {item.Npm}
                                            </td>
                                            <td>
                                                {item.Kelas}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => handleEdit(item.id, item.Nama, item.Npm, item.Kelas)}>EDIT</Button>
                                                </Link>
                                                &nbsp;
                                                <Button variant="danger" onClick={() => handleDelete(item.id)}>DELETE</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="1g">Create</Button>
                </Link>
                <br></br>
                <Button variant="danger" onClick={handleLogout}>Log Out</Button>
            </div>

            <Modal show={showDeleteModal} onHide={cancelDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showLogoutModal} onHide={cancelLogout} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to log out?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelLogout}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmLogout}>
                        Log Out
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default Home;

