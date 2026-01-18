// Complete Album Database with REAL LINKS
const albumDatabase = {
    '2ne1-1st-mini': {
        title: '2NE1 1st Mini Album',
        cover: 'Photos-Discog/1stMini.jpg',
        type: 'EP',
        tracks: '7',
        year: '2009',
        spotify: 'https://open.spotify.com/album/4vR1jW8mY80O1X9R6Q6W1v',
        tracklist: [
            { number: 1, title: 'Fire' },
            { number: 2, title: 'I Don\'t Care' },
            { number: 3, title: 'In the Club' },
            { number: 4, title: 'Let\'s Go Party' },
            { number: 5, title: 'Pretty Boy' },
            { number: 6, title: 'Stay Together' },
            { number: 7, title: 'Lollipop' }
        ],
        musicVideos: [
            { title: 'Fire (Street Ver.)', thumbnail: 'Photos-Discog/1stMini.jpg', views: '89M+ views', link: 'https://www.youtube.com/watch?v=49AfuuRbgGo' },
            { title: 'I Don\'t Care', thumbnail: 'Photos-Discog/1stMini.jpg', views: '64M+ views', link: 'https://www.youtube.com/watch?v=4MgAxMO1KD0' }
        ]
    },
    
    '2ne1-2nd-mini': {
        title: '2NE1 2nd Mini Album',
        cover: 'Photos-Discog/2ndMini.jpg',
        type: 'EP',
        tracks: '6',
        year: '2011',
        spotify: 'https://open.spotify.com/album/2n3x2fCq1I8Y9S4v6m6j4x',
        youtube: 'https://www.youtube.com/playlist?list=PL18CE568A0905C170',
        tracklist: [
            { number: 1, title: 'Hate You' },
            { number: 2, title: 'Lonely' },
            { number: 3, title: 'I Am the Best' },
            { number: 4, title: 'Ugly' },
            { number: 5, title: 'Don\'t Stop the Music' },
            { number: 6, title: 'Hate You (Unplugged Ver.)' }
        ],
        musicVideos: [
            { title: 'I Am The Best', thumbnail: 'Photos-Discog/2ndMini.jpg', views: '420M+ views', link: 'https://www.youtube.com/watch?v=j7_lSP8Vc3o' },
            { title: 'Lonely', thumbnail: 'Photos-Discog/2ndMini.jpg', views: '112M+ views', link: 'https://www.youtube.com/watch?v=5n4V3lGEyG4' },
            { title: 'Ugly', thumbnail: 'Photos-Discog/2ndMini.jpg', views: '97M+ views', link: 'https://www.youtube.com/watch?v=NGe0hHvAGkc' }
        ]
    },
    
    'to-anyone': {
        title: 'To Anyone',
        cover: 'Photos-Discog/ToAnyoneAlbum.jpg',
        type: 'Studio Album',
        tracks: '12',
        year: '2010',
        spotify: 'https://open.spotify.com/album/3gqZkX5Y0JcCZBf9F4jQ8H',
        youtube: 'https://www.youtube.com/playlist?list=PLJimpkhAVrQw9I-cq1bK359phTxbHOtLD',
        tracklist: [
            { number: 1, title: 'Can\'t Nobody' },
            { number: 2, title: 'Go Away' },
            { number: 3, title: 'Clap Your Hands' },
            { number: 4, title: 'Please Don\'t Go' },
            { number: 5, title: 'Kiss' },
            { number: 6, title: 'Love Is Ouch' },
            { number: 7, title: 'Try to Follow Me' },
            { number: 8, title: 'Director' },
            { number: 9, title: 'Can\'t Nobody (English Ver.)' },
            { number: 10, title: 'It Hurts (Slow)' },
            { number: 11, title: 'Go Away (Remix)' },
            { number: 12, title: 'I\'ll Be Missing You' }
        ],
        musicVideos: [
            { title: 'Can\'t Nobody', thumbnail: 'Photos-Discog/ToAnyoneAlbum.jpg', views: '48M+ views', link: 'https://www.youtube.com/watch?v=Ihi_kJJj_8A' },
            { title: 'Go Away', thumbnail: 'Photos-Discog/ToAnyoneAlbum.jpg', views: '61M+ views', link: 'https://www.youtube.com/watch?v=3yW13T2gDko' },
            { title: 'It Hurts', thumbnail: 'Photos-Discog/ToAnyoneAlbum.jpg', views: '41M+ views', link: 'https://www.youtube.com/watch?v=aUiMaz4BNKw' }
        ]
    },
    
    'crush': {
        title: 'Crush',
        cover: 'Photos-Discog/CrushAlbum.jpg',
        type: 'Studio Album',
        tracks: '10',
        year: '2014',
        spotify: 'https://open.spotify.com/album/1SlMncsYnVpHmPie7KC6HO?si=SegPtW5VRZGRRfz1lOgU_w',
        youtube: 'https://www.youtube.com/playlist?list=PLiMAkjqsDYt4Dj-CSyqnHT0PToQOKov0A',
        tracklist: [
            { number: 1, title: 'Crush' },
            { number: 2, title: 'Come Back Home' },
            { number: 3, title: 'Gotta Be You' },
            { number: 4, title: 'If I Were You' },
            { number: 5, title: 'Happy' },
            { number: 6, title: 'Scream' },
            { number: 7, title: 'Good to You' },
            { number: 8, title: 'Missing You' },
            { number: 9, title: 'Come Back Home (Unplugged Ver.)' },
            { number: 10, title: 'If I Were You (Reggae Ver.)' }
        ],
        musicVideos: [
            { title: 'Come Back Home', thumbnail: 'Photos-Discog/CrushAlbum.jpg', views: '121M+ views', link: 'https://www.youtube.com/watch?v=vLbfv-AAyvQ' },
            { title: 'Gotta Be You', thumbnail: 'Photos-Discog/CrushAlbum.jpg', views: '38M+ views', link: 'https://www.youtube.com/watch?v=erdV0nTtLiE' }
        ]
    },
    
    // === LIVE ALBUMS ===
    'nolza': {
        title: 'LIVE CONCERT [NOLZA!]',
        cover: 'Photos-Discog/Nolza.jpg',
        type: 'Live Album (CD)',
        tracks: '23',
        year: '2011',
        spotify: 'https://open.spotify.com/album/1l0mKo96Jh9HVYONcRl3Yp',
        youtube: 'https://www.youtube.com/playlist?list=PLvGiD42t-n3F-OndTj9zN9LOf37n_4pI7',
        tracklist: [
            { number: 1, title: 'Intro' },
            { number: 2, title: 'Fire' },
            { number: 3, title: 'Can\'t Nobody' },
            { number: 4, title: 'I Don\'t Care' },
            { number: 5, title: 'Lollipop' },
            { number: 6, title: 'Kiss' },
            { number: 7, title: 'Please Don\'t Go' },
            { number: 8, title: 'Park Bom Solo' }
        ],
        musicVideos: [
            { title: 'NOLZA! Live Concert', thumbnail: 'Photos-Discog/Nolza.jpg', views: 'Live Performance', link: 'https://www.youtube.com/watch?v=XqATuEo1rzo' }
        ]
    },
    
    'new-evolution': {
        title: 'New Evolution',
        cover: 'Photos-Discog/NewEvolution.jpg',
        type: 'Live Album (CD)',
        tracks: '19',
        year: '2012',
        spotify: 'https://open.spotify.com/artist/1l0mKo96Jh9HVYONcRl3Yp',
        youtube: 'https://www.youtube.com/playlist?list=PLGzOvdJ1wrMnNg8K_p2MBtQambwMtNNjV',
        tracklist: [
            { number: 1, title: 'Intro' },
            { number: 2, title: 'I Am the Best' },
            { number: 3, title: 'Ugly' },
            { number: 4, title: 'Lonely' },
            { number: 5, title: 'Hate You' },
            { number: 6, title: 'Fire' }
        ],
        musicVideos: [
            { title: 'New Evolution Global Tour', thumbnail: 'Photos-Discog/NewEvolution.jpg', views: 'Tour Highlights', link: 'https://www.youtube.com/results?search_query=2ne1+new+evolution+tour' }
        ]
    },
    
    'all-or-nothing': {
        title: 'All Or Nothing In Seoul',
        cover: 'Photos-Discog/AllOrNothing.jpg',
        type: 'Live Album (CD)',
        tracks: '18',
        year: '2014',
        spotify: 'https://open.spotify.com/artist/1l0mKo96Jh9HVYONcRl3Yp',
        youtube: 'https://www.youtube.com/playlist?list=PLGzOvdJ1wrMnNg8K_p2MBtQambwMtNNjV',
        tracklist: [
            { number: 1, title: 'Intro' },
            { number: 2, title: 'Come Back Home' },
            { number: 3, title: 'Crush' },
            { number: 4, title: 'Gotta Be You' },
            { number: 5, title: 'Missing You' },
            { number: 6, title: 'Happy' }
        ],
        musicVideos: [
            { title: 'All Or Nothing in Seoul', thumbnail: 'Photos-Discog/AllOrNothing.jpg', views: 'Live Concert', link: 'https://www.youtube.com/results?search_query=2ne1+all+or+nothing+seoul' }
        ]
    },
    
    'collection': {
        title: 'Collection',
        cover: 'Photos-Discog/Collectionn.jfif',
        type: 'Compilation / Japanese Album',
        tracks: '22',
        year: '2012',
        spotify: 'https://open.spotify.com/artist/1l0mKo96Jh9HVYONcRl3Yp',
        youtube: 'https://www.youtube.com/playlist?list=PLGzOvdJ1wrMnNg8K_p2MBtQambwMtNNjV',
        tracklist: [
            { number: 1, title: 'I Am the Best (Japanese Ver.)' },
            { number: 2, title: 'Go Away (Japanese Ver.)' },
            { number: 3, title: 'Lonely (Japanese Ver.)' },
            { number: 4, title: 'Ugly (Japanese Ver.)' },
            { number: 5, title: 'I Love You (Japanese Ver.)' }
        ],
        musicVideos: [
            { title: '2NE1 Collection Album', thumbnail: 'Photos-Discog/Collectionn.jfif', views: 'Japanese Release', link: 'https://www.youtube.com/results?search_query=2ne1+collection+japanese' }
        ]
    },
    
    // === SINGLES ===
    'fire-single': {
        title: 'Fire',
        cover: 'Photos-Discog/Fire.jfif',
        type: 'Debut Single',
        tracks: '1',
        year: '2009',
        spotify: 'https://open.spotify.com/track/3fVdVhJRw1RZNPKvSjUIx6',
        youtube: 'https://www.youtube.com/watch?v=49AfuuRbgGo',
        tracklist: [
            { number: 1, title: 'Fire' }
        ],
        musicVideos: [
            { title: 'Fire (Street Ver.)', thumbnail: 'Photos-Discog/Fire.jfif', views: '89M+ views', link: 'https://www.youtube.com/watch?v=49AfuuRbgGo' }
        ]
    },
    
    'lollipop-single': {
        title: 'Lollipop',
        cover: 'Photos-Discog/Lollipop.jfif',
        type: 'Promotional Single',
        tracks: '1',
        year: '2009',
        spotify: 'https://open.spotify.com/track/7kHWFJu6GJyGbZ0vZhqRx8',
        youtube: 'https://www.youtube.com/watch?v=zIRW_elc-rY',
        tracklist: [
            { number: 1, title: 'Lollipop (feat. Big Bang)' }
        ],
        musicVideos: [
            { title: 'Lollipop', thumbnail: 'Photos-Discog/Lollipop.jfif', views: '44M+ views', link: 'https://www.youtube.com/watch?v=zIRW_elc-rY' }
        ]
    },
    
    'follow-me-single': {
        title: 'Follow Me',
        cover: 'Photos-Discog/Follow Me.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2010',
        spotify: 'https://open.spotify.com/track/1vWvKGlxZWbOGzKZdGbKLs',
        youtube: 'https://www.youtube.com/watch?v=nB_uvGa3_RI',
        tracklist: [
            { number: 1, title: 'Follow Me' }
        ],
        musicVideos: [
            { title: 'Follow Me', thumbnail: 'Photos-Discog/Follow Me.jfif', views: '23M+ views', link: 'https://www.youtube.com/watch?v=nB_uvGa3_RI' }
        ]
    },
    
    'lonely-single': {
        title: 'Lonely',
        cover: 'Photos-Discog/Lonely.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2011',
        spotify: 'https://open.spotify.com/track/5RlJk17K7HGhSWuNba0fvK',
        youtube: 'https://www.youtube.com/watch?v=5n4V3lGEyG4',
        tracklist: [
            { number: 1, title: 'Lonely' }
        ],
        musicVideos: [
            { title: 'Lonely', thumbnail: 'Photos-Discog/Lonely.jfif', views: '112M+ views', link: 'https://www.youtube.com/watch?v=5n4V3lGEyG4' }
        ]
    },
    
    'i-am-the-best-single': {
        title: 'I Am the Best',
        cover: 'Photos-Discog/IAmTheBest.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2011',
        spotify: 'https://open.spotify.com/track/5W5f9c1xcbJdPEpsjeR8yN',
        youtube: 'https://www.youtube.com/watch?v=j7_lSP8Vc3o',
        tracklist: [
            { number: 1, title: 'I Am the Best' }
        ],
        musicVideos: [
            { title: 'I Am The Best', thumbnail: 'Photos-Discog/IAmTheBest.jfif', views: '420M+ views', link: 'https://www.youtube.com/watch?v=j7_lSP8Vc3o' }
        ]
    },
    
    'hate-you-single': {
        title: 'Hate You',
        cover: 'Photos-Discog/HateYou.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2011',
        spotify: 'https://open.spotify.com/track/6wGQc7FnRhZL0yEx3hTDJF',
        youtube: 'https://www.youtube.com/watch?v=4MgAxMO1KD0',
        tracklist: [
            { number: 1, title: 'Hate You' }
        ],
        musicVideos: [
            { title: 'Hate You', thumbnail: 'Photos-Discog/HateYou.jfif', views: '64M+ views', link: 'https://www.youtube.com/watch?v=4MgAxMO1KD0' }
        ]
    },
    
    'ugly-single': {
        title: 'Ugly',
        cover: 'Photos-Discog/Ugly.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2011',
        spotify: 'https://open.spotify.com/track/1wBuRjZZ0GzKcFVLxCjYQG',
        youtube: 'https://www.youtube.com/watch?v=NGe0hHvAGkc',
        tracklist: [
            { number: 1, title: 'Ugly' }
        ],
        musicVideos: [
            { title: 'Ugly', thumbnail: 'Photos-Discog/Ugly.jfif', views: '97M+ views', link: 'https://www.youtube.com/watch?v=NGe0hHvAGkc' }
        ]
    },
    
    'i-love-you-single': {
        title: 'I Love You',
        cover: 'Photos-Discog/ILoveYou.jfif',
        type: 'Digital Single',
        tracks: '1',
        year: '2012',
        spotify: 'https://open.spotify.com/track/7p93t3Zh8cNqv0KKJyTkCY',
        youtube: 'https://www.youtube.com/watch?v=LUrUPzLm5SI',
        tracklist: [
            { number: 1, title: 'I Love You' }
        ],
        musicVideos: [
            { title: 'I Love You', thumbnail: 'Photos-Discog/ILoveYou.jfif', views: '61M+ views', link: 'https://www.youtube.com/watch?v=LUrUPzLm5SI' }
        ]
    }
};

