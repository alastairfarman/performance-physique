import { calculateBMR, calculateDEE } from "../algo";

const _ = require("lodash");

export default function Graph(props) {
  // const number = Math.round(
  //   calculateDEE(
  //     calculateBMR(props.answers.weight, props.answers.sex),
  //     props.answers.activity
  //   )
  // );

  const textColour = props.dark === true ? "white" : "black";
  console.log(textColour);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlSpace="preserve"
        viewBox="-351.17 0 1444.46 1080"
      >
        <defs />
        <linearGradient id="Gradient1" x2="20%" y2="150%">
          <stop className="stop1" offset="-50%" />
          <stop className="stop2" offset="0%" />
          <stop className="stop3" offset="100%" />
        </linearGradient>
        <rect x={0} y={0} width="100%" height="100%" fill="transparent" />
        <g
          transform="matrix(1 0 0 1 540 540)"
          id="a2b21d31-cd1c-4e5c-9c2c-5f43cc6cb449"
        >
          <rect
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(255,255,255)",
              fillRule: "nonzero",
              opacity: 1,
              visibility: "hidden",
            }}
            vectorEffect="non-scaling-stroke"
            x={-540}
            y={-540}
            rx={0}
            ry={0}
            width={1080}
            height={1080}
          />
        </g>
        <g
          transform="matrix(1 0 0 1 540 540)"
          id="84d07b7c-4273-4327-9c11-272c5964e514"
        />
        <g
          transform="matrix(1.38 0 0 4.55 106.23 599.39)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="tuesday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 5.1 252.54 581.95)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="wednesday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 4.61 396.18 598)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="thursday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 3.89 540.9 621.7)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="friday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 6.99 684.24 519.34)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="saturday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 5.15 830.85 580.23)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-43.085"
            rx={0}
            ry={0}
            width="66.17"
            height="76.17"
            id="sunday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 6.36 -35.23 540)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "rgb(217,217,217)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="monday"
          />
        </g>
        <g
          transform="matrix(1.38 0 0 5.08 968.55 583.85)"
          id="39bfb2bb-2485-46f4-a9dc-d1f1027f68fc"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "url(#Gradient1)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
            id="week"
          />
        </g>
        <g
          transform="matrix(18.92 0 0 -0.08 467.32 387.71)"
          id="06c60a6e-82ac-4e35-b0db-38c87f78d1cd"
        >
          <rect
            style={{
              stroke: "rgb(0,0,0)",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: `${textColour}`,
              fillRule: "nonzero",
              opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            x="-33.085"
            y="-33.085"
            rx={0}
            ry={0}
            width="66.17"
            height="66.17"
          />
        </g>
        <g
          transform="matrix(1 0 0 1 -269.97 390.22)"
          style={{}}
          id="36ffb7fe-6267-4067-b944-382e777e2af4"
        >
          {" "}
          <text
            xmlSpace="preserve"
            fontFamily="Lato"
            fontSize={70}
            fontStyle="normal"
            fontWeight={400}
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: `${textColour}`,
              fillRule: "nonzero",
              opacity: 1,
              whiteSpace: "pre",
            }}
          >
            <tspan x="-81.2" y="21.99">
              {"DEE"}
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
}
