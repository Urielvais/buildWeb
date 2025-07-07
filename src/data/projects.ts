import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'חנות קוסמטיקה אונליין',
    description: 'חנות אינטרנטית מלאה עם מגוון מוצרי קוסמטיקה, מערכת תשלומים, וממשק ניהול מתקדם.',
    summary: 'פיתחתי חנות אינטרנטית מקיפה עבור עסק קוסמטיקה מקומי, כולל מערכת ניהול מלאי, עגלת קניות, ותהליך תשלום מאובטח.',
    imageUrl: 'https://images.pexels.com/photos/2535212/pexels-photo-2535212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ecommerce',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe API', 'AWS S3'],
    features: [
      'מערכת ניהול מלאי מתקדמת',
      'עגלת קניות דינמית',
      'מערכת תשלומים מאובטחת',
      'ניהול חשבונות משתמשים',
      'ממשק ניהול למנהל החנות',
      'אופטימיזציה למובייל',
      'מערכת ביקורות ודירוגים'
    ],
    date: '2025-01-15'
  },
  {
    id: '2',
    title: 'דף נחיתה לקורס דיגיטלי',
    description: 'דף נחיתה מותאם אישית עם אנימציות, טפסים, ואלמנטים אינטראקטיביים לקידום מכירות הקורס.',
    summary: 'עיצבתי דף נחיתה ממיר במיוחד לקורס דיגיטלי חדש, עם שילוב אלמנטים אינטראקטיביים ואנימציות מרשימות.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'landing-page',
    technologies: ['React', 'Vite', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Firebase', 'Google Analytics'],
    features: [
      'אנימציות גלילה מתקדמות',
      'טופס הרשמה מתקדם',
      'וידאו רקע דינמי',
      'חיבור לניתוח נתונים',
      'אופטימיזציה למובייל',
      'A/B Testing',
      'מעקב המרות'
    ],
    date: '2025-02-03'
  },
  {
    id: '3',
    title: 'אתר תדמית למשרד עורכי דין',
    description: 'אתר תדמית מקצועי עם דפי מידע, בלוג, ומערכת הזמנת פגישות למשרד עורכי דין מוביל.',
    summary: 'בניתי אתר תדמית מקצועי למשרד עורכי דין, המציג את השירותים, תחומי ההתמחות, וצוות המשרד בצורה אלגנטית.',
    imageUrl: 'https://images.pexels.com/photos/4481665/pexels-photo-4481665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'website',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'EmailJS'],
    features: [
      'דפי מידע מותאמים אישית',
      'בלוג משפטי עם CMS',
      'מערכת הזמנת פגישות',
      'אופטימיזציה לקידום אורגני (SEO)',
      'ממשק ניהול תוכן ידידותי',
      'חיבור לקלנדר',
      'טפסי יצירת קשר מתקדמים'
    ],
    date: '2025-06-20'
  },
  {
    id: '4',
    title: 'אפליקציית שירות לקוחות',
    description: 'אפליקציה למעקב אחר פניות לקוחות, ניהול משימות וניתוח נתונים עבור צוות שירות הלקוחות.',
    summary: 'פיתחתי אפליקציה מתקדמת לניהול שירות לקוחות, המסייעת לחברה לנהל פניות, לעקוב אחר שביעות רצון, ולנתח מגמות.',
    imageUrl: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'app',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    features: [
      'ניהול פניות לקוחות',
      'דשבורד אנליטיקה מתקדם',
      'התראות בזמן אמת',
      'שילוב עם מערכות CRM',
      'ניהול משימות לצוות',
      'דוחות מפורטים',
      'מערכת הרשאות מתקדמת'
    ],
    date: '2025-05-10'
  },
  {
    id: '5',
    title: 'דף נחיתה לאפליקציה',
    description: 'דף נחיתה מודרני עם הדגמות אינטראקטיביות ואנימציות לאפליקציה חדשה.',
    summary: 'עיצבתי דף נחיתה אטרקטיבי עבור אפליקציה חדשה, הכולל הדגמות אינטראקטיביות ואלמנטים עיצוביים מתקדמים.',
    imageUrl: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'landing-page',
    technologies: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vite', 'Netlify'],
    features: [
      'אנימציות 3D מתקדמות',
      'הדגמות אינטראקטיביות',
      'סרטוני הדרכה משולבים',
      'טופס הורדה והרשמה',
      'תאימות מלאה למובייל',
      'אופטימיזציה לביצועים',
      'מעקב אירועים'
    ],
    date: '2025-04-22'
  },
  {
    id: '6',
    title: 'חנות הלבשה אונליין',
    description: 'חנות מקוונת למותג אופנה, כולל קטלוג מוצרים, מערכת עגלת קניות, ואינטגרציה עם מערכות שילוח.',
    summary: 'פיתחתי חנות אונליין מלאה למותג אופנה מקומי, הכוללת חוויית קנייה חלקה, ניהול מלאי, ואינטגרציה עם שירותי שילוח.',
    imageUrl: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ecommerce',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify API', 'Stripe', 'Vercel'],
    features: [
      'קטלוג מוצרים דינמי',
      'סינון וחיפוש מתקדמים',
      'עגלת קניות מותאמת אישית',
      'אינטגרציה עם שירותי שילוח',
      'ניהול מלאי אוטומטי',
      'מערכת הנחות וקופונים',
      'ממשק ניהול מתקדם'
    ],
    date: '2025-04-05'
  },
  {
    id: '7',
    title: 'מערכת צ\'אט AI לעסק',
    description: 'מערכת צ\'אט חכמה המבוססת על בינה מלאכותית לשיפור שירות הלקוחות והמכירות.',
    summary: 'פיתחתי מערכת צ\'אט מתקדמת עם AI שמסייעת לעסקים לענות על שאלות לקוחות, לנהל פניות ולהגדיל מכירות.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'app',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
    features: [
      'צ\'אט בוט חכם עם GPT-4',
      'ניתוח רגשות לקוחות',
      'העברה לנציג אנושי',
      'דשבורד ניהול שיחות',
      'אינטגרציה עם CRM',
      'למידה מתמשכת',
      'תמיכה רב-לשונית'
    ],
    date: '2025-06-10'
  },
  {
    id: '8',
    title: 'מערכת יצירת לידים',
    description: 'פלטפורמה מתקדמת לזיהוי, איסוף וניהול לידים פוטנציאליים להגדלת המכירות.',
    summary: 'בניתי מערכת מקיפה לניהול לידים הכוללת טפסים חכמים, מעקב התנהגות משתמשים, וכלי אוטומציה למכירות.',
    imageUrl: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'app',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    features: [
      'טפסים חכמים ומותאמים',
      'מעקב התנהגות משתמשים',
      'ניקוד לידים אוטומטי',
      'אוטומציה למכירות',
      'דוחות ואנליטיקה מתקדמים',
      'שילוב עם כלי שיווק',
      'מערכת התראות חכמה'
    ],
    date: '2025-06-28'
  }
];