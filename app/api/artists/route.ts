import { NextResponse } from "next/server"
import { Artist } from "../../../types";

const mockArtists: Artist [] = [
  {
    hero: "/images/new/11.jpg",
    name: "Salomon",
    details: {
      images: [
        { src: "/images/new/7.png", title: "Eden" },
        { src: "/images/new/7.png", title: "Eden" },
        { src: "/images/new/7.png", title: "Eden" },
        { src: "/images/new/7.png", title: "Eden" },
      ],
    },
  },
  {
    hero: "/images/new/13.png",
    name: "Rahiros",
    details: {
      images: [
        { src: '/images/new/7.png', title: 'Eden' },
        {src: '/images/new/7.png', title: 'Eden' },
        { src: '/images/new/7.png', title: 'Eden' },
        { src: '/images/new/7.png', title: 'Eden' },
      ],
    },
  },
  {
    hero: "/images/new/1.png",
    name: "Jane Smith",
    details: {
      images: [
        { src: '/images/new/7.png', title: 'Eden' },
        { src: '/images/new/7.png', title: 'Eden' },
        { src: '/images/new/7.png', title: 'Eden' },
        { src: '/images/new/7.png', title: 'Eden' },
      ],
    },
  },
];

const GET = () => {
    return NextResponse.json(mockArtists)
}

export { GET }