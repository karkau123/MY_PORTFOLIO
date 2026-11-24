import { experience, profile, projects } from "../portfolio";

const images = {
  "repo-manager": "repo-manager-mcp.jpg",
  "medical-rag": "medical-rag.jpg",
  "multi-agent-rag": "multiagent-rag.jpg",
};

export const myProjects = projects.map((project) => ({
  ...project,
  image: images[project.id] ? "assets/projects/" + images[project.id] : null,
}));

export const mySocials = [
  { name: "GitHub", href: profile.github, icon: "assets/logos/github.svg" },
  { name: "LinkedIn", href: profile.linkedin, icon: "assets/socials/linkedIn.svg" },
  { name: "LeetCode", href: profile.leetcode, icon: "assets/socials/leetcode.svg" },
];

export const experiences = experience.map(({ company, role, dates, location, highlights, stack }) => ({
  title: role,
  job: company,
  date: dates,
  location,
  contents: highlights,
  stack,
}));

export const reviews = [
  { name: "LeetCode", body: "Peak rating 1721, top 10%, with 850+ problems solved.", img: "https://robohash.org/jack" },
  { name: "CodeChef", body: "Peak rating 1720 and global rank 520 in Starters 120.", img: "https://robohash.org/jill" },
  { name: "HackNITP 2.0", body: "Second place at the NIT Patna hackathon.", img: "https://robohash.org/john" },
  { name: "Google Developer Student Club", body: "Backend team lead and DSA team member, 2023–2025.", img: "https://robohash.org/alice" },
  { name: "NIT Patna", body: "10.0 CGPA in the eighth semester and 8.83/10 overall.", img: "https://robohash.org/bob" },
  { name: "Tata 1mg hackathon", body: "Runner-up at the Tata 1mg hackathon.", img: "https://robohash.org/charlie" },
];
