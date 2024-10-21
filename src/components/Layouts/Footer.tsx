const Footer = () => {
    return (
      <footer className="bg-gray-600 text-black py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4">
            © 2024 Minha Landpage. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Desenvolvido com ❤️ por sua equipe. Siga-nos nas redes sociais.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  