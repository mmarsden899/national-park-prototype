import React, { useState, useEffect } from "react";
import axios from "axios";
import SinglePark from "./SinglePark";
import apiUrl from "./apiConfig";
import auth0Client from "./Auth";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Parks = (props) => {
  const [parks, setParks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState("");
  const [userState, setUserState] = useState({ list: [] });

  // async componentDidMount() {
  //   const parkResponse = await axios(`${apiUrl}/parks`);
  //   this.setState({
  //     parks: parkResponse.data.parks,
  //     filter: parkResponse.data.parks,
  //   });
  //   // const temp = { list: [] };
  //   // this.setState({ user: temp });
  //   this.getUser();
  //   console.log(this.state.user);
  // }
  const { user, isAuthenticated, isLoading } = useAuth0();
  const getParks = async () => {
    const parkResponse = await axios(`${apiUrl}/parks`);
    setParks(parkResponse.data.parks);
    setFilter(parkResponse.data.parks);
  };

  const getUser = async () => {
    console.log("get user");
    if (isAuthenticated) {
      console.log("got here!");
      const userResponse = await axios(`${apiUrl}/users/${user.nickname}`);
      if (userResponse.data.User.length < 1) {
        console.log("are we creating user??");
        this.createUser().then(this.getUser);
      } else {
        console.log("userREponse - --->", userResponse.data);
        setUserState(userResponse.data.User[0]);
      }
    }
  };

  useEffect(() => {
    getParks();
    getUser();
  }, []);

  const createUser = async () => {
    await axios({
      url: apiUrl + "/users",
      method: "POST",
      data: {
        user: {
          nickname: auth0Client.getProfile().nickname,
        },
      },
    });
  };

  const openModal = (event) => {
    setModal(!this.state.modal);
    setSelectedTarget(event.currentTarget.id);
  };

  const closeModal = () => {
    if (modal) {
      setModal(false);
    }
  };

  const handleVisit = async (event) => {
    const id = event.target.id;
    await axios({
      url: apiUrl + `/Users/${user.nickname}`,
      method: "PATCH",
      data: {
        user: {
          list: id,
        },
      },
    });
    getUser();
  };

  const handleRemoveVisit = async (event) => {
    const id = event.target.id;
    console.log(id);
  };

  const visited = () => {
    const filter = this.state.parks.filter((park) => {
      return this.state.user.list.includes(park._id);
    });
    this.setState({ filter: filter });
  };

  const notVisited = () => {
    const filter = this.state.parks.filter((park) => {
      return !this.state.user.list.includes(park._id);
    });
    this.setState({ filter: filter });
  };

  const all = () => {
    this.setState({ filter: this.state.parks });
  };

  const { list } = userState;
  const filler = <div className="filler"></div>;
  const buttonsHTML = (
    <div className="filter-buttons-div">
      <button onClick={all} className="filter-buttons">
        All
      </button>
      <button onClick={visited} className="filter-buttons">
        Visted
      </button>
      <button onClick={notVisited} className="filter-buttons">
        Not-Visited
      </button>
    </div>
  );
  const parksHTML = filter.map((park) => (
    <div key={park._id} id={park._id} className="parks">
      {isAuthenticated ? (
        list.includes(park._id) ? (
          <FontAwesomeIcon
            icon={faMinusCircle}
            onClick={handleRemoveVisit}
            id={park._id}
            className="plusOrMinus"
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={handleVisit}
            id={park._id}
            className="plusOrMinus"
          />
        )
      ) : null}
      <div className="park-container" onClick={openModal} id={park._id}>
        <img
          src={park.thumbnail}
          alt={"thumbnail of " + park.name}
          className="park-thumbnail"
        />
        <div className="info-grid">
          <p className="park-name">{park.name} National Park</p>
          <p className="info">
            {" "}
            <b>Location:</b> {park.location} <b>Founded:</b> {park.established}
          </p>
          <p className="info">
            {" "}
            <b>Total Area:</b> {park.area} <b>Total Visitors:</b>{" "}
            {park.rec_visitors}
          </p>
          <p className="info desc">{park.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container" onClick={closeModal}>
      {auth0Client.isAuthenticated() ? buttonsHTML : filler}
      {parksHTML}
      {modal ? <SinglePark target={selectedTarget} /> : null}
    </div>
  );
};

export default Parks;
