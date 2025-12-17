import React from 'react';
/* LOCAL SETUP INSTRUCTIONS:
  1. Run: npm install lucide-react
  2. If you want to use the Tailwind CDN (simplest), add this to your public/index.html <head>:
     <script src="https://cdn.tailwindcss.com"></script>
  3. If you followed the full Tailwind install, ensure you have:
     import './index.css'; 
     at the top of this file or your main.jsx.
*/

import {
    FileText,
    Github,
    Linkedin,
    Mail,
    MapPin,
    GraduationCap,
    Briefcase,
    Database, 
    BarChart3, 
    Code, 
    LayoutGrid, 
    Table, 
    Sigma, 
    Send,
    Award,
    ExternalLink
} from 'lucide-react';

const PortfolioData = {
    name: "Saurav Dev",
    title: "Data Analyst | Business Analyst | Data Visualization Specialist",
    location: "Based in Ottawa, Canada",
    introduction: "An enthusiastic Business Analytics postgraduate student skilled in translating complex business requirements into data-driven solutions. Proven experience in creating interactive dashboards using Power BI, optimizing data storage with PostgreSQL, and driving actionable insights through rigorous data analysis and visualization.",
    resumeLink: "https://sauravdev-resume.tiiny.site/", 
    socials: [
        { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/sauravdev2058/' },
        { name: 'GitHub', icon: Github, link: 'https://github.com/SauravDev2058' },
        { name: 'Email', icon: Mail, link: 'mailto:sauravdev2058@gmail.com' },
    ],
    contactEmail: "sauravdev2058@gmail.com",
    githubProjectsLink: 'https://github.com/SauravDev2058',
    
    skills: [
        { name: 'Power BI / DAX', icon: BarChart3, color: 'text-blue-500', description: 'Advanced dashboard creation, ETL, and data model optimization.' },
        { name: 'PostgreSQL / SQL', icon: Database, color: 'text-green-600', description: 'Efficient data querying, manipulation (Joins, CTES, Window Functions), and database management.' },
        { name: 'Python', icon: Code, color: 'text-yellow-600', description: 'Data processing, scripting, and automation using Pandas and NumPy.' },
        { name: 'Excel', icon: Table, color: 'text-emerald-500', description: 'Pivot Tables, VLOOKUP/XLOOKUP, Power Query for data cleansing.' },
        { name: 'Statistical Modeling', icon: Sigma, color: 'text-pink-500', description: 'Applying statistical methods for prediction and inference.' },
        { name: 'Business Intelligence', icon: LayoutGrid, color: 'text-purple-500', description: 'Translating raw data into strategic business insights.' },
    ],

    experience: [
        {
            role: 'Node.js Intern',
            company: 'Hunchha Digital Agency - Itahari, Nepal',
            duration: 'Jan 2023 - Mar 2023',
            description: [
                'Wrote server-side code using Node.js to handle client requests and perform server operations.',
                'Implemented and optimized data storage and retrieval using MongoDB and MySQL.',
                'Utilized Express.js to create robust and scalable web applications.'
            ]
        }
    ],

    education: [
        { 
            degree: 'PG Diploma in Business Analytics', 
            institution: 'Lambton College - Ottawa, ON', 
            duration: 'Sept 2024 - Present',
            relevantCourses: 'Data Visualization, Business Intelligence Tools, SQL for Data Analysis',
            color: 'text-blue-600' 
        },
        { 
            degree: 'BSc. (Hons) Computing', 
            institution: 'Itahari International College - Dharan, Nepal', 
            duration: 'Dec 2020 - Dec 2023',
            relevantCourses: 'Foundation in computing principles and software development.',
            color: 'text-green-600' 
        },
    ],

    certifications: [
        { name: 'Introduction to Data Analytics', issuer: 'NSW-Institute of applied Technology', credId: 'dAXioKkAWM' },
        { name: 'SQL for Data Analysis', issuer: 'LinkedIn Learning', credId: '' },
        { name: 'Lean Six Sigma - White Belt', issuer: 'Six Sigma Society', credId: '131020556' },
    ]
};

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{title}</h2>
        {subtitle && <p className="text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="w-20 h-1.5 bg-black mx-auto mt-4 rounded-full"></div>
    </div>
);

const App = () => {
    const sections = [
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'experience', name: 'Experience' },
        { id: 'education', name: 'Education' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-black selection:text-white">
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tighter text-black uppercase">
                        {PortfolioData.name}<span className="text-gray-400 font-light">.Analytics</span>
                    </div>
                    
                    <nav className="hidden lg:flex items-center space-x-8">
                        {sections.map(s => (
                            <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                                {s.name}
                            </a>
                        ))}
                    </nav>

                    <a 
                        href={PortfolioData.resumeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-black/10"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                </div>
            </header>

            <main>
                {/* Hero / About Section */}
                <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
                    <div className="absolute top-20 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
                                <MapPin className="w-3 h-3 mr-1.5" />
                                {PortfolioData.location}
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-extrabold text-black mb-6 tracking-tight">
                                Turning Data into <span className="text-gray-400">Insights.</span>
                            </h1>
                            <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-8 max-w-3xl">
                                {PortfolioData.title}
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mb-10">
                                {PortfolioData.introduction}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {PortfolioData.socials.map(social => (
                                    <a 
                                        key={social.name}
                                        href={social.link} 
                                        target="_blank" 
                                        className="flex items-center space-x-2 px-6 py-3 border border-gray-200 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 font-medium"
                                    >
                                        <social.icon className="w-5 h-5" />
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader title="Expertise" subtitle="My core technical competencies in the data landscape." />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PortfolioData.skills.map((skill, index) => (
                                <div key={index} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                                    <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-black group-hover:text-white`}>
                                        <skill.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3">{skill.name}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience & Education Grid */}
                <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Experience Column */}
                            <div>
                                <h2 className="text-3xl font-bold text-black mb-10 flex items-center">
                                    <Briefcase className="w-8 h-8 mr-4 text-gray-400" />
                                    Experience
                                </h2>
                                <div className="space-y-8">
                                    {PortfolioData.experience.map((exp, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-gray-200 pb-2">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-white"></div>
                                            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                                                <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">{exp.duration}</span>
                                            </div>
                                            <p className="text-gray-600 font-medium mb-4">{exp.company}</p>
                                            <ul className="space-y-2">
                                                {exp.description.map((point, i) => (
                                                    <li key={i} className="text-sm text-gray-500 flex items-start">
                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education Column */}
                            <div id="education" className="scroll-mt-20">
                                <h2 className="text-3xl font-bold text-black mb-10 flex items-center">
                                    <GraduationCap className="w-8 h-8 mr-4 text-gray-400" />
                                    Education
                                </h2>
                                <div className="space-y-8">
                                    {PortfolioData.education.map((edu, index) => (
                                        <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold text-black leading-snug">{edu.degree}</h3>
                                                <span className="text-xs font-mono text-gray-400">{edu.duration}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-600 mb-3">{edu.institution}</p>
                                            <div className="text-xs text-gray-500 leading-relaxed italic">
                                                Focus: {edu.relevantCourses}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h2 className="text-3xl font-bold text-black mt-16 mb-8 flex items-center">
                                    <Award className="w-8 h-8 mr-4 text-gray-400" />
                                    Certifications
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {PortfolioData.certifications.map((cert, index) => (
                                        <div key={index} className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                            <h4 className="text-sm font-bold text-black mb-1">{cert.name}</h4>
                                            <p className="text-xs text-gray-500">{cert.issuer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Link Section */}
                <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white scroll-mt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <SectionHeader title={<span className="text-white">Selected Projects</span>} />
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                            My detailed projects, including Power BI dashboards, SQL analyses, and Python processing scripts, are hosted on GitHub.
                        </p>
                        <a 
                            href={PortfolioData.githubProjectsLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            <Github className="w-6 h-6" />
                            <span>Explore My GitHub Profile</span>
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
                    <div className="max-w-xl mx-auto text-center">
                        <SectionHeader title="Let's Connect" subtitle="I'm currently seeking opportunities in Data & Business Analytics." />
                        <a 
                            href={`mailto:${PortfolioData.contactEmail}`}
                            className="inline-flex items-center space-x-4 px-10 py-4 bg-black text-white rounded-full font-bold shadow-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 mb-10"
                        >
                            <Send className="w-5 h-5" />
                            <span>Send a Message</span>
                        </a>
                        
                        <div className="pt-10 border-t border-gray-100 flex justify-center space-x-8">
                            {PortfolioData.socials.map(social => (
                                <a key={social.name} href={social.link} target="_blank" className="text-gray-400 hover:text-black transition-colors transform hover:scale-110">
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} {PortfolioData.name} — Ottawa, Canada
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;