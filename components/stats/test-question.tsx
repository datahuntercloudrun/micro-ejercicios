"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

interface TestQuestionProps {
  number: number;
  question: React.ReactNode;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: React.ReactNode;
}

export function TestQuestion({ number, question, options, correctAnswer, explanation }: TestQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = selected === correctAnswer;

  return (
    <Card className="border">
      <CardContent className="p-3 sm:p-6 space-y-3">
        <p className="text-sm font-semibold">
          <Badge variant="outline" className="mr-2">P{number}</Badge>
          {question}
        </p>

        <div className="space-y-2">
          {options.map((opt) => {
            const isThis = selected === opt.label;
            const isAnswer = opt.label === correctAnswer;
            let style = "border cursor-pointer hover:bg-muted/50 transition-colors";

            if (checked) {
              if (isAnswer) style = "border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20";
              else if (isThis && !isCorrect) style = "border-2 border-red-500 bg-red-50 dark:bg-red-950/20";
              else style = "border opacity-60";
            } else if (isThis) {
              style = "border-2 border-primary bg-primary/5";
            }

            return (
              <div
                key={opt.label}
                className={`rounded-lg p-2 sm:p-3 text-sm flex items-start gap-2 ${style}`}
                onClick={() => !checked && setSelected(opt.label)}
              >
                <span className="font-bold shrink-0">{opt.label})</span>
                <span>{opt.text}</span>
                {checked && isAnswer && <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-auto" />}
                {checked && isThis && !isCorrect && <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0 ml-auto" />}
              </div>
            );
          })}
        </div>

        {!checked ? (
          <Button size="sm" onClick={() => selected && setChecked(true)} disabled={!selected}>
            Comprobar
          </Button>
        ) : (
          <Card className={`${isCorrect ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800" : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"}`}>
            <CardContent className="p-3 text-sm space-y-1">
              <p className={`font-semibold ${isCorrect ? "text-emerald-800 dark:text-emerald-200" : "text-red-800 dark:text-red-200"}`}>
                {isCorrect ? "Correcto" : "Incorrecto"}
              </p>
              <div className="text-muted-foreground">{explanation}</div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
