import { Observable } from 'rxjs';

/**
 * Available dialog types
 */
export enum NgDialogsType {
  Alert,
  Confirm,
  Prompt,
}

/**
 * Payload return by the result callback of the prompt dialog
 */
export interface NgDialogsPromptResult {
  result: boolean;
  value: string;
}

/**
 * Generic dialog result type
 */
export type NgDialogsResult = Observable<boolean | NgDialogsPromptResult>;
