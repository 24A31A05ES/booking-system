// =====================================================
// PEC CAMPUS EVENTS — COMPLETE DATABASE
// Categories: Tech, Cultural, Festivals, NCC/NSS, Sports
// =====================================================

const PEC_DB = {

  // ── CATEGORIES ────────────────────────────────────
  categories: [
    { id: "tech",     label: "Tech Events",    icon: "💻", color: "#10B981" },
    { id: "cultural", label: "Cultural Events", icon: "🎭", color: "#A855F7" },
    { id: "festival", label: "Festivals",       icon: "🎉", color: "#F59E0B" },
    { id: "ncc_nss",  label: "NCC & NSS",       icon: "🎗️", color: "#3B82F6" },
    { id: "sports",   label: "Sports",          icon: "🏆", color: "#EF4444" }
  ],

  // ── TECH EVENTS ───────────────────────────────────
  techEvents: [

    // EPROZYNE — CSE
    { id:"e1", symposium:"EPROZYNE", dept:"CSE", date:"09 Jan 2026", name:"Innovexa",
      desc:"Showcase innovative software/hardware solutions developed by students, judged for creativity and problem solving.",
      venue:"F-16", image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfxFEfMKpjWKoqWXOfjVOh8M-YS9Xqpzf3SJX04dPjig7828g/viewform" },
    { id:"e2", symposium:"EPROZYNE", dept:"CSE", date:"09 Jan 2026", name:"GameXcode",
      desc:"Competitive programming challenge testing logic, efficiency, and coding skills.",
      venue:"G-14", image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSe7r3_qPQtMVxzltH47_dlJqLRH4GQlul_Vf1Y0GpuDlyhwgg/viewform" },
    { id:"e3", symposium:"EPROZYNE", dept:"CSE", date:"09 Jan 2026", name:"Mind Sprint",
      desc:"Multi-round quiz spanning core CS topics with teamwork and rapid-fire rounds.",
      venue:"F-23", image:"https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLScZtoAHJayvSaLTj6KpMxu38nee4yl_R4zFDDRUDVjbsKXmSg/viewform" },
    { id:"e4", symposium:"EPROZYNE", dept:"CSE", date:"09 Jan 2026", name:"VisionX",
      desc:"Visually present technical concepts and research ideas through creative posters.",
      venue:"G-9", image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSclfTPrMuW6fjq6I-efcaUQpbzzrgRnONLmKsqA5DuaLpK20Q/viewform" },
    { id:"e5", symposium:"EPROZYNE", dept:"CSE", date:"09 Jan 2026", name:"Type Rush",
      desc:"Test typing speed and accuracy through dynamic competitive rounds.",
      venue:"G-14", image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSe1Ogb6VUlkW5wN9kGmr36acjuPtCD_WgjitfBlFwG69c38oA/viewform" },

    // E-JIVE — ECE
    { id:"j1", symposium:"E-JIVE", dept:"ECE", date:"08 Jan 2026", name:"Bhagyastra",
      desc:"A fun logic-based game with 15 switches & 3 bulbs. Only 3 switches work — find them in 5 timed attempts! Each round randomizes through IoT.",
      venue:"EF-3", image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      regLink:"https://forms.gle/dGjNDh85WW1rZLHP8" },
    { id:"j2", symposium:"E-JIVE", dept:"ECE", date:"08 Jan 2026", name:"Yantravega",
      desc:"Build and program an autonomous robot to race through obstacles, turns, and slopes. Fastest and smartest bot wins!",
      venue:"ES-3", image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSeG2FzC4MPWRYQ4Rijl1-3jbEy48gmnhWLl5J47oNmatvmXrQ/viewform" },
    { id:"j3", symposium:"E-JIVE", dept:"ECE", date:"08 Jan 2026", name:"Tech Nirvana",
      desc:"Showcase your innovative engineering projects — real-time solutions, creative builds, and interdisciplinary ideas.",
      venue:"ES-5", image:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSek0ke2x2iRe_4bVf3qwzG3TA-D3pAM7EGW8q7iV6dpDapgfw/viewform" },
    { id:"j4", symposium:"E-JIVE", dept:"ECE", date:"08 Jan 2026", name:"Vignana Prasathuti",
      desc:"Present your technical ideas, research, or concepts through impactful PPTs. Sharpen communication and analytical skills.",
      venue:"EF-4", image:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      regLink:"https://forms.gle/crWciu4K51j7wyRB6" },
    { id:"j5", symposium:"E-JIVE", dept:"ECE", date:"08 Jan 2026", name:"Kshana Vidhya",
      desc:"Create a 1–2 minute technical video showing innovation, concepts, or demonstrations. Teamwork and digital storytelling.",
      venue:"EF-9", image:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSf4tqVbbBqkU18-qtvIeY5Z0DjvnRiPwDf-DuYo_kA8YF9EKQ/viewform" },

    // E-ARTIFACT — AIML
    { id:"a1", symposium:"E-ARTIFACT", dept:"AIML", date:"07 Jan 2026", name:"AI Agent",
      desc:"Build Your Own Smart Assistant: Create a simple AI-powered agent that performs tasks intelligently with minimal human input.",
      venue:"CF-3", image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfv2VmimR2dSHjv7LP0n5WOaXVcfWKC2O8UZVhVQT_tIbO7nw/viewform" },
    { id:"a2", symposium:"E-ARTIFACT", dept:"AIML", date:"07 Jan 2026", name:"ML Mastery Challenge",
      desc:"Build ML models by collecting, preprocessing, and analyzing datasets to achieve high accuracy.",
      venue:"CF-13", image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSdfjF1inallijF2HoV02-plquXUbj3NWtIMXziFvx8Zpu_qTw/viewform" },
    { id:"a3", symposium:"E-ARTIFACT", dept:"AIML", date:"07 Jan 2026", name:"Test Trap",
      desc:"Break a fully working code by designing test cases that uncover hidden logic flaws and edge-case failures.",
      venue:"CS-3", image:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSczi5505iImLTksfuNLn36Xp-HqJNZV5Z09hMsW0OCCBKXo-w/viewform" },
    { id:"a4", symposium:"E-ARTIFACT", dept:"AIML", date:"07 Jan 2026", name:"Mysti Code",
      desc:"Solve a chain of buggy codes by analyzing clues, debugging each stage, and logically progressing to unlock the final output.",
      venue:"CS-2", image:"https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSdXuhJAaOGlL4zvN-VUFy1ARszDWA4dh7zGxJtQn5tOKqvdvg/viewform" },

    // EBHIGNA — AI
    { id:"b1", symposium:"EBHIGNA", dept:"AI", date:"TBD", name:"Code Jiggle",
      desc:"Two-round coding event — 25-minute quiz on programming & aptitude, followed by 1-hour coding round to design functional solutions.",
      venue:"CG-3", image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSd5vf3fQGjhTCdtMJVQWGbx5z2_8ehWSf8TJZlelVCoTLcFng/viewform" },
    { id:"b2", symposium:"EBHIGNA", dept:"AI", date:"TBD", name:"Code Golf",
      desc:"A fun C coding contest — solve tasks using the shortest possible code. Correct output is mandatory, creativity wins!",
      venue:"CG-9", image:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfDFZWxk9pzYBQ_UycVpp-9mo8jM6vop665oS2UxijZW5X0EA/viewform" },
    { id:"b3", symposium:"EBHIGNA", dept:"AI", date:"TBD", name:"Promptopia",
      desc:"View an image and write the most accurate AI prompt to recreate it using tools like DALL·E, Midjourney, or Leonardo AI.",
      venue:"CG-13", image:"https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSeCgZQ2rOeogk9KupOWtk_5VbPJ6V39xzAOtQmSzAp-n3aV3A/viewform" },
    { id:"b4", symposium:"EBHIGNA", dept:"AI", date:"TBD", name:"Escape the Lab",
      desc:"Story-based tech challenge — solve puzzles, debug clues, and decode messages to unlock rounds and escape the virtual lab.",
      venue:"EF-7", image:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSexbl3iaggXHCxfzYVF99eB1BlaELhImFXX86syc7mIQwTUkA/viewform" },

    // EXULT — EEE
    { id:"x1", symposium:"EXULT", dept:"EEE", date:"08 Jan 2026", name:"Code n Connect",
      desc:"Merge coding skills with electrical knowledge — use programming to rectify errors, testing both electrical and coding skills.",
      venue:"EF-3", image:"https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
      regLink:"https://forms.gle/45qksixHVhDgkxXD6" },
    { id:"x2", symposium:"EXULT", dept:"EEE", date:"08 Jan 2026", name:"Electro Minds",
      desc:"Test your knowledge of electrical components — from basic resistors and capacitors to complex integrated circuits.",
      venue:"EF-13", image:"https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSd9Ot8_Mb2cCo-LgOeWzeLGiCAzMtwcxblA7M-WUukOWJhn-A/viewform" },
    { id:"x3", symposium:"EXULT", dept:"EEE", date:"08 Jan 2026", name:"Power Poster",
      desc:"Express innovative ideas through posters — tests both technical knowledge and presentation skills.",
      venue:"ES-7", image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      regLink:"https://forms.gle/BHFTXg2bWWQXE46S7" },
    { id:"x4", symposium:"EXULT", dept:"EEE", date:"08 Jan 2026", name:"Spark Search",
      desc:"Dynamic two-part competition — intellectual presentation skills and practical on-the-ground problem-solving combined.",
      venue:"EG-9", image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      regLink:"https://forms.gle/Zc83xv8Tdexo8WL88" },
    { id:"x5", symposium:"EXULT", dept:"EEE", date:"08 Jan 2026", name:"Innovation Space",
      desc:"Exciting platform for teams to showcase creativity and innovative ideas through a project expo.",
      venue:"ES-2 / EG-6", image:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSfBaKK0qm74nVDOzDN6yzji3ApvEJYr3RECZHLfKK-G0rfzsw/viewform" },

    // EDATUM — DS
    { id:"d1", symposium:"EDATUM", dept:"DS", date:"07 Jan 2026", name:"Data Vishleshana",
      desc:"Technical Quiz on Data Science, AI & ML — test your analytical and problem solving skills.",
      venue:"CG-13", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSdsJAY4g3vjXINSJgWktRXTw_lXXhssap2yoC1X10tkYHjAjw/viewform" },
    { id:"d2", symposium:"EDATUM", dept:"DS", date:"07 Jan 2026", name:"Data Pravachan",
      desc:"Data Storytelling & Presentation — transform complex data into meaningful insights.",
      venue:"CF-5", image:"https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSc2L3juS3VHWm_MRmA-38mMMQPaDk7qQBgS1K338oVcclyRZQ/closedform" },
    { id:"d3", symposium:"EDATUM", dept:"DS", date:"07 Jan 2026", name:"Data Vatsalya",
      desc:"Prompt Engineering & Vibe Coding — use AI to generate desired outputs creatively.",
      venue:"CG-12", image:"https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSeZXRrFGpG1X-MZkKz7zQ2JC_-iASNhw94L_fsr_jFUOUhOEQ/viewform" },
    { id:"d4", symposium:"EDATUM", dept:"DS", date:"07 Jan 2026", name:"Data Samiksha",
      desc:"Project Expo — tackle real-world SIH problem statements using Data Science.",
      venue:"CF-3", image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSe2mCgdfqGF27ReDZXRZkmrJSDu2zyP6TC8HaYCifTMbFlVuA/viewform" },
    { id:"d5", symposium:"EDATUM", dept:"DS", date:"07 Jan 2026", name:"Data Anavaya",
      desc:"No-Code ML — build models using Teachable Machine or Google AutoML.",
      venue:"CF-2", image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSegR_SO-wUOFR13c2b_jJ33zMf9TTi2E_4o-zzE5GphQx08Rw/viewform" },

    // EMITRIX — IT & CS
    { id:"m1", symposium:"EMITRIX", dept:"IT & CS", date:"09 Jan 2026", name:"CipherQuest",
      desc:"Fast-paced quest through binary puzzles, encryption challenges, algorithmic riddles, and QR clues — testing logic and creativity.",
      venue:"EF-3", image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLScLcF5O-43fR2N_oMApPvBEyYy0FgQ8kRpA6zWQYScz7Qonow/viewform" },
    { id:"m2", symposium:"EMITRIX", dept:"IT & CS", date:"09 Jan 2026", name:"Capture the Flag",
      desc:"Thrilling cybersecurity competition testing analytical and decoding skills across three levels of increasing challenge.",
      venue:"ES-3", image:"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSeWJxRo2tISZp4v40cA7pb8Lutq_TKhjA5jtoqUgT6sv0cprA/viewform" },
    { id:"m3", symposium:"EMITRIX", dept:"IT & CS", date:"09 Jan 2026", name:"Hackscape Room",
      desc:"Teams race to debug, decrypt, and decode clues inside a simulated digital escape room — solve riddles to unlock the six-digit escape code.",
      venue:"ES-5", image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
      regLink:"https://docs.google.com/forms/d/e/1FAIpQLSflLDfnjuI44C1lQVC0xDahL5nrMffTz1uT5g2q9CsJcjpTKw/closedform" },

    // ELEVER — Civil
    { id:"l1", symposium:"ELEVER", dept:"CIVIL", date:"08 Jan 2026", name:"ELEVER Events",
      desc:"Civil Engineering symposium events — Stay tuned for more details and registration links.",
      venue:"Civil Block", image:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
      regLink:"#" },

    // ERUDITE — MECH
    { id:"r1", symposium:"ERUDITE", dept:"MECH", date:"08 Jan 2026", name:"ERUDITE Events",
      desc:"Mechanical Engineering technical symposium — Stay tuned for more details and registration links.",
      venue:"MECH Block", image:"https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80",
      regLink:"#" }
  ],

  // ── CULTURAL EVENTS ───────────────────────────────
  culturalEvents: [
    { id:"c1", name:"Flashmob", category:"cultural",
      desc:"Surprise synchronised performance in public campus areas — dance, music and drama combined into one electrifying moment!",
      image:"https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80", regLink:"#" },
    { id:"c2", name:"PRISM", category:"cultural",
      desc:"PEC's grand cultural fest — a spectacular showcase of talent, color and creativity across all art forms.",
      image:"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", regLink:"#" },
    { id:"c3", name:"Dance Competition", category:"cultural",
      desc:"Solo and group dance competition — Classical, Western, Folk and freestyle categories. Show your moves!",
      image:"https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80", regLink:"#" },
    { id:"c4", name:"Singing Competition", category:"cultural",
      desc:"Solo and duet singing — Classical, Western, Playback and folk music categories open to all students.",
      image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80", regLink:"#" },
    { id:"c5", name:"Stand-up Comedy", category:"cultural",
      desc:"Open mic stand-up comedy night — bring your best jokes, stories and observations to make the crowd laugh!",
      image:"https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80", regLink:"#" },
    { id:"c6", name:"Drama & Skits", category:"cultural",
      desc:"Stage performances including short plays, skits and theatrical dramas — express your creativity and storytelling.",
      image:"https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=600&q=80", regLink:"#" },
    { id:"c7", name:"Ramp Walk", category:"cultural",
      desc:"Fashion show on the ramp — traditional, western and fusion themes. Walk with confidence and style!",
      image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80", regLink:"#" },
    { id:"c8", name:"Getup Competition", category:"cultural",
      desc:"Best costume and character transformation contest — historical figures, movie characters and creative getups.",
      image:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80", regLink:"#" }
  ],

  // ── FESTIVAL EVENTS ───────────────────────────────
  festivalEvents: [
    { id:"f1", name:"Pongal Celebrations", category:"festival",
      desc:"Traditional Pongal harvest festival celebrations — Sankranthi rangoli, traditional games and cultural performances.",
      image:"https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80", regLink:"#" },
    { id:"f2", name:"Ugadi Celebrations", category:"festival",
      desc:"Telugu New Year celebration — Ugadi pachadi, cultural programmes and traditional festivities on campus.",
      image:"https://images.unsplash.com/photo-1567461994977-c8b3f7bde0a0?w=600&q=80", regLink:"#" },
    { id:"f3", name:"Dussehra Celebrations", category:"festival",
      desc:"Vijayadasami festival — Saraswati puja, ayudha puja and grand cultural events celebrating the victory of good over evil.",
      image:"https://images.unsplash.com/photo-1605221581169-37f4b4c0c9ca?w=600&q=80", regLink:"#" },
    { id:"f4", name:"Christmas Celebrations", category:"festival",
      desc:"Christmas celebrations with carols, cultural programmes, secret santa and festive decorations across campus.",
      image:"https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80", regLink:"#" },
    { id:"f5", name:"Eid Celebrations", category:"festival",
      desc:"Eid festival celebration with traditional food, cultural programmes and bringing the entire college community together.",
      image:"https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80", regLink:"#" }
  ],

  // ── NCC & NSS EVENTS ──────────────────────────────
  nccNssEvents: [
    { id:"n1", name:"NCC Annual Camp", category:"ncc_nss",
      desc:"Annual NCC training camp — drill practice, physical training, leadership activities and discipline formation for cadets.",
      image:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80", regLink:"#" },
    { id:"n2", name:"NSS Special Camp", category:"ncc_nss",
      desc:"NSS special camp focused on community service, rural development and social awareness activities.",
      image:"https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", regLink:"#" },
    { id:"n3", name:"Blood Donation Camp", category:"ncc_nss",
      desc:"NSS organized blood donation drive — contribute to saving lives and spreading awareness about blood donation.",
      image:"https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80", regLink:"#" },
    { id:"n4", name:"Swachh Bharat Drive", category:"ncc_nss",
      desc:"NSS campus and community cleanliness drive — promoting Swachh Bharat Mission through active student participation.",
      image:"https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80", regLink:"#" }
  ],

  // ── SPORTS EVENTS ─────────────────────────────────
  sportsEvents: [
    { id:"s1", name:"PPL — Pragati Premier League", category:"sports",
      desc:"PEC's biggest cricket tournament — inter-department T20 league in the style of IPL. Represent your department and lift the PPL trophy!",
      image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80", regLink:"#" },
    { id:"s2", name:"Kabaddi Tournament", category:"sports",
      desc:"Inter-department Kabaddi championship — the traditional contact sport testing strength, agility and teamwork.",
      image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", regLink:"#" },
    { id:"s3", name:"Co-Co (Kho-Kho)", category:"sports",
      desc:"Kho-Kho inter-department tournament — fast-paced traditional Indian sport requiring speed and coordination.",
      image:"https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&q=80", regLink:"#" },
    { id:"s4", name:"Football Tournament", category:"sports",
      desc:"Inter-department football championship — the beautiful game on PEC's ground. Show your skills and teamwork!",
      image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80", regLink:"#" },
    { id:"s5", name:"Badminton Championship", category:"sports",
      desc:"Singles and doubles badminton tournament for all PEC students. Indoor championship with exciting prizes!",
      image:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80", regLink:"#" },
    { id:"s6", name:"Volleyball Tournament", category:"sports",
      desc:"Inter-department volleyball — team coordination, power and skill on full display at PEC sports ground.",
      image:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80", regLink:"#" }
  ],

  // ── SYMPOSIUM META ─────────────────────────────────
  symposia: [
    { name:"EPROZYNE", dept:"CSE",    date:"09 Jan 2026", color:"#1B3A8C", icon:"💻", count:5 },
    { name:"E-JIVE",   dept:"ECE",    date:"08 Jan 2026", color:"#00695C", icon:"📡", count:5 },
    { name:"E-ARTIFACT",dept:"AIML", date:"07 Jan 2026", color:"#6A1B9A", icon:"🤖", count:4 },
    { name:"EBHIGNA",  dept:"AI",     date:"TBD",         color:"#283593", icon:"🧠", count:4 },
    { name:"EXULT",    dept:"EEE",    date:"08 Jan 2026", color:"#E65100", icon:"⚡", count:5 },
    { name:"EDATUM",   dept:"DS",     date:"07 Jan 2026", color:"#00838F", icon:"📊", count:5 },
    { name:"EMITRIX",  dept:"IT & CS",date:"09 Jan 2026", color:"#AD1457", icon:"🔐", count:3 },
    { name:"ELEVER",   dept:"CIVIL",  date:"08 Jan 2026", color:"#558B2F", icon:"🏗️", count:1 },
    { name:"ERUDITE",  dept:"MECH",   date:"08 Jan 2026", color:"#4E342E", icon:"⚙️", count:1 }
  ],

  // ── localStorage HELPERS ──────────────────────────
  saveRegistration(id, title) {
    const regs = JSON.parse(localStorage.getItem('pec_registrations') || '[]');
    if (!regs.find(r => r.id === id)) {
      regs.push({ id, title, date: new Date().toISOString() });
      localStorage.setItem('pec_registrations', JSON.stringify(regs));
    }
  },
  isRegistered(id) {
    return JSON.parse(localStorage.getItem('pec_registrations') || '[]').some(r => r.id === id);
  },
  saveUser(data) {
    const users = JSON.parse(localStorage.getItem('pec_users') || '[]');
    users.push(data);
    localStorage.setItem('pec_users', JSON.stringify(users));
  }
};