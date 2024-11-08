import peopleCard from '../../../assets/people-as6hd9.jpg'
import startupCard from '../../../assets/startup.png'

const SectionProduct = () => {
    const cards = [
      {
        id: 1,
        title: "Card 1",
        description: "Descrição do Card 1.",
        imageUrl: startupCard,
      },
      {
        id: 2,
        title: "Card 2",
        description: "Descrição do Card 2.",
        imageUrl: peopleCard,
      },
      {
        id: 3,
        title: "Card 3",
        description: "Descrição do Card 3. Descrição do Card 3. Descrição do Card 3. Descrição do Card 3.",
        imageUrl: startupCard,
      },
    ];
  
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <p className="text-gray-700 mb-4 text-center">{card.description}</p>
              <img
                src={card.imageUrl}
                alt={`Imagem do ${card.title}`}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SectionProduct;
  