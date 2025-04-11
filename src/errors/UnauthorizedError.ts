import { HttpError } from './HttpError';

export class UnauthorizedError extends HttpError {
  constructor(message = 'Non autorisé') {
    super(401, message);
  }
}
