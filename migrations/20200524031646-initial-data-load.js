/* eslint-disable max-len */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { author: 'J.R.R. Tolkien' },
      { author: 'E.R. Eddison' },
      { author: ['J.R.R. Tolkien', 'Donald Swann'] },
      { author: 'Mervyn Peake' },
      { author: 'David Lindsay' },
      { author: 'Peter S. Beagle' },
      { author: 'Lin Carter' },
    ])

    await queryInterface.bulkInsert('books', [
      { title: 'The Hobbit', authorId: 1 },
      { title: 'The Fellowship of the Ring', authorId: 1 },
      { title: 'The Two Towers', authorId: 1 },
      { title: 'Return of The King', authorId: 1 },
      { title: 'The Tolkien Reader', authorId: 1 },
      { title: 'The Worm Ouroboros', authorId: 2 },
      { title: 'Mistress of Mistresses', authorId: 2 },
      { title: 'A Fish Dinner in Memison', authorId: 2 },
      { title: 'The Road Goes Ever On', authorId: 3 },
      { title: 'Titus Groan', authorId: 4 },
      { title: 'Gormenghast', authorId: 4 },
      { title: 'Titus Alone', authorId: 4 },
      { title: 'A Voyage to Arcturus', authorId: 5 },
      { title: 'The Last Unicorn', authorId: 6 },
      { title: 'A Fine and Private Place', authorId: 6 },
      { title: 'Smith of Wootton Major and Farmer Giles of Ham', authorId: 1 },
      { title: 'Tolkien: A Look Behind "The Lord of the Rings"', authorId: 1 },
      { title: 'The Mezentian Gate', authorId: 2 },
    ])

    return queryInterface.bulkInsert('publishInfo', [
      {
        titleId: 1,
        publishYear: '1965',
        publishOriginYear: '1937',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 2,
        publishYear: '1965',
        publishOriginYear: '1954',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 3,
        publishYear: '1965',
        publishOriginYear: '1955',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 4,
        publishYear: '1965',
        publishOriginYear: '1956',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 5,
        publishYear: '1966',
        publishOriginYear: '1966',
        originalPublisher: 'Ballantine Books',
        coverArtist: 'Pauline Baynes'
      },
      {
        titleId: 6,
        publishYear: '1967',
        publishOriginYear: '1922',
        originalPublisher: 'Jonathan Cape',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 7,
        publishYear: '1967',
        publishOriginYear: '1935',
        originalPublisher: 'Faber and Faber',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 8,
        publishYear: '1968',
        publishOriginYear: '1941',
        originalPublisher: 'Dutton',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 9,
        publishYear: '1968',
        publishOriginYear: '1967',
        originalPublisher: 'Houghton Mifflin',
        coverArtist: 'Barbara Remington'
      },
      {
        titleId: 10,
        publishYear: '1968',
        publishOriginYear: '1946',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        titleId: 11,
        publishYear: '1968',
        publishOriginYear: '1950',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        titleId: 12,
        publishYear: '1968',
        publishOriginYear: '1959',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        titleId: 13,
        publishYear: '1968',
        publishOriginYear: '1920',
        originalPublisher: 'Methuen & Co. Ltd.',
        coverArtist: 'Bob Pepper'
      },
      {
        titleId: 14,
        publishYear: '1969',
        publishOriginYear: '1968',
        originalPublisher: 'Viking Press',
        coverArtist: 'Gervasio Gallardo'
      },
      {
        titleId: 15,
        publishYear: '1969',
        publishOriginYear: '1960',
        originalPublisher: 'Viking Press',
        coverArtist: 'Gervasio Gallardo'
      },
      {
        titleId: 16,
        publishYear: '1969',
        publishOriginYear: '1967',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Pauline Baynes'
      },
      {
        titleId: 17,
        publishYear: '1969',
        publishOriginYear: '1969',
        originalPublisher: 'Ballantine Books',
        coverArtist: 'Sheryl Slavitt'
      },
      {
        titleId: 18,
        publishYear: '1969',
        publishOriginYear: '1958',
        originalPublisher: 'Curwen Press',
        coverArtist: 'Barbara Remington'
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('publishInfo', [])
    await queryInterface.bulkDelete('books', [])

    return queryInterface.bulkDelete('authors', [])
  }
}
