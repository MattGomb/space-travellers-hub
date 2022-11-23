import React from 'react';
import renderer from 'react-test-renderer';
import MissionCard from '../components/MissionsCard'

describe('the MissionCard snapshot and react testing library', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<MissionCard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  