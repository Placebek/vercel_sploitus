import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

function ModalAuth({ closeModal, setIsAuth }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/login', formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setIsAuth(true);
            closeModal();
        } catch (err) {
            setError('Ошибка авторизации. Проверьте данные.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw]">
                <h2 className="text-xl font-bold mb-4 text-center">Войти</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Войти</button>
                        <button type="button" className="text-gray-500 hover:underline" onClick={closeModal}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAuth;
