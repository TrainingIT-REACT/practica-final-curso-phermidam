import React from 'react';
import { shallow } from 'enzyme';

import Albums from "../Albums";

describe(Albums, () => {
    describe("Render", () => {
        let wrapper;

        let data=[
            {
                id: 1,
                cover: '/images/cover.jpg',
                name: 'Prueba',
                artist: 'Artista'
            },
            {
                id: 2,
                cover: '/images/cover.jpg',
                name: 'Prueba 2',
                artist: 'Artista'
            }
        ];

        beforeEach(() => {
            wrapper = shallow(<Albums data={data}/>);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.is('#albums')).toBeTruthy();
            expect(wrapper.find('.albums').length).toBe(1);
            expect(wrapper.find('.albums')).toMatchSelector(".albums");
            expect(wrapper.find('.album').length).toBe(2);
            expect(wrapper.find('.album .title').first().text()).toBe("PruebaArtista");

            expect(wrapper).toMatchSnapshot();
        });
    });
});