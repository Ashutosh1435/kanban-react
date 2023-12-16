import { v4 as uuidv4 } from 'uuid';
import Profile from '../assests/profile.png';

export const avuaRecommendeData = [
  {
    id: "1",
    profile: Profile,
    name: "Ashutosh Singh",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
];
export const Shortlist = [
  {
    id: "12",
    Task: "Fix Styling",
    profile: Profile,
    name: "Akash Singh",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
  {
    id: "13",
    Task: "Fix Styling",
    profile: Profile,
    name: "John Doe",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
];
export const Interview = [
  {
    id: "5",
    Task: "Fix Styling",
    profile: Profile,
    name: "Vaibhav Kumar",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
];
export const otherCandidate = [
  {
    id: "4",
    Task: "Fix Styling",
    profile: Profile,
    name: "Aman Trivedi",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
  {
    id: "2",
    profile: Profile,
    name: "Varsha Kumari",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
  {
    id: "3",
    profile: Profile,
    name: "Albert Hongs",
    role: "Ui/Ux designer",
    company: "Microsoft",
    location: "Chandigarh,India",
  },
];

export const columnsFromBackend = {
    [uuidv4()]: {
        title: 'avua recommended',
        items: avuaRecommendeData,
    },
    [uuidv4()]: {
        title: 'Other Candidate',
        items: otherCandidate,
    },
    [uuidv4()]: {
        title: 'Shortlist',
        items: Shortlist,
    },
    [uuidv4()]: {
        title: 'Interview',
        items: Interview,
    }
};
