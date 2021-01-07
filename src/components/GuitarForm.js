import React from "react";
import { updateGuitarForm } from "../actions/guitarForm";
import { connect } from "react-redux";

const GuitarForm = ({
  formData,
  updateGuitarForm,
  userId,
  guitar,
  handleSubmit,
  editMode,
}) => {
  const { brand, model, year, price } = formData;

  const handleChange = (event) => {
    console.log("Trigger Handle Change");
    const { name, value } = event.target;
    updateGuitarForm(name, value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(formData);
      }}
    >
      <input
        placeholder="brand"
        name="brand"
        onChange={handleChange}
        value-={brand}
      />
      <br />
      <input
        placeholder="model"
        name="model"
        onChange={handleChange}
        value={model}
      />
      <br />
      <input
        placeholder="year"
        name="year"
        onChange={handleChange}
        value={year}
      />
      <br />
      <input
        placeholder="price"
        name="price"
        onChange={handleChange}
        value={price}
      />
      <br />
      <input
        type="submit"
        value={editMode ? "Update Guitar" : "Create Guitar"}
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    formData: state.guitarForm,
    userId,
  };
};

export default connect(mapStateToProps, { updateGuitarForm })(GuitarForm);
