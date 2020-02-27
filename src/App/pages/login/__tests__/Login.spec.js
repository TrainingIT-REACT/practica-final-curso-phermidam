import React from 'react';
import { render } from 'enzyme';

import Login from "../Login";

describe(Login, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = render(<Login />);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.is('#login')).toBeTruthy();
            expect(wrapper.find('label').length).toBe(2);
            expect(wrapper.find('input[type="text"]').length).toBe(1);
            expect(wrapper.find('input#user').length).toBe(1);
            expect(wrapper.find('input[type="password"]').length).toBe(1);
            expect(wrapper.find('input#password').length).toBe(1);
            expect(wrapper.find('button').length).toBe(1);
        });
    });
});