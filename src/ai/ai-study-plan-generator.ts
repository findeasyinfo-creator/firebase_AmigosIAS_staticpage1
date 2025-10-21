'use server';

/**
 * @fileOverview Generates a personalized daily study plan based on user inputs.
 *
 * - generateStudyPlan - A function that generates the study plan.
 * - StudyPlanInput - The input type for the generateStudyPlan function.
 * - StudyPlanOutput - The return type for the generateStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudyPlanInputSchema = z.object({
  studyHours: z
    .number()
    .describe('The number of hours available for studying each day.'),
  examGoals: z.string().describe('The goals for the exam, e.g., passing the exam with a good score.'),
  subjectPreferences: z
    .string()
    .describe('The subjects that the student prefers to study.'),
  performanceHistory: z
    .string()
    .optional()
    .describe('The past performance of the student in the subjects.'),
});
export type StudyPlanInput = z.infer<typeof StudyPlanInputSchema>;

const StudyPlanOutputSchema = z.object({
  dailyPlan: z.string().describe('A personalized daily study plan.'),
});
export type StudyPlanOutput = z.infer<typeof StudyPlanOutputSchema>;

export async function generateStudyPlan(input: StudyPlanInput): Promise<StudyPlanOutput> {
  return studyPlanFlow(input);
}

const studyPlanPrompt = ai.definePrompt({
  name: 'studyPlanPrompt',
  input: {schema: StudyPlanInputSchema},
  output: {schema: StudyPlanOutputSchema},
  prompt: `You are an expert study plan generator. You take into account the study hours, exam goals, subject preferences, and past performance of the student to generate a personalized daily study plan.

Study Hours: {{{studyHours}}}
Exam Goals: {{{examGoals}}}
Subject Preferences: {{{subjectPreferences}}}
Performance History: {{{performanceHistory}}}

Generate a detailed daily study plan:
`, // added newline character to end of prompt
});

const studyPlanFlow = ai.defineFlow(
  {
    name: 'studyPlanFlow',
    inputSchema: StudyPlanInputSchema,
    outputSchema: StudyPlanOutputSchema,
  },
  async input => {
    const {output} = await studyPlanPrompt(input);
    return output!;
  }
);
