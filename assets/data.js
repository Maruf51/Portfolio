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
import tm1 from '@/images/true-message/tm_dashboard.png'
import tm2 from '@/images/true-message/tm_dashboard_light.png'
import tm3 from '@/images/true-message/tm_message_dark.png'
import tm4 from '@/images/true-message/tm_message_light.png'
import tm5 from '@/images/true-message/tm_signin.png'
import tm6 from '@/images/true-message/tm_register.png'
import tm7 from '@/images/true-message/tm_message_image.png'
import tm8 from '@/images/true-message/m_tm_dashboard.png'
import tm9 from '@/images/true-message/m_tm_message.png'
import ubuntu9 from '@/images/ubuntu/ubuntu_dark.png'
import ubuntu2 from '@/images/ubuntu/ubuntu_light.png'
import ubuntu3 from '@/images/ubuntu/ubuntu.png'
import ubuntu4 from '@/images/ubuntu/ubuntu_desktop.png'
import ubuntu5 from '@/images/ubuntu/ubuntu_files.png'
import ubuntu6 from '@/images/ubuntu/ubuntu_firefox.png'
import ubuntu7 from '@/images/ubuntu/ubuntu_settings.png'
import ubuntu8 from '@/images/ubuntu/ubuntu_trash.png'
import ubuntu1 from '@/images/ubuntu/ubuntu_start.png'

const projectData = [
    {
        id: 8,
        title: 'Ubuntu Desktop',
        tags: ['Next.js', 'Tailwind', 'Typescript', 'Zustand', 'Drag/Drop'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://ubuntu-desktop-blue.vercel.app/', 'https://github.com/Maruf51/ubuntu-desktop'],
        images: [ubuntu1, ubuntu2, ubuntu3, ubuntu4, ubuntu5, ubuntu6, ubuntu7, ubuntu8, ubuntu9],
        description: [
            "Ubuntu Desktop, a fully interactive web-based desktop environment that mimics the look and feel of the popular Ubuntu operating system.",
            "After logging in with a pre-set password, users are greeted with a familiar Ubuntu desktop interface, featuring a navigation bar, sidebar, and a start menu for easy access to apps and settings.",
            "The sidebar includes essential icons like Firefox, Files, Software Update, Settings, and Portfolio, allowing users to seamlessly switch between applications.",
            "In the Firefox app, users can browse the web by entering web addresses directly. The Files app lets users manage their file system, offering folder creation, renaming, deletion, and access to the Trash folder for recovery or deletion of files.",
            "The Settings app enables users to customize their desktop experience, from changing the theme to setting a personalized wallpaper.",
            "The intuitive Start Menu and Power Menu provide quick access to various applications, with a focus on usability and navigation.",
            "At the center of the navigation bar, the Date and Time display allows users to check and interact with their notifications by simply clicking it.",
            "User interactions are smooth and responsive, including the ability to resize, move, minimize, maximize, or close windows. Right-click context menus are available everywhere to enhance usability and user control.",
            "Ubuntu Desktop offers a fully functional and interactive desktop experience within a web browser, combining the best of Ubuntu's design with modern web technology."
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
            "Meta Blog, a user-friendly and dynamic blog publishing platform designed for seamless blog discovery and management.",
            "The landing page features the latest blogs, giving users an immediate view of the most recent content. The blogs page allows easy access to all available blogs, while the search section provides a quick way to find specific blogs based on keywords.",
            "Each blog is displayed with its unique content and can be accessed through a dedicated blog page, where users can explore in-depth articles. Authors are also highlighted with a detailed author page, showcasing information about the author and linking to all of their published works.",
            "The site is designed for easy navigation, with an intuitive layout for users to browse through blogs, explore author profiles, and discover new content.",
            "On the backend, blogs and author data are managed through a separate dashboard where admins can publish, edit, and manage content effortlessly. The dashboard allows for seamless publishing and updating of blogs, ensuring that content is always up-to-date.",
            "Meta Blog provides a comprehensive blogging experience, combining front-end content discovery with an efficient back-end management system."
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
        id: 1,
        title: 'Chat App',
        tags: ['Next.js', 'Tailwind', 'Socket.io', 'Zustand'],
        languages: ['Next.js', 'Tailwind Css', 'Socket.io', 'Zustand'],
        links: ['https://chat-app-liart-eta.vercel.app/', 'https://github.com/Maruf51/chat-app'],
        images: [chat1, chat2, chat3, chat4],
        description: [
            "Chat App, a modern and responsive messaging platform designed for seamless communication between users.",
            "Users can easily create an account or log in to access their personalized chat dashboard. The main page displays their existing conversations, and they can start a new conversation by searching for other users via their email.",
            "With features like adding, blocking, or deleting users, Chat App offers complete control over your interactions. Users can send and receive both text messages and images, making conversations more engaging.",
            "Messages can also be deleted at any time, providing users with the flexibility to manage their chats effectively.",
            "The platform shows the active status of other users, so you know when someone is online and ready to chat.",
            "Responsive design ensures that Chat App provides a smooth experience on both desktop and mobile devices, allowing users to stay connected anytime, anywhere."
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
        id: 7,
        title: 'True Message',
        tags: ['Next.js', 'Tailwind', 'Typescript'],
        languages: ['Next.js', 'Tailwind Css', 'Typescript'],
        links: ['https://true-message.vercel.app', 'https://github.com/Maruf51/true-message'],
        images: [tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9],
        description: [
            "True Message is a unique platform that enables users to receive anonymous messages and images through a personalized link.",
            "After registering and logging into their dashboard, each user is given a unique link with a personalized username. This link can be shared with others, allowing viewers to visit the user's page and send messages and images anonymously or with their name attached.",
            "Messages and images sent to the user are delivered directly to their main dashboard, where they can easily view and manage them.",
            "To maintain control over interactions, users can choose to turn off the 'accept chat' feature at any time, giving them the ability to pause or stop receiving messages if desired.",
            "True Message offers a simple yet effective way to engage with others while ensuring privacy and control over who can contact you."
        ]
    },
];

export {
    projectData
}