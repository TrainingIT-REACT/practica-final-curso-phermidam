import React from 'react';
import { render } from 'enzyme';

import History from "../History";

describe(History, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = render(<History />);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.is('#history')).toBeTruthy();
        });
    });
});