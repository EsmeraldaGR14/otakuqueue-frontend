import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function startYourJourney() {
    navigate("/anime-list");
  }

  return (
    <div>
      <h1>Welcome To OtakuQueue</h1>
      <p>
        Dive into a world of captivating stories, exhilarating adventures, and
        heartwarming moments with OtakuQueue – your gateway to a universe of
        anime wonder. 🌟 Unfold the tapestry of Japanese animation as you've
        never experienced before, with a carefully curated queue tailored to
        your every anime desire. 🎬 From breathtaking sagas to charming
        rom-coms, let OtakuQueue be your guide through a kaleidoscope of
        emotions and genres. 🚀 Join us in celebrating the artistry and
        creativity of anime, one captivating series at a time. Elevate your
        anime-watching experience with OtakuQueue, because every frame tells a
        story.
      </p>

      <button onClick={startYourJourney}>Start Your Journey</button>
    </div>
  );
}

export default Home;
