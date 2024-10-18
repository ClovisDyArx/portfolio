import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'clovis.lechien@epita.fr',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/ClovisDyArx',
      Icon: SiGithub
    },
    /*{
      name: 'Youtube',
      href: 'https://youtube.com/',
      Icon: SiYoutube
    },
    {
      name: 'X',
      href: 'https://x.com/',
      Icon: SiX
    },*/
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/clovis-febvre-lechien/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
