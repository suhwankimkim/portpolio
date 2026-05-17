document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector("#themeToggle");
  const langOptions = document.querySelectorAll(".lang-option");

  const translations = {
    en: {
      "nav.logo": "Suhwan Kim",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.resume": "Resume",
      "hero.greeting": "HELLO, I'M",
      "hero.name": "Suhwan Kim",
      "hero.role": "Aspiring AI Engineer / Data Scientist",
      "hero.location": '<i class="fas fa-map-marker-alt"></i> Gwangmyeong-si, Gyeonggi-do',
      "hero.description":
        "Solving problems through data analysis and AI modeling,\nand turning them into working results as an aspiring AI Engineer / Data Scientist.",
      "hero.resume": "My Resume",
      "hero.contact": "Contact",
      "section.about": "About",
      "section.skills": "Technical Skills",
      "section.projects": "Projects",
      "section.contact": "Get In Touch",
      "about.role": "Aspiring AI Engineer / Data Scientist",
      "about.desc1":
        "I am an aspiring AI Engineer / Data Scientist with strengths in structuring data, modeling problems, and turning ideas into working systems. I am interested not only in data analysis and model development, but also in building practical machine learning and LLM-based services.",
      "about.desc2":
        "Through projects and competitions, I have built hands-on experience in Python, SQL, machine learning, LLM, RAG, and MLOps workflows. These experiences strengthened my practical modeling ability and collaboration-oriented problem-solving skills.",
      "about.eduTitle": "Education",
      "about.eduContent":
        "<strong>Bachelor's Degree</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">Inha Univ. Statistics 21'</span><br /><strong>Master's Degree</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">Inha Univ. Data Science 25'</span>",
      "about.bootcampTitle": "Bootcamp",
      "about.bootcampContent":
        "<strong>FastCampus AI Bootcamp</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">14th Cohort Completed</span>",
      "about.awardsTitle": "Awards & Certifications",
      "about.awardsContent":
        "ADsP (Data Analytics Semi-Professional) 20'<br />2022 Inha AI Challenge - Excellence Award 22'",
      "about.stat1": "Projects<br />Completed",
      "about.stat2": "Avg Performance<br />Gain",
      "about.stat3": "Leadership<br />Experiences",
      "skills.lang": "Languages",
      "skills.frameworks": "Frameworks & Libraries",
      "skills.ai": "AI / ML",
      "skills.ops": "MLOps / Infra",
      "projects.completed": "Completed",
      "projects.p1.title":
        "Intelligent Decision Support System for Integrated Fine-Dust Hot Spot Management",
      "projects.p1.subtitle": "Forecasting Model Development for Fine-Dust Blind Spots",
      "projects.p1.role": "Role: Team Lead / Model Development",
      "projects.p1.desc":
        "Developed a decision-support model to predict fine-dust hot spots using outdoor air-quality IoT sensors installed across about 850 locations in Seoul, delivering a real-time fine-dust Air Map to users.",
      "projects.p1.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Built and validated fine-dust forecasting models for blind-spot regions in Seoul using RMSE, NRMSE, residual analysis, and Moran's I-based spatial autocorrelation tests.",
      "projects.p2.title": "IoT-based AI Recycling Waste Green Data Platform",
      "projects.p2.subtitle": "Optimal Collection Hub Location Proposal for Recyclable Waste",
      "projects.p2.desc":
        "Proposed optimal collection hub locations for recyclable waste in Incheon using public and private urban data, supporting location-based operational decisions.",
      "projects.p2.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Proposed optimized locations for 11 collection points in Incheon Dong-gu and contributed to data-driven operational planning.",
      "projects.p3.title": "Finance AI Agent",
      "projects.p3.subtitle": "Custom Multi Agent System",
      "projects.p3.desc":
        "Built a LangChain/LangGraph-based multi-agent system for finance beginners, supporting financial Q&A, stock analysis and comparison, chart generation, and document export.",
      "projects.p3.result":
        "<i class=\"fas fa-check-circle\"></i><strong>Result:</strong> Implemented an end-to-end multi-agent system for complete finance beginners.",
      "projects.p4.title": "Seoul House Price Prediction Competition",
      "projects.p4.subtitle": "Apartment Price Regression",
      "projects.p4.role": "Role: Team Lead / ML Engineer",
      "projects.p4.desc":
        "Built a regression pipeline for Seoul apartment transaction price prediction using EDA, preprocessing, feature engineering, and ensemble modeling.",
      "projects.p4.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> RMSE improved by 49.7%<br /><span style=\"padding-left: 1rem; display: inline-block;\">(34223 → 17199)</span>",
      "projects.p5.title": "Movie Rating Prediction MLOps Service",
      "projects.p5.subtitle": "Movie Rating Prediction MLOps",
      "projects.p5.role": "Role: Team Lead / ML Engineer",
      "projects.p5.desc":
        "Built an end-to-end MLOps service for movie rating prediction using TMDB metadata, covering data collection, preprocessing, training, deployment, and monitoring.",
      "projects.p5.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Implemented an End-to-End CI/CD MLOps Pipeline.",
      "projects.p6.title": "Korean Daily Dialogue Summarization",
      "projects.p6.subtitle": "Dialogue Summarization",
      "projects.p6.role": "Role: Team Lead / NLP Engineer",
      "projects.p6.desc":
        "Improved Korean daily dialogue summarization performance through preprocessing and AI-assisted topic feature generation.",
      "projects.p6.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Rouge score improved by 2.9%<br /><span style=\"padding-left: 1rem; display: inline-block;\">(46.7182 → 48.0688)</span>",
      "projects.p7.title": "Document Type Classification",
      "projects.p7.subtitle": "Document Type Classification",
      "projects.p7.role": "Role: Team Lead / CV Engineer",
      "projects.p7.desc":
        "Built a document image classification pipeline with strong online augmentation, StratifiedKFold validation, and weighted ensemble inference.",
      "projects.p7.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Macro F1 improved by 117.3%<br /><span style=\"padding-left: 1rem; display: inline-block;\">(0.438 → 0.9517)</span>",
      "projects.p8.title": "Science Knowledge Question Answering System",
      "projects.p8.subtitle": "Science Knowledge RAG",
      "projects.p8.desc":
        "Upgraded BM25 retrieval to a Solar Embedding-based dense and hybrid RAG pipeline to build a science-domain question answering system.",
      "projects.p8.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> MAP improved by 107.3%<br /><span style=\"padding-left: 1rem; display: inline-block;\">(0.4242 → 0.8795)</span>",
      "contact.desc":
        "I'm open to new opportunities, collaborations, and meaningful conversations.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "footer.built": "Built with HTML, CSS, and JavaScript.",
    },
    ko: {
      "nav.logo": "김수환",
      "nav.home": "홈",
      "nav.about": "소개",
      "nav.skills": "기술",
      "nav.projects": "프로젝트",
      "nav.contact": "연락",
      "nav.resume": "이력서",
      "hero.greeting": "HELLO, I'M",
      "hero.name": "김수환",
      "hero.role": "예비 AI 엔지니어 / Data Scientist",
      "hero.location": '<i class="fas fa-map-marker-alt"></i> 경기도 광명시',
      "hero.description":
        "데이터 분석과 AI 모델링을 통해 문제를 해결하고,\n실제로 동작하는 결과물로 구현하는 예비 AI 엔지니어 / Data Scientist입니다.",
      "hero.resume": "이력서 보기",
      "hero.contact": "연락하기",
      "section.about": "소개",
      "section.skills": "기술 스택",
      "section.projects": "프로젝트",
      "section.contact": "연락하기",
      "about.role": "예비 AI 엔지니어 / Data Scientist",
      "about.desc1":
        "데이터를 구조화하고, 문제를 모델링하고, 실제로 동작하는 시스템으로 연결하는 과정에 강점을 가진 예비 AI 엔지니어 / Data Scientist입니다. 데이터 분석과 모델 개발뿐 아니라 머신러닝과 LLM 기반 서비스를 실제로 구현하는 일에 관심이 많습니다.",
      "about.desc2":
        "프로젝트와 경진대회를 통해 Python, SQL, 머신러닝, LLM, RAG, MLOps 기반의 실무형 경험을 쌓아왔으며, 이를 바탕으로 실용적인 모델링 역량과 협업 중심의 문제 해결 능력을 키워왔습니다.",
      "about.eduTitle": "학력",
      "about.eduContent":
        "<strong>학사 학위</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">인하대 통계학 21'</span><br /><strong>석사 학위</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">인하대 데이터사이언스학 25'</span>",
      "about.bootcampTitle": "부트캠프",
      "about.bootcampContent":
        "<strong>FastCampus AI 부트캠프</strong><br /><span style=\"padding-left: 1rem; display: inline-block;\">14기 수료</span>",
      "about.awardsTitle": "수상 및 자격증",
      "about.awardsContent":
        "ADsP(데이터분석 준전문가) 20'<br />2022 인하 인공지능 챌린지 - 우수상 22'",
      "about.stat1": "완료한<br />프로젝트",
      "about.stat2": "평균 성능<br />개선",
      "about.stat3": "리더십<br />경험",
      "skills.lang": "Languages",
      "skills.frameworks": "Frameworks & Libraries",
      "skills.ai": "AI / ML",
      "skills.ops": "MLOps / Infra",
      "projects.completed": "Completed",
      "projects.p1.title": "미세먼지 우심지역(Hot Spot) 통합 관리를 위한 지능형 의사결정시스템 개발",
      "projects.p1.subtitle": "음영지역 미세먼지 기상예보 모델 개발",
      "projects.p1.role": "Role: Team Lead / Model Development",
      "projects.p1.desc":
        "서울 약 850개 지역에 설치된 실외 공기질 측정기(IoT)를 활용해 미세먼지 우심지역(Hot Spot)을 예측하는 의사결정 지원 모델을 개발하여 고객들에게 실시간 미세먼지 Air Map을 제공했습니다.",
      "projects.p1.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> 서울지역 음영지역에 대한 미세먼지 예측 모델을 구축하고 RMSE, NRMSE, 잔차 분석, Moran's I 기반 공간 자기상관 검정으로 성능을 검증했습니다.",
      "projects.p2.title": "IoT기반 인공지능 재활용 폐기물 그린데이터 플랫폼 구축",
      "projects.p2.subtitle": "재활용 폐기물 수거 거점 최적 위치 제안",
      "projects.p2.desc":
        "공공 및 비공개 도시 데이터를 바탕으로 인천 지역 재활용 폐기물 수거 거점의 최적 위치를 도출하고, 운영 데이터를 기반으로 한 위치 의사결정을 지원했습니다.",
      "projects.p2.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> 인천 동구 11개 수거거점의 최적 위치를 제안하고 데이터 기반 운영 계획 수립에 기여했습니다.",
      "projects.p3.title": "금융 AI Agent",
      "projects.p3.subtitle": "Custom Multi Agent System",
      "projects.p3.desc":
        "금융 지식이 전무한 초보자도 쉽게 활용할 수 있도록 만든 LangChain/LangGraph 기반 멀티 에이전트 시스템으로, 금융 도메인 Q&A, 주식 분석 및 비교, 차트 생성과 문서 파일 저장을 지원합니다.",
      "projects.p3.result":
        "<i class=\"fas fa-check-circle\"></i><strong>Result:</strong> 금융지식이 전무한 초보자를 위한 End-to-End 멀티 에이전트 시스템 구현",
      "projects.p4.title": "Seoul House Price Prediction Competition",
      "projects.p4.subtitle": "Apartment Price Regression",
      "projects.p4.role": "Role: Team Lead / ML Engineer",
      "projects.p4.desc":
        "서울 아파트 실거래가 데이터를 기반으로 EDA, 전처리, 피처 엔지니어링, 앙상블 모델링을 결합한 회귀 파이프라인을 구축했습니다.",
      "projects.p4.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> RMSE 49.7% 향상<br /><span style=\"padding-left: 1rem; display: inline-block;\">(34223 → 17199)</span>",
      "projects.p5.title": "영화 평점 예측 MLOps 서비스",
      "projects.p5.subtitle": "Movie Rating Prediction MLOps",
      "projects.p5.role": "Role: Team Lead / ML Engineer",
      "projects.p5.desc":
        "TMDB 메타데이터를 기반으로 영화 평점을 예측하는 서비스로, 데이터 수집부터 전처리, 학습, 배포, 모니터링까지 이어지는 자동화된 MLOps 파이프라인을 구축했습니다.",
      "projects.p5.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> End-to-End CI/CD MLOps Pipeline 구현",
      "projects.p6.title": "한국어 일상 대화 요약",
      "projects.p6.subtitle": "Dialogue Summarization",
      "projects.p6.role": "Role: Team Lead / NLP Engineer",
      "projects.p6.desc":
        "한국어 일상 대화 요약. 전처리 및 AI를 활용한 topic feature 생성을 통한 성능향상",
      "projects.p6.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Rouge 점수 2.9% 향상<br /><span style=\"padding-left: 1rem; display: inline-block;\">(46.7182 → 48.0688)</span>",
      "projects.p7.title": "문서 타입 분류",
      "projects.p7.subtitle": "Document Type Classification",
      "projects.p7.role": "Role: Team Lead / CV Engineer",
      "projects.p7.desc":
        "다양한 문서 도메인을 대상으로 강한 온라인 증강, StratifiedKFold, 가중치 앙상블을 활용한 문서 이미지 분류 파이프라인을 구축했습니다.",
      "projects.p7.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> Macro F1 점수 117.3% 향상<br /><span style=\"padding-left: 1rem; display: inline-block;\">(0.438 → 0.9517)</span>",
      "projects.p8.title": "과학 지식 질의 응답 시스템",
      "projects.p8.subtitle": "Science Knowledge RAG",
      "projects.p8.desc":
        "BM25 검색을 Upstage Solar Embedding 기반 Dense/Hybrid RAG 파이프라인으로 고도화해 과학 도메인 질의응답 시스템을 구현했습니다.",
      "projects.p8.result":
        "<i class=\"fas fa-chart-line\"></i><strong>Result:</strong> MAP 점수 107.3% 향상<br /><span style=\"padding-left: 1rem; display: inline-block;\">(0.4242 → 0.8795)</span>",
      "contact.desc": "새로운 기회와 협업, 의미 있는 대화를 기다리고 있습니다.",
      "contact.email": "이메일",
      "contact.github": "GitHub",
      "footer.built": "HTML, CSS, JavaScript로 제작했습니다.",
    },
  };

  let typingTimeout = null;

  function setHeroDescription(lang, animate) {
    const descElement = document.querySelector(".hero-description");
    const text = translations[lang]["hero.description"];
    if (!descElement || !text) return;

    if (!animate) {
      descElement.textContent = text;
      return;
    }

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    descElement.textContent = "";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        descElement.textContent += text.charAt(i);
        i += 1;
        typingTimeout = setTimeout(typeWriter, 18);
      }
    };

    typingTimeout = setTimeout(typeWriter, 120);
  }

  function switchLanguage(lang, animate = true) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!t[key]) return;
      if (key === "hero.description") return;
      element.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (!t[key]) return;
      element.innerHTML = t[key];
    });

    setHeroDescription(lang, animate);
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });

  const savedLang = localStorage.getItem("lang") || "ko";
  langOptions.forEach((option) => {
    option.classList.toggle("active", option.getAttribute("data-lang") === savedLang);
  });
  switchLanguage(savedLang, false);

  langOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-lang");
      langOptions.forEach((opt) => {
        opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
      });
      localStorage.setItem("lang", lang);
      switchLanguage(lang);
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("active");
      hamburger?.classList.remove("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  const skillsContainer = document.querySelector(".skills-scroll-container");
  if (skillsContainer) {
    const isScrollable = () => skillsContainer.scrollWidth > skillsContainer.clientWidth;
    const updateCursor = () => {
      skillsContainer.style.cursor = isScrollable() ? "grab" : "default";
    };

    updateCursor();
    window.addEventListener("resize", updateCursor);

    skillsContainer.addEventListener("wheel", (event) => {
      if (!isScrollable() || event.deltaY === 0) return;
      event.preventDefault();
      skillsContainer.scrollLeft += event.deltaY;
    });

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    skillsContainer.addEventListener("mousedown", (event) => {
      if (!isScrollable()) return;
      isDown = true;
      skillsContainer.style.cursor = "grabbing";
      startX = event.pageX - skillsContainer.offsetLeft;
      scrollLeft = skillsContainer.scrollLeft;
    });

    skillsContainer.addEventListener("mouseleave", () => {
      isDown = false;
      updateCursor();
    });

    skillsContainer.addEventListener("mouseup", () => {
      isDown = false;
      updateCursor();
    });

    skillsContainer.addEventListener("mousemove", (event) => {
      if (!isDown || !isScrollable()) return;
      event.preventDefault();
      const x = event.pageX - skillsContainer.offsetLeft;
      const walk = (x - startX) * 2;
      skillsContainer.scrollLeft = scrollLeft - walk;
    });
  }

  const setupSkillCardToggles = () => {
    const collapseHeight = 115;

    document.querySelectorAll(".skill-category").forEach((card) => {
      const tags = card.querySelector(".skill-tags");
      if (!tags) return;

      const existingToggle = card.querySelector(".skill-toggle");
      if (existingToggle) {
        existingToggle.remove();
      }

      tags.classList.remove("is-collapsed");
      card.classList.remove("has-overflow", "is-expanded");
      tags.style.maxHeight = "";

      if (tags.scrollHeight <= collapseHeight) {
        return;
      }

      card.classList.add("has-overflow");
      tags.classList.add("is-collapsed");
      tags.style.maxHeight = `${collapseHeight}px`;

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "skill-toggle";
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';

      toggle.addEventListener("click", () => {
        const expanded = card.classList.toggle("is-expanded");
        toggle.setAttribute("aria-expanded", String(expanded));
        tags.classList.toggle("is-collapsed", !expanded);
        tags.style.maxHeight = expanded ? `${tags.scrollHeight}px` : `${collapseHeight}px`;
      });

      card.appendChild(toggle);
    });
  };

  setupSkillCardToggles();
  window.addEventListener("resize", setupSkillCardToggles);

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${
      index * 0.1
    }s`;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    cardObserver.observe(card);
  });

  document.querySelectorAll(".skill-category").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateX(-20px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${
      index * 0.1
    }s`;

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }
      });
    }, { threshold: 0.1 });

    skillObserver.observe(card);
  });

  const backToTopButton = document.createElement("button");
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.className = "back-to-top";
  document.body.appendChild(backToTopButton);

  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.pageYOffset > 300 ? "flex" : "none";
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  backToTopButton.addEventListener("mouseenter", () => {
    backToTopButton.style.transform = "translateY(-5px)";
    backToTopButton.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";
  });

  backToTopButton.addEventListener("mouseleave", () => {
    backToTopButton.style.transform = "translateY(0)";
    backToTopButton.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  });

  document.querySelectorAll(".contact-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector("i");
      if (!icon) return;
      icon.style.transform = "scale(1.15) rotate(5deg)";
      icon.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector("i");
      if (!icon) return;
      icon.style.transform = "scale(1) rotate(0deg)";
    });
  });
});
