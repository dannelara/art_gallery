import { Artist } from "../types";

const artists: Artist [] = [
    {
    id: 1,
      hero: "/images/new/11.jpg",
      name: "Salomon",
      details: {
        images: [
          { src: "/images/new/7.png", title: "Artwork 1" },
          { src: "/images/new/11.jpg", title: "Artwork 2" },
          { src: "/images/new/2.png", title: "Artwork 3" },

        ],
      },
      followers: 117,
      createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
      monthlyUpload: 42,
    },
    {
      id: 2,
      hero: "/images/new/13.png",
      name: "Rahiros",
      details: {
        images: [
          { src: '/images/new/3.png', title: 'Artwork 1' },
          {src: '/images/new/5.png', title: 'Artwork 2' },
          { src: '/images/new/8.png', title: 'Artwork 3' },
          { src: '/images/new/9.png', title: 'Artwork 4' },
          { src: '/images/new/12.png', title: 'Artwork 5' },

        ],
      },
      followers: 336,
      createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
      monthlyUpload: 32,
    },
    {
      id: 3,
      hero: "/images/new/1.png",
      name: "Jane Smith",
      details: {
        images: [
          { src: '/images/new/6.png', title: 'Artwork 1' },
          { src: '/images/new/14.png', title: 'Artwork 2' },
          { src: '/images/new/7.png', title: 'Artwork 3' },
          { src: "/images/new/1.png", title: "Artwork 4" },
        ],
      },
      followers: 721,
        createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
        monthlyUpload: 12,
    },

  ];
  

export { artists }