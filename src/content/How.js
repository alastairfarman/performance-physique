export default function How(props) {

  function clickHandler(){
    props.openCalc()
}
  return (
    <>
      <section className="section dark large flex-direction-override">
        <h1>
          <em>How</em> to use your deficit
        </h1>
        <div className="bullet-container how">
          <div><span className="number">1</span>
            <span onClick={clickHandler}>Calculate</span> how many calories you need to consume over a week to lose
            weight
          </div>
          <div><span className="number">2</span>
            Plan how many calories you can consume each day to be in a total
            calorie deficit by the end of the week
          </div>
          <div><span className="number">3</span>
            Choose which days you might consume more calories, like the weekend
          </div>
          <div><span className="number">4</span>
            Track your calories over the week</div>
        </div>
      </section>
    </>
  );
}
