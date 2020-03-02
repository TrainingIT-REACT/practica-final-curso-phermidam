import React from 'react';
import { render } from 'enzyme';

import Album from "../pages/album/Album";

describe(Login, () => {
    describe("Render", ()=> {
        let wrapper;

        beforeEach(() => {
            wrapper = render(<Album />);
        });

        it('should add the HTML elements', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should load the data', done => {
            const data;

            const fetchMock = jest.fn().mockReturnValue(Promise.resolve({
                json: () => (data)
            }));

            global.fetch=fetchMock;

            expect(fetchMock).toHaveBeenCalled();

            expect(fetchMock).toBeCalledWith('http://localhost:3001/albums/1', {
                method: 'GET',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            setImmediate(() => {
                expect(wrapper.state().response.length).toBeGreaterThan(0);
                done();
            });
        })
    });
});