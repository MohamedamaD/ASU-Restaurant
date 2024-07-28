import { BiBadge, BiFace, BiHardHat, BiHomeAlt2, BiLogoBlogger, BiSolidConversation } from "react-icons/bi";

export const navLinks = [
  {
    title: "home",
    icon: <BiHomeAlt2 size={40} color="var(--white-color)" />,
  },
  { title: "about", icon: <BiBadge size={40} color="var(--white-color)" /> },
  { title: "chef", icon: <BiFace size={40} color="var(--white-color)" /> },
  { title: "menu", icon: <BiHardHat size={40} color="var(--white-color)" /> },
  {
    title: "blog",
    icon: <BiLogoBlogger size={40} color="var(--white-color)" />,
  },
  {
    title: "contact",
    icon: <BiSolidConversation size={40} color="var(--white-color)" />,
  },
];
