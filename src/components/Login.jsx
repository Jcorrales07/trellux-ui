import React, { useState } from 'react'
import { clientTrelluxApi } from '../../axios.config'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const getInfo = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        // Logica para hacer el login

        const clientReq = {
            username: user.username,
            password: user.password,
        }

        if (clientReq.username === '' || clientReq.password === '') {
            toast.error('Please fill all the fields', {
                position: 'top-right',
            })
            return
        }

        const userLogin = await clientTrelluxApi
            .post('/users/login', clientReq)
            .then((res) => res.data)
            .catch((e) => e)

        if (!userLogin.success) {
            // show error REACT TOAST
            toast.error(userLogin.message, {
                position: 'top-right',
            })
            return
        }

        setUser({
            username: '',
            password: '',
        })

        // Guardar el token en el local storage
        toast.success('Login Successfully!', {
            position: 'bottom-right',
        })
        localStorage.setItem('accessToken', userLogin.accessToken)
        navigate('/dashboard')
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="user"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address or username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="username"
                                autoComplete="username"
                                required
                                onChange={getInfo}
                                value={user.username}
                                className="block w-full rounded-md bg- border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={getInfo}
                                value={user.password}
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="text-sm">
                            <a
                                href="/register"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                I don't have an account
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                            onClick={handleLogin}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
