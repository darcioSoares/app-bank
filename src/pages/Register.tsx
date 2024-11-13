import { useState } from 'react';
import Eye from '../components/Utility/Eye'

//import axios from 'axios';

import image from "../assets/people-as6hd9.jpg"
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [repeatPassword, setRepeatPassword ] = useState('');
  const [phone, setPhone] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisibleReplace, setIsPasswordVisibleReplace] = useState(false);

  const eventEyeReplace = (status : boolean ) => {
    setIsPasswordVisibleReplace((prev) => !prev);
     return status
  }

  const eventEye = (status : boolean ) => {
    setIsPasswordVisible((prev) => !prev);
     return status
  }

  const handleLogin = async (e : any) => {
    e.preventDefault();

    console.log(email, password, name, repeatPassword,phone )
    console.log("senha", password, "Nova senha", repeatPassword )

    if(password !== repeatPassword){
      alert('senhas estão diferentes')
    }

  };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Imagem */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Formulário de Login */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
              Registre se
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="text"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite seu nome"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite seu email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Telefone ( Whatssap )
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite seu Telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
             
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Senha
                </label>
                <div className="flex items-center">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><Eye event={() => eventEye(false)} /> </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Repita a senha 
                </label>
                <div className="flex items-center">
                <input
                  type={isPasswordVisibleReplace ? "text" : "password"}
                  id="repeatPassword"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite seu email"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)} 
                />  <Eye event={() => eventEyeReplace(false)} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Entrar
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">             
            <Link to="/login" className="text-indigo-600 hover:underline">
              login
            </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  