import { Artist } from "../types";
import { artworks } from "./artworks";



const artists: Artist [] = [
    {
    id: 1,
      hero: "/images/new/11.jpg",
      name: "Salomon",
      details: {
        images: [
            artworks[1],
            artworks[5],
            artworks[11],
        ] ,
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
            artworks[6],
            artworks[2],
            artworks[3],
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
        artworks[10],
        artworks[4],
        artworks[0],
        ],
      },
      followers: 721,
        createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
        monthlyUpload: 12,
    },
  ];
  

export { artists }