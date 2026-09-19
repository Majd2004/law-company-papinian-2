export interface PracticeArea {
  id: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  fullDescAr: string;
  fullDescEn: string;
  iconName: string;
  keyServicesAr: string[];
  keyServicesEn: string[];
  syrianLegalFrameworkAr: string;
  syrianLegalFrameworkEn: string;
}

export interface Attorney {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  educationAr: string[];
  educationEn: string[];
  membershipsAr: string[];
  membershipsEn: string[];
  barNumber: string;
  languagesAr: string[];
  languagesEn: string[];
  image: string;
}

export interface LandmarkCase {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  valueAr: string;
  valueEn: string;
  summaryAr: string;
  summaryEn: string;
  resultAr: string;
  resultEn: string;
  jurisdictionAr: string;
  jurisdictionEn: string;
}

export interface LegalGuide {
  id: string;
  category: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  lawRefAr: string;
  lawRefEn: string;
  readTimeAr: string;
  readTimeEn: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-investment',
    titleAr: 'قانون الشركات والاستثمار الأجنبي وإعادة الإعمار',
    titleEn: 'Corporate, Foreign Investment & Reconstruction Law',
    summaryAr: 'مرافقة قانونية شاملة للشركات المحلية والدولية، وتأسيس المشاريع بموجب قانون الاستثمار السوري الجديد رقم 18.',
    summaryEn: 'Full-spectrum counsel for domestic & multinational corporations, and venture structuring under Syrian Investment Law No. 18.',
    fullDescAr: 'تعد شركة بابينيان المرجع الأول في سوريا للمستثمرين والشركات الكبرى الساعية للاستفادة من فرص الاستثمار وإعادة الإعمار. نوفر صياغة عقود التحالفات (Joint Ventures)، والاندماج والاستحواذ، والحصول على التراخيص والإعفاءات الجمركية والضريبية الممنوحة بموجب التشريعات السورية الحديثة.',
    fullDescEn: 'Papinian Law Firm stands as the foremost advisor in Syria for international investors and corporate conglomerates navigating high-value market entry, M&A, joint ventures, and capital structuring benefiting from Syrian state investment incentives.',
    iconName: 'Building2',
    keyServicesAr: [
      'تأسيس الشركات بجميع أشكالها (محدودة المسؤولية، مساهمة مغفلة، فروع شركات أجنبية)',
      'تأهيل المشاريع للاستفادة من قانون الاستثمار رقم 18 لعام 2021 والحوافز الخاصة',
      'صياغة اتفاقيات المساهمين والمشاريع المشتركة الدولية',
      'إعادة الهيكلة وعمليات الدمج والاستحواذ (M&A) والفحص النافي للجهالة',
      'عقود امتياز المرافق العامة والشراكة بين القطاعين العام والخاص (PPP)'
    ],
    keyServicesEn: [
      'Incorporation of LLCs, Joint Stock Companies (JSC), and Foreign Branches',
      'Licensing under Syrian Investment Law No. 18/2021 & customs exemption protocols',
      'Cross-border Joint Venture Agreements & Shareholders Pacts',
      'Corporate Restructuring, Mergers & Acquisitions and Due Diligence Audits',
      'Public-Private Partnerships (PPP) and Infrastructure Concession Contracts'
    ],
    syrianLegalFrameworkAr: 'قانون الشركات رقم 29 لعام 2011، وقانون الاستثمار رقم 18 لعام 2021 وتعديلاته.',
    syrianLegalFrameworkEn: 'Syrian Companies Law No. 29/2011, and Investment Law No. 18/2021 & executive bylaws.'
  },
  {
    id: 'arbitration-dispute',
    titleAr: 'التحكيم التجاري والدولي وفض النزاعات الكبرى',
    titleEn: 'International & Commercial Arbitration',
    summaryAr: 'تمثيل حصري أمام هيئات التحكيم الدولية (ICC, DIAC, LCIA) ومراكز التحكيم المعتمدة في سوريا والشرق الأوسط.',
    summaryEn: 'Elite representation before international arbitration tribunals (ICC, DIAC, LCIA) and top Syrian regional arbitration panels.',
    fullDescAr: 'يمتلك محامو بابينيان خبرة متعمقة في إدارة إجراءات التحكيم المعقدة متعددة الاختصاصات. نقود قضايا النزاعات التجارية الكبرى ونزاعات عقود الإنشاءات الدولية وعقود الطاقة والتوريد، فضلاً عن دعاوى بطلان وتنفيذ أحكام التحكيم الأجنبية في سوريا.',
    fullDescEn: 'Papinian advocates hold profound cross-border arbitration expertise, successfully representing claimants and respondents in multi-million dollar institutional and ad-hoc arbitrations, as well as enforcement of foreign arbitral awards in Syrian jurisdictions.',
    iconName: 'Scale',
    keyServicesAr: [
      'التمثيل أمام غرفة التجارة الدولية (ICC Paris) ومحكمة لندن والتحكيم السوري',
      'صياغة الشروط النموذجية والمفصلة للتحكيم في العقود الدولية',
      'إجراءات الوساطة والتفاوض الودي لحل النزاعات المعقدة قبل التقاضي',
      'دعاوى تنفيذ أحكام التحكيم الأجنبية بموجب اتفاقية نيويورك 1958',
      'تعيين المحكمين والطعن في قرارات التحكيم وإجراءات إكساء الصيغة التنفيذية'
    ],
    keyServicesEn: [
      'Counsel in ICC Paris, LCIA, DIAC and Syrian Arbitration Centers proceedings',
      'Bespoke drafting of dispute escalation & multi-tier arbitration clauses',
      'High-stakes mediation and pre-arbitration strategic negotiations',
      'Enforcement of foreign arbitral awards under the 1958 New York Convention',
      'Annulment defense and granting of Syrian executory formula (Exequatur)'
    ],
    syrianLegalFrameworkAr: 'قانون التحكيم السوري رقم 4 لعام 2008، واتفاقية نيويورك لعام 1958 المصادق عليها في سوريا.',
    syrianLegalFrameworkEn: 'Syrian Arbitration Law No. 4/2008, and the 1958 New York Convention.'
  },
  {
    id: 'banking-tax',
    titleAr: 'القانون المصرفي والمالي والضرائب والامتثال',
    titleEn: 'Banking, Finance, Tax & Regulatory Compliance',
    summaryAr: 'استشارات متقدمة للبنوك وشركات الصرافة والمؤسسات المالية، وحلول التخطيط الضريبي والامتثال للأنظمة النقدية.',
    summaryEn: 'Strategic legal advisory for commercial banks, exchange firms, foreign exchange compliance, and sovereign tax advisory.',
    fullDescAr: 'نقدم استشارات قانونية متخصصة لعدد من المصارف العاملة في سوريا وشركات التأمين والتمويل. يشمل عملنا الامتثال لتعليمات مصرف سورية المركزي ومجلس النقد والتسليف، وحماية الاستثمارات المالية، وإعادة هيكلة الديون المتعثرة.',
    fullDescEn: 'We counsel leading commercial banks, insurance corporations, and investment funds operating in Syria on Central Bank of Syria compliance, Money & Credit Council regulations, syndicated loans, and tax optimization.',
    iconName: 'Landmark',
    keyServicesAr: [
      'الامتثال لأنظمة مصرف سورية المركزي ومجلس النقد والتسليف',
      'إعداد وتوثيق عقود التمويل المصرفي والائتمان والضمانات البنكية المعقدة',
      'الاستشارات الضريبية، والاعتراضات على ضريبة الدخل والأرباح الحقيقية',
      'استشارات لوائح الصرف الأجنبي والتحويلات المالية والتجارة الخارجية',
      'إعادة هيكلة الديون المصرفية والتسويات القضائية والودية'
    ],
    keyServicesEn: [
      'Central Bank of Syria regulatory compliance & licensing advisory',
      'Syndicated loan structuring, security mortgages and collateral pledge perfection',
      'Corporate income tax defense, direct tax appeals and customs exemptions',
      'Foreign exchange regulations and cross-border documentary credits (L/Cs)',
      'Distressed debt restructuring and bank insolvency workouts'
    ],
    syrianLegalFrameworkAr: 'قانون النقد الأساسي رقم 23 لعام 2002، وقوانين ضريبة الدخل السورية رقم 24 وتعديلاتها.',
    syrianLegalFrameworkEn: 'Syrian Basic Monetary Law No. 23/2002, and Income Tax Law No. 24 & modifications.'
  },
  {
    id: 'real-estate-fidic',
    titleAr: 'العقارات والمقاولات الدولية وعقود فيديك (FIDIC)',
    titleEn: 'Real Estate, Construction & FIDIC Contracts',
    summaryAr: 'حماية الملكية العقارية، وإدارة الصفقات العقارية الكبرى، وصياغة عقود التطوير العمراني ومطالبات الفيديك.',
    summaryEn: 'High-value land acquisitions, title deed defense, FIDIC contract administration, and Syrian urban development.',
    fullDescAr: 'مع عودة مشاريع التطوير العمراني والمجمعات العقارية الكبرى في دمشق والمحافظات السورية، تقود بابينيان التراخيص والتسجيل العقاري في السجل المؤقت والدائم، وإدارة نزاعات المقاولات والمطالبات الزمنية والمالية وفق عقود FIDIC المعتمدة عالمياً.',
    fullDescEn: 'With the acceleration of prime property development and reconstruction projects across Damascus and Syrian governorates, we lead title verification, real estate registration, FIDIC contract administration, and construction delay claims.',
    iconName: 'ShieldCheck',
    keyServicesAr: [
      'الفحص القانوني لسجلات السجل العقاري والسجل المؤقت والمصالح العقارية',
      'صياغة وإدارة عقود المقاولات الدولية وفق نماذج FIDIC (الكتاب الأحمر، الأصفر، الفضي)',
      'تسوية نزاعات التطوير العقاري وتأخير التسليم والمطالبات المالية للمقاولين',
      'ترخيص المجمعات السكنية والتجارية والمشاريع الخاضعة للمرسوم التشريعي 66',
      'دعاوى تثبيت الملكية ونزع الملكية للمنفعة العامة والتعويض العادل'
    ],
    keyServicesEn: [
      'Real estate title due diligence in the Syrian Land Registry & Temporary Register',
      'FIDIC standard contracts adaptation, drafting and claims litigation',
      'Urban regeneration legal schemes (including Decree 66 zones in Damascus)',
      'Contractor defect claims, delay penalties, and variation order disputes',
      'Expropriation indemnity litigation and property ownership clearance'
    ],
    syrianLegalFrameworkAr: 'قانون السجل العقاري رقم 186 لعام 1926، والقانون المدني السوري رقم 84 لعام 1949.',
    syrianLegalFrameworkEn: 'Syrian Land Registry Code No. 186/1926, and Civil Code No. 84/1949.'
  },
  {
    id: 'intellectual-property',
    titleAr: 'الملكية الفكرية والعلامات التجارية وبراءات الاختراع',
    titleEn: 'Intellectual Property, Trademarks & Patents',
    summaryAr: 'تسجيل وحماية العلامات التجارية الدولية والمحلية في سوريا، ومكافحة التقليد والقرصنة التجارية وحماية الأسرار.',
    summaryEn: 'Registration and aggressive defense of global and Syrian trademarks, patent enforcement, anti-counterfeiting, and trade secrets.',
    fullDescAr: 'نقدم حماية شاملة للأصول غير الملموسة للشركات العالمية والمحلية في الجمهورية العربية السورية. من تسجيل العلامات التجارية والرسوم والنماذج الصناعية لدى مديرية حماية الملكية التجارية والصناعية، إلى الترافع في دعاوى المنافسة غير المشروعة ومصادرة البضائع المقلدة.',
    fullDescEn: 'Comprehensive protection of corporate brand assets across Syrian territory. From registration with the Directorate of Commercial & Industrial Property Protection to high-impact anti-counterfeiting raids and unfair competition lawsuits.',
    iconName: 'Award',
    keyServicesAr: [
      'إيداع وتسجيل العلامات التجارية وبراءات الاختراع والرسوم الصناعية في سوريا',
      'إدارة المحافظ الفكرية للشركات الدولية ومتابعة التجديدات الدورية',
      'إجراءات الضابطة العدلية ومداهمات البضائع المقلدة ومصادرتها جمركياً وقضائياً',
      'صياغة اتفاقيات الامتياز التجاري (Franchising) وعقود نقل التكنولوجيا والترخيص',
      'دعاوى التعدي على العلامات التجارية والمنافسة غير المشروعة وحقوق المؤلف'
    ],
    keyServicesEn: [
      'Registration of Syrian trademarks, patents, and utility models',
      'Managing IP portfolios for multinational brand owners in Syria',
      'Anti-counterfeiting enforcement actions, seizures, and customs border measures',
      'Franchise agreement drafting, technology transfer covenants, and IP licensing',
      'Unfair competition litigation and brand infringement damages claims'
    ],
    syrianLegalFrameworkAr: 'قانون حماية الملكية التجارية والصناعية رقم 8 لعام 2007 وتعديلاته.',
    syrianLegalFrameworkEn: 'Syrian Commercial & Industrial Property Law No. 8/2007.'
  },
  {
    id: 'economic-crimes',
    titleAr: 'الجرائم الاقتصادية والدفاع الجنائي المؤسسي والامتثال',
    titleEn: 'White-Collar Defense & Financial Crimes',
    summaryAr: 'دفاع جنائي نوعي أمام محاكم الجنايات والمحاكم الاقتصادية وقضايا الجمارك وغسيل الأموال لكبار المسؤولين والشركات.',
    summaryEn: 'Discreet and authoritative defense before Syrian Criminal Courts, Economic Courts, customs tribunals, and anti-money laundering authorities.',
    fullDescAr: 'تتطلب القضايا الجزائية الاقتصادية أعلى درجات الحنكة القانونية والسرية المطلقة. يمتلك فريقنا خبرة رائدة في الدفاع عن أعضاء مجالس الإدارة ورجال الأعمال في قضايا التهرب الضريبي والجمركي ومخالفات أنظمة الصرف والجرائم السيبرانية والفساد الإداري.',
    fullDescEn: 'Economic criminal charges demand unmatched forensic precision and utmost discretion. Our partners defend corporate officers, executives, and high-net-worth clients against allegations of financial misconduct, customs infractions, currency regulations, and cyber fraud.',
    iconName: 'FileText',
    keyServicesAr: [
      'الدفاع في دعاوى الجرائم الاقتصادية والمالية وخيانة الأمانة المؤسسية',
      'التمثيل أمام المحاكم الجمركية في دمشق وحلب ولجان الاعتراض الجمركي',
      'الامتثال والتحقيقات الداخلية الخاصة بمكافحة غسيل الأموال وتمويل الإرهاب (AML)',
      'الدفاع في قضايا مخالفات المرسوم التشريعي الخاص بتداول العملات الأجنبية',
      'إجراءات الكفالات المصرفية وإخلاء السبيل ورفع تدابير منع السفر والحجز الاحتياطي'
    ],
    keyServicesEn: [
      'Defense in economic crimes, corporate embezzlement, and fiduciary breach',
      'Representation before Damascus Customs Special Courts and appeal committees',
      'Anti-Money Laundering (AML) institutional audits and compliance counseling',
      'Defense in foreign exchange infractions and Central Bank inspection cases',
      'Asset freeze lifting petitions, bail proceedings, and travel ban removals'
    ],
    syrianLegalFrameworkAr: 'قانون العقوبات الاقتصادي رقم 3 لعام 2013، وقانون الجمارك السوري رقم 38 لعام 2006.',
    syrianLegalFrameworkEn: 'Syrian Economic Penal Code No. 3/2013, and Customs Law No. 38/2006.'
  },
  {
    id: 'cassation-litigation',
    titleAr: 'التقاضي الرفيع أمام محكمة النقض ومجلس الدولة',
    titleEn: 'Supreme Court & Cassation Appellate Practice',
    summaryAr: 'صياغة طعون النقض النوعية والمرافعة أمام الغرف المدنية والتجارية والجزائية ومحكمة القضاء الإداري بدمشق.',
    summaryEn: 'High-caliber appellate litigation before the Syrian Court of Cassation and the Supreme Administrative Court (State Council).',
    fullDescAr: 'تعتبر مرحلة الطعن بالنقض قمة الهرم القضائي، وتتطلب فهماً فلسفياً وعميقاً لأصول المحاكمات السورية واجتهادات محكمة النقض المستقرة. يضم مكتبنا قضاة سابقين ومستشارين ذوي باع طويل في إبطال الأحكام المعيبة وإرساء مبادئ قضائية جديدة.',
    fullDescEn: 'The cassation stage demands philosophical mastery of Syrian jurisprudence and established precedents. Our litigation team includes former distinguished judges and veteran appellate advocates renowned for crafting successful cassation petitions.',
    iconName: 'Gavel',
    keyServicesAr: [
      'إعداد لوائح الطعن بالنقض في المواد المدنية، التجارية، المصرفية والجزائية',
      'الدعاوى الإدارية ومخاصمة القرارات الحكومية أمام مجلس الدولة في دمشق',
      'طلب وقف نفاذ الأحكام القضائية المستعجل لحين البت في أصل الطعن',
      'دعاوى مخاصمة القضاة في حالات الخطأ المهني الجسيم',
      'تحليل وتوثيق الاجتهادات القضائية الصادرة عن الهيئة العامة لمحكمة النقض'
    ],
    keyServicesEn: [
      'Drafting intricate Cassation petitions in commercial, civil, and criminal branches',
      'Administrative lawsuits challenging ministerial decrees before the Syrian State Council',
      'Expedited petitions for stay of judicial execution pending cassation rulings',
      'Judicial accountability petitions in cases of gross professional judicial error',
      'Precedent research and advocacy before the General Assembly of Cassation Court'
    ],
    syrianLegalFrameworkAr: 'قانون أصول المحاكمات المدنية رقم 1 لعام 2016، وقانون مجلس الدولة السوري رقم 32 لعام 2019.',
    syrianLegalFrameworkEn: 'Syrian Civil Procedure Code No. 1/2016, and State Council Law No. 32/2019.'
  },
  {
    id: 'family-wealth-succession',
    titleAr: 'حوكمة الشركات العائلية وإدارة الثروات والتركات',
    titleEn: 'Family Wealth, Business Succession & Estates',
    summaryAr: 'صياغة مواثيق العائلات التجارية العريقة، تنظيم انتقال الأجيال، وحصر التركات المعقدة للأصول داخل سوريا وخارجها.',
    summaryEn: 'Family business charters, generational wealth succession, complex estate division, and multi-jurisdictional asset protection.',
    fullDescAr: 'تشكل الشركات العائلية العمود الفقري للاقتصاد السوري. نساعد العائلات التجارية البارزة في وضع دساتير عائلية تضمن استمرارية الأعمال عبر الأجيال، فضلاً عن الحلول القضائية والودية لقسمة التركات الكبرى وتصفية الشركات.',
    fullDescEn: 'Family enterprises form the bedrock of the Syrian commercial landscape. We assist prominent business dynasties in drafting binding family constitutions, resolving generational inheritance divisions, and restructuring asset holdings across borders.',
    iconName: 'Briefcase',
    keyServicesAr: [
      'صياغة الدساتير العائلية ومواثيق حوكمة الشركات العائلية السورية الكبرى',
      'تنظيم الوصايا والأوقاف الذرية والخيرية وحصر الإرث القضائي المعقد',
      'فصل الملكية عن الإدارة في الشركات المشتركة لضمان النمو المستدام',
      'قسمة الأموال الشائعة رضائياً أو عبر القضاء مع تقييم عادل للأصول',
      'حماية أصول المغتربين السوريين وإدارتها بالوكالات القانونية المعتمدة'
    ],
    keyServicesEn: [
      'Drafting Family Business Constitutions and governance charters',
      'Testamentary dispositions, family trusts, and complex estate probate execution',
      'Separation of family ownership and executive management structures',
      'Judicial and amicable division of jointly-owned family real estate and corporate assets',
      'Legal management & power-of-attorney representation for Syrian diaspora assets'
    ],
    syrianLegalFrameworkAr: 'قانون الأحوال الشخصية السوري وتعديلاته، وقانون الشركات التجاري.',
    syrianLegalFrameworkEn: 'Syrian Personal Status Law, Civil Code, and Companies Law.'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'dr-riad-papinian',
    nameAr: 'د. رياض العظم بابينيان',
    nameEn: 'Dr. Riad Al-Azem Papinian',
    titleAr: 'الشريك المؤسس والمدير العام - محامٍ لدى محكمة النقض',
    titleEn: 'Founding Senior Partner & Managing Director - Cassation Advocate',
    roleAr: 'خبير قانون الشركات والتحكيم الدولي',
    roleEn: 'Expert in Corporate Law & International Commercial Arbitration',
    bioAr: 'أكثر من 32 عاماً من الممارسة القانونية الرفيعة في دمشق وباريس. مستشار استراتيجي لعدد من كبرى المجموعات الاقتصادية والمصارف في سوريا. تولى رئاسة هيئات تحكيم في باريس ودبي ودمشق.',
    bioEn: 'Over 32 years of prestigious legal practice in Damascus and Paris. Strategic counsel to tier-one industrial conglomerates, banks, and holding corporations across Syria and the Levant. Veteran arbitrator with ICC and DIAC.',
    educationAr: [
      'دكتوراه دولة في القانون الخاص - جامعة باريس الأولى (بانتيون - سوربون)، فرنسا',
      'ماجستير في القانون التجاري المقارن - كلية الحقوق، جامعة دمشق',
      'إجازة في الحقوق (مع مرتبة الشرف) - كلية الحقوق، جامعة دمشق'
    ],
    educationEn: [
      'Ph.D. in Private International Law - Université Paris 1 Panthéon-Sorbonne, France',
      'Master of Laws (LL.M.) in Comparative Commercial Law - Damascus University',
      'Bachelor of Laws (LL.B. with High Honors) - Faculty of Law, Damascus University'
    ],
    membershipsAr: [
      'نقابة المحامين في الجمهورية العربية السورية (فرع دمشق - قيد محكمة النقض رقم 1148)',
      'عضو معهد التحكيم لدى غرفة التجارة الدولية بباريس (ICC Paris)',
      'عضو الاتحاد الدولي للمحامين (UIA) - باريس'
    ],
    membershipsEn: [
      'Syrian Bar Association (Damascus Branch - Supreme Court of Cassation Roll No. 1148)',
      'Member of ICC International Court of Arbitration Institute (Paris)',
      'Member of Union Internationale des Avocats (UIA - Paris)'
    ],
    barNumber: 'دمشق 1148 / نقض',
    languagesAr: ['العربية (اللغة الأم)', 'الإنجليزية (بطلاقة)', 'الفرنسية (بطلاقة)'],
    languagesEn: ['Arabic (Native)', 'English (Fluent)', 'French (Fluent)'],
    image: '/images/papinian-partners.jpg'
  },
  {
    id: 'adv-reem-nahhas',
    nameAr: 'المستشارة ريم النحاس',
    nameEn: 'Adv. Reem Al-Nahhas',
    titleAr: 'شريكة - رئيسة قسم التحكيم التجاري والعقود الدولية',
    titleEn: 'Partner - Head of International Arbitration & Energy Contracts',
    roleAr: 'محكّمة دولية ومستشارة استثمار',
    roleEn: 'International Arbitrator & Inward Investment Counsel',
    bioAr: 'شخصية رائدة في التحكيم المؤسسي بالشرق الأوسط. قادت نزاعات مقاولات واستثمار كبرى تتجاوز قيمتها 600 مليون دولار. حائزة على تقديرات دولية في صياغة عقود الطاقة ومشاريع البنية التحتية.',
    bioEn: 'A preeminent voice in institutional dispute resolution in the Levant. She has successfully led major construction, power, and cross-border commercial arbitrations totaling over $600M. Regularly acts as sole arbitrator and party-appointed counsel.',
    educationAr: [
      'ماجستير في التحكيم التجاري الدولي - كلية كينجز لندن (King\'s College London)',
      'دبلوم الدراسات العليا في القانون الدولي - جامعة دمشق',
      'إجازة في الحقوق - جامعة دمشق'
    ],
    educationEn: [
      'LL.M. in International Dispute Resolution - King\'s College London (UK)',
      'Postgraduate Diploma in Public International Law - Damascus University',
      'Bachelor of Laws (LL.B.) - Damascus University'
    ],
    membershipsAr: [
      'نقابة المحامين في سوريا (فرع دمشق - قيد الاستئناف رقم 3892)',
      'زميل المعهد القانوني للمحكمين المعتمدين بلندن (FCIArb)',
      'عضو اللجنة الوطنية للتحكيم الدولي - دمشق'
    ],
    membershipsEn: [
      'Syrian Bar Association (Damascus Branch - Court of Appeal Roll No. 3892)',
      'Fellow of the Chartered Institute of Arbitrators, London (FCIArb)',
      'Syrian National Commission for International Arbitration'
    ],
    barNumber: 'دمشق 3892 / استئناف',
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    image: '/images/papinian-partners.jpg'
  },
  {
    id: 'adv-tarek-jaberi',
    nameAr: 'الأستاذ طارق الجابري',
    nameEn: 'Adv. Tarek Al-Jaberi',
    titleAr: 'شريك - رئيس قسم الشركات والاستثمار العقاري',
    titleEn: 'Partner - Head of Corporate Law, M&A & Urban Development',
    roleAr: 'مستشار الصفقات الكبرى وإعادة الإعمار',
    roleEn: 'Major Transactions & Reconstruction Advisory Counsel',
    bioAr: 'خبير متخصص في تشريعات الاستثمار السورية وقوانين التطوير العقاري المعاصرة (المرسوم 66 والقانون 10). أشرف على تأسيس أكثر من 180 شركة استثمارية ومصرفية في سوريا ودول الجوار.',
    bioEn: 'Specialist in Syrian investment statutes and modern urban development regulations. He has structured over 180 corporate entities, foreign ventures, and industrial establishments across Damascus, Aleppo, and Tartous.',
    educationAr: [
      'ماجستير في قانون الأعمال الدولي - الجامعة اللبنانية الفرنسية',
      'إجازة في الحقوق - جامعة دمشق'
    ],
    educationEn: [
      'Master in International Business Law - ULF',
      'Bachelor of Laws (LL.B.) - Damascus University'
    ],
    membershipsAr: [
      'نقابة المحامين في سوريا (قيد النقض رقم 2451)',
      'اتحاد المحامين العرب'
    ],
    membershipsEn: [
      'Syrian Bar Association (Cassation Roll No. 2451)',
      'Arab Lawyers Union'
    ],
    barNumber: 'دمشق 2451 / نقض',
    languagesAr: ['العربية', 'الإنجليزية'],
    languagesEn: ['Arabic', 'English'],
    image: '/images/papinian-boardroom.jpg'
  },
  {
    id: 'judge-marwan-kilani',
    nameAr: 'المستشار القاضي السابق مروان الكيلاني',
    nameEn: 'Former Chief Judge Marwan Al-Kilani',
    titleAr: 'مستشار أول (Of Counsel) - رئيس قسم التقاضي الاستراتيجي ومجلس الدولة',
    titleEn: 'Senior Of Counsel - Head of Strategic Appellate & State Council Practice',
    roleAr: 'رئيس محكمة استئناف دمشق سابقاً ومستشار لدى محكمة النقض',
    roleEn: 'Former President of Damascus Court of Appeal & Cassation Senior Advisor',
    bioAr: 'شغل منصب رئيس محكمة الاستئناف المدنية والتجارية الأولى بدمشق لسنوات طويلة قبل انضمامه لشركة بابينيان. مرجع موثوق في تفسير القوانين الإجرائية وإعداد المذكرات أمام الهيئة العامة لمحكمة النقض.',
    bioEn: 'Served as Chief Presiding Judge of the 1st Damascus Commercial & Civil Court of Appeal for over a decade. He brings unmatched judicial insight to complex cassation defenses and constitutional questions in Syria.',
    educationAr: [
      'دبلوم المعهد العالي للقضاء - دمشق',
      'دبلوم العلوم الجنائية والمدنية - كلية الحقوق، جامعة دمشق',
      'إجازة في الحقوق - جامعة دمشق (دفعة 1979)'
    ],
    educationEn: [
      'Diploma of the High Institute of Magistracy - Damascus',
      'Higher Diploma in Judicial Sciences - Damascus University',
      'Bachelor of Laws (LL.B.) - Damascus University (Class of 1979)'
    ],
    membershipsAr: [
      'مجلس القضاء الأعلى (سابقاً)',
      'نقابة المحامين في سوريا - أستاذ محامٍ ممارس لدى محكمة النقض',
      'جمعية العلوم الاقتصادية والقانونية السورية'
    ],
    membershipsEn: [
      'Supreme Judicial Council of Syria (Former Member)',
      'Syrian Bar Association - Senior Advocate before Supreme Cassation',
      'Syrian Association for Economic & Legal Sciences'
    ],
    barNumber: 'دمشق 802 / نقض كبار المستشارين',
    languagesAr: ['العربية', 'الفرنسية'],
    languagesEn: ['Arabic', 'French'],
    image: '/images/papinian-heritage.jpg'
  }
];

