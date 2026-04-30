import React, { useState, useEffect, useRef } from 'react';
import { STORIES, FEEDBACK, UI_TEXTS, getLevel } from '@/lib/stories';
import { loadGameState, saveGameState, detectLanguage, updateDailyStreak } from '@/lib/gameState';
import LanguageSelector from '@/components/simulator/LanguageSelector';
import StoryCard from '@/components/simulator/StoryCard';
import ProgressHeader from '@/components/simulator/ProgressHeader';
import ChatBubble from '@/components/simulator/ChatBubble';
import OptionButton from '@/components/simulator/OptionButton';
import CompletionScreen from '@/components/simulator/CompletionScreen';
import { Button } from '@/components/ui/button';
import { Settings, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Simulator() {
  const [gameState, setGameState] = useState(() => loadGameState());
  const [currentStory, setCurrentStory] = useState(null);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [sessionErrors, setSessionErrors] = useState(0);
  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const chatRef = useRef(null);

  const lang = gameState.language || detectLanguage();

  // Auto-detect language on first visit
  useEffect(() => {
    if (!gameState.language) {
      const detected = detectLanguage();
      const newState = { ...gameState, language: detected };
      setGameState(newState);
      saveGameState(newState);
    }
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, selected]);

  const handleLanguageSelect = (code) => {
    const newState = { ...gameState, language: code };
    setGameState(newState);
    saveGameState(newState);
    setShowLangPicker(false);
  };

  const startStory = (story) => {
    setCurrentStory(story);
    setStep(0);
    setSelected(null);
    setSessionScore(0);
    setSessionStreak(0);
    setSessionErrors(0);
    setCompleted(false);
    setMessages([{ type: 'npc', text: story.steps[0].npc }]);
  };

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);

    const currentStep = currentStory.steps[step];
    const isCorrect = index === currentStep.correct;

    // Add user message
    const userText = currentStep.options[index];
    const newMessages = [...messages, { type: 'user', text: userText }];

    if (isCorrect) {
      const points = 10 + (sessionStreak * 2);
      setSessionScore((s) => s + points);
      setSessionStreak((s) => s + 1);

      newMessages.push({
        type: 'system',
        text: FEEDBACK.correct[lang] || FEEDBACK.correct.en,
      });
      newMessages.push({
        type: 'system',
        text: currentStep.explanation[lang] || currentStep.explanation.en,
      });
    } else {
      setSessionScore((s) => Math.max(0, s - 2));
      setSessionStreak(0);
      setSessionErrors((e) => e + 1);

      newMessages.push({
        type: 'system',
        text: FEEDBACK.incorrect[lang] || FEEDBACK.incorrect.en,
      });
      newMessages.push({
        type: 'system',
        text: `💡 ${currentStep.explanation[lang] || currentStep.explanation.en}`,
      });
    }

    setMessages(newMessages);
  };

  const nextStep = () => {
    const nextIdx = step + 1;
    if (nextIdx >= currentStory.steps.length) {
      // Story complete
      const newState = updateDailyStreak({
        ...gameState,
        totalScore: gameState.totalScore + sessionScore,
        streak: sessionStreak,
        bestStreak: Math.max(gameState.bestStreak, sessionStreak),
        completedStories: gameState.completedStories.includes(currentStory.id)
          ? gameState.completedStories
          : [...gameState.completedStories, currentStory.id],
        storyScores: {
          ...gameState.storyScores,
          [currentStory.id]: Math.max(gameState.storyScores[currentStory.id] || 0, sessionScore),
        },
      });
      setGameState(newState);
      saveGameState(newState);
      setCompleted(true);
    } else {
      setStep(nextIdx);
      setSelected(null);
      setMessages((prev) => [
        ...prev,
        { type: 'npc', text: currentStory.steps[nextIdx].npc },
      ]);
    }
  };

  const retryStory = () => {
    if (currentStory) startStory(currentStory);
  };

  const backToList = () => {
    setCurrentStory(null);
    setCompleted(false);
  };

  // Show language picker
  if (showLangPicker) {
    return (
      <div className="max-w-lg mx-auto py-10">
        <Button variant="ghost" onClick={() => setShowLangPicker(false)} className="mb-4 ml-4 gap-2">
          <ArrowLeft className="w-4 h-4" /> {UI_TEXTS.backToStories[lang] || 'Back'}
        </Button>
        <LanguageSelector currentLang={lang} onSelect={handleLanguageSelect} />
      </div>
    );
  }

  // Completion screen
  if (completed && currentStory) {
    return (
      <CompletionScreen
        score={sessionScore}
        errors={sessionErrors}
        streak={sessionStreak}
        totalScore={gameState.totalScore + sessionScore}
        lang={lang}
        onRetry={retryStory}
        onBack={backToList}
      />
    );
  }

  // Playing a story
  if (currentStory) {
    const currentStepData = currentStory.steps[step];

    return (
      <div className="max-w-lg mx-auto flex flex-col h-[calc(100vh-4rem)]">
        <ProgressHeader
          step={step}
          total={currentStory.steps.length}
          score={sessionScore}
          streak={sessionStreak}
          lang={lang}
          uiTexts={UI_TEXTS}
        />

        {/* Chat area */}
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-1">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <ChatBubble key={i} type={msg.type}>
                {msg.text}
              </ChatBubble>
            ))}
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="border-t border-border bg-card p-4 space-y-2">
          {selected === null ? (
            currentStepData.options.map((opt, i) => (
              <OptionButton
                key={i}
                text={opt}
                index={i}
                selected={selected}
                isCorrect={currentStepData.correct}
                disabled={false}
                onClick={handleAnswer}
              />
            ))
          ) : (
            <>
              {currentStepData.options.map((opt, i) => (
                <OptionButton
                  key={i}
                  text={opt}
                  index={i}
                  selected={selected}
                  isCorrect={currentStepData.correct}
                  disabled={true}
                  onClick={() => {}}
                />
              ))}
              <Button onClick={nextStep} className="w-full mt-3 h-11 rounded-xl gap-2">
                {step + 1 >= currentStory.steps.length
                  ? '🎉 ' + (UI_TEXTS.continue[lang] || 'Finish')
                  : UI_TEXTS.continue[lang] || 'Continue'}
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Story selection
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-space font-bold text-2xl">{UI_TEXTS.chooseStory[lang] || 'Choose a story'}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {UI_TEXTS.level[lang] || 'Level'}: {getLevel(gameState.totalScore, lang)} · {gameState.totalScore} pts
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={() => setShowLangPicker(true)} className="rounded-xl">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {gameState.dailyStreak > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-warning/10 border border-warning/20 rounded-xl p-3 mb-6 flex items-center gap-3"
        >
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-sm font-semibold">{gameState.dailyStreak} {UI_TEXTS.streak[lang] || 'day streak'}!</p>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {STORIES.map((story, i) => (
          <StoryCard
            key={story.id}
            story={story}
            lang={lang}
            completed={gameState.completedStories.includes(story.id)}
            bestScore={gameState.storyScores[story.id] || 0}
            onClick={() => startStory(story)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}