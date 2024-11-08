import people from "../../../assets/people-ah7gd3.jpg"

const SectionAndBanner = () => {
    return (
      <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-8 gap-8">
        {/* Texto Explicativo */}
         <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-3xl font-bold">Texto Explicativo</h2>
          <p className="text-lg leading-relaxed">
            Esta é uma breve descrição da imagem ao lado. A seção é responsiva e adapta-se a qualquer
            tamanho de tela. Em telas menores, o layout muda para uma coluna.
          </p>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Saiba Mais
          </button>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={people}
            alt="Imagem Descritiva"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div> 

      </section>
    );
  };
  
  export default SectionAndBanner;
  