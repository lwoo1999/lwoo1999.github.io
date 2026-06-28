/**
 * i18n.js — Chinese/English translations for Liang Wu's academic website
 */
const i18n = {
  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.research': '研究',
    'nav.publications': '论文',
    'nav.cv': '简历',
    'nav.contact': '联系',

    // Hero
    'hero.name': '吴亮',
    'hero.name_sub': 'Liang Wu',
    'hero.title': '讲师',
    'hero.dept': '光电信息工程系',
    'hero.school': '机电工程学院（半导体学院）',
    'hero.university': '池州学院',

    // About
    'about.heading': '关于我',
    'about.bio1': '我于2020年获得中国科学技术大学天文学学士学位，2025年获得中国科学技术大学天体物理博士学位（硕博连读），导师为王俊贤教授。现为池州学院机电工程学院（半导体学院）光电信息工程系讲师。',
    'about.bio2': '我的研究主要基于多波段巡天数据（SDSS、WISE、GALEX等），结合光谱分析与统计方法，探索活动星系核和类星体的物理性质，尤其关注中心超大质量黑洞与其寄主星系之间的协同演化。',
    'about.bio3': '研究成果发表于 The Astrophysical Journal Letters、Monthly Notices of the Royal Astronomical Society 等国际权威期刊。',
    'about.emp_heading': '工作经历',
    'about.emp_year': '2025 – 至今',
    'about.emp_title': '讲师 — 池州学院',
    'about.emp_note': '机电工程学院（半导体学院）光电信息工程系',
    'about.edu_heading': '教育背景',
    'about.edu_phd': '天体物理 理学博士 — 中国科学技术大学',
    'about.edu_phd_year': '2020 – 2025',
    'about.edu_phd_note': '硕博连读，导师：王俊贤 教授',
    'about.edu_bs': '天文学 理学学士 — 中国科学技术大学',
    'about.edu_bs_year': '2016 – 2020',

    // Research
    'research.heading': '研究方向',
    'research.r1_title': '尘埃环物理',
    'research.r1_desc': '利用红外巡天数据研究活动星系核尘埃环的几何结构、覆盖因子及其与中心引擎参数的关联，揭示尘埃环在统一模型中的关键作用。',
    'research.r2_title': '类星体光变',
    'research.r2_desc': '通过长期多波段光变曲线分析，研究类星体在不同时间尺度上的光变特征，探讨吸积盘物理过程与光变之间的内在联系，发现尘埃环对光变的调控作用。',
    'research.r3_title': '黑洞吸积',
    'research.r3_desc': '结合光谱与测光数据，约束超大质量黑洞的吸积率、质量等基本参数，理解活动星系核的能量来源与辐射机制。',
    'research.r4_title': '恒星形成与黑洞协同演化',
    'research.r4_desc': '利用 [O II] 等发射线示踪类星体寄主星系中的恒星形成活动，建立运动学一致的方法分离 AGN 与星系的贡献，探索黑洞增长与星系演化的内在联系。',

    // Publications
    'publications.heading': '代表性论文',
    'publications.first_author': '第一作者',
    'publications.collaborator': '合作者',
    'publications.abstract': '摘要',
    'publications.doi': 'DOI',
    'publications.arxiv': 'arXiv',

    // CV
    'cv.heading': '简历',
    'cv.desc': '下载完整学术简历，了解详细的研究经历、学术报告与学术服务信息。',
    'cv.button': '下载简历 (PDF)',

    // Contact
    'contact.heading': '联系方式',
    'contact.address_label': '地址',
    'contact.address': '安徽省池州市教育园区 池州学院 机电工程学院',
    'contact.email_label': '邮箱',

    // Footer
    'footer.copyright': '© 2025 吴亮. All rights reserved.',
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',

    // Hero
    'hero.name': 'Liang Wu',
    'hero.name_sub': '吴亮',
    'hero.title': 'Lecturer',
    'hero.dept': 'Dept. of Optoelectronic Information Engineering',
    'hero.school': 'School of Mechanical & Electrical Engineering',
    'hero.university': 'Chizhou University',

    // About
    'about.heading': 'About Me',
    'about.bio1': 'I am a lecturer at the School of Mechanical & Electrical Engineering, Chizhou University. I received my B.S. in Astronomy (2020) and Ph.D. in Astrophysics (2025) from the University of Science and Technology of China (USTC), where I worked under the supervision of Prof. Jun-Xian Wang.',
    'about.bio2': 'My research leverages multi-wavelength survey data (SDSS, WISE, GALEX) and combines spectroscopic analysis with statistical methods to investigate the physics of active galactic nuclei and quasars. I focus on the interplay and co-evolution between supermassive black holes and their host galaxies.',
    'about.bio3': 'My work has been published in leading international journals including The Astrophysical Journal Letters (ApJL) and Monthly Notices of the Royal Astronomical Society (MNRAS).',
    'about.emp_heading': 'Employment',
    'about.emp_year': '2025 – Present',
    'about.emp_title': 'Lecturer — Chizhou University',
    'about.emp_note': 'School of Mechanical & Electrical Engineering, Dept. of Optoelectronic Information Engineering',
    'about.edu_heading': 'Education',
    'about.edu_phd': 'Ph.D. in Astrophysics — USTC',
    'about.edu_phd_year': '2020 – 2025',
    'about.edu_phd_note': 'Advisor: Prof. Jun-Xian Wang',
    'about.edu_bs': 'B.S. in Astronomy — USTC',
    'about.edu_bs_year': '2016 – 2020',

    // Research
    'research.heading': 'Research Interests',
    'research.r1_title': 'Dusty Torus Physics',
    'research.r1_desc': 'Investigating the geometry, covering factor, and physical properties of the dusty torus in AGN using infrared survey data, and exploring its pivotal role in the unification model.',
    'research.r2_title': 'Quasar Variability',
    'research.r2_desc': 'Characterizing long-term, multi-wavelength quasar variability to probe the connection between accretion disk physics and observed flux changes — including the discovery that the dusty torus regulates variability.',
    'research.r3_title': 'Black Hole Accretion',
    'research.r3_desc': 'Constraining accretion rates, masses, and fundamental parameters of supermassive black holes through combined spectroscopic and photometric analyses.',
    'research.r4_title': 'Star Formation & Black Hole Co-evolution',
    'research.r4_desc': 'Tracing star formation in quasar hosts with [O II] emission lines, developing a kinematically consistent method to isolate AGN contamination, and exploring the co-evolution of black holes and galaxies.',

    // Publications
    'publications.heading': 'Selected Publications',
    'publications.first_author': 'First Author',
    'publications.collaborator': 'Collaborator',
    'publications.abstract': 'Abstract',
    'publications.doi': 'DOI',
    'publications.arxiv': 'arXiv',

    // CV
    'cv.heading': 'Curriculum Vitae',
    'cv.desc': 'Download my full academic CV for detailed information on research experience, talks, and academic service.',
    'cv.button': 'Download CV (PDF)',

    // Contact
    'contact.heading': 'Contact',
    'contact.address_label': 'Address',
    'contact.address': 'School of Mechanical & Electrical Engineering, Chizhou University, Education Park, Chizhou, Anhui, China',
    'contact.email_label': 'Email',

    // Footer
    'footer.copyright': '© 2025 Liang Wu. All rights reserved.',
  }
};
