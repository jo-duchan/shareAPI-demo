import GithubImg from "@assets/github.png";
import InstagramImg from "@assets/instagram.png";
import MediumImg from "@assets/medium.png";

export interface CardDataType {
  id: string;
  title: string;
  description: string;
  img: string;
  url: string;
}

const cardDataList: CardDataType[] = [
  {
    id: self.crypto.randomUUID(),
    title: "GitHub",
    description: "I try to commit the algorithm I studied to GitHub every day.",
    img: GithubImg,
    url: "https://github.com/jo-duchan",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Instagram",
    description:
      "I communicate with people by uploading memorable things in my daily life.",
    img: InstagramImg,
    url: "https://www.instagram.com/duchan.jo",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Medium",
    description: "I publish my studied programming knowledge on Medium.",
    img: MediumImg,
    url: "https://medium.com/@duchanjo",
  },
];

export default cardDataList;
