const { v4: uuidv4 } = require("uuid");
uuidv4();

const ToDo = [
  {
    id: uuidv4(),
    title: "Create a new header for website.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "20 Dec 2023",
    endDate: "22 Dec 2023",
    assignee: "Ashutosh Singh",
    Reporter: "Bharat",
  },
  {
    id: uuidv4(),
    title: "Create a new footer for website.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "22 Dec 2023",
    endDate: "25 Dec 2023",
    assignee: "Ashutosh Singh",
    Reporter: "Madhav",
  },
  {
    id: uuidv4(),
    title: "Create a new hero section for website.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "20 Dec 2023",
    endDate: "22 Dec 2023",
    assignee: "Akanksha Jain",
    Reporter: "Madhav",
  },
  {
    id: uuidv4(),
    title: "Create a layout for the website.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "20 Dec 2023",
    endDate: "22 Dec 2023",
    assignee: "Ashutosh Singh",
    Reporter: "Bharay",
  },
  {
    id: uuidv4(),
    title: "Create a new header for website.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "20 Dec 2023",
    endDate: "22 Dec 2023",
    assignee: "Shrey Trivedi",
    Reporter: "Madhav",
  },
  {
    id: uuidv4(),
    title: "Create an API for backend.",
    taskStatus: "ToDo",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "25 Dec 2023",
    endDate: "28 Dec 2023",
    assignee: "Ashutosh Singh",
    Reporter: "Bharat",
  },
];
const InProgress = [
  {
    id: uuidv4(),
    title: "Create an API for profile",
    taskStatus: "InProgress",
    sprint: "12",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "10 Dec 2023",
    endDate: "14 Dec 2023",
    assignee: "Ashutosh Singh",
    Reporter: "Bharat",
  },
  {
    id: uuidv4(),
    title: "Create a new footer for website.",
    taskStatus: "InProgress",
    sprint: "11",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    startDate: "25 Dec 2023",
    endDate: "18 Dec 2023",
    assignee: "Shrey Trivedi",
    Reporter: "Madhav",
  },
];
const InTesting = [];
const Deployed = [];
const ToDoTasks = {
  [uuidv4()]: {
    title: "To Do",
    items: ToDo,
  },
  [uuidv4()]: {
    title: "In Progress",
    items: InProgress,
  },
  [uuidv4()]: {
    title: "In Testing",
    items: InTesting,
  },
  [uuidv4()]: {
    title: "Deployed",
    items: Deployed,
  },
};

module.exports = {
  ToDoTasks,
};
