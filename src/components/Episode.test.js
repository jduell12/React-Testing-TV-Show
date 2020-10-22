import React from 'react';
import {render, screen} from '@testing-library/react';
import Episodes from './Episodes';

const episodeData = [
    {
      id: 553946,
      url: 'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
      name: 'Chapter One: The Vanishing of Will Byers',
      season: 1,
      number: 1,
      airdate: '2016-07-15',
      airtime: '',
      airstamp: '2016-07-15T12:00:00+00:00',
      runtime: 60,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
      },
      summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/553946'
        }
      }
    }
  ]

test('episodes component renders with no errors', () => {
    render(<Episodes episodes={[]}/>)
})

test('displays episodes as the episodes prop is updated', () => {
    const {rerender} = render(<Episodes episodes={[]}/>);
    
    //assert nothing is being rendered to the screen
    expect(screen.queryAllByTestId(/episode/i)).toHaveLength(0);

    //simulate the episodes prop has changed and re-ender the component 
    rerender(<Episodes episodes={episodeData}/>)

    //assert that the episodes are appearing
    expect(screen.getAllByTestId(/episode/i)).toHaveLength(1);
    expect(screen.getByText(/chapter one/i)).toBeInTheDocument();
})