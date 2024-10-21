import banner from '../../assets/technology_finances.png'

const Banner = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center p-8 mx-8"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay para escurecer a imagem e melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Texto Sobreposto */}
      <div className="relative text-center text-white p-4 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Banner Importante</h2>
        <p className="text-lg">
          Este é um banner com uma imagem de fundo. Adicione aqui uma mensagem importante ou uma chamada para ação.
        </p>
        <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default Banner;
