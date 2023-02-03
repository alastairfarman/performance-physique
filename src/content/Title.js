import Stats from "./Stats";

export default function Title() {
  return (
    <>
    <div className="top-spacer"></div>
      <section className="section dark medium">
        <div className="title-container">
        <h1>
          The <em>Weekly</em> Calorie Deficit
        </h1>
        <p>
          A method for calculating your calories across the week, helping you
          plan the calories you consume to lose weight without being
          uneccessarily restrictive.
          <br />
          <br />
          'Calculate yours' now and we'll give you everything you need to lose
          weight with the freedom to eat the food you love!
        </p>
        </div>
        <Stats/>
      </section>
    </>
  );
}
