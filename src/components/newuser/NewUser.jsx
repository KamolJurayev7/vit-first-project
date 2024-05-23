// style
import './NewUserForm.css'
import React from 'react';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const NewUser = ({addUser}) => {
    const [user, setUser] = useState({
        id: uuidv4(),
        image: "",
        firstname: "",
        lastname: "",
        age: null,
        from: "",
        job: "",
        gender: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(user);
    }
    return (
        <div className='modal-wrapper'>
            <div className='overlay'>
                <div className='modal'>
                    <h2>Create user</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Image URL:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, image: e.target.value }
                                })
                            }} type="url" required />
                        </label>
                        <label>
                            <span>First name:</span>
                            <input
                                onChange={
                                    (e) => {
                                        setUser((prev) => {
                                            return { ...prev, firstname: e.target.value }
                                        })
                                    }}
                                type="text" required />
                        </label>
                        <label>
                            <span>Last name:</span>
                            <input
                                onChange={
                                    (e) => {
                                        setUser((prev) => {
                                            return { ...prev, lastname: e.target.value }
                                        })
                                    }} type="text" required />
                        </label>
                        <label>
                            <span>Age:</span>
                            <input
                                onChange={
                                    (e) => {
                                        setUser((prev) => {
                                            return { ...prev, age: e.target.value }
                                        })
                                    }} type="number" required />
                        </label>
                        <label>
                            <span>From:</span>
                            <input onChange={
                                (e) => {
                                    setUser((prev) => {
                                        return { ...prev, from: e.target.value }
                                    })
                                }} type="text" required />
                        </label>
                        <label>
                            <span>Job:</span>
                            <input
                                onChange={
                                    (e) => {
                                        setUser((prev) => {
                                            return { ...prev, job: e.target.value }
                                        })
                                    }} type="text" required />
                        </label>
                        <div className='gender'>
                            <span>Gender:</span>
                            <label>
                                <small>Male</small>
                                <input
                                    onChange={
                                        (e) => {
                                            setUser((prev) => {
                                                return { ...prev, gender: e.target.value }
                                            })
                                        }} type="radio" required name='gender' value="male" />
                            </label>
                            <label>
                                <small>Famale</small>
                                <input onChange={
                                    (e) => {
                                        setUser((prev) => {
                                            return { ...prev, gender: e.target.value }
                                        })
                                    }} type="radio" required name='gender' value="famale" />
                            </label>
                            <button type='submit' className='modal-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewUser;
