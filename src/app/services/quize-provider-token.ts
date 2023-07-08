import { InjectionToken } from '@angular/core';
import { IQuizeProvider } from './i-quize-provider';

export const QUIZE_PROVIDER_TOKEN = new InjectionToken<IQuizeProvider>('IQuizeProvider');
