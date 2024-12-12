"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trophy } from "lucide-react";

const quizQuestions = [
  {
    question: "What is a blockchain?",
    options: [
      "A centralized database",
      "A decentralized digital ledger",
      "A type of cryptocurrency",
      "A computer program",
    ],
    correctAnswer: 1,
  },
  {
    question: "What are smart contracts?",
    options: [
      "Legal documents",
      "Paper contracts",
      "Self-executing code on the blockchain",
      "Mobile applications",
    ],
    correctAnswer: 2,
  },
  {
    question: "How do you earn Pramps on PeerRamp?",
    options: [
      "By completing quizzes",
      "By referring friends",
      "By making timely repayments",
      "All of the above",
    ],
    correctAnswer: 3,
  },
];

export function PrampsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <Card className="p-6">
      {!showResults ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h3>
          <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>
          
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
            className="space-y-4"
          >
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>

          <Button
            className="mt-8"
            onClick={handleAnswer}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
          <p className="text-lg mb-2">You earned</p>
          <p className="text-3xl font-bold text-purple-500 mb-4">{score} Pramps</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </motion.div>
      )}
    </Card>
  );
}