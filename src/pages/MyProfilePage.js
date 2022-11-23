import React from 'react';
import '../styles/ProfilePage.css';

const MyProfile = () => {
  const JoinedMissionsList = () => {
    <h1>My Missions</h1>;
  };

  const ReservedRocketsList = () => {
    <h1>My Rockets</h1>;
  };

  return (
    <section className="profile">
      <div className="profile-container">
        <table className="reserved-missions">
          <h1>My Mission</h1>
          <JoinedMissionsList />
        </table>
        <table className="reserved-rockets">
          <h1>My Rockets</h1>
          <ReservedRocketsList />
        </table>
      </div>
    </section>
  );
};

export default MyProfile;
