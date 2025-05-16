import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'חנות קוסמטיקה אונליין',
    description: 'חנות אינטרנטית מלאה עם מגוון מוצרי קוסמטיקה, מערכת תשלומים, וממשק ניהול מתקדם.',
    summary: 'פיתחתי חנות אינטרנטית מקיפה עבור עסק קוסמטיקה מקומי, כולל מערכת ניהול מלאי, עגלת קניות, ותהליך תשלום מאובטח.',
    imageUrl: 'https://images.pexels.com/photos/2535212/pexels-photo-2535212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    features: [
      'מערכת ניהול מלאי מתקדמת',
      'עגלת קניות דינמית',
      'מערכת תשלומים מאובטחת',
      'ניהול חשבונות משתמשים',
      'ממשק ניהול למנהל החנות'
    ],
    demoUrl: 'https://example.com/cosmetics-shop',
    testimonial: {
      name: 'מירי כהן',
      role: 'בעלת',
      company: 'הקוסמטיקה של מירי',
      content: 'האתר החדש הגדיל את המכירות שלנו ב-45% תוך חודשיים בלבד. התהליך היה חלק ומקצועי מאוד.',
      imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    date: '2023-08-15'
  },
  {
    id: '2',
    title: 'דף נחיתה לקורס דיגיטלי',
    description: 'דף נחיתה מותאם אישית עם אנימציות, טפסים, ואלמנטים אינטראקטיביים לקידום מכירות הקורס.',
    summary: 'עיצבתי דף נחיתה ממיר במיוחד לקורס דיגיטלי חדש, עם שילוב אלמנטים אינטראקטיביים ואנימציות מרשימות.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'landing-page',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Firebase'],
    features: [
      'אנימציות גלילה',
      'טופס הרשמה מתקדם',
      'וידאו רקע דינמי',
      'חיבור לניתוח נתונים',
      'אופטימיזציה למובייל'
    ],
    demoUrl: 'https://example.com/course-landing',
    testimonial: {
      name: 'דניאל לוי',
      role: 'יזם',
      company: 'אקדמיית המומחים',
      content: 'דף הנחיתה סייע לנו להשיג יותר מ-300 הרשמות בשבוע הראשון לאחר ההשקה. התוצאות מדהימות!',
      imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    date: '2023-11-03'
  },
  {
    id: '3',
    title: 'אתר תדמית למשרד עורכי דין',
    description: 'אתר תדמית מקצועי עם דפי מידע, בלוג, ומערכת הזמנת פגישות למשרד עורכי דין מוביל.',
    summary: 'בניתי אתר תדמית מקצועי למשרד עורכי דין, המציג את השירותים, תחומי ההתמחות, וצוות המשרד בצורה אלגנטית.',
    imageUrl: 'https://images.pexels.com/photos/4481665/pexels-photo-4481665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'website',
    technologies: ['WordPress', 'PHP', 'MySQL', 'jQuery', 'Elementor'],
    features: [
      'דפי מידע מותאמים אישית',
      'בלוג משפטי',
      'מערכת הזמנת פגישות',
      'אופטימיזציה לקידום אורגני',
      'ממשק ניהול תוכן ידידותי'
    ],
    demoUrl: 'https://example.com/law-firm',
    testimonial: {
      name: 'עו״ד אלון ברק',
      role: 'שותף בכיר',
      company: 'ברק ושות׳ עורכי דין',
      content: 'האתר החדש משקף בדיוק את הרמה המקצועית שאנחנו רוצים להציג. קיבלנו הרבה מאוד פניות חדשות דרכו.',
      imageUrl: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    date: '2024-01-20'
  },
  {
    id: '4',
    title: 'אפליקציית שירות לקוחות',
    description: 'אפליקציה למעקב אחר פניות לקוחות, ניהול משימות וניתוח נתונים עבור צוות שירות הלקוחות.',
    summary: 'פיתחתי אפליקציה מתקדמת לניהול שירות לקוחות, המסייעת לחברה לנהל פניות, לעקוב אחר שביעות רצון, ולנתח מגמות.',
    imageUrl: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'app',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Docker'],
    features: [
      'ניהול פניות לקוחות',
      'דשבורד אנליטיקה מתקדם',
      'התראות בזמן אמת',
      'שילוב עם מערכות CRM',
      'ניהול משימות לצוות'
    ],
    demoUrl: 'https://example.com/customer-service-app',
    testimonial: {
      name: 'רונית שמיר',
      role: 'מנהלת שירות לקוחות',
      company: 'טלקום פלוס',
      content: 'האפליקציה שינתה לחלוטין את יעילות המחלקה שלנו. זמן הטיפול בפניות התקצר ב-30% ושביעות רצון הלקוחות עלתה.',
      imageUrl: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    date: '2023-05-10'
  },
  {
    id: '5',
    title: 'דף נחיתה לאפליקציה',
    description: 'דף נחיתה מודרני עם הדגמות אינטראקטיביות ואנימציות לאפליקציה חדשה.',
    summary: 'עיצבתי דף נחיתה אטרקטיבי עבור אפליקציה חדשה, הכולל הדגמות אינטראקטיביות ואלמנטים עיצוביים מתקדמים.',
    imageUrl: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'landing-page',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'WebGL'],
    features: [
      'אנימציות מתקדמות',
      'הדגמות אינטראקטיביות',
      'סרטוני הדרכה',
      'טופס הורדה והרשמה',
      'תאימות מלאה למובייל'
    ],
    demoUrl: 'https://example.com/app-landing',
    date: '2023-09-22'
  },
  {
    id: '6',
    title: 'חנות הלבשה אונליין',
    description: 'חנות מקוונת למותג אופנה, כולל קטלוג מוצרים, מערכת עגלת קניות, ואינטגרציה עם מערכות שילוח.',
    summary: 'פיתחתי חנות אונליין מלאה למותג אופנה מקומי, הכוללת חוויית קנייה חלקה, ניהול מלאי, ואינטגרציה עם שירותי שילוח.',
    imageUrl: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ecommerce',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Tailwind CSS', 'REST API'],
    features: [
      'קטלוג מוצרים דינמי',
      'סינון וחיפוש מתקדמים',
      'עגלת קניות מותאמת אישית',
      'אינטגרציה עם שירותי שילוח',
      'ניהול מלאי אוטומטי'
    ],
    demoUrl: 'https://example.com/fashion-store',
    testimonial: {
      name: 'יעל אברהם',
      role: 'מייסדת',
      company: 'YAEL Fashion',
      content: 'החנות האונליין החדשה פתחה עבורנו שוק לקוחות חדש לגמרי. יותר מ-60% מהמכירות כעת מגיעות מהאתר.',
      imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    date: '2024-02-05'
  }
];