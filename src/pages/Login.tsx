import { useState } from 'react';
//import axios from 'axios';

import image from "../assets/people-as6hd9.jpg"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e : any) => {
    e.preventDefault();

    console.log(email, password)
    // try {
    //   // Faz a requisição de login
    //   const response = await axios.post('/api/login', {
    //     email,
    //     password,
    //   });

    //   if (response.status === 200) {
    //     setIsLoggedIn(true);
    //     alert('Login bem-sucedido!');
    //   }
    // } catch (error) {
    //   console.error('Erro no login:', error);
    //   alert('Login falhou. Verifique as credenciais.');
    // }
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
              Login
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
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
                <label htmlFor="password" className="block text-sm font-medium">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Entrar
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Não tem uma conta?
              <a href="#" className="text-indigo-600 hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  