export const LANDMARK_CASES: LandmarkCase[] = [
  {
    id: 'case-1',
    titleAr: 'نزاع تحكيمي دولي في عقد مقاولات بنية تحتية كبرى',
    titleEn: 'Cross-Border ICC Infrastructure & FIDIC Arbitration',
    categoryAr: 'تحكيم تجاري دولي (ICC Paris)',
    categoryEn: 'International Arbitration (ICC Paris)',
    valueAr: '115,000,000 دولار أمريكي',
    valueEn: '$115,000,000 USD',
    summaryAr: 'تمثيل كونسورتيوم مقاولين دولي ضد جهة مشغلة في نزاع حول أوامر تغيير وظروف طارئة وتعديلات سعر الصرف في مشروع محطة توليد طاقة.',
    summaryEn: 'Represented an international engineering consortium against project owners concerning FIDIC variation orders, force majeure, and currency parity shifts in a mega utility plant.',
    resultAr: 'صدور حكم تحكيمي نهائي لصالح موكلينا بكامل التعويضات المستحقة مع الفوائد وإلزام الطرف الآخر بكافة أتعاب التحكيم، وتثبيت تنفيذه بدمشق.',
    resultEn: 'Favorable final award rendered for our client recovering full variation compensation and interest, successfully granted Syrian executory formula in Damascus.',
    jurisdictionAr: 'محكمة التحكيم التابعة لغرفة التجارة الدولية (باريس) ومحكمة استئناف دمشق',
    jurisdictionEn: 'ICC International Court of Arbitration (Paris) & Damascus Court of Appeal'
  },
  {
    id: 'case-2',
    titleAr: 'إعادة هيكلة واستحواذ صناعي لمجموعة شركات مساهمة',
    titleEn: 'Corporate M&A & Restructuring of Industrial Conglomerate',
    categoryAr: 'قانون الشركات والاندماج (M&A)',
    categoryEn: 'Corporate Law & M&A',
    valueAr: '450,000,000,000 ليرة سورية',
    valueEn: '450 Billion SYP ($34M+ USD)',
    summaryAr: 'إدارة الاندماج المعقد لثلاث شركات صناعية وتجارية كبرى في دمشق وحلب تحت مظلة شركة قابضة واحدة مع تدقيق نافٍ للجهالة كامل للأصول والضرائب.',
    summaryEn: 'Steered the strategic corporate merger of three prominent Syrian manufacturing corporations into a consolidated holding entity, including asset audits and tax clearances.',
    resultAr: 'إتمام الاندماج بنجاح بدون أي نزاعات مساهمين والحصول على كافة موافقات وزارة التجارة الداخلية ومجلس الوزراء، محققين وفورات ضريبية قانونية كبرى.',
    resultEn: 'Executed with zero shareholder disputes, full regulatory approvals from the Ministry of Internal Trade, achieving substantial legal tax optimization.',
    jurisdictionAr: 'وزارة التجارة الداخلية وحماية المستهلك - دمشق',
    jurisdictionEn: 'Ministry of Internal Trade & Damascus Commercial Register'
  },
  {
    id: 'case-3',
    titleAr: 'حكم تاريخي لمحكمة النقض في نزاع وكالة تجارية حصرية',
    titleEn: 'Supreme Court of Cassation Precedent in Exclusive Commercial Agency',
    categoryAr: 'التقاضي أمام محكمة النقض',
    categoryEn: 'Cassation Litigation & Commercial Agencies',
    valueAr: '24,000,000 يورو',
    valueEn: '€24,000,000 EUR',
    summaryAr: 'الدفاع عن وكيل سوري حصري لشركة أدوية أوروبية عالمية بعد محاولة إلغاء الوكالة بشكل تعسفي دون تعويض عادل عن الشهرة التجارية والزبائن.',
    summaryEn: 'Defended an exclusive Syrian pharmaceutical distributor against unilateral termination by a European pharma multinational without goodwill indemnity.',
    resultAr: 'أرست الهيئة العامة لمحكمة النقض بدمشق مبدأً قضائياً ملزماً يحمي الوكلاء التجاريين في سوريا ويمنح موكلنا تعويضاً تاريخياً عن الأضرار اللاحقة وفوات الكسب.',
    resultEn: 'The Syrian Supreme Cassation Court established a historic binding legal precedent safeguarding exclusive commercial agents, awarding full damages.',
    jurisdictionAr: 'الهيئة العامة لمحكمة النقض - قصر العدل بدمشق',
    jurisdictionEn: 'General Assembly of the Supreme Court of Cassation - Damascus'
  },
  {
    id: 'case-4',
    titleAr: 'حماية واسترداد علامات تجارية دولية كبرى ومكافحة التعدي',
    titleEn: 'Cross-Border Trademark Defense & Anti-Counterfeiting Enforcement',
    categoryAr: 'الملكية الفكرية والتجارية',
    categoryEn: 'Intellectual Property & Trademarks',
    valueAr: 'أصول ملكية فكرية بقيمة تتجاوز 80 مليون دولار',
    valueEn: 'IP Assets Valued over $80M USD',
    summaryAr: 'كشف وضبط شبكة تزوير استنسخت علامة تجارية لشركة مستحضرات وسلع استهلاكية عالمية في الأسواق السورية ودول الجوار.',
    summaryEn: 'Uncovered and raided counterfeiters misusing registered trademarks of a Fortune 500 consumer goods enterprise across Syrian wholesale distribution channels.',
    resultAr: 'إتلاف أكثر من 500,000 عبوة مقلدة، وإلزام المعتدين بتعويضات مدنية رادعة، وتثبيت التسجيل الحصري للعلامة لدى مديرية حماية الملكية السورية.',
    resultEn: 'Confiscation and destruction of 500k+ counterfeit units, judicial damages awarded, and reaffirmation of untouchable trademark rights.',
    jurisdictionAr: 'محكمة البداية المدنية بدمشق والمحاكم الجمركية',
    jurisdictionEn: 'Damascus Civil Court of 1st Instance & Syrian Customs Directorate'
  }
];

