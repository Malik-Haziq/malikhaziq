export type Blog = {
  id: number;
  title: string;
  summary: string;
  link: string;
  publishedAt: string;
};

export const allBlogs: Blog[] = [
  {
    id: 1,
    title: "Limitations of React JS",
    summary:
      "React.js is a popular JavaScript library. It's great for building fast and interactive user interfaces. But, like anything else, it has its own quirks and challenges that developers need to understand.",
    link: "https://dev.to/malikhaziq/limitations-of-react-js-28c5",
    publishedAt: "Dec 30, 2024",
  },
  {
    id: 2,
    title: "10 APIs for your projects",
    summary: "Here are top 10 Web APIs for your web projects.",
    link: "https://dev.to/malikhaziq/10-web-apis-for-your-projects-65o",
    publishedAt: "Feb 27, 2023",
  },
  {
    id: 3,
    title: "Git is a Your Best Friend. Why?",
    summary:
      "Version control systems are essential tools in software development, and Git is by far the most popular...",
    link: "https://dev.to/malikhaziq/git-why-version-control-is-a-developers-best-friend-3fmh",
    publishedAt: "Sep 15, 2024",
  },
  {
    id: 4,
    title: "Why I Built a VS Code Theme That Feels Like a Warm Blanket",
    summary:
      "I’ll be real: I didn’t set out to make yet another dark theme. I just wanted to stop rubbing my eyes like a sleepy toddler by 10 PM.",
    link: "https://dev.to/malikhaziq/why-i-built-a-vs-code-theme-that-feels-like-a-warm-blanket-32nh",
    publishedAt: "Mar 23, 2025",
  },
  {
    id: 5,
    title: "HTML cool things",
    summary: "Here are some HTML tips and tricks that people usually don't know.",
    link: "https://dev.to/malikhaziq/html-tips-and-tricks-309d",
    publishedAt: "Jan 29, 2023",
  },
  {
    id: 6,
    title: "Javascript mistakes that beginners do",
    summary: "Here are some common mistakes that are often done accidentally by beginners in JavaScript:",
    link: "https://dev.to/malikhaziq/javascript-little-mistakes-that-can-cause-bugs-in-code-36i8",
    publishedAt: "Jan 26, 2023",
  },
  {
    id: 7,
    title: "Javascript new features that introduced in ECMAScript 2020",
    summary: "Here are some of the new features introduced in ECMAScript 2020:",
    link: "https://dev.to/malikhaziq/javascript-new-features-that-introduced-in-ecmascript-2020-2cop",
    publishedAt: "Jan 20, 2023",
  },
  {
    id: 8,
    title:
      "Techniques for optimizing JavaScript performance and reducing load times",
    summary: "Here are a few techniques for optimizing JavaScript performance and reducing load times:",
    link: "https://dev.to/malikhaziq/techniques-for-optimizing-javascript-performance-and-reducing-load-times-552l",
    publishedAt: "Jan 18, 2023",
  },
  {
    id: 9,
    title: "The limitations of JavaScript as a programming language",
    summary: "JavaScript, like any programming language, has its own set of limitations. Here are a few examples of the limitations of JavaScript:",
    link: "https://dev.to/malikhaziq/the-limitations-of-javascript-as-a-programming-language-2fd7",
    publishedAt: "Jan 16, 2023",
  },
  {
    id: 10,
    title:
      "Make your JavaScript code more efficient, readable, and maintainable.(Part 2)",
    summary: "Use clear and meaningful variable and function names:",
    link: "https://dev.to/malikhaziq/make-your-javascript-code-more-efficient-readable-and-maintainablepart-2-1n8k",
    publishedAt: "Jan 13, 2023",
  },
  {
    id: 11,
    title:
      "make your JavaScript code more efficient, readable, and maintainable.(Part 1)",
    summary: "Use let and const for variable declarations:",
    link: "https://dev.to/malikhaziq/make-your-javascript-code-more-efficient-readable-and-maintainable-3h12",
    publishedAt: "Jan 11, 2023",
  },
];
