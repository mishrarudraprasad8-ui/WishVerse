import { useState } from "react";

function Hero() {

  const [name, setName] = useState("");
  const [festival, setFestival] = useState("");

  function createWish() {

    if(name === "" || festival === "") {
      alert("Please enter name and select festival");
      return;
    }

    window.location.href =
    `/wish/${festival}/${name}`;

  }


  return (
    <section className="hero">

      <h1>
        Celebrate Every Festival Beautifully ✨
      </h1>

      <p>
        Create personalized wishes and share happiness.
      </p>


      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <select
        value={festival}
        onChange={(e)=>setFestival(e.target.value)}
      >

        <option value="">
          Select Festival
        </option>

        <option value="Rath-Yatra">
          Rath Yatra
        </option>

        <option value="Holi">
          Holi
        </option>

        <option value="Diwali">
          Diwali
        </option>

        <option value="Christmas">
          Christmas
        </option>

        <option value="Ganesh-Puja">
          Ganesh Puja
        </option>

        <option value="Saraswati-Puja">
          Saraswati Puja
        </option>

        <option value="Raksha-Bandhan">
          Raksha Bandhan
        </option>

        <option value="New-Year">
          Happy New Year
        </option>

      </select>


      <button onClick={createWish}>
        ✨ Create My Wish
      </button>


    </section>
  );
}

export default Hero;