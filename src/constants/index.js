// SocialMediaSelect imports
import {
  FaGlobe,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

// Navnar
export const Links = [
  { to: "/", label: "Home", id: "1" },
  { to: "/create", label: "Create", id: "2" },
  { to: "/templates", label: "Templates", id: "3" },
  { to: "/ats-guidelines", label: "ATS Guidelines", id: "4" },
];

// SocialMediaSelect
export const SocialMediaSelectOptions = [
  {
    id: "1",
    value: "website",
    label: "Website",
    icon: FaGlobe,
  },
  { id: "2", value: "twitter", label: "Twitter", icon: FaTwitter },
  { id: "3", value: "facebook", label: "Facebook", icon: FaFacebook },
  { id: "4", value: "youtube", label: "Youtube", icon: FaYoutube },
  { id: "5", value: "linkedin", label: "LinkedIn", icon: FaLinkedin },
  { id: "6", value: "instagram", label: "Instagram", icon: AiFillInstagram },
  { id: "7", value: "leetcode", label: "Leetcode", icon: SiLeetcode },
];
