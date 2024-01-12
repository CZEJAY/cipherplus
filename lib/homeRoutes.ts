import {
  Briefcase,
  Github,
  HeartHandshakeIcon,
  Linkedin,
  NewspaperIcon,
  SettingsIcon,
  UserCheck2,
  Users,
} from "lucide-react";
import { FaTelegramPlane, FaTools } from "react-icons/fa";

export const homeRoutes = [
  {
    name: "Available Jobs",
    link: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    name: "Blog",
    link: "/dashboard/blog",
    icon: NewspaperIcon,
  },
  {
    name: "Get Hired",
    link: "/dashboard/create-dev",
    icon: HeartHandshakeIcon,
  },
];

export const sideBarLinks = [
  {
    label: "Tools",
    icon: FaTools,
  },
  {
    label: "Verify Account",
    icon: UserCheck2,
  },
  {
    label: "Communities",
    icon: Users,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
  },
  {
    icon: FaTelegramPlane,
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    href: "https://github.com",
  },
];
