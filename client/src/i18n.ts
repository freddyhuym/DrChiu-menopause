import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About Dr. Chiu",
      "nav.knowledge": "Menopause Knowledge",
      "nav.symptoms": "Symptoms & Treatment",
      "nav.process": "Consultation Process",
      "nav.contact": "Contact Us",
      "nav.book": "Book Now",
      
      "hero.tag": "Gentle Care for Women",
      "hero.title1": "Embrace Change,",
      "hero.title2": "Rebirth with Grace",
      "hero.desc": "Menopause is not an end, but the beginning of another beautiful journey. Dr. Chiu Wen-Chin accompanies you through this transition with professional medical care and warm empathy, helping you find physical and mental balance and shine with confidence.",
      "hero.book": "Book Consultation",
      "hero.about": "Meet Dr. Chiu",

      "about.title": "About",
      "about.doctor": "Dr. Chiu Wen-Chin",
      "about.desc1": "As a woman, I deeply understand the challenges and unease brought by the changes in every stage of life. Menopause is a turning point in body function, but it should not be the end of quality of life.",
      "about.desc2": "I am dedicated to creating a private, comfortable, and professional medical space, combining evidence-based medicine with holistic care concepts, to tailor exclusive health management plans for every woman. From hormonal regulation, nutritional counseling to psychological support, we protect your health in all aspects.",
      "about.qualifications": "Qualifications",
      "about.education": "Education",
      "about.expertise": "Expertise",
      "about.features": "Features & Advantages",
      
      "knowledge.title": "Menopause Knowledge Column",
      "knowledge.subtitle": "Understanding your body's changes is the first step to loving yourself",
      "knowledge.item1.title": "What is Menopause?",
      "knowledge.item1.desc": "Menopause refers to the transition period when ovarian function gradually declines until ovulation stops completely. It usually occurs between 45 and 55 years of age and is a natural physiological process.",
      "knowledge.item2.title": "Hormonal Changes",
      "knowledge.item2.desc": "As estrogen and progesterone secretion decreases, the body undergoes a series of physiological and psychological changes. Correct hormone replacement therapy can effectively alleviate discomfort.",
      "knowledge.item3.title": "Physical & Mental Balance",
      "knowledge.item3.desc": "In addition to medication, lifestyle adjustments, nutritional supplementation, and moderate exercise are all indispensable parts of getting through menopause.",

      "media.title": "Video Gallery",
      "media.subtitle": "Watch & Learn",

      "symptoms.title": "Common Symptoms & Treatment",
      "symptoms.desc": "If you are experiencing the following troubles, please do not endure them alone. Professional medical assistance can help you improve your quality of life.",
      "symptoms.treatment": "Our Treatment Plan",
      "symptoms.list.hot_flash": "Hot Flashes, Night Sweats",
      "symptoms.list.insomnia": "Insomnia, Light Sleep",
      "symptoms.list.mood": "Mood Swings, Anxiety",
      "symptoms.list.memory": "Memory Loss",
      "symptoms.list.skin": "Dry Skin, Aging",
      "symptoms.list.bone": "Bone Loss",
      "symptoms.list.palpitation": "Palpitations, Chest Tightness",
      "symptoms.list.uti": "Urinary Tract Infection",
      "symptoms.treat.hrt": "Personalized Hormone Replacement Therapy (HRT)",
      "symptoms.treat.nutrition": "Non-Hormonal Alternative Therapy & Nutritional Counseling",
      "symptoms.treat.bone": "Osteoporosis Prevention & Treatment",
      "symptoms.treat.laser": "Intimate Laser Care & Anti-Aging Treatments",

      "process.title": "Exclusive Consultation Process",
      "process.subtitle": "Simple 4 steps to start your health journey",
      "process.step1.title": "Book Consultation",
      "process.step1.desc": "Book an appointment via phone or Line",
      "process.step2.title": "Doctor Inquiry",
      "process.step2.desc": "Detailed assessment of physical condition and medical history",
      "process.step3.title": "Testing & Evaluation",
      "process.step3.desc": "Arrange blood or ultrasound tests if necessary",
      "process.step4.title": "Customized Treatment",
      "process.step4.desc": "Formulate a treatment and maintenance plan exclusive to you",
      "process.ready": "Ready to start changing? We are here for you anytime.",

      "contact.title": "Contact Us",
      "contact.desc": "Welcome to fill out the form below, or contact us via phone or Line. Our dedicated staff will reply to your needs as soon as possible.",
      "contact.phone": "Reservation Hotline",
      "contact.line": "Line Official Account",
      "contact.address": "Clinic Address",
      "contact.hours": "Clinic Hours",
      "contact.form.name": "Name",
      "contact.form.phone": "Phone",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.submit": "Submit Reservation",
      "contact.success": "Reservation Sent",
      "contact.success_desc": "Our staff will contact you within working days to confirm the time."
    }
  },
  zh: {
    translation: {
      "nav.home": "首頁",
      "nav.about": "關於醫師",
      "nav.knowledge": "更年期知識",
      "nav.symptoms": "症狀與治療",
      "nav.process": "諮詢流程",
      "nav.contact": "聯繫我們",
      "nav.book": "立即預約",

      "hero.tag": "專屬女性的溫柔照護",
      "hero.title1": "擁抱蛻變，",
      "hero.title2": "優雅重生",
      "hero.desc": "更年期不是終點，而是另一段美麗旅程的起點。邱文瑾醫師以專業醫療與溫暖同理，陪伴您度過這段轉變期，找回身心平衡，綻放自信光彩。",
      "hero.book": "預約諮詢",
      "hero.about": "了解醫師",

      "about.title": "關於",
      "about.doctor": "邱文瑾醫師",
      "about.desc1": "身為女性，我深刻理解每一個生命階段的轉變所帶來的挑戰與不安。更年期是身體機能的轉捩點，但不應是生活品質的終點。",
      "about.desc2": "我致力於打造一個隱密、舒適且專業的診療空間，結合實證醫學與全人照護的理念，為每一位女性量身打造專屬的健康管理計畫。從荷爾蒙調理、營養諮詢到心理支持，我們全方位守護您的健康。",
      "about.qualifications": "專科資格",
      "about.education": "學歷",
      "about.expertise": "專業領域",
      "about.features": "特色與優勢",

      "knowledge.title": "更年期知識專欄",
      "knowledge.subtitle": "了解身體的變化，是愛自己的第一步",
      "knowledge.item1.title": "什麼是更年期？",
      "knowledge.item1.desc": "更年期是指女性卵巢功能逐漸衰退，直到完全停止排卵的過渡時期。通常發生在45至55歲之間，是一段自然的生理過程。",
      "knowledge.item2.title": "荷爾蒙的變化",
      "knowledge.item2.desc": "隨著雌激素與黃體素的分泌減少，身體會產生一系列的生理與心理變化。正確的荷爾蒙補充療法可以有效緩解不適。",
      "knowledge.item3.title": "身心平衡調適",
      "knowledge.item3.desc": "除了藥物治療，生活型態的調整、飲食營養的補充以及適度的運動，都是度過更年期不可或缺的重要環節。",

      "media.title": "影音專區",
      "media.subtitle": "",

      "symptoms.title": "常見症狀與治療",
      "symptoms.desc": "如果您正在經歷以下困擾，請不要獨自忍受。專業的醫療協助可以幫助您改善生活品質。",
      "symptoms.treatment": "我們的治療方案",
      "symptoms.list.hot_flash": "熱潮紅、盜汗",
      "symptoms.list.insomnia": "失眠、淺眠",
      "symptoms.list.mood": "情緒波動、焦慮",
      "symptoms.list.memory": "記憶力減退",
      "symptoms.list.skin": "皮膚乾燥、老化",
      "symptoms.list.bone": "骨質流失",
      "symptoms.list.palpitation": "心悸、胸悶",
      "symptoms.list.uti": "泌尿道感染",
      "symptoms.treat.hrt": "個別化荷爾蒙補充療法 (HRT)",
      "symptoms.treat.nutrition": "非荷爾蒙替代療法與營養諮詢",
      "symptoms.treat.bone": "骨質疏鬆預防與治療",
      "symptoms.treat.laser": "私密處雷射保養與抗衰老療程",

      "process.title": "專屬諮詢流程",
      "process.subtitle": "簡單四步驟，開啟您的健康旅程",
      "process.step1.title": "預約諮詢",
      "process.step1.desc": "透過電話或 Line 預約看診時間",
      "process.step2.title": "醫師問診",
      "process.step2.desc": "詳細評估身體狀況與病史",
      "process.step3.title": "檢測評估",
      "process.step3.desc": "必要時安排血液或超音波檢查",
      "process.step4.title": "客製療程",
      "process.step4.desc": "制定專屬您的治療與保養計畫",
      "process.ready": "準備好開始改變了嗎？我們隨時在這裡為您服務。",

      "contact.title": "聯繫我們",
      "contact.desc": "歡迎填寫下方表單，或透過電話、Line 與我們聯繫。我們的專人將會盡快回覆您的需求。",
      "contact.phone": "預約專線",
      "contact.line": "Line 官方帳號",
      "contact.address": "診所地址",
      "contact.hours": "門診時間",
      "contact.form.name": "姓名",
      "contact.form.phone": "電話",
      "contact.form.email": "電子郵件",
      "contact.form.message": "留言內容",
      "contact.form.submit": "送出預約",
      "contact.success": "預約申請已送出",
      "contact.success_desc": "專人將於工作日內與您聯繫確認時間。"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;