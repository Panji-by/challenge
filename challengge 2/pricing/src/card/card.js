import React from "react";

const cardContents = [
  {
    title: "Basic",
    price: 4,
    contents: ["10 project", "2 pages", "100 MB disk space"],
    outline: true,
  },
  {
    title: "Standart",
    price: 8,
    contents: ["20 project", "4 pages", "200 MB disk space"],
    outline: false,
  },
  {
    title: "Advanced",
    price: 12,
    contents: ["30 project", "6 pages", "500 MB disk space"],
    outline: false,
  },
];

const Plan = (props) => {
  return (
    <div className="card mb-4 shadow-sm zoom">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">/ month</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {props.contents.map((content, i) => (
            <li key={i}>{content}</li>
          ))}
        </ul>
        <button
          className={`btn btn-lg btn-block ${
            props.outline ? "btn-outline-primary" : "btn-primary"
          }`}
          type="button"
          onClick={()=>{ alert('Succes'); }}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = cardContents.map((cont, i) => {
    return (
      <Plan
        key={cont.title}
        title={cont.title}
        price={cont.price}
        contents={cont.contents}
        outline={cont.outline}
      />
    );
  });

  return <div className="card-deck mb-3 text-center">{plans}</div>;
};

export default Plans;
