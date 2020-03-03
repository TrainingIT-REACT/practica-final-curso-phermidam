import React from 'react';
import { shallow } from 'enzyme';

import User from "../User";

describe(User, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<User/>);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.is('#user')).toBeTruthy();
            expect(wrapper.find('#user')).toMatchSelector(".content");
            expect(wrapper.find('#user .header .image img').length).toBe(1);
            expect(wrapper.find('#user .header .name').text()).toBe("Pablo Hermida Mourelle");
        });
    });
});