import projectImage from '@/images/project.jpg'
import chat1 from '@/images/chat/chat.png'
import chat2 from '@/images/chat/chat_sign_in.png'
import chat3 from '@/images/chat/chat_register.png'
import chat4 from '@/images/chat/chat_block.png'
import metablog1 from '@/images/metablog/metablog.png'
import metablog2 from '@/images/metablog/metablog_light.png'
import metablog3 from '@/images/metablog/blogs.png'
import metablog4 from '@/images/metablog/blogs_light.png'
import metablog5 from '@/images/metablog/blog.png'
import metablog6 from '@/images/metablog/blog_light.png'
import metablog7 from '@/images/metablog/authors.png'
import metablog8 from '@/images/metablog/author.png'
import dictionary1 from '@/images/dictionary/dic_text_dark.png'
import dictionary2 from '@/images/dictionary/dic_text_light.png'
import dictionary3 from '@/images/dictionary/dic_dark.png'
import dictionary4 from '@/images/dictionary/dic_light.png'
import dictionary5 from '@/images/dictionary/m_dic_light.png'
import dictionary6 from '@/images/dictionary/m_dic_dark.png'
import ttt1 from '@/images/tic-tac-toe/ttt_new.png'
import ttt2 from '@/images/tic-tac-toe/ttt.png'
import ttt3 from '@/images/tic-tac-toe/ttt_win.png'
import ttt4 from '@/images/tic-tac-toe/ttt_lose.png'
import ttt5 from '@/images/tic-tac-toe/ttt_draw.png'
import todo1 from '@/images/todo/todo_dark.png'
import todo2 from '@/images/todo/todo_light.png'
import todo3 from '@/images/todo/m_todo_dark.png'
import todo4 from '@/images/todo/m_todo_light.png'
import todo5 from '@/images/todo/todo_active.png'
import todo6 from '@/images/todo/todo_completed.png'
import link1 from '@/images/link-sharing/ls_shared.png'
import link2 from '@/images/link-sharing/ls_links.png'
import link3 from '@/images/link-sharing/ls_profile.png'
import link4 from '@/images/link-sharing/ls_saved.png'
import link5 from '@/images/link-sharing/ls_preview.png'
import link6 from '@/images/link-sharing/ls_login.png'
import link7 from '@/images/link-sharing/ls_register.png'
import link8 from '@/images/link-sharing/m_ls_links.png'
import link9 from '@/images/link-sharing/m_ls_profile.png'
import link10 from '@/images/link-sharing/m_ls_saved.png'
import link11 from '@/images/link-sharing/m_ls_preview.png'
import link12 from '@/images/link-sharing/m_ls_shared.png'

