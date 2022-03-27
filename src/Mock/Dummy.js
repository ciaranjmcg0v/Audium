/**
 * Define and export the dummy data.
 */

export const Playlists = [{
  id: '001',
  name: 'Stargroves',
  songs: 20,
  thumbnail: require('Assets/images/album1.png')
},{
  id: '002',
  name: 'Nickelback',
  songs: 16,
  thumbnail: require('Assets/images/album2.png')
},{
  id: '003',
  name: 'THREE',
  songs: 20,
  thumbnail: require('Assets/images/album1.png')
},{
  id: '004',
  name: 'FOUR',
  songs: 16,
  thumbnail: require('Assets/images/album2.png')
}]

export const Favourites = [{
  id: '001',
  url: '',
  title: 'Holy (feat. Chance the Rapper)',
  album: 'Great Album',
  artist: 'Justin Bieber',
  thumbnail: require('Assets/images/album1.png')
},{
  id: '002',
  url: '',
  title: 'Animals',
  album: 'All The Right Reasons',
  artist: 'Nickelback',
  thumbnail: require('Assets/images/album2.png')
}]

const dummyData = { Playlists, Favourites };

export default dummyData;
