import React from "react";
import details from "./Features-Details";
const detail = { details };

function Featuretry() {
  <div>
    <section className="features">
      <div className="features__content">
        <h1 className="features__header">Why choose Easybank?</h1>
        <p className="features__copy">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="features__cards">
       return {detail.map( data => 
          <article className="features-card">
            <img className="features-card__img" src={data.img} alt={data.alt} />
            <h1 className="features-card__header">{data.heading}</h1>
            <p className="features-card__copy">{data.description}</p>
          </article>
      )}
      </div>
    </section>
  </div>;
}

export default Featuretry;