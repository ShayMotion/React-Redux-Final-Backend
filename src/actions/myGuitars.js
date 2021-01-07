import { resetGuitarForm } from "./guitarForm";

export const setMyGuitars = (guitars) => {
  return {
    type: "SET_MY_GUITARS",
    guitars,
  };
};

export const clearGuitars = () => {
  return {
    type: "CLEAR_GUITARS",
  };
};

export const addGuitar = (guitar) => {
  return {
    type: "ADD_GUITAR",
    guitar,
  };
};

export const deleteGuitarSuccess = (guitarId) => {
  return {
    type: "DELETE_GUITAR",
    guitarId,
  };
};

export const updateGuitarSuccess = (guitar) => {
  return {
    type: "UPDATE_GUITAR",
    guitar,
  };
};

export const getMyGuitars = () => {
  return (dispatch) => {
    return fetch("http://localhost:3002/api/v1/guitars", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setMyGuitars(response.data));
        }
      })
      .catch(console.log);
  };
};

export const createGuitar = (guitarData, history) => {
  return (dispatch) => {
    const sendableGuitarData = {
      guitar: {
        brand: guitarData.brand,
        model: guitarData.model,
        year: guitarData.year,
        price: guitarData.price,
        user_id: guitarData.userId,
      },
    };
    return fetch("http://localhost:3002/api/v1/guitars", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendableGuitarData),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addGuitar(resp.data));
          dispatch(resetGuitarForm());
          history.push(`/guitars/${resp.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const updateGuitar = (guitarData, history) => {
  return (dispatch) => {
    const sendableGuitarData = {
      guitar: {
        brand: guitarData.brand,
        model: guitarData.model,
        year: guitarData.year,
        price: guitarData.price,
      },
    };
    return fetch(
      `http://localhost:3002/api/v1/guitars/${guitarData.GuitarId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendableGuitarData),
      }
    )
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(updateGuitarSuccess(resp.data));
          history.push(`/guitars/${resp.data.id}`);
        }
      })
      .catch(console.log);
  };
};

export const deleteGuitar = (guitarId, history) => {
  return (dispatch) => {
    return fetch(`http://localhost:3002/api/v1/guitars/${guitarId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(deleteGuitarSuccess(guitarId));
          history.push(`/guitars`);
        }
      })
      .catch(console.log);
  };
};
