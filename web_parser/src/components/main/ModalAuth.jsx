import React, { useState } from 'react';

function ModalAuth({ closeModal, setIsAuth }) {
    const [isLogin, setIsLogin] = useState(false);

    const handleAuth = (e) => {
        e.preventDefault();
        setIsAuth(false);
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw] transform transition-transform duration-300"
            >
                <h2 className="text-xl font-bold mb-4 text-center">
                    {isLogin ? 'Вход' : 'Регистрация'}
                </h2>
                <form onSubmit={handleAuth}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Введите email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                        <button
                            type="button"
                            className="text-gray-500 hover:underline"
                            onClick={closeModal}
                        >
                            Отмена
                        </button>
                    </div>
                </form>
                <p
                    className="text-sm text-center text-blue-500 mt-4 cursor-pointer"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin
                        ? 'Нет аккаунта? Зарегистрируйтесь.'
                        : 'Уже есть аккаунт? Войдите.'}
                </p>
            </div>
        </div>
    );
}

export default ModalAuth;
