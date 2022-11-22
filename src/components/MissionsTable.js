import React from 'react';
import PropTypes from 'prop-types';
import MissionCard from './MissionsCard';

const MissionsTable = (props) => {
  const { missions } = props;

  return (
    <>
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
        />
      ))}
    </>
  );
};

MissionsTable.defaultProps = {
  missions: [],
};

MissionsTable.propTypes = {
  missions: PropTypes.instanceOf(Array),
};

export default MissionsTable;
