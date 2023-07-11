import React, { useState } from 'react'
import { clientTrelluxApi } from '../../axios.config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    })

    const getInfo = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log(newUser)

        // sending info
        const isCreated = await clientTrelluxApi
            .post('/users/register', newUser)
            .then((res) => res.data)
            .catch((e) => e)

        if (!isCreated.success) {
            // show error REACT TOAST
            return
        }

        setNewUser({})
        navigate('/login')
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
                    Sign up! We're excited to have you!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div className="flex justify-between">
                        <div className="mt-2">
                            <label
                                htmlFor="User"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="current-name"
                                required
                                className="block w-full rounded-md bg- border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                                onChange={getInfo}
                                value={newUser.name}
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="User"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Last name
                            </label>
                            <input
                                id="lastname"
                                name="lastname"
                                autoComplete="lastname"
                                required
                                className="block w-full rounded-md bg- border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                                onChange={getInfo}
                                value={newUser.lastname}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="username"
                                autoComplete="current-username"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                                onChange={getInfo}
                                value={newUser.username}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="current-email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                                onChange={getInfo}
                                value={newUser.email}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Password
                        </label>

                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                                onChange={getInfo}
                                value={newUser.password}
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Comfirm password
                        </label>

                        <div className="mt-2">
                            <input
                                id="c-password"
                                name="c-password"
                                type="password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 bg-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="text-sm">
                            <a
                                href="/login"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                I already have an account
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                            onClick={handleSignUp}
                        >
                            Sign me up!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
