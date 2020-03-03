import React from 'react';
import { shallow } from 'enzyme';

import History from "../History";

describe(History.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        let user = {
            "history": []
        }

        beforeEach(() => {
            wrapper = shallow(<History.WrappedComponent user={user} />);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.is('#history')).toBeTruthy();
            expect(wrapper.find('#history h2').text()).toBe("Canciones escuchadas")
        });
    });
});