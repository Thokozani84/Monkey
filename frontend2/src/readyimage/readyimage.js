import header_ from "../assets/header.webp";
import card1_ from "../assets/card.webp";
import card2_ from "../assets/card2.webp";
import thor_ from "../assets/thor.jpeg";
import xrepo_ from "../assets/xrepo.jpeg";
import sizokthola_ from "../assets/sizokthola.jpeg";
import ironman_ from "../assets/ironman.jpeg";
import about_ from "../assets/about.jpg";
import kool_ from "../assets/kool.jpeg";

// Define the images
export const images = {
  header: header_,
  card1: card1_,
  xrepo: xrepo_,
  umkhokha: card2_,
  thor: thor_,
  sizokthola: sizokthola_,
  ironman: ironman_,
  about: about_,
  kool: kool_,
};

export const fakeApi = [
  { image: images.card1, title: "Dlozilami", section: "dlozilami" },
  { image: images.xrepo, title: "X-Repo", section: "xrepo" },
  { image: images.sizokthola, title: "Sizokthola", section: "sizokthola" },
  { image: images.kool, title: "Rea Stotela", section: "reastotela" },
  { image: images.header, title: "Skeem Saam", section: "skeemsam" },
  { image: images.ironman, title: "", section: "ironman" }, // Added a new entry as an example
];