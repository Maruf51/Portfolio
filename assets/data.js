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
        title: 'Meta Blog NEXT 3',
        tags: ['Web development', 'Web design'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
    },
    {
        id: 4,
        title: 'Meta Blog NEXT 4',
        tags: ['Web development', 'Web design'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
    },
    {
        id: 5,
        title: 'Meta Blog NEXT 5',
        tags: ['Application', 'Web design'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
    },
    {
        id: 6,
        title: 'Meta Blog NEXT 6',
        tags: ['Web development', 'Application'],
        languages: ['Next.js', 'Javascript', 'Tailwind Css', 'Socket.io', 'Socket.io'],
        links: ['www.google.com', 'https://github.com/Maruf51/chat-app'],
        images: [projectImage]
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