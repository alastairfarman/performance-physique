import { useSpring, animated } from "react-spring";

// const [weight, setWeight] = useState(0);
// const weightLimit = 5.1;
// const [cm, setCm] = useState(0);
// const cmLimit = 10;

export default function Stats() {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 300 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  function NumberDecimal({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(1))}</animated.div>;
  }

  return (
    <>
      
        <div className="stats">
          <div>
            <h1 className="stat">
              <Number n={400} />
              <span className="hi-light unit">+</span>
            </h1>
            <p className="number-title">
              people losing weight with a weekly calorie deficit
            </p>
          </div>
          <div>
            <h1 className="stat">
              <NumberDecimal n={5.1} />
              <span className="unit">kg</span>
            </h1>
            <p className="number-title">average weight loss over 4 weeks</p>
          </div>
          <div>
            <h1 className="stat">
              <NumberDecimal n={10} />
              <span className="unit">cm</span>
            </h1>
            <p className="number-title">lost from waistlines on average</p>
          </div>
        </div>
      
    </>
  );
}
