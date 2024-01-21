import {
  facebookIcon,
  gmailIcon,
  instagramIcon,
  messengerIcon,
  whatsappIcon,
} from '../../../public/icons';
import { contactOptionProps } from './types';

export const contactOptions: contactOptionProps[] = [
  {
    name: 'Whatsapp',
    href: 'https://whatsapp.com/hypercut_media',
    icon: whatsappIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/hypercut_media',
    icon: instagramIcon,
  },
  {
    name: 'Messenger',
    href: 'https://messenger.com/hypercut_media',
    icon: messengerIcon,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/hypercut_media',
    icon: facebookIcon,
  },
  {
    name: 'Gmail',
    href: 'https://gmail.com/hypercut_media',
    icon: gmailIcon,
  },
];
