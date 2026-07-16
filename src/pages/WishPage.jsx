import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import festivals from "../data/festivals";

import jagannath from "../assets/jagannath.png";
import rath from "../assets/rath.png";


function WishPage(){

  const { festival, name } = useParams();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");



  // HOME PAGE

  if(!festival){

    function createWish(){

      if(userName.trim() === ""){

        alert("Enter your name");

        return;

      }


      navigate(`/wish/Rath-Yatra/${userName}`);

    }



    return(

      <div className="home-page">

        <div className="home-card">

          <h1>
            🚩 जय जगन्नाथ 🚩
          </h1>


          <h2>
            Rath Yatra Wishes
          </h2>


          <p>
            Create your personal Rath Yatra card
          </p>


          <input

          type="text"

          placeholder="Enter your name"

          value={userName}

          onChange={(e)=>setUserName(e.target.value)}

          />


          <button onClick={createWish}>

            ✨ Create Wish

          </button>


        </div>

      </div>

    )

  }



  // WISH PAGE

  const data = festivals[festival];



  function shareWish(){

    const message =

`🚩 Jai Jagannath 🚩

${data.title}

Dear ${name},

${data.message}

${window.location.href}`;


    window.open(

    `https://wa.me/?text=${encodeURIComponent(message)}`,

    "_blank"

    );

  }



  return(

    <>

      {/* GOLDEN DOOR */}

      <div className="golden-door">

        <div className="door left-door"></div>

        <div className="door right-door"></div>

      </div>



      {/* MAIN PAGE */}

      <div

      className="wish-page"

      style={{

      backgroundImage:

      `linear-gradient(
      rgba(0,0,0,.45),
      rgba(0,0,0,.45)
      ),
      url(${data.background})`

      }}

      >



        <div className="flowers">

          🌸 🌼 🌸 🌼 🌸

        </div>



        <div className="diya diya1">

          🪔

        </div>


        <div className="diya diya2">

          🪔

        </div>




        <div className="wish-card">



          <div className="rath-title">

            🚩 जय जगन्नाथ 🚩

          </div>




          <img

          className="god"

          src={jagannath}

          alt="Jagannath"

          />





          <img

          className="rath"

          src={rath}

          alt="Rath"

          />





          <h1>

            {data.title}

          </h1>




          <h2>

            Dear {name}

          </h2>




          <p>

            {data.message}

          </p>




          <button onClick={shareWish}>

            📤 Share Wish

          </button>



        </div>


      </div>


    </>

  )


}


export default WishPage;