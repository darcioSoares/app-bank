const SectionInformation = () => {
    const cards = [
      {
        id: 1,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
      {
        id: 2,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
      {
        id: 3,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
      {
        id: 4,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
      {
        id: 5,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
      {
        id: 6,
        title: "Conta",
        subtitle: "Empresa",
        description:
          "Gerencie o caixa da sua empresa com segurança e inteligência de dados. Maximize sua eficiência financeira e tome decisões estratégicas com confiança.",
        link: "#",
      },
    ];
  
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <h3 className="text-xl text-indigo-600 mb-4">{card.subtitle}</h3>
              <p className="text-gray-700 mb-6">{card.description}</p>
              <a
                href={card.link}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SectionInformation;
  