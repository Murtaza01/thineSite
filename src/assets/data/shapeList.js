import music from "../../icons/stuff/music.svg"
import television from "../../icons/stuff/television.svg"
import books from "../../icons/stuff/books.svg"
import education from "../../icons/stuff/education.svg"
import gallery from "../../icons/stuff/gallery.svg"
import movies from "../../icons/stuff/movies.svg"

const shapeList = [
  {
    title: "Music",
    bgPath: `url(${music.src})`,
    shape: "polygon(0 0, 0% 100%, 100% 100%)",
    color: "gray",
    txtPosition: "top-20 left-3",
    position: "left-0 bottom-0",
  },
  {
    title: "books",
    bgPath: `url(${books.src})`,
    shape: "polygon(100% 0, 0% 100%, 100% 100%)",
    color: "violet",
    txtPosition: "bottom-3 right-3",
    position: "bottom-0 right-0",
  },
  {
    title: "education",
    bgPath: `url(${education.src})`,
    shape: "polygon(0 0, 0% 100%, 100% 0)",
    color: "blue",
    txtPosition: "top-3 left-0",
    position: "",
  },
  {
    title: "gallery",
    bgPath: `url(${gallery.src})`,
    shape: "polygon(0 0, 100% 100%, 100% 0)",
    color: "green",
    txtPosition: "top-3 right-3",
    position: "top-0 right-0",
  },
   {
    title: "movies",
    bgPath: `url(${movies.src})`,
    shape: "polygon(100% 0, 0 0, 50% 50%);",
    color: "red",
    txtPosition: "top-8 left-24 -translate-x-1",
    position: "bottom-[-100px] translate-x-[-50%] left-[50%]",
  },

  {
    title: "shows",
    bgPath: `url(${television.src})`,
    shape: "polygon(50% 50%, 0% 100%, 100% 100%);",
    color: "red",
    txtPosition: "bottom-8 left-24 ",
    position: "top-[-100px] translate-x-[-50%] left-[50%]",

  },
 ]

export default shapeList
