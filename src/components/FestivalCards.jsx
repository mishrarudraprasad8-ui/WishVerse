function FestivalCards() {

  const festivals = [
    {
      name: "Rath Yatra",
      emoji: "🛕"
    },
    {
      name: "Diwali",
      emoji: "🪔"
    },
    {
      name: "Holi",
      emoji: "🎨"
    },
    {
      name: "Ganesh Puja",
      emoji: "🐘"
    },
    {
      name: "Saraswati Puja",
      emoji: "📚"
    },
    {
      name: "Raksha Bandhan",
      emoji: "🧵"
    },
    {
      name: "Happy New Year",
      emoji: "🎆"
    },
    {
      name: "Christmas",
      emoji: "🎄"
    }
  ];


  return (
    <section className="festivals">

      <h2>Popular Festivals</h2>

      <div className="festival-container">

        {festivals.map((festival, index) => (

          <div className="festival-card" key={index}>

            <h3>{festival.emoji}</h3>

            <h3>{festival.name}</h3>

            <p>Create your wish</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FestivalCards;