import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import VerifiedIcon from '@mui/icons-material/Verified';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

export const ResumeData = {
    work: [
        {
            title: 'توسعه‌دهنده فرانت‌اند',
            desciption: 'شرکت فناوری داده‌پرداز - طراحی و پیاده‌سازی داشبوردهای مدیریتی با React و Material-UI',
            color: 'primary',
            opposite: '۱۴۰۲',
            icon: <CodeIcon />,
            tags: ['React', 'Material-UI', 'Dashboard']
        },
        {
            title: 'برنامه‌نویس وب',
            desciption: 'آژانس دیجیتال مارکتینگ نوآور - توسعه اپلیکیشن‌های تک صفحه‌ای و بهینه‌سازی عملکرد',
            color: 'success',
            opposite: '۱۴۰۰ - ۱۴۰۲',
            icon: <WebIcon />,
            tags: ['SPA', 'Performance', 'Optimization']
        },
        {
            title: 'کارآموز برنامه‌نویسی',
            desciption: 'استارتاپ فناوری اطلاعات - آشنایی با React، Redux و ابزارهای مدرن توسعه وب',
            color: 'info',
            opposite: '۱۳۹۹ - ۱۴۰۰',
            icon: <TerminalIcon />,
            tags: ['React', 'Redux', 'Web Development']
        },
        {
            title: 'طراح وب',
            desciption: 'شرکت طراحی وب رویال - طراحی قالب‌های ریسپانسیو با HTML، CSS و JavaScript',
            color: 'secondary',
            opposite: '۱۳۹۸ - ۱۳۹۹',
            icon: <DesignServicesIcon />,
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive']
        },
        {
            title: 'برنامه‌نویس فریلنسر',
            desciption: 'پروژه‌های مستقل - طراحی و توسعه وب‌سایت برای کسب‌وکارهای کوچک',
            color: 'warning',
            opposite: '۱۳۹۶ - ۱۳۹۸',
            icon: <PersonIcon />,
            tags: ['Freelance', 'Web Design', 'Small Business']
        },
    ],
    experience: [
        {
            title: 'کارشناسی ارشد نرم‌افزار',
            desciption: 'دانشگاه صنعتی شریف - گرایش مهندسی نرم‌افزار، معدل ۱۷.۵',
            color: 'info',
            opposite: '۱۴۰۰ - ۱۴۰۲',
            icon: <SchoolIcon />,
            tags: ['Software Engineering', 'Master', 'Research']
        },
        {
            title: 'کارشناسی کامپیوتر',
            desciption: 'دانشگاه تهران - گرایش فناوری اطلاعات، پروژه پایانی: طراحی سیستم مدیریت محتوا',
            color: 'primary',
            opposite: '۱۳۹۶ - ۱۴۰۰',
            icon: <ComputerIcon />,
            tags: ['Computer Science', 'IT', 'CMS']
        },
        {
            title: 'دوره تخصصی React',
            desciption: 'آکادمی آنلاین کدآموز - آموزش پیشرفته React، Next.js و TypeScript',
            color: 'secondary',
            opposite: '۱۴۰۱',
            icon: <PsychologyIcon />,
            tags: ['React', 'Next.js', 'TypeScript', 'Advanced']
        },
        {
            title: 'گواهینامه جاوااسکریپت',
            desciption: 'FreeCodeCamp - تسلط بر مفاهیم پیشرفته جاوااسکریپت و فریم‌ورک‌های مدرن',
            color: 'success',
            opposite: '۱۳۹۹',
            icon: <VerifiedIcon />,
            tags: ['JavaScript', 'Certificate', 'FreeCodeCamp']
        },
        {
            title: 'مهارت‌های تخصصی',
            desciption: 'React, Next.js, TypeScript, Material-UI, Redux, Git, Agile',
            color: 'warning',
            opposite: '',
            icon: <StorageIcon />,
            tags: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Redux', 'Git', 'Agile']
        },
    ]
};