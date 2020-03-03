import React from 'react';
import { shallow } from 'enzyme';

import Home from "../Home";

describe(Home.WrappedComponent, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Home.WrappedComponent />);
        });

        it('should add the HTML elements', () => {
            const fetchMock =
                jest.fn().mockReturnValue(Promise.resolve({
                    json: () => ({ isLoading, albums, error })
            }));

            global.fetch = fetchMock;

            expect(fetchMock).toBeCalledWith(
                'http://localhost:3001/albums',
                {
                  method: 'GET',
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }
            );

            setImmediate(() => {
                expect(wrapper.state().response.length).toBeGreatherThan(0);
                done();
            });
        });
    });
});