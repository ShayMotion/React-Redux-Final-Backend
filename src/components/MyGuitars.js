import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MyGuitars = (props) => {
  const guitarCards =
    props.guitars.length > 0
      ? props.guitars.map((a) => (
          <p key={a.id}>
            <Link to={`/guitars/${a.id}`}>{a.attributes.brand}</Link>
          </p>
        ))
      : null;

  return guitarCards;
};

const mapStateToProps = (state) => {
  return {
    guitars: state.myGuitars,
  };
};
export default connect(mapStateToProps)(MyGuitars);
