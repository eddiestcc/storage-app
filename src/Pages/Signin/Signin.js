import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { readInputField } from "../../utils";

        const Signin = ({setToken}) => {

            const navigate = useNavigate();

            const location = useLocation();
          
            const handleSignIn = async () => {
                    const email = document.getElementById('email-input').value;
                    const password = document.getElementById('password-input').value;
                    const url = "http://localhost:3001/signin"
                    try {
                        const response = await fetch(url, {
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST",
                                body: JSON.stringify({
                                    email: email,
                                    password: password
                                })
                            });
                        if (!response.ok) {
                            throw new Error(`Response status: ${response.status}`);
                        }
                        await response.json()
                        .then((data) => {
                            if (data.id) {
                                setToken(data.first_name);
                            } else {
                                alert('The email or password you entered is incorrect.')
                            }
                        });
                        const origin = location.state?.from?.pathname || '/dashboard';
                        navigate(origin);
                    } catch (err) {
                        console.log(err.message);
                    }
                }

                return(
                <div className="hero bg-slate-100 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form 
                            onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    handleSignIn();
                            }}
                            className="card-body">
                                <div className="form-control">
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-90">
                                            <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input onChange={readInputField} formMethod="post" type="text" id="email-input" className="grow" placeholder="Email" />
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-90">
                                            <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                        </svg>
                                        <input onChange={readInputField} formMethod="post" type="password" id="password-input" className="grow" placeholder="••••••••" />
                                    </label>
                                    <NavLink 
                                    onClick={handleSignIn}
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"  
                                    to="/dashboard"> 
                                    Sign in
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                )
            }
        
export default Signin;