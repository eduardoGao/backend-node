const dataMovies = [
  {
  "id": "2a632fce-10e6-4751-884b-5e0dbe0f8910",
  "title": "Bugsy",
  "year": 2006,
  "cover": "http://dummyimage.com/181x128.bmp/dddddd/000000",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "duration": 53,
  "content_rating": null,
  "source": "http://goo.gl/ac/neque.png",
  "tags": [
    "Musical"
  ]
  }, 
  {
  "id": "f32ce90e-abff-4d66-bae2-343369b7bf4b",
  "title": "Gremlins",
  "year": 1996,
  "cover": "http://dummyimage.com/213x213.bmp/cc0000/ffffff",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "duration": 100,
  "content_rating": null,
  "source": "http://discovery.com/turpis.html",
  "tags": [
    "Comedy|Drama"
  ]
  }, 
  {
  "id": "3ff50a93-704c-4ef9-9f6b-f358c25eed78",
  "title": "I Walk the Line",
  "year": 1992,
  "cover": "http://dummyimage.com/159x227.png/5fa2dd/ffffff",
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "duration": 36,
  "content_rating": null,
  "source": "http://ebay.co.uk/montes/nascetur/ridiculus/mus.js",
  "tags": [
    "Comedy|Drama|Musical",
    "Comedy",
    "Sci-Fi",
    "Action|Adventure|Drama|Thriller"
  ]
  }, 
  {
    "id": "6b4c6b0b-5f45-43f7-a2bd-4d974f4ae529",
    "title": "Somewhere in the Night",
    "year": 2009,
    "cover": "http://dummyimage.com/166x212.bmp/cc0000/ffffff",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "duration": 28,
    "content_rating": null,
    "source": "https://cloudflare.com/pede/morbi/porttitor/lorem.js",
    "tags": [
      "Horror|Sci-Fi",
      "Drama",
      "Comedy|Romance|War",
      "Drama",
      "Comedy|Drama"
    ]
  }, 
  {
    "id": "3b1d85e7-cfec-4934-b380-0b6a26931998",
    "title": "W.W. and the Dixie Dancekings",
    "year": 1992,
    "cover": "http://dummyimage.com/164x243.jpg/ff4444/ffffff",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "duration": 29,
    "content_rating": null,
    "source": "https://cocolog-nifty.com/dis/parturient.png",
    "tags": [
      "Comedy|Drama|Romance",
      "Comedy|Horror"
    ]
  }, 
  {
    "id": "8f872fab-7e91-439b-84dc-b63cf1e643be",
    "title": "Seventh Heaven (Septième ciel, Le)",
    "year": 2001,
    "cover": "http://dummyimage.com/192x146.bmp/dddddd/000000",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "duration": 99,
    "content_rating": null,
    "source": "https://wisc.edu/nulla/sed.html",
    "tags": [
      "Documentary",
      "Drama|Mystery|Thriller"
    ]
  }, 
  {
    "id": "e95b3b5b-4744-4d53-a57d-dfea2abb2426",
    "title": "Zatoichi the Fugitive (Zatôichi kyôjô-tabi) (Zatôichi 4)",
    "year": 2011,
    "cover": "http://dummyimage.com/163x226.jpg/ff4444/ffffff",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "duration": 94,
    "content_rating": null,
    "source": "http://pagesperso-orange.fr/augue/quam/sollicitudin/vitae.xml",
    "tags": [
      "Drama",
      "Western"
    ]
  }, 
  {
    "id": "df144333-9381-4f33-8065-e231d9d6cc12",
    "title": "Jackpot 2",
    "year": 2008,
    "cover": "http://dummyimage.com/240x165.png/5fa2dd/ffffff",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "duration": 19,
    "content_rating": null,
    "source": "http://geocities.com/orci/luctus/et/ultrices.xml",
    "tags": [
      "Documentary",
      "Crime|Drama|Mystery|Thriller",
      "Drama|Fantasy|Mystery"
    ]
  }, 
  {
    "id": "9a4ca10e-b9d2-42a3-ad9a-5faf7be6537e",
    "title": "Val Lewton:  The Man in the Shadows",
    "year": 1989,
    "cover": "http://dummyimage.com/181x163.png/ff4444/ffffff",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "duration": 44,
    "content_rating": null,
    "source": "https://europa.eu/integer/a/nibh/in/quis/justo.json",
    "tags": [
      "Action|Comedy|Documentary",
      "Animation|Children|Comedy"
    ]
  }, 
  {
    "id": "b87c95e4-5f64-4321-abf9-31ed3c7b5348",
    "title": "Food Stamped",
    "year": 2010,
    "cover": "http://dummyimage.com/166x210.jpg/cc0000/ffffff",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "duration": 44,
    "content_rating": null,
    "source": "https://issuu.com/mauris/vulputate/elementum/nullam/varius/nulla/facilisi.jsp",
    "tags": [
      "Horror",
      "Comedy|Drama",
      "Drama|Romance"
    ]
  }
]

module.exports = dataMovies