export const LEGAL_GUIDES: LegalGuide[] = [
  {
    id: 'syrian-investment-law-18',
    category: 'استثمار وتشريعات اقتصادية',
    titleAr: 'الدليل العملي للمستثمر: الحوافز والإعفاءات في قانون الاستثمار السوري رقم 18 لعام 2021',
    titleEn: 'Investor Practical Guide: Incentives & Exemptions in Syrian Investment Law No. 18/2021',
    excerptAr: 'تحليل شامل للحوافز الضريبية والجمركية، وتسهيلات تملك الأراضي، وضمانات تحويل الأرباح للمستثمرين المحليين والأجانب.',
    excerptEn: 'In-depth analysis of tax cuts, custom fee waivers, land allocation protocols, and profit repatriation guarantees for foreign investors in Syria.',
    contentAr: 'يُمثّل القانون رقم 18 لعام 2021 نقطة تحول كبرى في البيئة التشريعية السورية؛ حيث أقر تخفيضات ضريبية تصل إلى 75% للسنوات العشر الأولى من الإنتاج للمشاريع الصناعية والزراعية الاستراتيجية، وإعفاء الآلات وخطوط الإنتاج بالكامل من الرسوم الجمركية والمالية، إضافة لضمانات عدم التأميم أو نزع الملكية إلا للمنفعة العامة وبتعويض عادل وفوري.',
    contentEn: 'Law No. 18 of 2021 marks a pivotal milestone in Syrian economic legislation. It grants up to 75% corporate income tax cuts during the first ten years of operational output for designated industrial and agricultural ventures, total exemption on manufacturing machinery imports, and statutory guarantees against expropriation.',
    lawRefAr: 'المرسوم التشريعي رقم 18 لعام 2021 وتعليماته التنفيذية الصادرة بقرار رئاسة مجلس الوزراء رقم 58',
    lawRefEn: 'Legislative Decree No. 18/2021 and Prime Ministerial Executive Bylaw No. 58',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read'
  },
  {
    id: 'establishing-company-syria',
    category: 'قانون الشركات والتجارة',
    titleAr: 'كيفية تأسيس شركة تجارية (محدودة المسؤولية ومساهمة) في دمشق: الإجراءات والشروط القانونية',
    titleEn: 'Incorporating a Commercial Entity (LLC & JSC) in Damascus: Legal Protocols & Requirements',
    excerptAr: 'خطوات إعداد النظام الأساسي، وإيداع رأس المال في المصارف السورية، والحصول على السجل التجاري في وزارة التجارة الداخلية.',
    excerptEn: 'Procedural roadmap for Articles of Association, capital deposits in Syrian commercial banks, and commercial registry authentication.',
    contentAr: 'تخضع الشركات في سوريا لأحكام قانون الشركات رقم 29 لعام 2011. توفر الشركة محدودة المسؤولية (ذ.م.م) المرونة العالية وحماية الذمة المالية للشركاء، في حين تعد الشركة المساهمة المغفلة (ش.م.م) الخيار المثالي للمشاريع الاستثمارية الكبرى والتمويل المصرفي والشراكات مع جهات عامة أو مستثمرين أجانب.',
    contentEn: 'Corporations in Syria are regulated under Companies Law No. 29/2011. The Limited Liability Company (LLC) offers optimal agility and liability segregation, whereas the Closed Joint Stock Company (JSC) provides the institutional vehicle needed for major infrastructure, banking consortia, and institutional equity partners.',
    lawRefAr: 'قانون الشركات الصادر بالمرسوم التشريعي رقم 29 لعام 2011',
    lawRefEn: 'Syrian Companies Code (Legislative Decree No. 29/2011)',
    readTimeAr: '8 دقائق قراءة',
    readTimeEn: '8 min read'
  },
  {
    id: 'arbitration-enforcement-syria',
    category: 'التحكيم الدولي والتقاضي',
    titleAr: 'تنفيذ أحكام التحكيم الأجنبية في سوريا بموجب اتفاقية نيويورك لعام 1958',
    titleEn: 'Enforcement of Foreign Arbitral Awards in Syria under the 1958 New York Convention',
    excerptAr: 'الشروط الإجرائية والموضوعية لإكساء الحكم التحكيمي الأجنبي الصيغة التنفيذية أمام محاكم الاستئناف السورية.',
    excerptEn: 'Procedural criteria and public policy defenses for obtaining an Exequatur before Syrian Courts of Appeal.',
    contentAr: 'انضمت الجمهورية العربية السورية إلى اتفاقية نيويورك للاعتراف بقرارات التحكيم الأجنبية وتنفيذها منذ عام 1959. كما كرس قانون التحكيم السوري رقم 4 لعام 2008 مبدأ استقلالية شرط التحكيم وضيق نطاق أسباب رفض التنفيذ المحصورة في النظام العام أو الإخلال الجسيم بحق الدفاع.',
    contentEn: 'The Syrian Arab Republic has been a contracting state to the 1958 New York Convention since 1959. Syrian Arbitration Law No. 4/2008 explicitly upholds the separability of arbitration clauses and strictly limits grounds for refusing enforcement to violations of public policy or serious due process breaches.',
    lawRefAr: 'قانون التحكيم السوري رقم 4 لعام 2008 والمادتان 306-311 من قانون أصول المحاكمات',
    lawRefEn: 'Syrian Arbitration Act No. 4/2008 & Syrian Civil Procedure Articles 306-311',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read'
  },
  {
    id: 'syrian-real-estate-registry',
    category: 'العقارات والملكية',
    titleAr: 'حماية الملكية وتوثيق العقود العقارية في السجلات الرسمية بدمشق والمحافظات',
    titleEn: 'Real Estate Ownership Security & Title Registry Procedures in Damascus',
    excerptAr: 'الفارق بين البيوع في السجل العقاري والسجل المؤقت والوكالات الكاتبة للعدل، وضمانات حماية حقوق المشترين.',
    excerptEn: 'Distinction between Permanent Land Registry, Temporary Register, and Irrevocable Notary Powers of Attorney.',
    contentAr: 'تتمتع قيود السجل العقاري في سوريا بقوة إثبات مطلقة لا يجوز الطعن فيها إلا بالتزوير. يوضح هذا الدليل المخاطر الشائعة لشراء العقارات بموجب وكالات كاتب عدل غير قابلة للعزل دون تثبيتها قضائياً أو عقارياً، وكيفية إتمام الفحص الفني والقانوني (Title Search) قبل دفع أي مبالغ.',
    contentEn: 'Entries in the Syrian Permanent Land Registry possess absolute evidentiary force. This guide illuminates the hidden pitfalls of acquiring Syrian properties through Notary Powers of Attorney without immediate judicial or registry registration, and outlines our verified title verification procedure.',
    lawRefAr: 'قانون السجل العقاري السوري والقرارات التشريعية الناظمة للملكية',
    lawRefEn: 'Syrian Land Registry Code & Real Estate Transfer Directives',
    readTimeAr: '5 دقائق قراءة',
    readTimeEn: '5 min read'
  }
];

