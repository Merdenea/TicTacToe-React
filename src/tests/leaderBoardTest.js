import React from 'react';
import { shallow } from 'enzyme';
import Leaderboard from './../components/LeaderBoard'


describe('Leaderboard', () => {
    it ('renders the values correctly', () => {
     const wrapper = shallow(<Leaderboard playerOneScore='12' playerTwoScore='10' />)   
     expect(wrapper.find('form').text()).toContain('X')
    })
})