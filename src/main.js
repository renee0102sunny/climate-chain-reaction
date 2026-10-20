import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const menuOutput = document.querySelector(".selection-output");
const menuChoices = new Set(["local"]);
const choiceNames = {
  zh: {
    local: "當季在地蔬菜",
    insect: "昆蟲蛋白",
    cultivated: "培養肉",
    saltRice: "耐鹽稻米",
  },
  en: {
    local: "Local, seasonal vegetables",
    insect: "Insect protein",
    cultivated: "Cultivated meat",
    saltRice: "Salt-tolerant rice",
  },
};

function refreshMenuLabel() {
  const language = root.dataset.language === "en" ? "en" : "zh";
  menuOutput.textContent = [...menuChoices]
    .map((choice) => choiceNames[language][choice])
    .join(" · ") || (language === "en" ? "Choose a menu cue" : "尚未選擇");
}

languageButton.addEventListener("click", () => {
  const isEnglish = root.dataset.language === "en";
  root.dataset.language = isEnglish ? "zh" : "en";
  root.lang = isEnglish ? "zh-Hant" : "en";
  languageButton.setAttribute("aria-pressed", String(!isEnglish));
  languageButton.setAttribute("aria-label", isEnglish ? "Switch to English" : "切換為繁體中文");
  refreshMenuLabel();
});

document.querySelectorAll(".menu-option").forEach((button) => {
  button.addEventListener("click", () => {
    const { choice } = button.dataset;
    if (menuChoices.has(choice)) {
      menuChoices.delete(choice);
      button.setAttribute("aria-pressed", "false");
      button.querySelector("i").textContent = "+";
    } else {
      menuChoices.add(choice);
      button.setAttribute("aria-pressed", "true");
      button.querySelector("i").textContent = "✓";
    }
    refreshMenuLabel();
  });
});

const reflection = document.querySelector("#reflection");
const charCount = document.querySelector(".char-count");
reflection.addEventListener("input", () => {
  charCount.textContent = `${reflection.value.length} / 280`;
});

const feedbackForm = document.querySelector("#feedback-form");
const feedbackStatus = document.querySelector("#form-status");
const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL?.trim();

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!appsScriptUrl) {
    feedbackStatus.textContent = root.dataset.language === "en"
      ? "The feedback sheet is not connected yet. No response was stored."
      : "回饋試算表尚未連結，這次留言沒有被儲存。";
    feedbackStatus.dataset.state = "error";
    return;
  }

  const submitButton = feedbackForm.querySelector(".submit-button");
  submitButton.disabled = true;
  feedbackStatus.textContent = root.dataset.language === "en" ? "Sending…" : "正在送出…";
  feedbackStatus.dataset.state = "pending";

  const payload = new URLSearchParams({
    food: feedbackForm.elements.food.value,
    reflection: reflection.value.trim(),
    language: root.dataset.language,
    submittedAt: new Date().toISOString(),
    source: "aftertaste-exhibition",
  });

  try {
    await fetch(appsScriptUrl, { method: "POST", mode: "no-cors", body: payload });
    feedbackStatus.textContent = root.dataset.language === "en"
      ? "The request was sent. This browser connection cannot confirm that the sheet stored it."
      : "送出請求已傳出；目前的瀏覽器連線無法確認試算表是否成功寫入。";
    feedbackStatus.dataset.state = "sent";
    feedbackForm.reset();
    charCount.textContent = "0 / 280";
  } catch {
    feedbackStatus.textContent = root.dataset.language === "en"
      ? "The request could not be sent. Please try again later."
      : "目前無法送出，請稍後再試。";
    feedbackStatus.dataset.state = "error";
  } finally {
    submitButton.disabled = false;
  }
});

const progressBar = document.querySelector(".scroll-progress span");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!motionQuery.matches) {
  gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.2 },
  });

  gsap.from(".hero-copy > *", {
    y: 22,
    autoAlpha: 0,
    duration: 0.9,
    stagger: 0.08,
    ease: "power3.out",
    delay: 0.12,
  });

  gsap.from(".hero-art", {
    scale: 0.93,
    autoAlpha: 0,
    duration: 1.35,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.to(".plate-svg", { rotation: 12, duration: 30, repeat: -1, yoyo: true, ease: "sine.inOut" });

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.fromTo(element, { y: 28, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
  });

  gsap.utils.toArray(".evidence-card").forEach((card, index) => {
    gsap.fromTo(card, { x: 18, autoAlpha: 0 }, {
      x: 0,
      autoAlpha: 1,
      duration: 0.65,
      delay: index * 0.07,
      ease: "power2.out",
      scrollTrigger: { trigger: card, start: "top 90%", once: true },
    });
  });
}

refreshMenuLabel();
