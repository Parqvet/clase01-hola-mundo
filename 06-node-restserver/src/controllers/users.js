const express = require('express');

const getAllUsers = (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Pepe'
        },
        {
            id: 2,
            name: 'Laura'
        }
    ];

    res.json(users);
};

const createUser = (req, res) => {

    const user = req.body;
    user.id = 5;
    const result = {
        message: 'User created',
        user
    }

    res.status(201).json(result);
};

const updateUser = (req, res) => {

    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User updated',
        user
    }

    res.json(result);
};

const updatePartialUser = (req, res) => {
    const result = {
        message: 'User updated with patch'
    }

    res.json(result);
};

const deleteUser = (req, res) => {

    const { id } = req.params;

    const result = {
        message: `User id ${id} deleted`
    }
    res.json(result);
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}