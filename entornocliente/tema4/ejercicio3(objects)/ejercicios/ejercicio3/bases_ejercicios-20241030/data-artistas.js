 const artistas = [
  {
    nombre: 'Ochoa Chang',
    solista: true,
    edad: 33,
    instrumento: 'batería',
    paisNacimiento: 'Mayotte',
    ultimoRecital: {
      pais: 'Vatican City State (Holy See)',
      anio: 2016,
      entradasVendidas: 68197,
      costoEntradas: 2987
    },
    discos: [
      {
        titulo: 'pariatur excepteur dolore',
        canciones: 13,
        anioLanzamiento: 1993,
        copiasVendidas: 20393
      },
      {
        titulo: 'aliquip est esse',
        canciones: 9,
        anioLanzamiento: 2017,
        copiasVendidas: 69303
      },
      {
        titulo: 'reprehenderit est aliquip',
        canciones: 12,
        anioLanzamiento: 2011,
        copiasVendidas: 1861
      },
      {
        titulo: 'do magna irure',
        canciones: 9,
        anioLanzamiento: 2018,
        copiasVendidas: 29126
      },
      {
        titulo: 'proident id amet',
        canciones: 13,
        anioLanzamiento: 2017,
        copiasVendidas: 22989
      },
      {
        titulo: 'cillum velit est',
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 17449
      },
      {
        titulo: 'nulla incididunt laborum',
        canciones: 11,
        anioLanzamiento: 2019,
        copiasVendidas: 90743
      },
      {
        titulo: 'commodo sint fugiat',
        canciones: 13,
        anioLanzamiento: 2014,
        copiasVendidas: 70766
      },
      {
        titulo: 'elit adipisicing eu',
        canciones: 8,
        anioLanzamiento: 2006,
        copiasVendidas: 89143
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Blevins Hardy',
    solista: true,
    edad: 40,
    instrumento: 'batería',
    paisNacimiento: 'Bulgaria',
    ultimoRecital: {
      pais: 'St. Pierre and Miquelon',
      anio: 2000,
      entradasVendidas: 41566,
      costoEntradas: 1718
    },
    discos: [
      {
        titulo: 'dolor nisi cillum',
        canciones: 10,
        anioLanzamiento: 2005,
        copiasVendidas: 3218
      },
      {
        titulo: 'mollit esse magna',
        canciones: 7,
        anioLanzamiento: 2013,
        copiasVendidas: 62740
      },
      {
        titulo: 'eiusmod ipsum dolor',
        canciones: 6,
        anioLanzamiento: 2005,
        copiasVendidas: 60754
      },
      {
        titulo: 'quis labore minim',
        canciones: 14,
        anioLanzamiento: 2008,
        copiasVendidas: 42207
      },
      {
        titulo: 'velit excepteur sit',
        canciones: 6,
        anioLanzamiento: 2007,
        copiasVendidas: 84132
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Rasmussen Grimes',
    solista: false,
    edad: 30,
    instrumento: 'teclado',
    paisNacimiento: 'Palau',
    ultimoRecital: {
      pais: 'Belize',
      anio: 2001,
      entradasVendidas: 25514,
      costoEntradas: 2061
    },
    discos: [
      {
        titulo: 'sit occaecat ex',
        canciones: 14,
        anioLanzamiento: 2011,
        copiasVendidas: 7799
      },
      {
        titulo: 'occaecat dolore ad',
        canciones: 10,
        anioLanzamiento: 1993,
        copiasVendidas: 55716
      },
      {
        titulo: 'sit sit voluptate',
        canciones: 8,
        anioLanzamiento: 2011,
        copiasVendidas: 21153
      },
      {
        titulo: 'voluptate enim incididunt',
        canciones: 7,
        anioLanzamiento: 1990,
        copiasVendidas: 48279
      },
      {
        titulo: 'fugiat excepteur ut',
        canciones: 14,
        anioLanzamiento: 2008,
        copiasVendidas: 33089
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Griffin David',
    solista: false,
    edad: 30,
    instrumento: 'voz',
    paisNacimiento: 'Philippines',
    ultimoRecital: {
      pais: 'South Africa',
      anio: 2000,
      entradasVendidas: 66545,
      costoEntradas: 1106
    },
    discos: [
      {
        titulo: 'pariatur et culpa',
        canciones: 13,
        anioLanzamiento: 2010,
        copiasVendidas: 33606
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Loretta Short',
    solista: true,
    edad: 25,
    instrumento: 'guitarra',
    paisNacimiento: 'Korea (South)',
    ultimoRecital: {
      pais: 'France',
      anio: 2008,
      entradasVendidas: 58251,
      costoEntradas: 1263
    },
    discos: [
      {
        titulo: 'ea aute occaecat',
        canciones: 11,
        anioLanzamiento: 2003,
        copiasVendidas: 77446
      },
      {
        titulo: 'adipisicing elit magna',
        canciones: 10,
        anioLanzamiento: 2003,
        copiasVendidas: 95876
      },
      {
        titulo: 'consequat aute occaecat',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 28377
      },
      {
        titulo: 'quis occaecat cupidatat',
        canciones: 9,
        anioLanzamiento: 1994,
        copiasVendidas: 38332
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Elise Walker',
    solista: true,
    edad: 33,
    instrumento: 'batería',
    paisNacimiento: 'Guam',
    ultimoRecital: {
      pais: 'Hong Kong',
      anio: 2014,
      entradasVendidas: 88034,
      costoEntradas: 2421
    },
    discos: [
      {
        titulo: 'labore amet tempor',
        canciones: 14,
        anioLanzamiento: 1991,
        copiasVendidas: 54299
      },
      {
        titulo: 'ullamco in consectetur',
        canciones: 12,
        anioLanzamiento: 2006,
        copiasVendidas: 63066
      },
      {
        titulo: 'deserunt proident do',
        canciones: 13,
        anioLanzamiento: 1997,
        copiasVendidas: 60149
      },
      {
        titulo: 'ipsum laboris ipsum',
        canciones: 7,
        anioLanzamiento: 1994,
        copiasVendidas: 45152
      },
      {
        titulo: 'voluptate consequat labore',
        canciones: 6,
        anioLanzamiento: 2016,
        copiasVendidas: 4799
      },
      {
        titulo: 'ipsum fugiat magna',
        canciones: 11,
        anioLanzamiento: 2008,
        copiasVendidas: 34448
      },
      {
        titulo: 'aliqua ullamco magna',
        canciones: 14,
        anioLanzamiento: 2011,
        copiasVendidas: 7340
      },
      {
        titulo: 'magna ullamco commodo',
        canciones: 12,
        anioLanzamiento: 2017,
        copiasVendidas: 38488
      },
      {
        titulo: 'culpa velit elit',
        canciones: 7,
        anioLanzamiento: 1991,
        copiasVendidas: 93699
      },
      {
        titulo: 'id ad est',
        canciones: 9,
        anioLanzamiento: 2007,
        copiasVendidas: 75663
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Janet Hughes',
    solista: true,
    edad: 33,
    instrumento: 'guitarra',
    paisNacimiento: 'Kiribati',
    ultimoRecital: {
      pais: 'Tokelau',
      anio: 2008,
      entradasVendidas: 87363,
      costoEntradas: 643
    },
    discos: [
      {
        titulo: 'duis ut culpa',
        canciones: 10,
        anioLanzamiento: 2010,
        copiasVendidas: 75059
      },
      {
        titulo: 'nulla adipisicing dolor',
        canciones: 12,
        anioLanzamiento: 2009,
        copiasVendidas: 14443
      },
      {
        titulo: 'aliquip ut anim',
        canciones: 13,
        anioLanzamiento: 2014,
        copiasVendidas: 14482
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Jill Booker',
    solista: true,
    edad: 36,
    instrumento: 'bajo',
    paisNacimiento: 'Bhutan',
    ultimoRecital: {
      pais: 'Albania',
      anio: 2014,
      entradasVendidas: 4876,
      costoEntradas: 2132
    },
    discos: [
      {
        titulo: 'pariatur velit magna',
        canciones: 10,
        anioLanzamiento: 2004,
        copiasVendidas: 6223
      },
      {
        titulo: 'aliquip aute incididunt',
        canciones: 9,
        anioLanzamiento: 2000,
        copiasVendidas: 6230
      },
      {
        titulo: 'eu reprehenderit ullamco',
        canciones: 14,
        anioLanzamiento: 2006,
        copiasVendidas: 1865
      },
      {
        titulo: 'nulla nulla ex',
        canciones: 10,
        anioLanzamiento: 2013,
        copiasVendidas: 35035
      },
      {
        titulo: 'deserunt anim elit',
        canciones: 6,
        anioLanzamiento: 2004,
        copiasVendidas: 72230
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Sharlene Carpenter',
    solista: false,
    edad: 22,
    instrumento: 'guitarra',
    paisNacimiento: 'Croatia (Hrvatska)',
    ultimoRecital: {
      pais: 'Tajikistan',
      anio: 2007,
      entradasVendidas: 82476,
      costoEntradas: 2159
    },
    discos: [
      {
        titulo: 'aute non occaecat',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 68378
      },
      {
        titulo: 'dolor esse ipsum',
        canciones: 13,
        anioLanzamiento: 2001,
        copiasVendidas: 37006
      },
      {
        titulo: 'ex exercitation aute',
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 90897
      },
      {
        titulo: 'consectetur ex voluptate',
        canciones: 12,
        anioLanzamiento: 1993,
        copiasVendidas: 12745
      },
      {
        titulo: 'amet laborum excepteur',
        canciones: 9,
        anioLanzamiento: 2001,
        copiasVendidas: 47656
      },
      {
        titulo: 'esse est labore',
        canciones: 14,
        anioLanzamiento: 1990,
        copiasVendidas: 54371
      },
      {
        titulo: 'amet in pariatur',
        canciones: 8,
        anioLanzamiento: 1997,
        copiasVendidas: 33924
      },
      {
        titulo: 'veniam aute pariatur',
        canciones: 12,
        anioLanzamiento: 2016,
        copiasVendidas: 41179
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Laurie Aguilar',
    solista: true,
    edad: 36,
    instrumento: 'guitarra',
    paisNacimiento: 'Iraq',
    ultimoRecital: {
      pais: 'Puerto Rico',
      anio: 2005,
      entradasVendidas: 34693,
      costoEntradas: 2277
    },
    discos: [
      {
        titulo: 'dolore et aliquip',
        canciones: 10,
        anioLanzamiento: 2006,
        copiasVendidas: 33971
      },
      {
        titulo: 'eu elit voluptate',
        canciones: 7,
        anioLanzamiento: 1998,
        copiasVendidas: 29591
      },
      {
        titulo: 'culpa Lorem laborum',
        canciones: 14,
        anioLanzamiento: 2011,
        copiasVendidas: 13149
      },
      {
        titulo: 'consequat id Lorem',
        canciones: 6,
        anioLanzamiento: 2008,
        copiasVendidas: 51675
      },
      {
        titulo: 'tempor occaecat irure',
        canciones: 14,
        anioLanzamiento: 2008,
        copiasVendidas: 60514
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Randi Martin',
    solista: true,
    edad: 35,
    instrumento: 'guitarra',
    paisNacimiento: 'Israel',
    ultimoRecital: {
      pais: 'French Southern Territories',
      anio: 2019,
      entradasVendidas: 25052,
      costoEntradas: 659
    },
    discos: [
      {
        titulo: 'aute eu dolor',
        canciones: 11,
        anioLanzamiento: 2007,
        copiasVendidas: 86394
      },
      {
        titulo: 'velit est irure',
        canciones: 10,
        anioLanzamiento: 2018,
        copiasVendidas: 1716
      },
      {
        titulo: 'occaecat sunt aliquip',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 7928
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Sheree Hays',
    solista: false,
    edad: 39,
    instrumento: 'teclado',
    paisNacimiento: 'Micronesia',
    ultimoRecital: {
      pais: 'Cook Islands',
      anio: 2003,
      entradasVendidas: 97821,
      costoEntradas: 1983
    },
    discos: [
      {
        titulo: 'cillum elit mollit',
        canciones: 7,
        anioLanzamiento: 2017,
        copiasVendidas: 59201
      },
      {
        titulo: 'pariatur mollit anim',
        canciones: 9,
        anioLanzamiento: 2003,
        copiasVendidas: 80129
      },
      {
        titulo: 'et adipisicing ex',
        canciones: 13,
        anioLanzamiento: 1991,
        copiasVendidas: 25016
      },
      {
        titulo: 'deserunt magna ex',
        canciones: 6,
        anioLanzamiento: 2015,
        copiasVendidas: 74075
      },
      {
        titulo: 'occaecat ad veniam',
        canciones: 14,
        anioLanzamiento: 1993,
        copiasVendidas: 47135
      },
      {
        titulo: 'amet sit cupidatat',
        canciones: 14,
        anioLanzamiento: 2009,
        copiasVendidas: 73118
      },
      {
        titulo: 'dolor Lorem veniam',
        canciones: 14,
        anioLanzamiento: 2001,
        copiasVendidas: 77126
      },
      {
        titulo: 'deserunt reprehenderit minim',
        canciones: 10,
        anioLanzamiento: 2005,
        copiasVendidas: 22920
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Eula Beasley',
    solista: true,
    edad: 33,
    instrumento: 'bajo',
    paisNacimiento: 'French Guiana',
    ultimoRecital: {
      pais: 'Benin',
      anio: 2007,
      entradasVendidas: 60265,
      costoEntradas: 1546
    },
    discos: [
      {
        titulo: 'enim magna mollit',
        canciones: 8,
        anioLanzamiento: 1994,
        copiasVendidas: 65005
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Lina Mccall',
    solista: false,
    edad: 29,
    instrumento: 'batería',
    paisNacimiento: 'Germany',
    ultimoRecital: {
      pais: 'Fiji',
      anio: 2000,
      entradasVendidas: 46640,
      costoEntradas: 645
    },
    discos: [
      {
        titulo: 'irure ipsum fugiat',
        canciones: 10,
        anioLanzamiento: 2013,
        copiasVendidas: 6615
      },
      {
        titulo: 'nulla officia anim',
        canciones: 8,
        anioLanzamiento: 2002,
        copiasVendidas: 34817
      },
      {
        titulo: 'anim excepteur quis',
        canciones: 7,
        anioLanzamiento: 2001,
        copiasVendidas: 7519
      },
      {
        titulo: 'occaecat in cupidatat',
        canciones: 10,
        anioLanzamiento: 2013,
        copiasVendidas: 60132
      },
      {
        titulo: 'fugiat est sunt',
        canciones: 6,
        anioLanzamiento: 2005,
        copiasVendidas: 15484
      },
      {
        titulo: 'laboris proident magna',
        canciones: 12,
        anioLanzamiento: 2008,
        copiasVendidas: 83591
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Dolly Mckay',
    solista: true,
    edad: 33,
    instrumento: 'teclado',
    paisNacimiento: 'Switzerland',
    ultimoRecital: {
      pais: 'Rwanda',
      anio: 2013,
      entradasVendidas: 68534,
      costoEntradas: 2989
    },
    discos: [
      {
        titulo: 'commodo nostrud exercitation',
        canciones: 10,
        anioLanzamiento: 1994,
        copiasVendidas: 49390
      },
      {
        titulo: 'ullamco dolore aliqua',
        canciones: 9,
        anioLanzamiento: 1991,
        copiasVendidas: 11296
      },
      {
        titulo: 'deserunt esse anim',
        canciones: 6,
        anioLanzamiento: 2013,
        copiasVendidas: 83915
      },
      {
        titulo: 'sunt officia minim',
        canciones: 10,
        anioLanzamiento: 1992,
        copiasVendidas: 27823
      },
      {
        titulo: 'adipisicing irure qui',
        canciones: 14,
        anioLanzamiento: 2013,
        copiasVendidas: 76104
      },
      {
        titulo: 'ad irure eiusmod',
        canciones: 11,
        anioLanzamiento: 2014,
        copiasVendidas: 31480
      },
      {
        titulo: 'est enim nisi',
        canciones: 11,
        anioLanzamiento: 2002,
        copiasVendidas: 31628
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Hale Horne',
    solista: false,
    edad: 22,
    instrumento: 'bajo',
    paisNacimiento: 'Guyana',
    ultimoRecital: {
      pais: 'Afghanistan',
      anio: 2007,
      entradasVendidas: 32885,
      costoEntradas: 737
    },
    discos: [
      {
        titulo: 'et exercitation incididunt',
        canciones: 9,
        anioLanzamiento: 2008,
        copiasVendidas: 97836
      },
      {
        titulo: 'sunt proident Lorem',
        canciones: 8,
        anioLanzamiento: 2016,
        copiasVendidas: 16695
      },
      {
        titulo: 'aute adipisicing velit',
        canciones: 6,
        anioLanzamiento: 2000,
        copiasVendidas: 1958
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Juliana Herrera',
    solista: false,
    edad: 28,
    instrumento: 'teclado',
    paisNacimiento: 'Lesotho',
    ultimoRecital: {
      pais: 'Eritrea',
      anio: 2015,
      entradasVendidas: 53184,
      costoEntradas: 1043
    },
    discos: [
      {
        titulo: 'ullamco quis officia',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 63171
      },
      {
        titulo: 'labore sint ut',
        canciones: 15,
        anioLanzamiento: 2019,
        copiasVendidas: 9630
      },
      {
        titulo: 'laborum fugiat et',
        canciones: 11,
        anioLanzamiento: 2016,
        copiasVendidas: 15410
      },
      {
        titulo: 'in quis ipsum',
        canciones: 13,
        anioLanzamiento: 2011,
        copiasVendidas: 73039
      },
      {
        titulo: 'tempor amet nulla',
        canciones: 14,
        anioLanzamiento: 2000,
        copiasVendidas: 1874
      },
      {
        titulo: 'nostrud magna commodo',
        canciones: 11,
        anioLanzamiento: 2000,
        copiasVendidas: 73626
      },
      {
        titulo: 'esse occaecat aliquip',
        canciones: 12,
        anioLanzamiento: 2010,
        copiasVendidas: 67805
      },
      {
        titulo: 'commodo excepteur minim',
        canciones: 13,
        anioLanzamiento: 1995,
        copiasVendidas: 70947
      },
      {
        titulo: 'elit dolore deserunt',
        canciones: 13,
        anioLanzamiento: 1998,
        copiasVendidas: 5754
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Desiree Marshall',
    solista: false,
    edad: 32,
    instrumento: 'batería',
    paisNacimiento: 'Syria',
    ultimoRecital: {
      pais: 'Djibouti',
      anio: 2002,
      entradasVendidas: 32804,
      costoEntradas: 621
    },
    discos: [
      {
        titulo: 'adipisicing ipsum ut',
        canciones: 6,
        anioLanzamiento: 1999,
        copiasVendidas: 43755
      },
      {
        titulo: 'ipsum ex amet',
        canciones: 6,
        anioLanzamiento: 2001,
        copiasVendidas: 16515
      },
      {
        titulo: 'dolor proident minim',
        canciones: 12,
        anioLanzamiento: 2018,
        copiasVendidas: 55293
      },
      {
        titulo: 'sunt est veniam',
        canciones: 12,
        anioLanzamiento: 1994,
        copiasVendidas: 99743
      },
      {
        titulo: 'in eu culpa',
        canciones: 7,
        anioLanzamiento: 1998,
        copiasVendidas: 38465
      },
      {
        titulo: 'ullamco amet eu',
        canciones: 10,
        anioLanzamiento: 1998,
        copiasVendidas: 54173
      },
      {
        titulo: 'duis est et',
        canciones: 12,
        anioLanzamiento: 2018,
        copiasVendidas: 31935
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Bruce Foley',
    solista: true,
    edad: 31,
    instrumento: 'bajo',
    paisNacimiento: 'India',
    ultimoRecital: {
      pais: 'Christmas Island',
      anio: 2006,
      entradasVendidas: 63248,
      costoEntradas: 2720
    },
    discos: [
      {
        titulo: 'voluptate do sit',
        canciones: 6,
        anioLanzamiento: 1990,
        copiasVendidas: 99781
      },
      {
        titulo: 'Lorem velit veniam',
        canciones: 6,
        anioLanzamiento: 2008,
        copiasVendidas: 33131
      },
      {
        titulo: 'aliquip duis veniam',
        canciones: 15,
        anioLanzamiento: 2009,
        copiasVendidas: 68545
      },
      {
        titulo: 'amet officia velit',
        canciones: 7,
        anioLanzamiento: 2018,
        copiasVendidas: 41875
      },
      {
        titulo: 'eiusmod excepteur excepteur',
        canciones: 13,
        anioLanzamiento: 2007,
        copiasVendidas: 54300
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Velazquez Rutledge',
    solista: true,
    edad: 35,
    instrumento: 'voz',
    paisNacimiento: 'Zimbabwe',
    ultimoRecital: {
      pais: 'Niger',
      anio: 2002,
      entradasVendidas: 75325,
      costoEntradas: 2370
    },
    discos: [
      {
        titulo: 'enim cupidatat proident',
        canciones: 14,
        anioLanzamiento: 2002,
        copiasVendidas: 77497
      },
      {
        titulo: 'eiusmod duis ea',
        canciones: 8,
        anioLanzamiento: 1996,
        copiasVendidas: 42613
      },
      {
        titulo: 'esse mollit veniam',
        canciones: 12,
        anioLanzamiento: 2015,
        copiasVendidas: 94851
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Ester Lara',
    solista: false,
    edad: 34,
    instrumento: 'teclado',
    paisNacimiento: 'Togo',
    ultimoRecital: {
      pais: 'Russian Federation',
      anio: 2019,
      entradasVendidas: 74207,
      costoEntradas: 550
    },
    discos: [
      {
        titulo: 'aliquip aliquip cupidatat',
        canciones: 13,
        anioLanzamiento: 1994,
        copiasVendidas: 72189
      },
      {
        titulo: 'ex consectetur fugiat',
        canciones: 7,
        anioLanzamiento: 1990,
        copiasVendidas: 16486
      },
      {
        titulo: 'duis elit officia',
        canciones: 11,
        anioLanzamiento: 2017,
        copiasVendidas: 84474
      },
      {
        titulo: 'enim qui elit',
        canciones: 8,
        anioLanzamiento: 1999,
        copiasVendidas: 35876
      },
      {
        titulo: 'ea minim culpa',
        canciones: 10,
        anioLanzamiento: 2000,
        copiasVendidas: 47779
      },
      {
        titulo: 'labore enim occaecat',
        canciones: 15,
        anioLanzamiento: 2003,
        copiasVendidas: 3661
      },
      {
        titulo: 'in dolor laboris',
        canciones: 11,
        anioLanzamiento: 1997,
        copiasVendidas: 34505
      },
      {
        titulo: 'laborum sunt pariatur',
        canciones: 6,
        anioLanzamiento: 1992,
        copiasVendidas: 85129
      },
      {
        titulo: 'nostrud aliqua esse',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 96325
      },
      {
        titulo: 'aliquip id ullamco',
        canciones: 13,
        anioLanzamiento: 1993,
        copiasVendidas: 89509
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Merle Roman',
    solista: true,
    edad: 36,
    instrumento: 'teclado',
    paisNacimiento: 'Zaire',
    ultimoRecital: {
      pais: 'Libya',
      anio: 2007,
      entradasVendidas: 70100,
      costoEntradas: 1709
    },
    discos: [
      {
        titulo: 'ea aliquip irure',
        canciones: 14,
        anioLanzamiento: 2009,
        copiasVendidas: 88163
      },
      {
        titulo: 'enim voluptate eiusmod',
        canciones: 11,
        anioLanzamiento: 1994,
        copiasVendidas: 93192
      },
      {
        titulo: 'ex anim esse',
        canciones: 11,
        anioLanzamiento: 1998,
        copiasVendidas: 74834
      },
      {
        titulo: 'excepteur veniam veniam',
        canciones: 9,
        anioLanzamiento: 2011,
        copiasVendidas: 90349
      },
      {
        titulo: 'fugiat sunt exercitation',
        canciones: 13,
        anioLanzamiento: 1997,
        copiasVendidas: 27682
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'White Conner',
    solista: false,
    edad: 28,
    instrumento: 'voz',
    paisNacimiento: 'Grenada',
    ultimoRecital: {
      pais: 'Lithuania',
      anio: 2004,
      entradasVendidas: 39006,
      costoEntradas: 2112
    },
    discos: [
      {
        titulo: 'ut deserunt mollit',
        canciones: 11,
        anioLanzamiento: 1999,
        copiasVendidas: 91940
      },
      {
        titulo: 'exercitation cillum commodo',
        canciones: 7,
        anioLanzamiento: 2004,
        copiasVendidas: 42186
      },
      {
        titulo: 'occaecat incididunt cillum',
        canciones: 8,
        anioLanzamiento: 1991,
        copiasVendidas: 75669
      },
      {
        titulo: 'consectetur ipsum laboris',
        canciones: 11,
        anioLanzamiento: 2017,
        copiasVendidas: 18973
      },
      {
        titulo: 'nisi sunt deserunt',
        canciones: 6,
        anioLanzamiento: 2016,
        copiasVendidas: 59641
      },
      {
        titulo: 'laborum consectetur in',
        canciones: 8,
        anioLanzamiento: 1998,
        copiasVendidas: 45636
      },
      {
        titulo: 'culpa ullamco cillum',
        canciones: 12,
        anioLanzamiento: 2019,
        copiasVendidas: 92096
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Hensley Turner',
    solista: false,
    edad: 38,
    instrumento: 'voz',
    paisNacimiento: 'Saint Lucia',
    ultimoRecital: {
      pais: 'Pitcairn',
      anio: 2001,
      entradasVendidas: 21013,
      costoEntradas: 2714
    },
    discos: [
      {
        titulo: 'Lorem nisi aute',
        canciones: 14,
        anioLanzamiento: 2000,
        copiasVendidas: 70486
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Oneill Nichols',
    solista: true,
    edad: 24,
    instrumento: 'guitarra',
    paisNacimiento: 'Swaziland',
    ultimoRecital: {
      pais: 'Cocos (Keeling Islands)',
      anio: 2004,
      entradasVendidas: 6438,
      costoEntradas: 2137
    },
    discos: [
      {
        titulo: 'velit anim ut',
        canciones: 14,
        anioLanzamiento: 2002,
        copiasVendidas: 89794
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Hoffman Jefferson',
    solista: false,
    edad: 29,
    instrumento: 'guitarra',
    paisNacimiento: 'United Arab Emirates',
    ultimoRecital: {
      pais: 'Sao Tome and Principe',
      anio: 2001,
      entradasVendidas: 84775,
      costoEntradas: 929
    },
    discos: [
      {
        titulo: 'do nostrud cillum',
        canciones: 12,
        anioLanzamiento: 1991,
        copiasVendidas: 95897
      },
      {
        titulo: 'tempor consectetur id',
        canciones: 8,
        anioLanzamiento: 2012,
        copiasVendidas: 81483
      },
      {
        titulo: 'ipsum sint eu',
        canciones: 12,
        anioLanzamiento: 2004,
        copiasVendidas: 15100
      },
      {
        titulo: 'officia labore et',
        canciones: 12,
        anioLanzamiento: 2011,
        copiasVendidas: 41985
      },
      {
        titulo: 'deserunt Lorem irure',
        canciones: 14,
        anioLanzamiento: 2017,
        copiasVendidas: 16219
      },
      {
        titulo: 'aliquip officia id',
        canciones: 14,
        anioLanzamiento: 2018,
        copiasVendidas: 93878
      },
      {
        titulo: 'dolore cillum nisi',
        canciones: 8,
        anioLanzamiento: 2017,
        copiasVendidas: 30325
      },
      {
        titulo: 'irure aliqua est',
        canciones: 13,
        anioLanzamiento: 1995,
        copiasVendidas: 25399
      },
      {
        titulo: 'ex proident tempor',
        canciones: 12,
        anioLanzamiento: 2008,
        copiasVendidas: 92108
      },
      {
        titulo: 'consequat et quis',
        canciones: 12,
        anioLanzamiento: 2006,
        copiasVendidas: 24026
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Myrna Murphy',
    solista: true,
    edad: 39,
    instrumento: 'batería',
    paisNacimiento: 'Belgium',
    ultimoRecital: {
      pais: 'Ghana',
      anio: 2018,
      entradasVendidas: 74695,
      costoEntradas: 2322
    },
    discos: [
      {
        titulo: 'ad nostrud elit',
        canciones: 10,
        anioLanzamiento: 2014,
        copiasVendidas: 2206
      },
      {
        titulo: 'eu adipisicing aliquip',
        canciones: 13,
        anioLanzamiento: 2001,
        copiasVendidas: 29545
      },
      {
        titulo: 'veniam reprehenderit do',
        canciones: 7,
        anioLanzamiento: 2001,
        copiasVendidas: 56597
      },
      {
        titulo: 'reprehenderit non qui',
        canciones: 7,
        anioLanzamiento: 2010,
        copiasVendidas: 85662
      },
      {
        titulo: 'laborum deserunt amet',
        canciones: 6,
        anioLanzamiento: 1999,
        copiasVendidas: 89812
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Lorraine Cox',
    solista: true,
    edad: 21,
    instrumento: 'guitarra',
    paisNacimiento: 'Thailand',
    ultimoRecital: {
      pais: 'Tanzania',
      anio: 2007,
      entradasVendidas: 58539,
      costoEntradas: 1284
    },
    discos: [
      {
        titulo: 'aliquip qui deserunt',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 88035
      },
      {
        titulo: 'consectetur excepteur enim',
        canciones: 13,
        anioLanzamiento: 2006,
        copiasVendidas: 2412
      },
      {
        titulo: 'fugiat fugiat minim',
        canciones: 13,
        anioLanzamiento: 2019,
        copiasVendidas: 36787
      },
      {
        titulo: 'non ipsum officia',
        canciones: 13,
        anioLanzamiento: 2019,
        copiasVendidas: 27993
      },
      {
        titulo: 'adipisicing minim nulla',
        canciones: 6,
        anioLanzamiento: 2007,
        copiasVendidas: 94323
      },
      {
        titulo: 'ea ipsum labore',
        canciones: 13,
        anioLanzamiento: 1997,
        copiasVendidas: 5861
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Saundra Reed',
    solista: true,
    edad: 26,
    instrumento: 'teclado',
    paisNacimiento: 'Monaco',
    ultimoRecital: {
      pais: 'Greece',
      anio: 2011,
      entradasVendidas: 50040,
      costoEntradas: 916
    },
    discos: [
      {
        titulo: 'cillum amet aliquip',
        canciones: 11,
        anioLanzamiento: 1994,
        copiasVendidas: 92646
      },
      {
        titulo: 'aliqua aute voluptate',
        canciones: 12,
        anioLanzamiento: 1996,
        copiasVendidas: 70386
      },
      {
        titulo: 'nisi ullamco magna',
        canciones: 13,
        anioLanzamiento: 1996,
        copiasVendidas: 44567
      },
      {
        titulo: 'esse nulla est',
        canciones: 6,
        anioLanzamiento: 1994,
        copiasVendidas: 75938
      },
      {
        titulo: 'sit fugiat labore',
        canciones: 15,
        anioLanzamiento: 1995,
        copiasVendidas: 18487
      },
      {
        titulo: 'irure reprehenderit amet',
        canciones: 10,
        anioLanzamiento: 2009,
        copiasVendidas: 37023
      },
      {
        titulo: 'irure sit labore',
        canciones: 15,
        anioLanzamiento: 1994,
        copiasVendidas: 34960
      },
      {
        titulo: 'laboris adipisicing est',
        canciones: 7,
        anioLanzamiento: 2005,
        copiasVendidas: 66138
      },
      {
        titulo: 'exercitation aute officia',
        canciones: 8,
        anioLanzamiento: 2006,
        copiasVendidas: 43798
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Hester Garcia',
    solista: true,
    edad: 39,
    instrumento: 'batería',
    paisNacimiento: 'Mali',
    ultimoRecital: {
      pais: 'Reunion',
      anio: 2005,
      entradasVendidas: 97791,
      costoEntradas: 1797
    },
    discos: [
      {
        titulo: 'laborum nisi eiusmod',
        canciones: 7,
        anioLanzamiento: 2008,
        copiasVendidas: 46305
      },
      {
        titulo: 'non enim irure',
        canciones: 15,
        anioLanzamiento: 2013,
        copiasVendidas: 44104
      },
      {
        titulo: 'sint magna consectetur',
        canciones: 9,
        anioLanzamiento: 2017,
        copiasVendidas: 56027
      },
      {
        titulo: 'ut in sit',
        canciones: 9,
        anioLanzamiento: 2009,
        copiasVendidas: 24959
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Tabitha Haynes',
    solista: true,
    edad: 39,
    instrumento: 'batería',
    paisNacimiento: 'Romania',
    ultimoRecital: {
      pais: 'Slovenia',
      anio: 2003,
      entradasVendidas: 26243,
      costoEntradas: 1083
    },
    discos: [
      {
        titulo: 'ad incididunt quis',
        canciones: 8,
        anioLanzamiento: 2006,
        copiasVendidas: 83931
      },
      {
        titulo: 'et laborum pariatur',
        canciones: 6,
        anioLanzamiento: 2008,
        copiasVendidas: 53799
      },
      {
        titulo: 'consequat reprehenderit non',
        canciones: 7,
        anioLanzamiento: 2013,
        copiasVendidas: 22538
      },
      {
        titulo: 'veniam id irure',
        canciones: 10,
        anioLanzamiento: 2008,
        copiasVendidas: 5001
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Claudette Weaver',
    solista: false,
    edad: 35,
    instrumento: 'bajo',
    paisNacimiento: 'Indonesia',
    ultimoRecital: {
      pais: 'Portugal',
      anio: 2000,
      entradasVendidas: 56998,
      costoEntradas: 1203
    },
    discos: [
      {
        titulo: 'nulla cupidatat velit',
        canciones: 13,
        anioLanzamiento: 1994,
        copiasVendidas: 23309
      },
      {
        titulo: 'exercitation proident veniam',
        canciones: 9,
        anioLanzamiento: 1991,
        copiasVendidas: 20855
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Randall Hahn',
    solista: true,
    edad: 40,
    instrumento: 'bajo',
    paisNacimiento: 'Bouvet Island',
    ultimoRecital: {
      pais: 'Brazil',
      anio: 2016,
      entradasVendidas: 60933,
      costoEntradas: 611
    },
    discos: [
      {
        titulo: 'nulla nulla nulla',
        canciones: 10,
        anioLanzamiento: 1995,
        copiasVendidas: 54542
      },
      {
        titulo: 'commodo quis et',
        canciones: 7,
        anioLanzamiento: 1999,
        copiasVendidas: 18313
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Joanne Parks',
    solista: true,
    edad: 40,
    instrumento: 'batería',
    paisNacimiento: 'Gibraltar',
    ultimoRecital: {
      pais: 'Czech Republic',
      anio: 2001,
      entradasVendidas: 51831,
      costoEntradas: 2620
    },
    discos: [
      {
        titulo: 'aliqua ad amet',
        canciones: 14,
        anioLanzamiento: 2010,
        copiasVendidas: 75289
      },
      {
        titulo: 'deserunt enim ea',
        canciones: 10,
        anioLanzamiento: 2010,
        copiasVendidas: 30905
      },
      {
        titulo: 'ex excepteur amet',
        canciones: 14,
        anioLanzamiento: 2005,
        copiasVendidas: 49962
      },
      {
        titulo: 'nostrud enim quis',
        canciones: 12,
        anioLanzamiento: 2015,
        copiasVendidas: 52528
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Rosanna Price',
    solista: false,
    edad: 24,
    instrumento: 'bajo',
    paisNacimiento: 'Denmark',
    ultimoRecital: {
      pais: 'Malaysia',
      anio: 2003,
      entradasVendidas: 41493,
      costoEntradas: 1764
    },
    discos: [
      {
        titulo: 'minim ex dolore',
        canciones: 15,
        anioLanzamiento: 2011,
        copiasVendidas: 36710
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Marcie Cannon',
    solista: true,
    edad: 22,
    instrumento: 'bajo',
    paisNacimiento: 'New Zealand',
    ultimoRecital: {
      pais: 'Hungary',
      anio: 2012,
      entradasVendidas: 41674,
      costoEntradas: 1820
    },
    discos: [
      {
        titulo: 'irure tempor esse',
        canciones: 15,
        anioLanzamiento: 2009,
        copiasVendidas: 3904
      },
      {
        titulo: 'officia labore fugiat',
        canciones: 11,
        anioLanzamiento: 1992,
        copiasVendidas: 18277
      },
      {
        titulo: 'sint est ut',
        canciones: 14,
        anioLanzamiento: 2017,
        copiasVendidas: 64170
      },
      {
        titulo: 'velit ea magna',
        canciones: 13,
        anioLanzamiento: 2001,
        copiasVendidas: 28893
      },
      {
        titulo: 'qui in eu',
        canciones: 14,
        anioLanzamiento: 2005,
        copiasVendidas: 65938
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Barron Downs',
    solista: false,
    edad: 27,
    instrumento: 'bajo',
    paisNacimiento: 'Kazakhstan',
    ultimoRecital: {
      pais: 'Burkina Faso',
      anio: 2014,
      entradasVendidas: 77564,
      costoEntradas: 1145
    },
    discos: [
      {
        titulo: 'culpa commodo pariatur',
        canciones: 10,
        anioLanzamiento: 2018,
        copiasVendidas: 3532
      },
      {
        titulo: 'duis mollit aliqua',
        canciones: 9,
        anioLanzamiento: 2018,
        copiasVendidas: 35174
      },
      {
        titulo: 'duis elit ipsum',
        canciones: 12,
        anioLanzamiento: 2006,
        copiasVendidas: 23189
      },
      {
        titulo: 'adipisicing non eiusmod',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 61001
      },
      {
        titulo: 'proident deserunt nulla',
        canciones: 8,
        anioLanzamiento: 2009,
        copiasVendidas: 62549
      },
      {
        titulo: 'labore laborum adipisicing',
        canciones: 13,
        anioLanzamiento: 2014,
        copiasVendidas: 33212
      },
      {
        titulo: 'aliquip occaecat aute',
        canciones: 8,
        anioLanzamiento: 2007,
        copiasVendidas: 49435
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Luz Jackson',
    solista: true,
    edad: 23,
    instrumento: 'guitarra',
    paisNacimiento: 'Taiwan',
    ultimoRecital: {
      pais: 'Lebanon',
      anio: 2008,
      entradasVendidas: 99301,
      costoEntradas: 2330
    },
    discos: [
      {
        titulo: 'culpa irure quis',
        canciones: 13,
        anioLanzamiento: 2009,
        copiasVendidas: 78526
      },
      {
        titulo: 'reprehenderit aute sit',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 10328
      },
      {
        titulo: 'non excepteur Lorem',
        canciones: 15,
        anioLanzamiento: 1993,
        copiasVendidas: 80143
      },
      {
        titulo: 'aliqua tempor sint',
        canciones: 9,
        anioLanzamiento: 2012,
        copiasVendidas: 71902
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Erica Powell',
    solista: false,
    edad: 22,
    instrumento: 'bajo',
    paisNacimiento: 'Georgia',
    ultimoRecital: {
      pais: 'Cayman Islands',
      anio: 2014,
      entradasVendidas: 74543,
      costoEntradas: 2329
    },
    discos: [
      {
        titulo: 'voluptate adipisicing anim',
        canciones: 11,
        anioLanzamiento: 2004,
        copiasVendidas: 40359
      },
      {
        titulo: 'consequat velit adipisicing',
        canciones: 13,
        anioLanzamiento: 2000,
        copiasVendidas: 25603
      },
      {
        titulo: 'est velit ad',
        canciones: 8,
        anioLanzamiento: 1990,
        copiasVendidas: 25208
      },
      {
        titulo: 'ea exercitation incididunt',
        canciones: 8,
        anioLanzamiento: 1996,
        copiasVendidas: 24385
      },
      {
        titulo: 'cillum deserunt aliquip',
        canciones: 7,
        anioLanzamiento: 2016,
        copiasVendidas: 32797
      },
      {
        titulo: 'excepteur consectetur id',
        canciones: 10,
        anioLanzamiento: 1997,
        copiasVendidas: 45230
      },
      {
        titulo: 'labore incididunt ad',
        canciones: 7,
        anioLanzamiento: 1999,
        copiasVendidas: 95978
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Lara Robles',
    solista: false,
    edad: 27,
    instrumento: 'guitarra',
    paisNacimiento: 'Madagascar',
    ultimoRecital: {
      pais: 'Cameroon',
      anio: 2001,
      entradasVendidas: 51520,
      costoEntradas: 912
    },
    discos: [
      {
        titulo: 'dolor officia ipsum',
        canciones: 11,
        anioLanzamiento: 1992,
        copiasVendidas: 6611
      },
      {
        titulo: 'duis adipisicing nulla',
        canciones: 12,
        anioLanzamiento: 2013,
        copiasVendidas: 46131
      },
      {
        titulo: 'laborum occaecat duis',
        canciones: 12,
        anioLanzamiento: 1995,
        copiasVendidas: 94786
      },
      {
        titulo: 'nisi eu ex',
        canciones: 9,
        anioLanzamiento: 2006,
        copiasVendidas: 52684
      },
      {
        titulo: 'ullamco aliqua quis',
        canciones: 6,
        anioLanzamiento: 2017,
        copiasVendidas: 79156
      },
      {
        titulo: 'ad exercitation Lorem',
        canciones: 14,
        anioLanzamiento: 2018,
        copiasVendidas: 43352
      },
      {
        titulo: 'id deserunt sit',
        canciones: 7,
        anioLanzamiento: 2019,
        copiasVendidas: 22524
      },
      {
        titulo: 'Lorem minim anim',
        canciones: 8,
        anioLanzamiento: 2019,
        copiasVendidas: 53603
      },
      {
        titulo: 'consequat consectetur dolor',
        canciones: 12,
        anioLanzamiento: 1997,
        copiasVendidas: 57391
      },
      {
        titulo: 'elit esse Lorem',
        canciones: 10,
        anioLanzamiento: 2008,
        copiasVendidas: 31417
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Dean Whitney',
    solista: true,
    edad: 27,
    instrumento: 'batería',
    paisNacimiento: 'Virgin Islands (US)',
    ultimoRecital: {
      pais: 'Seychelles',
      anio: 2000,
      entradasVendidas: 12759,
      costoEntradas: 527
    },
    discos: [
      {
        titulo: 'minim dolore officia',
        canciones: 9,
        anioLanzamiento: 2016,
        copiasVendidas: 18041
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Diana Avila',
    solista: true,
    edad: 36,
    instrumento: 'teclado',
    paisNacimiento: 'Norfolk Island',
    ultimoRecital: {
      pais: 'Brunei Darussalam',
      anio: 2008,
      entradasVendidas: 34706,
      costoEntradas: 2670
    },
    discos: [
      {
        titulo: 'dolor eu fugiat',
        canciones: 13,
        anioLanzamiento: 2005,
        copiasVendidas: 86815
      },
      {
        titulo: 'duis est dolor',
        canciones: 7,
        anioLanzamiento: 1993,
        copiasVendidas: 98225
      },
      {
        titulo: 'id sit adipisicing',
        canciones: 7,
        anioLanzamiento: 2009,
        copiasVendidas: 95811
      },
      {
        titulo: 'cupidatat nisi Lorem',
        canciones: 10,
        anioLanzamiento: 2000,
        copiasVendidas: 63649
      },
      {
        titulo: 'ullamco velit anim',
        canciones: 13,
        anioLanzamiento: 2006,
        copiasVendidas: 73014
      },
      {
        titulo: 'qui qui minim',
        canciones: 9,
        anioLanzamiento: 1995,
        copiasVendidas: 97798
      },
      {
        titulo: 'aliqua duis consequat',
        canciones: 9,
        anioLanzamiento: 2007,
        copiasVendidas: 74548
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Mills Norton',
    solista: false,
    edad: 22,
    instrumento: 'guitarra',
    paisNacimiento: 'Virgin Islands (British)',
    ultimoRecital: {
      pais: 'Slovak Republic',
      anio: 2008,
      entradasVendidas: 42771,
      costoEntradas: 1713
    },
    discos: [
      {
        titulo: 'laboris cupidatat quis',
        canciones: 14,
        anioLanzamiento: 1991,
        copiasVendidas: 40917
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Walter Stanton',
    solista: true,
    edad: 29,
    instrumento: 'guitarra',
    paisNacimiento: 'Trinidad and Tobago',
    ultimoRecital: {
      pais: 'Argentina',
      anio: 2012,
      entradasVendidas: 2577,
      costoEntradas: 2892
    },
    discos: [
      {
        titulo: 'tempor occaecat aliquip',
        canciones: 12,
        anioLanzamiento: 2019,
        copiasVendidas: 45496
      },
      {
        titulo: 'velit ipsum dolore',
        canciones: 7,
        anioLanzamiento: 2001,
        copiasVendidas: 24930
      },
      {
        titulo: 'minim incididunt aute',
        canciones: 9,
        anioLanzamiento: 1991,
        copiasVendidas: 35254
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Leslie Bernard',
    solista: true,
    edad: 29,
    instrumento: 'bajo',
    paisNacimiento: 'Dominica',
    ultimoRecital: {
      pais: 'Nepal',
      anio: 2015,
      entradasVendidas: 72606,
      costoEntradas: 2799
    },
    discos: [
      {
        titulo: 'dolore culpa Lorem',
        canciones: 6,
        anioLanzamiento: 2010,
        copiasVendidas: 48423
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Charity Mccoy',
    solista: false,
    edad: 25,
    instrumento: 'voz',
    paisNacimiento: 'Turkey',
    ultimoRecital: {
      pais: 'Bahrain',
      anio: 2010,
      entradasVendidas: 46282,
      costoEntradas: 1379
    },
    discos: [
      {
        titulo: 'eu eiusmod tempor',
        canciones: 9,
        anioLanzamiento: 2012,
        copiasVendidas: 98453
      },
      {
        titulo: 'consequat ut mollit',
        canciones: 9,
        anioLanzamiento: 2002,
        copiasVendidas: 85710
      },
      {
        titulo: 'tempor sint id',
        canciones: 12,
        anioLanzamiento: 2002,
        copiasVendidas: 38428
      },
      {
        titulo: 'esse ad in',
        canciones: 11,
        anioLanzamiento: 1991,
        copiasVendidas: 98697
      },
      {
        titulo: 'qui in laborum',
        canciones: 7,
        anioLanzamiento: 2012,
        copiasVendidas: 75274
      },
      {
        titulo: 'mollit cillum amet',
        canciones: 8,
        anioLanzamiento: 1994,
        copiasVendidas: 86613
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Chan Salas',
    solista: false,
    edad: 38,
    instrumento: 'bajo',
    paisNacimiento: 'Kyrgyzstan',
    ultimoRecital: {
      pais: 'Wallis and Futuna Islands',
      anio: 2004,
      entradasVendidas: 33707,
      costoEntradas: 1820
    },
    discos: [
      {
        titulo: 'officia excepteur id',
        canciones: 12,
        anioLanzamiento: 1991,
        copiasVendidas: 64267
      },
      {
        titulo: 'aliqua eu esse',
        canciones: 6,
        anioLanzamiento: 1994,
        copiasVendidas: 64151
      },
      {
        titulo: 'nulla nostrud ipsum',
        canciones: 7,
        anioLanzamiento: 2009,
        copiasVendidas: 44694
      },
      {
        titulo: 'officia adipisicing et',
        canciones: 7,
        anioLanzamiento: 2006,
        copiasVendidas: 94117
      },
      {
        titulo: 'do velit deserunt',
        canciones: 11,
        anioLanzamiento: 1994,
        copiasVendidas: 95009
      },
      {
        titulo: 'quis culpa occaecat',
        canciones: 6,
        anioLanzamiento: 2000,
        copiasVendidas: 88884
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Tiffany Maddox',
    solista: true,
    edad: 28,
    instrumento: 'guitarra',
    paisNacimiento: 'Svalbard and Jan Mayen Islands',
    ultimoRecital: {
      pais: 'Greenland',
      anio: 2000,
      entradasVendidas: 48899,
      costoEntradas: 867
    },
    discos: [
      {
        titulo: 'ad tempor aute',
        canciones: 11,
        anioLanzamiento: 2019,
        copiasVendidas: 30860
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Alison Bennett',
    solista: true,
    edad: 27,
    instrumento: 'teclado',
    paisNacimiento: 'Faroe Islands',
    ultimoRecital: {
      pais: 'Chile',
      anio: 2001,
      entradasVendidas: 54035,
      costoEntradas: 2028
    },
    discos: [
      {
        titulo: 'id ex amet',
        canciones: 11,
        anioLanzamiento: 2001,
        copiasVendidas: 34877
      },
      {
        titulo: 'consectetur eiusmod ex',
        canciones: 13,
        anioLanzamiento: 1990,
        copiasVendidas: 80787
      },
      {
        titulo: 'dolore duis laborum',
        canciones: 7,
        anioLanzamiento: 2005,
        copiasVendidas: 35646
      },
      {
        titulo: 'enim ut velit',
        canciones: 11,
        anioLanzamiento: 2014,
        copiasVendidas: 47473
      },
      {
        titulo: 'aute dolor amet',
        canciones: 8,
        anioLanzamiento: 2007,
        copiasVendidas: 68575
      },
      {
        titulo: 'excepteur velit id',
        canciones: 15,
        anioLanzamiento: 2012,
        copiasVendidas: 86277
      },
      {
        titulo: 'quis fugiat culpa',
        canciones: 11,
        anioLanzamiento: 2004,
        copiasVendidas: 30211
      },
      {
        titulo: 'laborum aute culpa',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 39679
      },
      {
        titulo: 'tempor adipisicing laborum',
        canciones: 10,
        anioLanzamiento: 2013,
        copiasVendidas: 75032
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Dillard Hoffman',
    solista: false,
    edad: 27,
    instrumento: 'batería',
    paisNacimiento: 'Pakistan',
    ultimoRecital: {
      pais: 'Vanuatu',
      anio: 2010,
      entradasVendidas: 14767,
      costoEntradas: 2658
    },
    discos: [
      {
        titulo: 'sit nostrud reprehenderit',
        canciones: 7,
        anioLanzamiento: 2018,
        copiasVendidas: 32059
      },
      {
        titulo: 'voluptate veniam ut',
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 98622
      },
      {
        titulo: 'culpa laboris exercitation',
        canciones: 6,
        anioLanzamiento: 1993,
        copiasVendidas: 89103
      },
      {
        titulo: 'aliquip ad velit',
        canciones: 7,
        anioLanzamiento: 1992,
        copiasVendidas: 48796
      },
      {
        titulo: 'cillum ipsum non',
        canciones: 8,
        anioLanzamiento: 1990,
        copiasVendidas: 4109
      },
      {
        titulo: 'elit excepteur minim',
        canciones: 8,
        anioLanzamiento: 1995,
        copiasVendidas: 40562
      },
      {
        titulo: 'Lorem quis exercitation',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 5464
      },
      {
        titulo: 'officia nisi ullamco',
        canciones: 12,
        anioLanzamiento: 1994,
        copiasVendidas: 94137
      },
      {
        titulo: 'cillum minim amet',
        canciones: 7,
        anioLanzamiento: 1991,
        copiasVendidas: 34691
      },
      {
        titulo: 'aliqua sint consequat',
        canciones: 11,
        anioLanzamiento: 2000,
        copiasVendidas: 83905
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Gibson Dyer',
    solista: true,
    edad: 36,
    instrumento: 'guitarra',
    paisNacimiento: 'Paraguay',
    ultimoRecital: {
      pais: 'Sri Lanka',
      anio: 2019,
      entradasVendidas: 74759,
      costoEntradas: 2858
    },
    discos: [
      {
        titulo: 'ipsum dolor ullamco',
        canciones: 7,
        anioLanzamiento: 1991,
        copiasVendidas: 85452
      },
      {
        titulo: 'anim adipisicing id',
        canciones: 8,
        anioLanzamiento: 2018,
        copiasVendidas: 22236
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Glenn Brock',
    solista: false,
    edad: 32,
    instrumento: 'guitarra',
    paisNacimiento: 'Yemen',
    ultimoRecital: {
      pais: 'Austria',
      anio: 2014,
      entradasVendidas: 66628,
      costoEntradas: 1458
    },
    discos: [
      {
        titulo: 'dolor enim anim',
        canciones: 9,
        anioLanzamiento: 2014,
        copiasVendidas: 72148
      },
      {
        titulo: 'qui excepteur id',
        canciones: 9,
        anioLanzamiento: 2015,
        copiasVendidas: 3681
      },
      {
        titulo: 'mollit consequat ad',
        canciones: 9,
        anioLanzamiento: 2002,
        copiasVendidas: 49605
      },
      {
        titulo: 'duis amet exercitation',
        canciones: 8,
        anioLanzamiento: 2011,
        copiasVendidas: 15171
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Patrice Kemp',
    solista: false,
    edad: 38,
    instrumento: 'teclado',
    paisNacimiento: 'Myanmar',
    ultimoRecital: {
      pais: 'Antarctica',
      anio: 2014,
      entradasVendidas: 23258,
      costoEntradas: 1805
    },
    discos: [
      {
        titulo: 'culpa ullamco velit',
        canciones: 15,
        anioLanzamiento: 1997,
        copiasVendidas: 20992
      },
      {
        titulo: 'Lorem elit fugiat',
        canciones: 13,
        anioLanzamiento: 2018,
        copiasVendidas: 78359
      },
      {
        titulo: 'officia est occaecat',
        canciones: 8,
        anioLanzamiento: 2016,
        copiasVendidas: 12345
      },
      {
        titulo: 'anim labore qui',
        canciones: 10,
        anioLanzamiento: 2004,
        copiasVendidas: 18005
      },
      {
        titulo: 'id et eiusmod',
        canciones: 10,
        anioLanzamiento: 2010,
        copiasVendidas: 49969
      },
      {
        titulo: 'voluptate duis consectetur',
        canciones: 7,
        anioLanzamiento: 2015,
        copiasVendidas: 8673
      },
      {
        titulo: 'amet est amet',
        canciones: 11,
        anioLanzamiento: 1994,
        copiasVendidas: 79938
      },
      {
        titulo: 'ad velit est',
        canciones: 10,
        anioLanzamiento: 1999,
        copiasVendidas: 60220
      },
      {
        titulo: 'eiusmod sunt adipisicing',
        canciones: 8,
        anioLanzamiento: 2018,
        copiasVendidas: 24085
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Tisha Golden',
    solista: false,
    edad: 40,
    instrumento: 'bajo',
    paisNacimiento: 'Canada',
    ultimoRecital: {
      pais: 'Bermuda',
      anio: 2014,
      entradasVendidas: 46275,
      costoEntradas: 2534
    },
    discos: [
      {
        titulo: 'dolor pariatur non',
        canciones: 12,
        anioLanzamiento: 2000,
        copiasVendidas: 22717
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Dyer Beard',
    solista: true,
    edad: 40,
    instrumento: 'teclado',
    paisNacimiento: 'Turkmenistan',
    ultimoRecital: {
      pais: 'Algeria',
      anio: 2019,
      entradasVendidas: 41770,
      costoEntradas: 2989
    },
    discos: [
      {
        titulo: 'ea qui tempor',
        canciones: 8,
        anioLanzamiento: 2011,
        copiasVendidas: 53430
      },
      {
        titulo: 'dolore non in',
        canciones: 6,
        anioLanzamiento: 2007,
        copiasVendidas: 40863
      },
      {
        titulo: 'proident elit sit',
        canciones: 12,
        anioLanzamiento: 2019,
        copiasVendidas: 36867
      },
      {
        titulo: 'anim velit id',
        canciones: 15,
        anioLanzamiento: 2013,
        copiasVendidas: 30125
      },
      {
        titulo: 'ea quis non',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 85954
      },
      {
        titulo: 'laboris ullamco sit',
        canciones: 13,
        anioLanzamiento: 2007,
        copiasVendidas: 66882
      },
      {
        titulo: 'quis id dolor',
        canciones: 9,
        anioLanzamiento: 1994,
        copiasVendidas: 5228
      },
      {
        titulo: 'qui non consequat',
        canciones: 7,
        anioLanzamiento: 1994,
        copiasVendidas: 97758
      },
      {
        titulo: 'commodo ex magna',
        canciones: 7,
        anioLanzamiento: 2016,
        copiasVendidas: 91826
      },
      {
        titulo: 'et voluptate duis',
        canciones: 10,
        anioLanzamiento: 1999,
        copiasVendidas: 50232
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Harrison Hudson',
    solista: false,
    edad: 28,
    instrumento: 'teclado',
    paisNacimiento: 'Morocco',
    ultimoRecital: {
      pais: 'Yugoslavia',
      anio: 2018,
      entradasVendidas: 76936,
      costoEntradas: 2470
    },
    discos: [
      {
        titulo: 'amet minim sit',
        canciones: 6,
        anioLanzamiento: 2000,
        copiasVendidas: 97339
      },
      {
        titulo: 'minim amet est',
        canciones: 11,
        anioLanzamiento: 2004,
        copiasVendidas: 92458
      },
      {
        titulo: 'elit id Lorem',
        canciones: 14,
        anioLanzamiento: 1995,
        copiasVendidas: 63487
      },
      {
        titulo: 'et velit eu',
        canciones: 14,
        anioLanzamiento: 2012,
        copiasVendidas: 97144
      },
      {
        titulo: 'minim id sunt',
        canciones: 10,
        anioLanzamiento: 1991,
        copiasVendidas: 34560
      },
      {
        titulo: 'ad adipisicing mollit',
        canciones: 13,
        anioLanzamiento: 1993,
        copiasVendidas: 79213
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Copeland Simmons',
    solista: false,
    edad: 25,
    instrumento: 'teclado',
    paisNacimiento: 'Malta',
    ultimoRecital: {
      pais: 'Sierra Leone',
      anio: 2004,
      entradasVendidas: 52960,
      costoEntradas: 2291
    },
    discos: [
      {
        titulo: 'duis aute qui',
        canciones: 9,
        anioLanzamiento: 2011,
        copiasVendidas: 86272
      },
      {
        titulo: 'aute et consequat',
        canciones: 13,
        anioLanzamiento: 1992,
        copiasVendidas: 9064
      },
      {
        titulo: 'commodo aliquip do',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 32331
      },
      {
        titulo: 'labore officia ipsum',
        canciones: 15,
        anioLanzamiento: 2014,
        copiasVendidas: 35619
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Addie Glass',
    solista: true,
    edad: 24,
    instrumento: 'batería',
    paisNacimiento: 'Nigeria',
    ultimoRecital: {
      pais: 'Zambia',
      anio: 2006,
      entradasVendidas: 65484,
      costoEntradas: 2131
    },
    discos: [
      {
        titulo: 'dolor anim occaecat',
        canciones: 9,
        anioLanzamiento: 2000,
        copiasVendidas: 48876
      },
      {
        titulo: 'laboris reprehenderit mollit',
        canciones: 12,
        anioLanzamiento: 1997,
        copiasVendidas: 58644
      },
      {
        titulo: 'minim sunt elit',
        canciones: 15,
        anioLanzamiento: 2001,
        copiasVendidas: 77190
      },
      {
        titulo: 'magna qui eiusmod',
        canciones: 10,
        anioLanzamiento: 2011,
        copiasVendidas: 69647
      },
      {
        titulo: 'non aliqua Lorem',
        canciones: 6,
        anioLanzamiento: 2015,
        copiasVendidas: 58019
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Whitfield Burns',
    solista: false,
    edad: 21,
    instrumento: 'guitarra',
    paisNacimiento: 'Papua New Guinea',
    ultimoRecital: {
      pais: 'Sudan',
      anio: 2010,
      entradasVendidas: 19453,
      costoEntradas: 2489
    },
    discos: [
      {
        titulo: 'tempor do proident',
        canciones: 6,
        anioLanzamiento: 1995,
        copiasVendidas: 30623
      },
      {
        titulo: 'elit sint fugiat',
        canciones: 10,
        anioLanzamiento: 2002,
        copiasVendidas: 37997
      },
      {
        titulo: 'non non non',
        canciones: 7,
        anioLanzamiento: 2012,
        copiasVendidas: 84628
      },
      {
        titulo: 'Lorem dolor officia',
        canciones: 11,
        anioLanzamiento: 1990,
        copiasVendidas: 3493
      },
      {
        titulo: 'dolor ea ullamco',
        canciones: 7,
        anioLanzamiento: 1997,
        copiasVendidas: 12743
      },
      {
        titulo: 'id dolor magna',
        canciones: 8,
        anioLanzamiento: 1995,
        copiasVendidas: 59022
      },
      {
        titulo: 'ad veniam anim',
        canciones: 14,
        anioLanzamiento: 2016,
        copiasVendidas: 15333
      },
      {
        titulo: 'reprehenderit aute commodo',
        canciones: 11,
        anioLanzamiento: 2002,
        copiasVendidas: 25870
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Marcella Flowers',
    solista: false,
    edad: 39,
    instrumento: 'bajo',
    paisNacimiento: 'Niue',
    ultimoRecital: {
      pais: 'Kuwait',
      anio: 2015,
      entradasVendidas: 88280,
      costoEntradas: 626
    },
    discos: [
      {
        titulo: 'nostrud nostrud dolore',
        canciones: 6,
        anioLanzamiento: 1991,
        copiasVendidas: 53478
      },
      {
        titulo: 'deserunt amet sunt',
        canciones: 6,
        anioLanzamiento: 2017,
        copiasVendidas: 70764
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Daugherty Santana',
    solista: true,
    edad: 22,
    instrumento: 'teclado',
    paisNacimiento: 'Australia',
    ultimoRecital: {
      pais: 'Mexico',
      anio: 2014,
      entradasVendidas: 10230,
      costoEntradas: 1057
    },
    discos: [
      {
        titulo: 'dolore ex officia',
        canciones: 8,
        anioLanzamiento: 2002,
        copiasVendidas: 6970
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Sharon Jimenez',
    solista: false,
    edad: 22,
    instrumento: 'bajo',
    paisNacimiento: 'Malawi',
    ultimoRecital: {
      pais: 'Central African Republic',
      anio: 2003,
      entradasVendidas: 99084,
      costoEntradas: 742
    },
    discos: [
      {
        titulo: 'consequat consectetur enim',
        canciones: 6,
        anioLanzamiento: 2011,
        copiasVendidas: 89892
      },
      {
        titulo: 'enim amet excepteur',
        canciones: 6,
        anioLanzamiento: 1999,
        copiasVendidas: 9918
      },
      {
        titulo: 'reprehenderit ipsum mollit',
        canciones: 12,
        anioLanzamiento: 2011,
        copiasVendidas: 74994
      },
      {
        titulo: 'sint mollit occaecat',
        canciones: 15,
        anioLanzamiento: 2013,
        copiasVendidas: 17461
      },
      {
        titulo: 'consequat labore sunt',
        canciones: 9,
        anioLanzamiento: 2010,
        copiasVendidas: 2398
      },
      {
        titulo: 'eiusmod proident qui',
        canciones: 10,
        anioLanzamiento: 1990,
        copiasVendidas: 90374
      },
      {
        titulo: 'ad commodo ad',
        canciones: 6,
        anioLanzamiento: 2013,
        copiasVendidas: 80871
      },
      {
        titulo: 'duis aliqua occaecat',
        canciones: 7,
        anioLanzamiento: 2003,
        copiasVendidas: 79780
      },
      {
        titulo: 'laborum laboris dolor',
        canciones: 8,
        anioLanzamiento: 2016,
        copiasVendidas: 10048
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Moon Anthony',
    solista: true,
    edad: 39,
    instrumento: 'bajo',
    paisNacimiento: 'Netherlands Antilles',
    ultimoRecital: {
      pais: 'Bahamas',
      anio: 2013,
      entradasVendidas: 11836,
      costoEntradas: 1704
    },
    discos: [
      {
        titulo: 'labore veniam occaecat',
        canciones: 15,
        anioLanzamiento: 1992,
        copiasVendidas: 79127
      },
      {
        titulo: 'in labore voluptate',
        canciones: 14,
        anioLanzamiento: 1999,
        copiasVendidas: 50864
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Bush Armstrong',
    solista: true,
    edad: 32,
    instrumento: 'batería',
    paisNacimiento: 'New Caledonia',
    ultimoRecital: {
      pais: 'Iceland',
      anio: 2014,
      entradasVendidas: 11707,
      costoEntradas: 1122
    },
    discos: [
      {
        titulo: 'amet id tempor',
        canciones: 13,
        anioLanzamiento: 1996,
        copiasVendidas: 52841
      },
      {
        titulo: 'commodo culpa laborum',
        canciones: 7,
        anioLanzamiento: 1990,
        copiasVendidas: 67050
      },
      {
        titulo: 'officia labore dolor',
        canciones: 11,
        anioLanzamiento: 2019,
        copiasVendidas: 76145
      },
      {
        titulo: 'quis aliquip tempor',
        canciones: 7,
        anioLanzamiento: 1998,
        copiasVendidas: 69617
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Jeannette Hayden',
    solista: false,
    edad: 24,
    instrumento: 'bajo',
    paisNacimiento: 'Guinea-Bissau',
    ultimoRecital: {
      pais: 'Korea (North)',
      anio: 2009,
      entradasVendidas: 90667,
      costoEntradas: 1928
    },
    discos: [
      {
        titulo: 'nostrud esse veniam',
        canciones: 10,
        anioLanzamiento: 2002,
        copiasVendidas: 49735
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Jodie Donovan',
    solista: true,
    edad: 20,
    instrumento: 'voz',
    paisNacimiento: 'Burundi',
    ultimoRecital: {
      pais: 'Suriname',
      anio: 2007,
      entradasVendidas: 34464,
      costoEntradas: 2339
    },
    discos: [
      {
        titulo: 'irure pariatur duis',
        canciones: 7,
        anioLanzamiento: 2002,
        copiasVendidas: 27189
      },
      {
        titulo: 'magna sit veniam',
        canciones: 9,
        anioLanzamiento: 1996,
        copiasVendidas: 14818
      },
      {
        titulo: 'tempor do ullamco',
        canciones: 9,
        anioLanzamiento: 1997,
        copiasVendidas: 94212
      },
      {
        titulo: 'eiusmod commodo laboris',
        canciones: 13,
        anioLanzamiento: 2006,
        copiasVendidas: 59337
      },
      {
        titulo: 'culpa pariatur sunt',
        canciones: 12,
        anioLanzamiento: 2015,
        copiasVendidas: 74120
      },
      {
        titulo: 'minim consectetur amet',
        canciones: 13,
        anioLanzamiento: 2001,
        copiasVendidas: 7229
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Lorie Maldonado',
    solista: false,
    edad: 34,
    instrumento: 'batería',
    paisNacimiento: 'Solomon Islands',
    ultimoRecital: {
      pais: 'Macedonia',
      anio: 2014,
      entradasVendidas: 77016,
      costoEntradas: 1859
    },
    discos: [
      {
        titulo: 'minim deserunt duis',
        canciones: 12,
        anioLanzamiento: 1995,
        copiasVendidas: 31247
      },
      {
        titulo: 'minim nostrud non',
        canciones: 11,
        anioLanzamiento: 1999,
        copiasVendidas: 94432
      },
      {
        titulo: 'deserunt magna irure',
        canciones: 13,
        anioLanzamiento: 2013,
        copiasVendidas: 16713
      },
      {
        titulo: 'laborum non Lorem',
        canciones: 15,
        anioLanzamiento: 2009,
        copiasVendidas: 99548
      },
      {
        titulo: 'consequat ex quis',
        canciones: 12,
        anioLanzamiento: 2012,
        copiasVendidas: 9214
      },
      {
        titulo: 'dolor nostrud sunt',
        canciones: 13,
        anioLanzamiento: 2019,
        copiasVendidas: 26413
      },
      {
        titulo: 'et minim exercitation',
        canciones: 15,
        anioLanzamiento: 1990,
        copiasVendidas: 10007
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Cruz Cooley',
    solista: false,
    edad: 29,
    instrumento: 'guitarra',
    paisNacimiento: 'Maldives',
    ultimoRecital: {
      pais: 'Antigua and Barbuda',
      anio: 2016,
      entradasVendidas: 10192,
      costoEntradas: 718
    },
    discos: [
      {
        titulo: 'ut eiusmod anim',
        canciones: 10,
        anioLanzamiento: 2010,
        copiasVendidas: 10450
      },
      {
        titulo: 'aliqua excepteur laborum',
        canciones: 13,
        anioLanzamiento: 1992,
        copiasVendidas: 98448
      },
      {
        titulo: 'nostrud quis laboris',
        canciones: 15,
        anioLanzamiento: 2017,
        copiasVendidas: 56278
      },
      {
        titulo: 'consectetur culpa occaecat',
        canciones: 7,
        anioLanzamiento: 2000,
        copiasVendidas: 82606
      },
      {
        titulo: 'eiusmod magna laborum',
        canciones: 11,
        anioLanzamiento: 1997,
        copiasVendidas: 55301
      },
      {
        titulo: 'eiusmod ullamco ad',
        canciones: 9,
        anioLanzamiento: 2003,
        copiasVendidas: 18980
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Mccall Walls',
    solista: true,
    edad: 39,
    instrumento: 'guitarra',
    paisNacimiento: 'Norway',
    ultimoRecital: {
      pais: 'East Timor',
      anio: 2018,
      entradasVendidas: 30202,
      costoEntradas: 1492
    },
    discos: [
      {
        titulo: 'adipisicing sint magna',
        canciones: 7,
        anioLanzamiento: 2013,
        copiasVendidas: 30150
      },
      {
        titulo: 'Lorem sint esse',
        canciones: 14,
        anioLanzamiento: 2016,
        copiasVendidas: 14754
      },
      {
        titulo: 'eiusmod nisi sunt',
        canciones: 15,
        anioLanzamiento: 2005,
        copiasVendidas: 44759
      },
      {
        titulo: 'occaecat reprehenderit adipisicing',
        canciones: 10,
        anioLanzamiento: 2018,
        copiasVendidas: 94780
      },
      {
        titulo: 'proident id ad',
        canciones: 14,
        anioLanzamiento: 1990,
        copiasVendidas: 56280
      },
      {
        titulo: 'qui fugiat veniam',
        canciones: 15,
        anioLanzamiento: 1994,
        copiasVendidas: 69634
      },
      {
        titulo: 'laboris esse aliqua',
        canciones: 14,
        anioLanzamiento: 2017,
        copiasVendidas: 98225
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Gabriela Oneil',
    solista: false,
    edad: 28,
    instrumento: 'voz',
    paisNacimiento: 'British Indian Ocean Territory',
    ultimoRecital: {
      pais: 'Aruba',
      anio: 2000,
      entradasVendidas: 17090,
      costoEntradas: 1424
    },
    discos: [
      {
        titulo: 'voluptate commodo aliquip',
        canciones: 11,
        anioLanzamiento: 1997,
        copiasVendidas: 25303
      },
      {
        titulo: 'cillum est consectetur',
        canciones: 9,
        anioLanzamiento: 2001,
        copiasVendidas: 17936
      },
      {
        titulo: 'consequat aute eu',
        canciones: 15,
        anioLanzamiento: 2015,
        copiasVendidas: 65733
      },
      {
        titulo: 'pariatur velit ea',
        canciones: 9,
        anioLanzamiento: 2004,
        copiasVendidas: 89217
      },
      {
        titulo: 'ut proident enim',
        canciones: 10,
        anioLanzamiento: 2007,
        copiasVendidas: 43016
      },
      {
        titulo: 'nisi sint eu',
        canciones: 12,
        anioLanzamiento: 2016,
        copiasVendidas: 22042
      },
      {
        titulo: 'ex consequat minim',
        canciones: 13,
        anioLanzamiento: 2011,
        copiasVendidas: 53522
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Chris Bullock',
    solista: true,
    edad: 33,
    instrumento: 'teclado',
    paisNacimiento: 'Turks and Caicos Islands',
    ultimoRecital: {
      pais: 'Saint Kitts and Nevis',
      anio: 2008,
      entradasVendidas: 5105,
      costoEntradas: 2785
    },
    discos: [
      {
        titulo: 'et irure proident',
        canciones: 15,
        anioLanzamiento: 2002,
        copiasVendidas: 86214
      },
      {
        titulo: 'laboris laborum consequat',
        canciones: 8,
        anioLanzamiento: 1997,
        copiasVendidas: 5285
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Robbins Petersen',
    solista: false,
    edad: 40,
    instrumento: 'bajo',
    paisNacimiento: 'France, Metropolitan',
    ultimoRecital: {
      pais: 'Bosnia and Herzegovina',
      anio: 2010,
      entradasVendidas: 99155,
      costoEntradas: 570
    },
    discos: [
      {
        titulo: 'sunt qui non',
        canciones: 7,
        anioLanzamiento: 1994,
        copiasVendidas: 49732
      },
      {
        titulo: 'fugiat anim et',
        canciones: 10,
        anioLanzamiento: 2003,
        copiasVendidas: 81125
      },
      {
        titulo: 'nisi eiusmod nulla',
        canciones: 9,
        anioLanzamiento: 1990,
        copiasVendidas: 63726
      },
      {
        titulo: 'non qui tempor',
        canciones: 12,
        anioLanzamiento: 1993,
        copiasVendidas: 89911
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Burton Rich',
    solista: true,
    edad: 27,
    instrumento: 'batería',
    paisNacimiento: 'Northern Mariana Islands',
    ultimoRecital: {
      pais: 'Iran',
      anio: 2005,
      entradasVendidas: 35946,
      costoEntradas: 765
    },
    discos: [
      {
        titulo: 'aliqua dolore incididunt',
        canciones: 14,
        anioLanzamiento: 2000,
        copiasVendidas: 75049
      },
      {
        titulo: 'anim culpa in',
        canciones: 10,
        anioLanzamiento: 2015,
        copiasVendidas: 19532
      },
      {
        titulo: 'est dolore anim',
        canciones: 14,
        anioLanzamiento: 2013,
        copiasVendidas: 5829
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Wilkerson Mullins',
    solista: true,
    edad: 25,
    instrumento: 'teclado',
    paisNacimiento: "Cote D'Ivoire (Ivory Coast)",
    ultimoRecital: {
      pais: 'Honduras',
      anio: 2004,
      entradasVendidas: 93504,
      costoEntradas: 1454
    },
    discos: [
      {
        titulo: 'Lorem elit cillum',
        canciones: 15,
        anioLanzamiento: 2019,
        copiasVendidas: 65882
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Madden Martinez',
    solista: false,
    edad: 30,
    instrumento: 'voz',
    paisNacimiento: 'Armenia',
    ultimoRecital: {
      pais: 'Nauru',
      anio: 2013,
      entradasVendidas: 76239,
      costoEntradas: 2856
    },
    discos: [
      {
        titulo: 'tempor anim in',
        canciones: 9,
        anioLanzamiento: 2015,
        copiasVendidas: 64840
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Petty Montgomery',
    solista: false,
    edad: 39,
    instrumento: 'voz',
    paisNacimiento: 'Jamaica',
    ultimoRecital: {
      pais: 'Ethiopia',
      anio: 2009,
      entradasVendidas: 58339,
      costoEntradas: 583
    },
    discos: [
      {
        titulo: 'culpa dolore reprehenderit',
        canciones: 7,
        anioLanzamiento: 1999,
        copiasVendidas: 75227
      },
      {
        titulo: 'exercitation esse irure',
        canciones: 15,
        anioLanzamiento: 2018,
        copiasVendidas: 15349
      },
      {
        titulo: 'et sit pariatur',
        canciones: 6,
        anioLanzamiento: 2014,
        copiasVendidas: 87181
      },
      {
        titulo: 'sit dolor id',
        canciones: 13,
        anioLanzamiento: 2003,
        copiasVendidas: 69866
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Moses Cochran',
    solista: true,
    edad: 25,
    instrumento: 'bajo',
    paisNacimiento: 'Uruguay',
    ultimoRecital: {
      pais: 'Laos',
      anio: 2004,
      entradasVendidas: 81272,
      costoEntradas: 1902
    },
    discos: [
      {
        titulo: 'officia est cillum',
        canciones: 11,
        anioLanzamiento: 2015,
        copiasVendidas: 85007
      },
      {
        titulo: 'pariatur nostrud culpa',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 68061
      },
      {
        titulo: 'ex nostrud veniam',
        canciones: 15,
        anioLanzamiento: 1999,
        copiasVendidas: 5498
      },
      {
        titulo: 'Lorem ad enim',
        canciones: 11,
        anioLanzamiento: 2012,
        copiasVendidas: 91312
      },
      {
        titulo: 'in occaecat occaecat',
        canciones: 11,
        anioLanzamiento: 2005,
        copiasVendidas: 3904
      },
      {
        titulo: 'est in cillum',
        canciones: 14,
        anioLanzamiento: 1992,
        copiasVendidas: 18008
      },
      {
        titulo: 'minim minim cillum',
        canciones: 8,
        anioLanzamiento: 2008,
        copiasVendidas: 48408
      },
      {
        titulo: 'sit dolore laboris',
        canciones: 12,
        anioLanzamiento: 2017,
        copiasVendidas: 22223
      },
      {
        titulo: 'et proident velit',
        canciones: 13,
        anioLanzamiento: 2004,
        copiasVendidas: 36987
      },
      {
        titulo: 'irure enim commodo',
        canciones: 6,
        anioLanzamiento: 2011,
        copiasVendidas: 48363
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Mejia Johns',
    solista: false,
    edad: 36,
    instrumento: 'guitarra',
    paisNacimiento: 'Samoa',
    ultimoRecital: {
      pais: 'French Polynesia',
      anio: 2014,
      entradasVendidas: 59690,
      costoEntradas: 2696
    },
    discos: [
      {
        titulo: 'do ex cillum',
        canciones: 10,
        anioLanzamiento: 2009,
        copiasVendidas: 70821
      },
      {
        titulo: 'ut irure commodo',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 2444
      },
      {
        titulo: 'exercitation reprehenderit nostrud',
        canciones: 12,
        anioLanzamiento: 1995,
        copiasVendidas: 56935
      },
      {
        titulo: 'duis est mollit',
        canciones: 10,
        anioLanzamiento: 2000,
        copiasVendidas: 32537
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Maude Bryan',
    solista: false,
    edad: 31,
    instrumento: 'guitarra',
    paisNacimiento: 'Uzbekistan',
    ultimoRecital: {
      pais: 'Estonia',
      anio: 2011,
      entradasVendidas: 6106,
      costoEntradas: 2734
    },
    discos: [
      {
        titulo: 'laborum aute eiusmod',
        canciones: 11,
        anioLanzamiento: 2006,
        copiasVendidas: 49638
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Joseph Warren',
    solista: false,
    edad: 22,
    instrumento: 'guitarra',
    paisNacimiento: 'Sweden',
    ultimoRecital: {
      pais: 'Macau',
      anio: 2013,
      entradasVendidas: 90237,
      costoEntradas: 2541
    },
    discos: [
      {
        titulo: 'labore culpa id',
        canciones: 8,
        anioLanzamiento: 1990,
        copiasVendidas: 73249
      },
      {
        titulo: 'ullamco deserunt voluptate',
        canciones: 14,
        anioLanzamiento: 2001,
        copiasVendidas: 77109
      },
      {
        titulo: 'Lorem fugiat irure',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 18047
      },
      {
        titulo: 'sit cillum consequat',
        canciones: 11,
        anioLanzamiento: 2010,
        copiasVendidas: 71736
      },
      {
        titulo: 'id ut nostrud',
        canciones: 15,
        anioLanzamiento: 1997,
        copiasVendidas: 22695
      },
      {
        titulo: 'et est culpa',
        canciones: 12,
        anioLanzamiento: 2004,
        copiasVendidas: 36937
      },
      {
        titulo: 'tempor velit incididunt',
        canciones: 8,
        anioLanzamiento: 1994,
        copiasVendidas: 17440
      },
      {
        titulo: 'deserunt adipisicing veniam',
        canciones: 6,
        anioLanzamiento: 1991,
        copiasVendidas: 84415
      },
      {
        titulo: 'sit exercitation labore',
        canciones: 15,
        anioLanzamiento: 1994,
        copiasVendidas: 21014
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Stein Hamilton',
    solista: true,
    edad: 30,
    instrumento: 'voz',
    paisNacimiento: 'Peru',
    ultimoRecital: {
      pais: 'Egypt',
      anio: 2007,
      entradasVendidas: 24449,
      costoEntradas: 790
    },
    discos: [
      {
        titulo: 'magna non anim',
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 48038
      },
      {
        titulo: 'fugiat incididunt Lorem',
        canciones: 15,
        anioLanzamiento: 2006,
        copiasVendidas: 35061
      },
      {
        titulo: 'sunt et do',
        canciones: 12,
        anioLanzamiento: 2014,
        copiasVendidas: 70766
      },
      {
        titulo: 'consequat voluptate adipisicing',
        canciones: 10,
        anioLanzamiento: 1998,
        copiasVendidas: 58340
      },
      {
        titulo: 'nostrud mollit culpa',
        canciones: 11,
        anioLanzamiento: 2005,
        copiasVendidas: 58088
      },
      {
        titulo: 'dolor occaecat anim',
        canciones: 7,
        anioLanzamiento: 2006,
        copiasVendidas: 85415
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Ramsey Adams',
    solista: true,
    edad: 27,
    instrumento: 'bajo',
    paisNacimiento: 'Mozambique',
    ultimoRecital: {
      pais: 'Gambia',
      anio: 2009,
      entradasVendidas: 27615,
      costoEntradas: 2206
    },
    discos: [
      {
        titulo: 'labore minim duis',
        canciones: 6,
        anioLanzamiento: 2017,
        copiasVendidas: 44422
      },
      {
        titulo: 'excepteur aute occaecat',
        canciones: 8,
        anioLanzamiento: 2011,
        copiasVendidas: 70057
      },
      {
        titulo: 'est ea laboris',
        canciones: 9,
        anioLanzamiento: 2017,
        copiasVendidas: 87969
      },
      {
        titulo: 'elit do amet',
        canciones: 10,
        anioLanzamiento: 1998,
        copiasVendidas: 70799
      },
      {
        titulo: 'commodo fugiat adipisicing',
        canciones: 12,
        anioLanzamiento: 2006,
        copiasVendidas: 20068
      },
      {
        titulo: 'Lorem enim do',
        canciones: 8,
        anioLanzamiento: 1996,
        copiasVendidas: 34007
      },
      {
        titulo: 'ipsum nulla elit',
        canciones: 7,
        anioLanzamiento: 2004,
        copiasVendidas: 98661
      },
      {
        titulo: 'dolor cupidatat id',
        canciones: 15,
        anioLanzamiento: 2011,
        copiasVendidas: 72746
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Blackwell Bauer',
    solista: false,
    edad: 32,
    instrumento: 'bajo',
    paisNacimiento: 'Chad',
    ultimoRecital: {
      pais: 'Falkland Islands (Malvinas)',
      anio: 2001,
      entradasVendidas: 75690,
      costoEntradas: 2351
    },
    discos: [
      {
        titulo: 'culpa aute non',
        canciones: 9,
        anioLanzamiento: 2015,
        copiasVendidas: 80836
      },
      {
        titulo: 'labore pariatur anim',
        canciones: 15,
        anioLanzamiento: 1995,
        copiasVendidas: 31520
      },
      {
        titulo: 'deserunt ut esse',
        canciones: 10,
        anioLanzamiento: 1996,
        copiasVendidas: 65123
      },
      {
        titulo: 'proident ea voluptate',
        canciones: 13,
        anioLanzamiento: 2013,
        copiasVendidas: 94584
      },
      {
        titulo: 'ex laborum laboris',
        canciones: 10,
        anioLanzamiento: 2011,
        copiasVendidas: 64338
      },
      {
        titulo: 'magna laboris commodo',
        canciones: 7,
        anioLanzamiento: 2004,
        copiasVendidas: 44770
      },
      {
        titulo: 'amet tempor et',
        canciones: 15,
        anioLanzamiento: 2005,
        copiasVendidas: 81472
      },
      {
        titulo: 'dolor excepteur aliqua',
        canciones: 8,
        anioLanzamiento: 1999,
        copiasVendidas: 53220
      },
      {
        titulo: 'magna anim qui',
        canciones: 15,
        anioLanzamiento: 2018,
        copiasVendidas: 77784
      },
      {
        titulo: 'pariatur excepteur duis',
        canciones: 12,
        anioLanzamiento: 2015,
        copiasVendidas: 64570
      }
    ],
    genero: 'rock'
  },
  {
    nombre: 'Nichols Bradley',
    solista: true,
    edad: 26,
    instrumento: 'bajo',
    paisNacimiento: 'Mauritania',
    ultimoRecital: {
      pais: 'China',
      anio: 2015,
      entradasVendidas: 55720,
      costoEntradas: 736
    },
    discos: [
      {
        titulo: 'commodo irure enim',
        canciones: 8,
        anioLanzamiento: 2014,
        copiasVendidas: 78895
      },
      {
        titulo: 'culpa elit consequat',
        canciones: 10,
        anioLanzamiento: 2004,
        copiasVendidas: 50900
      },
      {
        titulo: 'exercitation in sit',
        canciones: 9,
        anioLanzamiento: 2003,
        copiasVendidas: 74287
      },
      {
        titulo: 'velit reprehenderit occaecat',
        canciones: 14,
        anioLanzamiento: 2002,
        copiasVendidas: 95913
      },
      {
        titulo: 'occaecat mollit id',
        canciones: 11,
        anioLanzamiento: 2004,
        copiasVendidas: 46646
      },
      {
        titulo: 'do nulla enim',
        canciones: 8,
        anioLanzamiento: 1996,
        copiasVendidas: 11788
      },
      {
        titulo: 'fugiat qui mollit',
        canciones: 6,
        anioLanzamiento: 1997,
        copiasVendidas: 48377
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Sharp Hensley',
    solista: true,
    edad: 40,
    instrumento: 'batería',
    paisNacimiento: 'United Kingdom',
    ultimoRecital: {
      pais: 'Equatorial Guinea',
      anio: 2011,
      entradasVendidas: 54777,
      costoEntradas: 1250
    },
    discos: [
      {
        titulo: 'voluptate aute quis',
        canciones: 14,
        anioLanzamiento: 2015,
        copiasVendidas: 24027
      },
      {
        titulo: 'incididunt Lorem proident',
        canciones: 15,
        anioLanzamiento: 1996,
        copiasVendidas: 97301
      },
      {
        titulo: 'ipsum et qui',
        canciones: 9,
        anioLanzamiento: 1996,
        copiasVendidas: 97887
      },
      {
        titulo: 'incididunt ex do',
        canciones: 11,
        anioLanzamiento: 2007,
        copiasVendidas: 19058
      },
      {
        titulo: 'aute ullamco culpa',
        canciones: 10,
        anioLanzamiento: 2010,
        copiasVendidas: 27300
      },
      {
        titulo: 'aliquip aliqua voluptate',
        canciones: 14,
        anioLanzamiento: 1990,
        copiasVendidas: 8792
      },
      {
        titulo: 'quis officia non',
        canciones: 8,
        anioLanzamiento: 2018,
        copiasVendidas: 77144
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Angel Schwartz',
    solista: true,
    edad: 22,
    instrumento: 'batería',
    paisNacimiento: 'Venezuela',
    ultimoRecital: {
      pais: 'Marshall Islands',
      anio: 2013,
      entradasVendidas: 1745,
      costoEntradas: 2592
    },
    discos: [
      {
        titulo: 'officia deserunt magna',
        canciones: 14,
        anioLanzamiento: 1995,
        copiasVendidas: 99409
      },
      {
        titulo: 'ut est aute',
        canciones: 9,
        anioLanzamiento: 2002,
        copiasVendidas: 6306
      },
      {
        titulo: 'fugiat tempor sunt',
        canciones: 9,
        anioLanzamiento: 2008,
        copiasVendidas: 26977
      },
      {
        titulo: 'amet nisi non',
        canciones: 7,
        anioLanzamiento: 2017,
        copiasVendidas: 70741
      },
      {
        titulo: 'eiusmod velit do',
        canciones: 7,
        anioLanzamiento: 2003,
        copiasVendidas: 97050
      },
      {
        titulo: 'velit reprehenderit est',
        canciones: 6,
        anioLanzamiento: 2015,
        copiasVendidas: 43149
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Patrick Guerra',
    solista: true,
    edad: 25,
    instrumento: 'teclado',
    paisNacimiento: 'United States',
    ultimoRecital: {
      pais: 'Qatar',
      anio: 2011,
      entradasVendidas: 22347,
      costoEntradas: 2678
    },
    discos: [
      {
        titulo: 'sint duis cupidatat',
        canciones: 13,
        anioLanzamiento: 1995,
        copiasVendidas: 72013
      },
      {
        titulo: 'amet irure eiusmod',
        canciones: 6,
        anioLanzamiento: 2013,
        copiasVendidas: 6367
      },
      {
        titulo: 'velit nisi in',
        canciones: 12,
        anioLanzamiento: 2019,
        copiasVendidas: 12355
      },
      {
        titulo: 'dolor ipsum labore',
        canciones: 11,
        anioLanzamiento: 2012,
        copiasVendidas: 2566
      },
      {
        titulo: 'mollit do in',
        canciones: 10,
        anioLanzamiento: 2002,
        copiasVendidas: 36170
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Mcclure Snow',
    solista: true,
    edad: 32,
    instrumento: 'batería',
    paisNacimiento: 'Tunisia',
    ultimoRecital: {
      pais: 'Botswana',
      anio: 2019,
      entradasVendidas: 88354,
      costoEntradas: 2523
    },
    discos: [
      {
        titulo: 'velit nisi excepteur',
        canciones: 11,
        anioLanzamiento: 1991,
        copiasVendidas: 68170
      },
      {
        titulo: 'labore ad laboris',
        canciones: 9,
        anioLanzamiento: 1996,
        copiasVendidas: 31353
      },
      {
        titulo: 'labore anim est',
        canciones: 15,
        anioLanzamiento: 1998,
        copiasVendidas: 55492
      },
      {
        titulo: 'cupidatat exercitation eu',
        canciones: 13,
        anioLanzamiento: 2013,
        copiasVendidas: 48760
      },
      {
        titulo: 'labore anim amet',
        canciones: 13,
        anioLanzamiento: 1997,
        copiasVendidas: 84383
      },
      {
        titulo: 'tempor et sunt',
        canciones: 9,
        anioLanzamiento: 2002,
        copiasVendidas: 5503
      },
      {
        titulo: 'deserunt culpa nostrud',
        canciones: 13,
        anioLanzamiento: 2011,
        copiasVendidas: 52570
      },
      {
        titulo: 'dolore occaecat consequat',
        canciones: 11,
        anioLanzamiento: 1998,
        copiasVendidas: 68497
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Leticia Pearson',
    solista: false,
    edad: 24,
    instrumento: 'teclado',
    paisNacimiento: 'Moldova',
    ultimoRecital: {
      pais: 'Ecuador',
      anio: 2019,
      entradasVendidas: 88272,
      costoEntradas: 2726
    },
    discos: [
      {
        titulo: 'aliquip ea fugiat',
        canciones: 9,
        anioLanzamiento: 2016,
        copiasVendidas: 13851
      },
      {
        titulo: 'velit ea esse',
        canciones: 15,
        anioLanzamiento: 2010,
        copiasVendidas: 63097
      },
      {
        titulo: 'anim fugiat duis',
        canciones: 10,
        anioLanzamiento: 2001,
        copiasVendidas: 28153
      },
      {
        titulo: 'commodo laborum incididunt',
        canciones: 6,
        anioLanzamiento: 1994,
        copiasVendidas: 81969
      },
      {
        titulo: 'pariatur consectetur nostrud',
        canciones: 8,
        anioLanzamiento: 2018,
        copiasVendidas: 84809
      },
      {
        titulo: 'nisi est consequat',
        canciones: 13,
        anioLanzamiento: 1993,
        copiasVendidas: 79045
      },
      {
        titulo: 'nulla eiusmod non',
        canciones: 12,
        anioLanzamiento: 1990,
        copiasVendidas: 68929
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Ward Randall',
    solista: false,
    edad: 26,
    instrumento: 'bajo',
    paisNacimiento: 'Namibia',
    ultimoRecital: {
      pais: 'Mauritius',
      anio: 2002,
      entradasVendidas: 68023,
      costoEntradas: 2652
    },
    discos: [
      {
        titulo: 'dolore ut incididunt',
        canciones: 12,
        anioLanzamiento: 1993,
        copiasVendidas: 81882
      },
      {
        titulo: 'et magna culpa',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 4459
      },
      {
        titulo: 'tempor occaecat ex',
        canciones: 8,
        anioLanzamiento: 2012,
        copiasVendidas: 96340
      },
      {
        titulo: 'in ea mollit',
        canciones: 7,
        anioLanzamiento: 2019,
        copiasVendidas: 21771
      },
      {
        titulo: 'pariatur amet cillum',
        canciones: 15,
        anioLanzamiento: 2007,
        copiasVendidas: 34284
      },
      {
        titulo: 'reprehenderit ea eiusmod',
        canciones: 11,
        anioLanzamiento: 1990,
        copiasVendidas: 78948
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Bond Small',
    solista: false,
    edad: 29,
    instrumento: 'guitarra',
    paisNacimiento: 'St. Helena',
    ultimoRecital: {
      pais: 'American Samoa',
      anio: 2019,
      entradasVendidas: 89019,
      costoEntradas: 1341
    },
    discos: [
      {
        titulo: 'adipisicing irure incididunt',
        canciones: 13,
        anioLanzamiento: 2009,
        copiasVendidas: 41980
      }
    ],
    genero: 'cumbia'
  },
  {
    nombre: 'Faye Duffy',
    solista: false,
    edad: 29,
    instrumento: 'guitarra',
    paisNacimiento: 'Guatemala',
    ultimoRecital: {
      pais: 'Azerbaijan',
      anio: 2000,
      entradasVendidas: 66134,
      costoEntradas: 868
    },
    discos: [
      {
        titulo: 'dolor sunt voluptate',
        canciones: 12,
        anioLanzamiento: 2015,
        copiasVendidas: 70684
      },
      {
        titulo: 'pariatur veniam sunt',
        canciones: 9,
        anioLanzamiento: 2002,
        copiasVendidas: 59064
      },
      {
        titulo: 'mollit mollit elit',
        canciones: 12,
        anioLanzamiento: 1997,
        copiasVendidas: 4519
      },
      {
        titulo: 'laborum aliqua ipsum',
        canciones: 13,
        anioLanzamiento: 2016,
        copiasVendidas: 26719
      },
      {
        titulo: 'culpa exercitation laborum',
        canciones: 8,
        anioLanzamiento: 1998,
        copiasVendidas: 80695
      },
      {
        titulo: 'amet qui consequat',
        canciones: 7,
        anioLanzamiento: 1992,
        copiasVendidas: 42334
      },
      {
        titulo: 'eiusmod in cillum',
        canciones: 7,
        anioLanzamiento: 2010,
        copiasVendidas: 38213
      },
      {
        titulo: 'exercitation cillum ullamco',
        canciones: 9,
        anioLanzamiento: 2000,
        copiasVendidas: 95518
      },
      {
        titulo: 'consectetur consectetur mollit',
        canciones: 9,
        anioLanzamiento: 2003,
        copiasVendidas: 59428
      },
      {
        titulo: 'minim ut enim',
        canciones: 14,
        anioLanzamiento: 1994,
        copiasVendidas: 39000
      }
    ],
    genero: 'pop'
  },
  {
    nombre: 'Schultz Mckee',
    solista: true,
    edad: 32,
    instrumento: 'guitarra',
    paisNacimiento: 'Cape Verde',
    ultimoRecital: {
      pais: 'Costa Rica',
      anio: 2012,
      entradasVendidas: 67859,
      costoEntradas: 1993
    },
    discos: [
      {
        titulo: 'anim eu sint',
        canciones: 14,
        anioLanzamiento: 2009,
        copiasVendidas: 34734
      },
      {
        titulo: 'incididunt fugiat voluptate',
        canciones: 12,
        anioLanzamiento: 1994,
        copiasVendidas: 47240
      },
      {
        titulo: 'incididunt est cillum',
        canciones: 8,
        anioLanzamiento: 1995,
        copiasVendidas: 87671
      }
    ],
    genero: 'reggae'
  },
  {
    nombre: 'Deirdre Barber',
    solista: false,
    edad: 25,
    instrumento: 'teclado',
    paisNacimiento: 'Heard and McDonald Islands',
    ultimoRecital: {
      pais: 'Guinea',
      anio: 2003,
      entradasVendidas: 77980,
      costoEntradas: 2671
    },
    discos: [
      {
        titulo: 'do excepteur ad',
        canciones: 10,
        anioLanzamiento: 1993,
        copiasVendidas: 78847
      },
      {
        titulo: 'ad sit amet',
        canciones: 13,
        anioLanzamiento: 1992,
        copiasVendidas: 90762
      },
      {
        titulo: 'eu adipisicing ad',
        canciones: 10,
        anioLanzamiento: 2007,
        copiasVendidas: 8363
      },
      {
        titulo: 'in aliquip ullamco',
        canciones: 10,
        anioLanzamiento: 1998,
        copiasVendidas: 52119
      }
    ],
    genero: 'grunge'
  },
  {
    nombre: 'Marisa Stanley',
    solista: false,
    edad: 34,
    instrumento: 'batería',
    paisNacimiento: 'Haiti',
    ultimoRecital: {
      pais: 'Somalia',
      anio: 2007,
      entradasVendidas: 60615,
      costoEntradas: 2168
    },
    discos: [
      {
        titulo: 'ad sint sint',
        canciones: 10,
        anioLanzamiento: 2016,
        copiasVendidas: 58082
      },
      {
        titulo: 'cillum ut anim',
        canciones: 6,
        anioLanzamiento: 2007,
        copiasVendidas: 82608
      },
      {
        titulo: 'sint cupidatat laborum',
        canciones: 7,
        anioLanzamiento: 2019,
        copiasVendidas: 90684
      },
      {
        titulo: 'nulla in culpa',
        canciones: 8,
        anioLanzamiento: 2008,
        copiasVendidas: 12820
      },
      {
        titulo: 'velit consectetur excepteur',
        canciones: 6,
        anioLanzamiento: 2017,
        copiasVendidas: 60323
      },
      {
        titulo: 'et in ad',
        canciones: 12,
        anioLanzamiento: 2016,
        copiasVendidas: 62312
      },
      {
        titulo: 'non nostrud laborum',
        canciones: 13,
        anioLanzamiento: 2012,
        copiasVendidas: 64625
      },
      {
        titulo: 'ut nostrud magna',
        canciones: 6,
        anioLanzamiento: 2018,
        copiasVendidas: 62709
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Cora Huff',
    solista: true,
    edad: 31,
    instrumento: 'guitarra',
    paisNacimiento: 'Luxembourg',
    ultimoRecital: {
      pais: 'Gabon',
      anio: 2006,
      entradasVendidas: 32101,
      costoEntradas: 1000
    },
    discos: [
      {
        titulo: 'culpa ullamco sint',
        canciones: 15,
        anioLanzamiento: 1993,
        copiasVendidas: 72758
      },
      {
        titulo: 'deserunt nulla id',
        canciones: 6,
        anioLanzamiento: 2017,
        copiasVendidas: 35386
      },
      {
        titulo: 'sunt deserunt in',
        canciones: 10,
        anioLanzamiento: 2013,
        copiasVendidas: 4619
      },
      {
        titulo: 'ullamco occaecat deserunt',
        canciones: 14,
        anioLanzamiento: 2013,
        copiasVendidas: 93722
      },
      {
        titulo: 'aliquip in elit',
        canciones: 7,
        anioLanzamiento: 2015,
        copiasVendidas: 7342
      },
      {
        titulo: 'excepteur aute velit',
        canciones: 10,
        anioLanzamiento: 1991,
        copiasVendidas: 28283
      },
      {
        titulo: 'velit irure laborum',
        canciones: 8,
        anioLanzamiento: 2016,
        copiasVendidas: 86516
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Concepcion Williamson',
    solista: true,
    edad: 34,
    instrumento: 'bajo',
    paisNacimiento: 'San Marino',
    ultimoRecital: {
      pais: 'Poland',
      anio: 2004,
      entradasVendidas: 84996,
      costoEntradas: 919
    },
    discos: [
      {
        titulo: 'enim aliqua voluptate',
        canciones: 11,
        anioLanzamiento: 2018,
        copiasVendidas: 15622
      },
      {
        titulo: 'pariatur sint esse',
        canciones: 12,
        anioLanzamiento: 2016,
        copiasVendidas: 60123
      },
      {
        titulo: 'et amet mollit',
        canciones: 8,
        anioLanzamiento: 2014,
        copiasVendidas: 35839
      },
      {
        titulo: 'amet consequat culpa',
        canciones: 13,
        anioLanzamiento: 2013,
        copiasVendidas: 86646
      },
      {
        titulo: 'ut nostrud commodo',
        canciones: 7,
        anioLanzamiento: 2017,
        copiasVendidas: 4198
      },
      {
        titulo: 'id aliquip ullamco',
        canciones: 8,
        anioLanzamiento: 1991,
        copiasVendidas: 6620
      },
      {
        titulo: 'duis esse sint',
        canciones: 8,
        anioLanzamiento: 1998,
        copiasVendidas: 67319
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Robin Carroll',
    solista: true,
    edad: 30,
    instrumento: 'batería',
    paisNacimiento: 'Saint Vincent and The Grenadines',
    ultimoRecital: {
      pais: 'US Minor Outlying Islands',
      anio: 2018,
      entradasVendidas: 32967,
      costoEntradas: 1066
    },
    discos: [
      {
        titulo: 'enim deserunt nisi',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 97839
      },
      {
        titulo: 'exercitation nulla consectetur',
        canciones: 9,
        anioLanzamiento: 2001,
        copiasVendidas: 66897
      },
      {
        titulo: 'nostrud Lorem nisi',
        canciones: 14,
        anioLanzamiento: 2011,
        copiasVendidas: 29008
      }
    ],
    genero: 'punk'
  },
  {
    nombre: 'Page Spence',
    solista: false,
    edad: 30,
    instrumento: 'teclado',
    paisNacimiento: 'Belarus',
    ultimoRecital: {
      pais: 'Italy',
      anio: 2006,
      entradasVendidas: 97250,
      costoEntradas: 2795
    },
    discos: [
      {
        titulo: 'Lorem magna culpa',
        canciones: 9,
        anioLanzamiento: 2006,
        copiasVendidas: 51889
      },
      {
        titulo: 'laboris in quis',
        canciones: 11,
        anioLanzamiento: 1991,
        copiasVendidas: 75151
      },
      {
        titulo: 'irure occaecat deserunt',
        canciones: 13,
        anioLanzamiento: 2013,
        copiasVendidas: 14708
      },
      {
        titulo: 'ullamco tempor sunt',
        canciones: 7,
        anioLanzamiento: 2005,
        copiasVendidas: 42130
      },
      {
        titulo: 'ipsum magna laboris',
        canciones: 12,
        anioLanzamiento: 2008,
        copiasVendidas: 93096
      },
      {
        titulo: 'nostrud occaecat cupidatat',
        canciones: 12,
        anioLanzamiento: 2018,
        copiasVendidas: 71893
      },
      {
        titulo: 'cupidatat nostrud aliqua',
        canciones: 8,
        anioLanzamiento: 1993,
        copiasVendidas: 67676
      },
      {
        titulo: 'magna in cupidatat',
        canciones: 14,
        anioLanzamiento: 1999,
        copiasVendidas: 16749
      }
    ],
    genero: 'heavy'
  },
  {
    nombre: 'Terri Hendrix',
    solista: true,
    edad: 39,
    instrumento: 'bajo',
    paisNacimiento: 'Spain',
    ultimoRecital: {
      pais: 'Liechtenstein',
      anio: 2017,
      entradasVendidas: 60104,
      costoEntradas: 2191
    },
    discos: [
      {
        titulo: 'incididunt adipisicing elit',
        canciones: 9,
        anioLanzamiento: 1998,
        copiasVendidas: 69868
      },
      {
        titulo: 'laborum voluptate est',
        canciones: 12,
        anioLanzamiento: 2004,
        copiasVendidas: 15751
      }
    ],
    genero: 'grunge'
  }
]
