
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  prenom: 'prenom',
  avatar: 'avatar',
  bio: 'bio',
  username: 'username',
  email: 'email',
  password: 'password',
  role: 'role',
  demandeRoleFormateur: 'demandeRoleFormateur',
  etatDemande: 'etatDemande',
  motivationFormateur: 'motivationFormateur',
  experienceProfessionnelle: 'experienceProfessionnelle',
  cvUrl: 'cvUrl',
  portfolioUrl: 'portfolioUrl',
  createdAt: 'createdAt'
};

exports.Prisma.FormationScalarFieldEnum = {
  id: 'id',
  nomFormation: 'nomFormation',
  description: 'description',
  photo: 'photo'
};

exports.Prisma.TutorialScalarFieldEnum = {
  id: 'id',
  titreTuto: 'titreTuto',
  descriptionTuto: 'descriptionTuto',
  photo: 'photo',
  userId: 'userId',
  formationId: 'formationId'
};

exports.Prisma.CoursScalarFieldEnum = {
  id: 'id',
  titreCours: 'titreCours',
  content: 'content',
  photo: 'photo',
  videosUrl: 'videosUrl',
  tutorialId: 'tutorialId'
};

exports.Prisma.CertificatScalarFieldEnum = {
  id: 'id',
  titre: 'titre',
  apprenantId: 'apprenantId',
  tutorialId: 'tutorialId',
  dateObtention: 'dateObtention'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  tutorialId: 'tutorialId',
  enrolledAt: 'enrolledAt',
  progress: 'progress'
};

exports.Prisma.CoursProgressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  coursId: 'coursId',
  completed: 'completed',
  viewedAt: 'viewedAt'
};

exports.Prisma.CommentaireScalarFieldEnum = {
  id: 'id',
  contenu: 'contenu',
  userId: 'userId',
  tutorialId: 'tutorialId',
  createdAt: 'createdAt'
};

exports.Prisma.RessourcesScalarFieldEnum = {
  id: 'id',
  nomRessources: 'nomRessources',
  file: 'file',
  coursId: 'coursId',
  uploadAt: 'uploadAt'
};

exports.Prisma.ReponseCommentaireScalarFieldEnum = {
  id: 'id',
  contenu: 'contenu',
  userId: 'userId',
  commentaireId: 'commentaireId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  FORMATEUR: 'FORMATEUR',
  APPRENANT: 'APPRENANT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Formation: 'Formation',
  Tutorial: 'Tutorial',
  Cours: 'Cours',
  Certificat: 'Certificat',
  Enrollment: 'Enrollment',
  CoursProgress: 'CoursProgress',
  Commentaire: 'Commentaire',
  Ressources: 'Ressources',
  ReponseCommentaire: 'ReponseCommentaire'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
