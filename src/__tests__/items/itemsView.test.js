import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ItemsView from '../../components/items/itemsView.component';
import shallowToJson from 'enzyme-to-json';
import '../../setupTests';

const match = {
    params: {
        list_id: 1
    }
}
describe ('ItemView Component', () => {

    it('renders without crashing', () => {
        // to bypass authentiacation in Component WIll Mount method
        localStorage.setItem("token", "random_string");
        const wrapper = shallow(<ItemsView match={match} />);
        expect(wrapper.exists(<div></div>)).toBe(true)
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<ItemsView match={match} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
})