const projectData = [
    {
        id: 1,
        title: 'Chat App',
        tags: ['Next.js', 'Tailwind', 'Socket.io', 'Zustand'],
        languages: ['Next.js', 'Tailwind Css', 'Socket.io', 'Zustand'],
        links: ['https://chat-app-liart-eta.vercel.app/', 'https://github.com/Maruf51/chat-app'],
        images: [chat1, chat2, chat3, chat4],
        description: [
            'Chat with ease on Chat App, where every conversation is seamless and secure.',
            'Join Chat App for instant messaging and vibrant discussions!',
            'Experience real-time chatting with Chat App fast, fun, and user-friendly.',
            'Connect and communicate effortlessly on Chat App, your go-to chat hub.',
            'Meet new people and share ideas on Chat App, where chatting is made simple.',
        ]
    },
    {
        id: 2,
        title: 'Meta Blog',
        tags: ['Next.js', 'Tailwind', 'Typescript'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://meta-blog-seven.vercel.app/', 'https://github.com/Maruf51/chat-app'],
        images: [metablog1, metablog2, metablog5, metablog6, metablog3, metablog4, metablog7, metablog8],
        description: [
            'User can view blogs published by different authors.',
            'The blogs are uploaded or updated or deleted from a dashboard designed with shadcn/ui, Typescript and Next.js.',
            "All the api's are called from Next.js server.",
            'The website has dual theme mode(Light & Dark).',
            'The design is provided by my brother.'
        ]
    },
    {
        id: 3,
        title: 'Dictionary',
        tags: ['Next.js', 'Tailwind', 'Typescript'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://dictionary-gamma-beryl.vercel.app/', 'https://github.com/Maruf51/dictionary'],
        images: [dictionary1, dictionary2, dictionary3, dictionary4, dictionary5, dictionary6],
        description: [
            'Dictionary, an interactive dictionary that helps you explore the meanings of any word.',
            "Simply search for a word, and you'll find its definition, usage examples, and information about its grammatical category—whether it's a noun, verb, pronoun, or more.",
            "Additionally, you can listen to the pronunciation of each word to ensure you're saying it correctly.",
            "Our platform is designed with an intuitive interface, offering a seamless experience with both light and dark mode themes to suit your preference.",
            "The website is powered by cutting-edge technologies like Next.js and TypeScript, ensuring fast and reliable performance."
        ]
    },
    {
        id: 4,
        title: 'Tic Tac Toe',
        tags: ['Next.js', 'Tailwind', 'Typescript'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://tic-tac-toe-seven-alpha-61.vercel.app/', 'https://github.com/Maruf51/tic-tac-toe'],
        images: [ttt1, ttt2, ttt3, ttt4, ttt5],
        description: [
            "Tic Tac Toe, a fun and interactive Tic-Tac-Toe game where you can play against a bot or challenge a friend!",
            "play against an easy bot that takes random actions, or test your skills against a hard bot that calculates its moves to either win or block your chances of winning.",
            "Plus, your scores are automatically saved in your browser's localStorage, so you can track your progress and see how well you're improving over time.",
            "The website features an intuitive, user-friendly design for players of all ages, providing hours of fun and challenge."
        ]
    },
    {
        id: 5,
        title: 'TODO',
        tags: ['Next.js', 'Tailwind', 'Typescript', 'Drag/Drop'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://todo-khaki-rho.vercel.app/', 'https://github.com/Maruf51/todo'],
        images: [todo1, todo2, todo3, todo4, todo5, todo6],
        description: [
            "TODO, a versatile and user-friendly To-Do list manager designed to help you stay organized.",
            "You can easily add new tasks, mark them as completed, or remove them when they're no longer needed.",
            "The drag-and-drop feature allows you to effortlessly rearrange tasks, keeping everything in order.",
            "Tasks are organized into three sections: 'All' (where all tasks are listed), 'Active' (showing only incomplete tasks), and 'Completed' (where you can view finished tasks).",
            "Additionally, your tasks are saved to localStorage, ensuring that your progress is always preserved.",
            "Whether you're managing daily to-dos or long-term projects, my website provides a smooth and effective way to organize and track your tasks."
        ]
    },
    {
        id: 6,
        title: 'Link Sharing',
        tags: ['Next.js', 'Tailwind', 'Typescript'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://link-sharing-liart.vercel.app/home', 'https://github.com/Maruf51/link-sharing'],
        images: [link1, link2, link3, link4, link5, link6, link7, link8, link9, link10, link11, link12],
        description: [
            "Link Sharing, a dynamic and customizable platform that allows users to showcase their social media profiles in one convenient place.",
            "Users can create an account, log in, and easily customize their profile by linking their various social media accounts, making it simple for viewers to connect with them on their favorite platforms.",
            "With the profile editor, users can modify and update their links, ensuring that their profile stays current and reflects their social presence accurately.",
            "The 'Saved' section enables users to store other profiles they find interesting, allowing for easy access and reference in the future.",
            "Preview Mode gives users a real-time look at how their profile will appear to visitors, ensuring a seamless experience before sharing it with others.",
            "Once satisfied with their profile, users receive a unique link that they can share, directing others straight to their personalized profile page.",
            "Link Sharing offers a smooth, intuitive way to present and share social media profiles, helping users connect with a broader audience and manage their online presence effectively.",
        ]
    },
    {
        id: 7,
        title: 'Meta Blog NEXT 7',
        tags: ['Web design'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
    },
    {
        id: 8,
        title: 'Meta Blog NEXT 8',
        tags: ['Web development'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
    },
];

export {
    projectData
}