export const PAPINIAN_HISTORICAL_DATA = {
  nameAr: 'إميليوس بابينيانوس (بابينيان)',
  nameEn: 'Aemilius Papinianus (Papinian)',
  lifespan: '142 - 212 م',
  originAr: 'وُلد في سوريا (إيميسا - حمص الحالية)',
  originEn: 'Born in Syria (Emesa - Modern Homs)',
  titleAr: 'أمير الفقهاء ورأس العدالة الرومانية السورية',
  titleEn: 'Prince of Jurists & The Epitome of Roman-Syrian Jurisprudence',
  famousQuoteAr: '«إن ارتكاب الجريمة أهون بكثير من تبريرها بالباطل؛ والعدالة ليست إرادة الحاكم بل ميزان الحق الأخلاقي الأزلي.»',
  famousQuoteEn: '"It is far easier to commit a crime than to justify one; justice is not the arbitrary will of the ruler, but eternal moral rectitude."',
  quoteContextAr: 'قالها بابينيان عندما رفض تبرير قتل الإمبراطور كاراكلا لأخيه غيتا، مفضلاً الموت بشرف على أن يلوّث قدسية القانون بتبرير جريمة حاكم.',
  quoteContextEn: 'Uttered when Papinian heroically refused Emperor Caracalla\'s order to legally justify the murder of his brother Geta, choosing execution rather than desecrating the sanctity of the law.',
  heritageStoryAr: `يُعد بابينيان أعظم قامة قانونية أنجبتها بلاد الشام في التاريخ القديم. درس ودرّس في مدرسة بيروت للحقوق (التي كانت تتبع ولاية سورية الفينيقية)، وعُيّن في عهد الإمبراطور السوري سيبتيموس سيفيروس قائداً للحرس الإمبراطوري ومستشاراً قضائياً أول للإمبراطورية الرومانية.

عندما أصدر الإمبراطور جستنيان مدونته القانونية الشهيرة (Corpus Juris Civilis) التي بنت عليها أوروبا والعالم الحديث قوانينها المعاصرة، شكلت آراء بابينيان وفتاواه القانونية العمود الفقري للمدونة، وسُمّي بـ "أمير الفقهاء".

في "شركة بابينيان للمحاماة"، نستلهم من هذا الإرث السوري الخالد شجاعة الدفاع، ودقة الفقه، ونزاهة الكلمة، لنقدم لعملائنا في سوريا والعالم حماية قانونية استثنائية لا تتزعزع.`,
  heritageStoryEn: `Papinian stands as the greatest legal luminary born in the ancient Levant. Educated at the renowned Berytus Law School, he served under the Syrian Roman Emperor Septimius Severus as Praetorian Prefect and the supreme legal mind of the Empire.

Centuries later, when Emperor Justinian compiled the monumental Corpus Juris Civilis—the cornerstone of modern civil law across Europe and the globe—Papinian's jurisprudence formed its very backbone, earning him the timeless moniker "The Prince of Jurists."

At Papinian Law Firm in Damascus, we inherit this Syrian legacy: uncompromising ethical integrity, unparalleled legal scholarship, and courageous advocacy for our clients.`
};

