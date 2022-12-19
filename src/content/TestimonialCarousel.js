import { useEffect, useState, useCallback } from "react";
import data from "./testimonials.json";

export default function TestimonialCarousel() {
  const [count, setCount] = useState(0);

  /* creates card */
  const action = useCallback(() => {
    const container = document.getElementById("carousel");
    const card = document.createElement("div");
    const quote = document.createElement("p");
    const name = document.createElement("p");
    quote.textContent = data.testimonials[count].quote;
    name.textContent = data.testimonials[count].name;

    card.setAttribute("class", "testimonial-card");
    card.appendChild(quote);
    card.appendChild(name);

    container.appendChild(card);

    /* Time card persists on carousel */
    setTimeout(function () {
      container.firstChild.remove();
      console.log("removed");
    }, 50000);

    /* loop back to first data entry */
    count === 2 ? setCount(0) : setCount(count + 1);
  }, [count]);

  useEffect(() => {
    /* how long before new card added - gap function */
    const interval = setInterval(() => action(data), 5300);

    return () => clearInterval(interval);
  }, [action]);

  return (
    <>
      <section className="dark" id="carousel" style={{ overflow: "hidden" }}>
        <div className="testimonial-card">
          {/* Initial card on load */}
          <p>
            I have tried all the fad diets going, you name it I have tried it,
            and this is the first one which is $extremely simple and effective.
            Not only have i lost weight but I feel like a different person... I
            wish everyone had access to this amazing programme!
          </p>
          <p>Emily</p>
        </div>
      </section>
    </>
  );
}
