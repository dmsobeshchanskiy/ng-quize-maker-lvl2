import { InjectionToken } from '@angular/core';
import { IQuizProvider } from './i-quiz-provider';

export const QUIZ_PROVIDER_TOKEN = new InjectionToken<IQuizProvider>('IQuizProvider');