// LOAD AND DISPLAY THE ALBUM
const urlParams = new URLSearchParams(window.location.search);
const albumId = urlParams.get('album');

if (albumId && albumDatabase[albumId]) {
    const album = albumDatabase[albumId];
    
    // Set album details
    document.getElementById('albumCover').src = album.cover;
    document.getElementById('albumTitle').textContent = album.title;
    document.getElementById('albumType').textContent = album.type;
    document.getElementById('albumTracks').textContent = album.tracks;
    document.getElementById('albumYear').textContent = album.year;
    
    // Set platform links
    document.getElementById('spotifyLink').href = album.spotify;
    document.getElementById('youtubeLink').href = album.youtube;
    
    // Build tracklist
    const tracklistHTML = album.tracklist.map(track => `
        <div class="track_item">
            <span class="track_number">${String(track.number).padStart(2, '0')}</span>
            <span class="track_title">${track.title}</span>
        </div>
    `).join('');
    document.getElementById('tracklistContainer').innerHTML = tracklistHTML;
    
    // Build music videos
    const videosHTML = album.musicVideos.map(video => `
        <div class="video_card" onclick="window.open('${video.link}', '_blank')">
            <div class="video_thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <i class="fa-brands fa-youtube"></i>
            </div>
            <div class="video_info">
                <h4>${video.title}</h4>
                <p>${video.views}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('videosContainer').innerHTML = videosHTML;
    
} else {
    // If album not found, redirect to index
    window.location.href = 'index.html';
}