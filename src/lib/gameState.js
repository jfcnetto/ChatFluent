// Game state management using localStorage

const STORAGE_KEY = 'chatfluent_state';

const defaultState = {
  language: null,
  totalScore: 0,
  streak: 0,
  bestStreak: 0,
  completedStories: [],
  storyScores: {},
  lastPlayedDate: null,
  dailyStreak: 0,
};

export function loadGameState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultState, ...JSON.parse(saved) };
    }
  } catch (e) {
    // ignore
  }
  return { ...defaultState };
}

export function saveGameState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // ignore
  }
}

export function resetGameState() {
  localStorage.removeItem(STORAGE_KEY);
  return { ...defaultState };
}

export function detectLanguage() {
  const browserLang = navigator.language?.slice(0, 2) || 'en';
  const supported = ['pt', 'en', 'de', 'pl', 'es', 'fr', 'it', 'nl', 'ru', 'tr', 'ja'];
  return supported.includes(browserLang) ? browserLang : 'en';
}

export function updateDailyStreak(state) {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  if (state.lastPlayedDate === today) {
    return state;
  }
  
  let dailyStreak = 1;
  if (state.lastPlayedDate === yesterday) {
    dailyStreak = (state.dailyStreak || 0) + 1;
  }
  
  return {
    ...state,
    lastPlayedDate: today,
    dailyStreak,
  };
}