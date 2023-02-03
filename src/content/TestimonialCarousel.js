import { useEffect, useState, useCallback } from "react";
import data from "./testimonials.json";

export default function TestimonialCarousel() {
  const [count, setCount] = useState(0);

  /* creates card */
  const action = useCallback(() => {
    const container = document.getElementById("carousel");
    const card = document.createElement("div");
    const quote = document.createElement("p");
    const nameImage = document.createElement("div");
    const name = document.createElement("p");
    const img = document.createElement("img");
    quote.textContent = data.testimonials[count].quote;
    name.textContent = data.testimonials[count].name;
    img.src = data.testimonials[count]["img-filename"];

    img.setAttribute("class", "testimonial-img");
    card.setAttribute("class", "testimonial-card");
    card.appendChild(quote);
    card.appendChild(nameImage);
    nameImage.setAttribute("class", "name-image");
    nameImage.appendChild(name);
    nameImage.appendChild(img);

    container.appendChild(card);

    /* Time card persists on carousel */
    setTimeout(function () {
      container.firstChild.remove();
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
        <h1 id="arrow">
          &#10096; &#10096; &#10096; &#10096; &#10096; &#10096; testimonials
          &#10096; &#10096; &#10096; &#10096; &#10096; &#10096; testimonials
        </h1>
      </section>
    </>
  );
}
