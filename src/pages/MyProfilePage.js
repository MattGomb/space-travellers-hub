import React from 'react';

const MyProfile = () => {
  const ReservedRocketsList = () => {
    <h1>Reserved Rockets List palceholder</h1>;
  };

  const JoinedMissionsList = () => {
    <h1>List of joined missions palceholder</h1>;
  };

  return (
    <section className="profile">
      <div className="profile-container">
        <div className="reserved-rocket">
          <table>{ReservedRocketsList}</table>
        </div>
        <div className="reserved-mission">
          <table>{JoinedMissionsList}</table>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
