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

    await queryInterface.bulkInsert('artists', [
      { coverArtist: 'Barbara Remington' },
      { coverArtist: 'Pauline Baynes' },
      { coverArtist: 'Bob Pepper' },
      { coverArtist: 'Gervasio Gallardo' },
      { coverArtist: 'Sheryl Slavitt' },
    ])

    await queryInterface.bulkInsert('originalPublisher', [
      { publisher: 'George Allen & Unwin Ltd.' },
      { publisher: 'Ballantine Books' },
      { publisher: 'Jonathan Cape' },
      { publisher: 'Faber and Faber' },
      { publisher: 'Dutton' },
      { publisher: 'Houghton Mifflin' },
      { publisher: 'Eyre & Spottiswoode' },
      { publisher: 'Methuen & Co. Ltd.' },
      { publisher: 'Viking Press' },
      { publisher: 'Curwen Press' },
    ])

    await queryInterface.bulkInsert('publishInfo', [
      { publishYear: '1965', publishOriginYear: '1937' },
      { publishYear: '1965', publishOriginYear: '1954' },
      { publishYear: '1965', publishOriginYear: '1955' },
      { publishYear: '1965', publishOriginYear: '1956' },
      { publishYear: '1966', publishOriginYear: '1966' },
      { publishYear: '1967', publishOriginYear: '1922' },
      { publishYear: '1967', publishOriginYear: '1935' },
      { publishYear: '1968', publishOriginYear: '1941' },
      { publishYear: '1968', publishOriginYear: '1967' },
      { publishYear: '1968', publishOriginYear: '1946' },
      { publishYear: '1968', publishOriginYear: '1950' },
      { publishYear: '1968', publishOriginYear: '1959' },
      { publishYear: '1968', publishOriginYear: '1920' },
      { publishYear: '1969', publishOriginYear: '1968' },
      { publishYear: '1969', publishOriginYear: '1960' },
      { publishYear: '1969', publishOriginYear: '1967' },
      { publishYear: '1969', publishOriginYear: '1969' },
      { publishYear: '1969', publishOriginYear: '1958' }
    ])

    return queryInterface.bulkInsert('books', [
      {
        title: 'The Hobbit',
        authorId: 1,
        publishInfoId: 1,
        originalPublisherId: 1,
        artistId: 1
      },
      {
        title: 'The Fellowship of the Ring',
        authorId: 1,
        publishInfoId: 2,
        originalPublisherId: 1,
        artistId: 1
      },
      {
        title: 'The Two Towers',
        authorId: 1,
        publishInfoId: 3,
        originalPublisherId: 1,
        artistId: 1
      },
      {
        title: 'Return of The King',
        authorId: 1,
        publishInfoId: 4,
        originalPublisherId: 1,
        artistId: 1
      },
      {
        title: 'The Tolkien Reader',
        authorId: 1,
        publishInfoId: 5,
        originalPublisherId: 2,
        artistId: 2
      },
      {
        title: 'The Worm Ouroboros',
        authorId: 2,
        publishInfoId: 6,
        originalPublisherId: 3,
        artistId: 1
      },
      {
        title: 'Mistress of Mistresses',
        authorId: 2,
        publishInfoId: 7,
        originalPublisherId: 4,
        artistId: 1
      },
      {
        title: 'A Fish Dinner in Memison',
        authorId: 2,
        publishInfoId: 8,
        originalPublisherId: 5,
        artistId: 1
      },
      {
        title: 'The Road Goes Ever On',
        authorId: 3,
        publishInfoId: 9,
        originalPublisherId: 6,
        artistId: 1
      },
      {
        title: 'Titus Groan',
        authorId: 4,
        publishInfoId: 10,
        originalPublisherId: 7,
        artistId: 3
      },
      {
        title: 'Gormenghast',
        authorId: 4,
        publishInfoId: 11,
        originalPublisherId: 7,
        artistId: 3
      },
      {
        title: 'Titus Alone',
        authorId: 4,
        publishInfoId: 12,
        originalPublisherId: 7,
        artistId: 3
      },
      {
        title: 'A Voyage to Arcturus',
        authorId: 5,
        publishInfoId: 13,
        originalPublisherId: 8,
        artistId: 3
      },
      {
        title: 'The Last Unicorn',
        authorId: 6,
        publishInfoId: 14,
        originalPublisherId: 9,
        artistId: 4
      },
      {
        title: 'A Fine and Private Place',
        authorId: 6,
        publishInfoId: 15,
        originalPublisherId: 9,
        artistId: 4
      },
      {
        title: 'Smith of Wootton Major and Farmer Giles of Ham',
        authorId: 1,
        publishInfoId: 16,
        originalPublisherId: 1,
        artistId: 2
      },
      {
        title: 'Tolkien: A Look Behind "The Lord of the Rings"',
        authorId: 7,
        publishInfoId: 17,
        originalPublisherId: 2,
        artistId: 5
      },
      {
        title: 'The Mezentian Gate',
        authorId: 2,
        publishInfoId: 18,
        originalPublisherId: 10,
        artistId: 1
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', [])
    await queryInterface.bulkDelete('publishInfo', [])
    await queryInterface.bulkDelete('originalPublisher', [])
    await queryInterface.bulkDelete('artists', [])

    return queryInterface.bulkDelete('authors', [])
  }
}
