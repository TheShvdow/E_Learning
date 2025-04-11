import { HttpError } from './HttpError';

export class NotFoundError extends HttpError {
  constructor(message = 'Ressource non trouvée') {
    super(404, message);
  }
}
