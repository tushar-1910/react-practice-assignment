import React from "react";

const Profile = ({ data }) => {
  const [age, setAge] = React.useState(data.age);

  const increment = () => {
    setAge(age + 1);
  };

  const deccrement = () => {
    setAge(age - 1);
  };

  const displayMore = () => {
    document.getElementById("showMoreDetail").style.display = "none";
    document.getElementById("hideDetails").style.display = "block";
    document.getElementById("moreDetails").style.display = "block";
  };

  const hideDetails = () => {
    document.getElementById("showMoreDetail").style.display = "block";
    document.getElementById("hideDetails").style.display = "none";
    document.getElementById("moreDetails").style.display = "none";
  };

  return (
    <>
      <img src={data.image} alt="profile" />
      <h1>Name : {data.name}</h1>
      <h1>Age : {age}</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={increment}>Increase age</button>
        <button onClick={deccrement}>Decrease age</button>
      </div>
      <div className="showMore" style={{ marginTop: "10px" }}>
        <button id="showMoreDetail" onClick={displayMore}>
          Show More Details
        </button>
        <button id="hideDetails" onClick={hideDetails}>
          Hide Details
        </button>
      </div>
      <div id="moreDetails">
        <h1>Location : {data.location}</h1>
        <h1>Organisation : {data.organisation}</h1>
      </div>
    </>
  );
};

export default Profile;
