import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../validations/validationRegisterSchemas';
import axiosInstance from '../axiosInstance';

function ModalRegister({ closeModal }) {
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axiosInstance.post('/auth/register', values);
            localStorage.setItem('token', response.data.token);
            closeModal();
        } catch (error) {
            setErrors({ api: 'Ошибка регистрации. Попробуйте позже.' });
        }
        setSubmitting(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-[90vw] sm:w-[30vw]">
                <h2 className="text-xl font-bold mb-4 text-center">Регистрация</h2>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors }) => (
                        <Form>
                            {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="">
                                    Имя пользователя
                                </label>
                                <Field
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Пароль
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                                    Подтвердите пароль
                                </label>
                                <Field
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                            </div>

                            <div className="flex justify-between items-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Зарегистрироваться
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:underline"
                                    onClick={closeModal}
                                >
                                    Отмена
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ModalRegister;
