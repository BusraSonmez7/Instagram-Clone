const sharingList = [
  {
    id: 0,
    images: {
      uri: 'https://i.cbc.ca/1.6315864.1642195883!/fileImage/httpImage/peter-doig-swamped.jpg',
    },
    type: 'images',
  },
  {
    id: 1,
    images: {
      uri: 'https://www.aksaakustik.com/wp-content/uploads/2021/05/muzik-odasi-duvar-kaplama.jpg',
    },
    type: 'image',
  },
  {
    id: 2,
    images: {
      uri: 'https://artbusinessnews.com/wpdev/wp-content/uploads/2020/05/How-to-Talk-About-Your-Art-1170x780.jpg',
    },
    type: 'video',
  },
  {
    id: 3,
    images: {
      uri: 'https://i.ytimg.com/vi/J1cg9ytXjpc/maxresdefault.jpg',
    },
    type: 'image',
  },
  {
    id: 4,
    images: {
      uri: 'https://i.pinimg.com/originals/df/a1/ec/dfa1ecd72b8ba883a1ca5a5cb38e3632.jpg',
    },
    type: 'image',
  },
  {
    id: 5,
    images: {
      uri: 'https://artincontext.org/wp-content/uploads/2022/03/Principles-of-Art.jpg',
    },
    type: 'reels',
  },
  {
    id: 6,
    images: {
      uri: 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/11/katharina-grosse.jpg',
    },
    type: 'video',
  },
  {
    id: 7,
    images: {
      uri: 'https://images.squarespace-cdn.com/content/v1/538a508ee4b00fa9a361f222/1595624893276-QU3YW0L5N85PL24GUPWF/TAM+Music+to+my+Eyes+Exhibition+View+5.jpg',
    },
    type: 'reels',
  },
  {
    id: 8,
    images: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNNrv_mGll43Y9xCmNnKGR2CWM9qND03j9g&usqp=CAU',
    },
    type: 'images',
  },
  {
    id: 9,
    images: {
      uri: 'https://i.pinimg.com/736x/55/6c/01/556c01858d9fb2a62b797f744b5a745c--photoshop-action.jpg',
    },
    type: 'reels',
  },
  {
    id: 10,
    images: {
      uri: 'https://www.royaltalens.com/contentassets/ea13ae70ce2c4543841847642b119edd/step-by-step_girl-flower_blog.jpg?width=948&height=583&bgcolor=white',
    },
    type: 'video',
  },
  {
    id: 11,
    images: {
      uri: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1574743059-art-blogs.jpg',
    },
    type: 'image',
  },
  {
    id: 12,
    images: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiO643z89zNtxQt1Ttd2v9NHz7wvs2_5cZg&usqp=CAU',
    },
    type: 'reels',
  },
  {
    id: 13,
    images: {
      uri: 'https://creativecommons.org/wp-content/uploads/2022/05/Copy-of-Copy-of-CC-Open-Education-Lightning-Talks-Twitter-Post-Video-1200x675.png',
    },
    type: 'image',
  },
  {
    id: 14,
    images: {
      uri: 'https://i0.wp.com/livewellrockwell.com/wp-content/uploads/fullsizeoutput_1678.jpeg?resize=800%2C600',
    },
    type: 'reels',
  },
  {
    id: 15,
    images: {
      uri: 'https://i.pinimg.com/736x/2f/64/93/2f64933794d2a0623baf60f0ae7719f3.jpg',
    },
    type: 'image',
  },
  {
    id: 16,
    images: {
      uri: 'https://i.ytimg.com/vi/rnOg_e-eCco/maxresdefault.jpg',
    },
    type: 'video',
  },
  {
    id: 17,
    images: {
      uri: 'https://en.canson.com/sites/default/files/styles/large/public/medias-images/New-Dessin-001-2%20%281%29.jpg?itok=i1oaN4tC',
    },
    type: 'video',
  },
  {
    id: 18,
    images: {
      uri: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/figure-drawing_P1_900x420%20(1)?$pjpeg$&jpegSize=200&wid=900',
    },
    type: 'images',
  },
  {
    id: 19,
    images: {
      uri: 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/CjHendry_01.jpg',
    },
    type: 'reels',
  },
  {
    id: 20,
    images: {
      uri: 'https://i.pinimg.com/736x/89/94/35/8994359ff01db16e695a55da389a3e52.jpg',
    },
    type: 'image',
  },
  {
    id: 21,
    images: {
      uri: 'https://i.pinimg.com/originals/7f/1e/64/7f1e64c8c746b431ab7a244f7c6df819.jpg',
    },
    type: 'video',
  },
  {
    id: 22,
    images: {
      uri: 'https://www.aksaakustik.com/wp-content/uploads/2021/05/muzik-odasi-duvar-kaplama.jpg',
    },
    type: 'image',
  },
  {
    id: 23,
    images: {
      uri: 'https://cdna.artstation.com/p/assets/images/images/045/812/270/large/gurudatt-mokashe-art-img20220107223431.jpg?1643615255',
    },
    type: 'video',
  },
  {
    id: 24,
    images: {
      uri: 'https://i.ytimg.com/vi/0oWA7tx1CAg/maxresdefault.jpg',
    },
    type: 'video',
  },
  {
    id: 25,
    images: {
      uri: 'https://i.pinimg.com/736x/f3/73/a3/f373a34c6c381dd623aaada718177160.jpg',
    },
    type: 'images',
  },
  {
    id: 26,
    images: {
      uri: 'https://www.skillshare.com/blog/wp-content/uploads/2021/02/Screenshot2021-03-08at14.22.01.png?w=871',
    },
    type: 'video',
  },
];

export default sharingList;