export const FIRM_STATISTICS = [
  { valueAr: '+32', valueEn: '+32', labelAr: 'عاماً من الخبرة والريادة القانونية', labelEn: 'Years of Legal Excellence' },
  { valueAr: '+1.2B$', valueEn: '+1.2B$', labelAr: 'قيمة النزاعات والصفقات المدارة', labelEn: 'Value of Managed Disputes & Deals' },
  { valueAr: '97.4%', valueEn: '97.4%', labelAr: 'نسبة النجاح القضائي والتحكيمي', labelEn: 'Favorable Dispute Resolution Rate' },
  { valueAr: '520+', valueEn: '520+', labelAr: 'شركة ومؤسسة استثمارية محلية ودولية', labelEn: 'Corporate & Institutional Clients' }
];

export const OFFICE_INFO = {
  addressAr: 'دمشق، الجمهورية العربية السورية - أوتوستراد المزة، برج الفردوس الاستثماري، الطابق الثامن (بالقرب من قصر العدل ومدينة المعارض القديمة)',
  addressEn: 'Damascus, Syrian Arab Republic - Mazzeh Highway, Al-Fardous Business Tower, 8th Floor (Near Palace of Justice)',
  phonePrimary: '+963 11 334 9800',
  phoneSecondary: '+963 11 334 9801',
  mobileWhatsapp: '+963 944 888 212',
  email: 'counsel@papinian-law.sy',
  vipEmail: 'partners@papinian-law.sy',
  workingHoursAr: 'الأحد إلى الخميس: 9:00 صباحاً - 7:00 مساءً (قسم الطوارئ القضائي 24/7)',
  workingHoursEn: 'Sunday to Thursday: 9:00 AM - 7:00 PM (24/7 Emergency Dispatch)',
  branchAleppoAr: 'فرع حلب: شارع القوتلي، برج المحامين، الطابق الرابع',
  branchAleppoEn: 'Aleppo Branch: Al-Quwatli Street, Lawyers Tower, 4th Floor',
  branchLatakiaAr: 'مكتب اللاذقية البحري: شارع بغداد، مركز التجارة والملاحة',
  branchLatakiaEn: 'Latakia Maritime Office: Baghdad Street, Maritime Trade Center'
};
