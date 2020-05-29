module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { author: 'J.R.R. Tolkien' },
      { author: 'E.R. Eddison' },
      { author: 'J.R.R. Tolkien and Donald Swann' },
      { author: 'Mervyn Peake' },
      { author: 'David Lindsay' },
      { author: 'Peter S. Beagle' },
      { author: 'Lin Carter' },
    ])

    await queryInterface.bulkInsert('publishInfo', [
      {
        publishYear: '1965',
        publishOriginYear: '1937',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1965',
        publishOriginYear: '1954',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1965',
        publishOriginYear: '1955',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1965',
        publishOriginYear: '1956',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1966',
        publishOriginYear: '1966',
        originalPublisher: 'Ballantine Books',
        coverArtist: 'Pauline Baynes'
      },
      {
        publishYear: '1967',
        publishOriginYear: '1922',
        originalPublisher: 'Jonathan Cape',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1967',
        publishOriginYear: '1935',
        originalPublisher: 'Faber and Faber',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1941',
        originalPublisher: 'Dutton',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1967',
        originalPublisher: 'Houghton Mifflin',
        coverArtist: 'Barbara Remington'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1946',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1950',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1959',
        originalPublisher: 'Eyre & Spottiswoode',
        coverArtist: 'Bob Pepper'
      },
      {
        publishYear: '1968',
        publishOriginYear: '1920',
        originalPublisher: 'Methuen & Co. Ltd.',
        coverArtist: 'Bob Pepper'
      },
      {
        publishYear: '1969',
        publishOriginYear: '1968',
        originalPublisher: 'Viking Press',
        coverArtist: 'Gervasio Gallardo'
      },
      {
        publishYear: '1969',
        publishOriginYear: '1960',
        originalPublisher: 'Viking Press',
        coverArtist: 'Gervasio Gallardo'
      },
      {
        publishYear: '1969',
        publishOriginYear: '1967',
        originalPublisher: 'George Allen & Unwin Ltd.',
        coverArtist: 'Pauline Baynes'
      },
      {
        publishYear: '1969',
        publishOriginYear: '1969',
        originalPublisher: 'Ballantine Books',
        coverArtist: 'Sheryl Slavitt'
      },
      {
        publishYear: '1969',
        publishOriginYear: '1958',
        originalPublisher: 'Curwen Press',
        coverArtist: 'Barbara Remington'
      },
    ])

    return queryInterface.bulkInsert('books', [
      { title: 'The Hobbit', authorId: 1, publishInfoId: 1 },
      { title: 'The Fellowship of the Ring', authorId: 1, publishInfoId: 2 },
      { title: 'The Two Towers', authorId: 1, publishInfoId: 3 },
      { title: 'Return of The King', authorId: 1, publishInfoId: 4 },
      { title: 'The Tolkien Reader', authorId: 1, publishInfoId: 5 },
      { title: 'The Worm Ouroboros', authorId: 2, publishInfoId: 6 },
      { title: 'Mistress of Mistresses', authorId: 2, publishInfoId: 7 },
      { title: 'A Fish Dinner in Memison', authorId: 2, publishInfoId: 8 },
      { title: 'The Road Goes Ever On', authorId: 3, publishInfoId: 9 },
      { title: 'Titus Groan', authorId: 4, publishInfoId: 10 },
      { title: 'Gormenghast', authorId: 4, publishInfoId: 11 },
      { title: 'Titus Alone', authorId: 4, publishInfoId: 12 },
      { title: 'A Voyage to Arcturus', authorId: 5, publishInfoId: 13 },
      { title: 'The Last Unicorn', authorId: 6, publishInfoId: 14 },
      { title: 'A Fine and Private Place', authorId: 6, publishInfoId: 15 },
      { title: 'Smith of Wootton Major and Farmer Giles of Ham', authorId: 1, publishInfoId: 16 },
      { title: 'Tolkien: A Look Behind "The Lord of the Rings"', authorId: 7, publishInfoId: 17 },
      { title: 'The Mezentian Gate', authorId: 2, publishInfoId: 18 },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('publishInfo', [])
    await queryInterface.bulkDelete('books', [])

    return queryInterface.bulkDelete('authors', [])
  }
}
