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
          <thead>
            <tr>
              <th>My Mission</th>
            </tr>
          </thead>
          <tbody>
            <JoinedMissionsList />
          </tbody>
        </table>
        <table className="reserved-rockets">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            <ReservedRocketsList />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyProfile;
