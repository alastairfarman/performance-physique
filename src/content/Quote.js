export default function Quote(props) {
  return (
    <>
      <section
        className="section dark small"
        style={{
          flexDirection: "row",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="quote-container">
          <h4>
            “This isn’t my top secret method to lose weight,
            <em> this is science! </em>
            Share it with anyone and everyone!”
          </h4>

          <br />
          <h5>
            Arjuna Thiruchelvam - Owner & Head Coach at Performance Physique
          </h5>
        </div>
        <img className="quote-img" src="arj2.jpg" alt="" />
      </section>
    </>
  );
}
