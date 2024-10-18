import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

//TODO: rajouter/modifier les compétences
const skills: Skill[] = [
  {
    name: 'Deep Learning',
    thumbnail: '/images/skills/web-development.jpg',
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'Machine Learning',
    thumbnail: '/images/skills/ui-ux-design.jpg',
    description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability.`
  },
  {
    name: 'Computer Engineering',
    thumbnail: '/images/skills/database-management.jpg',
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'TODO',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Mobile Development entails crafting apps for smartphones and tablets that are both visually appealing and highly functional. It includes a variety of technologies, frameworks, and best practices to provide a seamless user experience on mobile devices.`
  }
];

export { trimLen, skills };
