
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Formation
 * 
 */
export type Formation = $Result.DefaultSelection<Prisma.$FormationPayload>
/**
 * Model Tutorial
 * 
 */
export type Tutorial = $Result.DefaultSelection<Prisma.$TutorialPayload>
/**
 * Model Cours
 * 
 */
export type Cours = $Result.DefaultSelection<Prisma.$CoursPayload>
/**
 * Model Certificat
 * 
 */
export type Certificat = $Result.DefaultSelection<Prisma.$CertificatPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model CoursProgress
 * 
 */
export type CoursProgress = $Result.DefaultSelection<Prisma.$CoursProgressPayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  FORMATEUR: 'FORMATEUR',
  APPRENANT: 'APPRENANT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formation`: Exposes CRUD operations for the **Formation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formations
    * const formations = await prisma.formation.findMany()
    * ```
    */
  get formation(): Prisma.FormationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorial`: Exposes CRUD operations for the **Tutorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutorials
    * const tutorials = await prisma.tutorial.findMany()
    * ```
    */
  get tutorial(): Prisma.TutorialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cours`: Exposes CRUD operations for the **Cours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cours
    * const cours = await prisma.cours.findMany()
    * ```
    */
  get cours(): Prisma.CoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificat`: Exposes CRUD operations for the **Certificat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificats
    * const certificats = await prisma.certificat.findMany()
    * ```
    */
  get certificat(): Prisma.CertificatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursProgress`: Exposes CRUD operations for the **CoursProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursProgresses
    * const coursProgresses = await prisma.coursProgress.findMany()
    * ```
    */
  get coursProgress(): Prisma.CoursProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Formation: 'Formation',
    Tutorial: 'Tutorial',
    Cours: 'Cours',
    Certificat: 'Certificat',
    Enrollment: 'Enrollment',
    CoursProgress: 'CoursProgress',
    Commentaire: 'Commentaire'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "formation" | "tutorial" | "cours" | "certificat" | "enrollment" | "coursProgress" | "commentaire"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Formation: {
        payload: Prisma.$FormationPayload<ExtArgs>
        fields: Prisma.FormationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          findFirst: {
            args: Prisma.FormationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          findMany: {
            args: Prisma.FormationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>[]
          }
          create: {
            args: Prisma.FormationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          createMany: {
            args: Prisma.FormationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>[]
          }
          delete: {
            args: Prisma.FormationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          update: {
            args: Prisma.FormationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          deleteMany: {
            args: Prisma.FormationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>[]
          }
          upsert: {
            args: Prisma.FormationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormationPayload>
          }
          aggregate: {
            args: Prisma.FormationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormation>
          }
          groupBy: {
            args: Prisma.FormationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormationCountArgs<ExtArgs>
            result: $Utils.Optional<FormationCountAggregateOutputType> | number
          }
        }
      }
      Tutorial: {
        payload: Prisma.$TutorialPayload<ExtArgs>
        fields: Prisma.TutorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          findFirst: {
            args: Prisma.TutorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          findMany: {
            args: Prisma.TutorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>[]
          }
          create: {
            args: Prisma.TutorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          createMany: {
            args: Prisma.TutorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>[]
          }
          delete: {
            args: Prisma.TutorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          update: {
            args: Prisma.TutorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          deleteMany: {
            args: Prisma.TutorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>[]
          }
          upsert: {
            args: Prisma.TutorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorialPayload>
          }
          aggregate: {
            args: Prisma.TutorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorial>
          }
          groupBy: {
            args: Prisma.TutorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorialCountArgs<ExtArgs>
            result: $Utils.Optional<TutorialCountAggregateOutputType> | number
          }
        }
      }
      Cours: {
        payload: Prisma.$CoursPayload<ExtArgs>
        fields: Prisma.CoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findFirst: {
            args: Prisma.CoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findMany: {
            args: Prisma.CoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          create: {
            args: Prisma.CoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          createMany: {
            args: Prisma.CoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          delete: {
            args: Prisma.CoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          update: {
            args: Prisma.CoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          deleteMany: {
            args: Prisma.CoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          upsert: {
            args: Prisma.CoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          aggregate: {
            args: Prisma.CoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCours>
          }
          groupBy: {
            args: Prisma.CoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursCountArgs<ExtArgs>
            result: $Utils.Optional<CoursCountAggregateOutputType> | number
          }
        }
      }
      Certificat: {
        payload: Prisma.$CertificatPayload<ExtArgs>
        fields: Prisma.CertificatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          findFirst: {
            args: Prisma.CertificatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          findMany: {
            args: Prisma.CertificatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>[]
          }
          create: {
            args: Prisma.CertificatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          createMany: {
            args: Prisma.CertificatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>[]
          }
          delete: {
            args: Prisma.CertificatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          update: {
            args: Prisma.CertificatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          deleteMany: {
            args: Prisma.CertificatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>[]
          }
          upsert: {
            args: Prisma.CertificatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatPayload>
          }
          aggregate: {
            args: Prisma.CertificatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificat>
          }
          groupBy: {
            args: Prisma.CertificatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificatGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificatCountArgs<ExtArgs>
            result: $Utils.Optional<CertificatCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      CoursProgress: {
        payload: Prisma.$CoursProgressPayload<ExtArgs>
        fields: Prisma.CoursProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          findFirst: {
            args: Prisma.CoursProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          findMany: {
            args: Prisma.CoursProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>[]
          }
          create: {
            args: Prisma.CoursProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          createMany: {
            args: Prisma.CoursProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>[]
          }
          delete: {
            args: Prisma.CoursProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          update: {
            args: Prisma.CoursProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          deleteMany: {
            args: Prisma.CoursProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>[]
          }
          upsert: {
            args: Prisma.CoursProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursProgressPayload>
          }
          aggregate: {
            args: Prisma.CoursProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursProgress>
          }
          groupBy: {
            args: Prisma.CoursProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CoursProgressCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    formation?: FormationOmit
    tutorial?: TutorialOmit
    cours?: CoursOmit
    certificat?: CertificatOmit
    enrollment?: EnrollmentOmit
    coursProgress?: CoursProgressOmit
    commentaire?: CommentaireOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    certificats: number
    enrollments: number
    coursProgresses: number
    commentaires: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificats?: boolean | UserCountOutputTypeCountCertificatsArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    coursProgresses?: boolean | UserCountOutputTypeCountCoursProgressesArgs
    commentaires?: boolean | UserCountOutputTypeCountCommentairesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Count Type FormationCountOutputType
   */

  export type FormationCountOutputType = {
    tutorials: number
  }

  export type FormationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorials?: boolean | FormationCountOutputTypeCountTutorialsArgs
  }

  // Custom InputTypes
  /**
   * FormationCountOutputType without action
   */
  export type FormationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormationCountOutputType
     */
    select?: FormationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormationCountOutputType without action
   */
  export type FormationCountOutputTypeCountTutorialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorialWhereInput
  }


  /**
   * Count Type TutorialCountOutputType
   */

  export type TutorialCountOutputType = {
    cours: number
    certificats: number
    enrollments: number
    commentaires: number
  }

  export type TutorialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | TutorialCountOutputTypeCountCoursArgs
    certificats?: boolean | TutorialCountOutputTypeCountCertificatsArgs
    enrollments?: boolean | TutorialCountOutputTypeCountEnrollmentsArgs
    commentaires?: boolean | TutorialCountOutputTypeCountCommentairesArgs
  }

  // Custom InputTypes
  /**
   * TutorialCountOutputType without action
   */
  export type TutorialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorialCountOutputType
     */
    select?: TutorialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorialCountOutputType without action
   */
  export type TutorialCountOutputTypeCountCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
  }

  /**
   * TutorialCountOutputType without action
   */
  export type TutorialCountOutputTypeCountCertificatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificatWhereInput
  }

  /**
   * TutorialCountOutputType without action
   */
  export type TutorialCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * TutorialCountOutputType without action
   */
  export type TutorialCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Count Type CoursCountOutputType
   */

  export type CoursCountOutputType = {
    coursProgresses: number
  }

  export type CoursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursProgresses?: boolean | CoursCountOutputTypeCountCoursProgressesArgs
  }

  // Custom InputTypes
  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursCountOutputType
     */
    select?: CoursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountCoursProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    avatar: string | null
    bio: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    avatar: string | null
    bio: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    avatar: number
    bio: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    avatar?: true
    bio?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    avatar?: true
    bio?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    avatar?: true
    bio?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    avatar: string | null
    bio: string | null
    username: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    avatar?: boolean
    bio?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    certificats?: boolean | User$certificatsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    coursProgresses?: boolean | User$coursProgressesArgs<ExtArgs>
    commentaires?: boolean | User$commentairesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    avatar?: boolean
    bio?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    avatar?: boolean
    bio?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    avatar?: boolean
    bio?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "avatar" | "bio" | "username" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificats?: boolean | User$certificatsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    coursProgresses?: boolean | User$coursProgressesArgs<ExtArgs>
    commentaires?: boolean | User$commentairesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      certificats: Prisma.$CertificatPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      coursProgresses: Prisma.$CoursProgressPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      avatar: string | null
      bio: string | null
      username: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificats<T extends User$certificatsArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursProgresses<T extends User$coursProgressesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends User$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.certificats
   */
  export type User$certificatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    where?: CertificatWhereInput
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    cursor?: CertificatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificatScalarFieldEnum | CertificatScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.coursProgresses
   */
  export type User$coursProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    where?: CoursProgressWhereInput
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    cursor?: CoursProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursProgressScalarFieldEnum | CoursProgressScalarFieldEnum[]
  }

  /**
   * User.commentaires
   */
  export type User$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Formation
   */

  export type AggregateFormation = {
    _count: FormationCountAggregateOutputType | null
    _avg: FormationAvgAggregateOutputType | null
    _sum: FormationSumAggregateOutputType | null
    _min: FormationMinAggregateOutputType | null
    _max: FormationMaxAggregateOutputType | null
  }

  export type FormationAvgAggregateOutputType = {
    id: number | null
  }

  export type FormationSumAggregateOutputType = {
    id: number | null
  }

  export type FormationMinAggregateOutputType = {
    id: number | null
    nomFormation: string | null
    description: string | null
    photo: string | null
  }

  export type FormationMaxAggregateOutputType = {
    id: number | null
    nomFormation: string | null
    description: string | null
    photo: string | null
  }

  export type FormationCountAggregateOutputType = {
    id: number
    nomFormation: number
    description: number
    photo: number
    _all: number
  }


  export type FormationAvgAggregateInputType = {
    id?: true
  }

  export type FormationSumAggregateInputType = {
    id?: true
  }

  export type FormationMinAggregateInputType = {
    id?: true
    nomFormation?: true
    description?: true
    photo?: true
  }

  export type FormationMaxAggregateInputType = {
    id?: true
    nomFormation?: true
    description?: true
    photo?: true
  }

  export type FormationCountAggregateInputType = {
    id?: true
    nomFormation?: true
    description?: true
    photo?: true
    _all?: true
  }

  export type FormationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formation to aggregate.
     */
    where?: FormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formations to fetch.
     */
    orderBy?: FormationOrderByWithRelationInput | FormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formations
    **/
    _count?: true | FormationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormationMaxAggregateInputType
  }

  export type GetFormationAggregateType<T extends FormationAggregateArgs> = {
        [P in keyof T & keyof AggregateFormation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormation[P]>
      : GetScalarType<T[P], AggregateFormation[P]>
  }




  export type FormationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormationWhereInput
    orderBy?: FormationOrderByWithAggregationInput | FormationOrderByWithAggregationInput[]
    by: FormationScalarFieldEnum[] | FormationScalarFieldEnum
    having?: FormationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormationCountAggregateInputType | true
    _avg?: FormationAvgAggregateInputType
    _sum?: FormationSumAggregateInputType
    _min?: FormationMinAggregateInputType
    _max?: FormationMaxAggregateInputType
  }

  export type FormationGroupByOutputType = {
    id: number
    nomFormation: string
    description: string
    photo: string
    _count: FormationCountAggregateOutputType | null
    _avg: FormationAvgAggregateOutputType | null
    _sum: FormationSumAggregateOutputType | null
    _min: FormationMinAggregateOutputType | null
    _max: FormationMaxAggregateOutputType | null
  }

  type GetFormationGroupByPayload<T extends FormationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormationGroupByOutputType[P]>
            : GetScalarType<T[P], FormationGroupByOutputType[P]>
        }
      >
    >


  export type FormationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFormation?: boolean
    description?: boolean
    photo?: boolean
    tutorials?: boolean | Formation$tutorialsArgs<ExtArgs>
    _count?: boolean | FormationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formation"]>

  export type FormationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFormation?: boolean
    description?: boolean
    photo?: boolean
  }, ExtArgs["result"]["formation"]>

  export type FormationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFormation?: boolean
    description?: boolean
    photo?: boolean
  }, ExtArgs["result"]["formation"]>

  export type FormationSelectScalar = {
    id?: boolean
    nomFormation?: boolean
    description?: boolean
    photo?: boolean
  }

  export type FormationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomFormation" | "description" | "photo", ExtArgs["result"]["formation"]>
  export type FormationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorials?: boolean | Formation$tutorialsArgs<ExtArgs>
    _count?: boolean | FormationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formation"
    objects: {
      tutorials: Prisma.$TutorialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomFormation: string
      description: string
      photo: string
    }, ExtArgs["result"]["formation"]>
    composites: {}
  }

  type FormationGetPayload<S extends boolean | null | undefined | FormationDefaultArgs> = $Result.GetResult<Prisma.$FormationPayload, S>

  type FormationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormationCountAggregateInputType | true
    }

  export interface FormationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formation'], meta: { name: 'Formation' } }
    /**
     * Find zero or one Formation that matches the filter.
     * @param {FormationFindUniqueArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormationFindUniqueArgs>(args: SelectSubset<T, FormationFindUniqueArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormationFindUniqueOrThrowArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormationFindUniqueOrThrowArgs>(args: SelectSubset<T, FormationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationFindFirstArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormationFindFirstArgs>(args?: SelectSubset<T, FormationFindFirstArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationFindFirstOrThrowArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormationFindFirstOrThrowArgs>(args?: SelectSubset<T, FormationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formations
     * const formations = await prisma.formation.findMany()
     * 
     * // Get first 10 Formations
     * const formations = await prisma.formation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formationWithIdOnly = await prisma.formation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormationFindManyArgs>(args?: SelectSubset<T, FormationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formation.
     * @param {FormationCreateArgs} args - Arguments to create a Formation.
     * @example
     * // Create one Formation
     * const Formation = await prisma.formation.create({
     *   data: {
     *     // ... data to create a Formation
     *   }
     * })
     * 
     */
    create<T extends FormationCreateArgs>(args: SelectSubset<T, FormationCreateArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formations.
     * @param {FormationCreateManyArgs} args - Arguments to create many Formations.
     * @example
     * // Create many Formations
     * const formation = await prisma.formation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormationCreateManyArgs>(args?: SelectSubset<T, FormationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formations and returns the data saved in the database.
     * @param {FormationCreateManyAndReturnArgs} args - Arguments to create many Formations.
     * @example
     * // Create many Formations
     * const formation = await prisma.formation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formations and only return the `id`
     * const formationWithIdOnly = await prisma.formation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormationCreateManyAndReturnArgs>(args?: SelectSubset<T, FormationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formation.
     * @param {FormationDeleteArgs} args - Arguments to delete one Formation.
     * @example
     * // Delete one Formation
     * const Formation = await prisma.formation.delete({
     *   where: {
     *     // ... filter to delete one Formation
     *   }
     * })
     * 
     */
    delete<T extends FormationDeleteArgs>(args: SelectSubset<T, FormationDeleteArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formation.
     * @param {FormationUpdateArgs} args - Arguments to update one Formation.
     * @example
     * // Update one Formation
     * const formation = await prisma.formation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormationUpdateArgs>(args: SelectSubset<T, FormationUpdateArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formations.
     * @param {FormationDeleteManyArgs} args - Arguments to filter Formations to delete.
     * @example
     * // Delete a few Formations
     * const { count } = await prisma.formation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormationDeleteManyArgs>(args?: SelectSubset<T, FormationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formations
     * const formation = await prisma.formation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormationUpdateManyArgs>(args: SelectSubset<T, FormationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formations and returns the data updated in the database.
     * @param {FormationUpdateManyAndReturnArgs} args - Arguments to update many Formations.
     * @example
     * // Update many Formations
     * const formation = await prisma.formation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formations and only return the `id`
     * const formationWithIdOnly = await prisma.formation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormationUpdateManyAndReturnArgs>(args: SelectSubset<T, FormationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formation.
     * @param {FormationUpsertArgs} args - Arguments to update or create a Formation.
     * @example
     * // Update or create a Formation
     * const formation = await prisma.formation.upsert({
     *   create: {
     *     // ... data to create a Formation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formation we want to update
     *   }
     * })
     */
    upsert<T extends FormationUpsertArgs>(args: SelectSubset<T, FormationUpsertArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationCountArgs} args - Arguments to filter Formations to count.
     * @example
     * // Count the number of Formations
     * const count = await prisma.formation.count({
     *   where: {
     *     // ... the filter for the Formations we want to count
     *   }
     * })
    **/
    count<T extends FormationCountArgs>(
      args?: Subset<T, FormationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormationAggregateArgs>(args: Subset<T, FormationAggregateArgs>): Prisma.PrismaPromise<GetFormationAggregateType<T>>

    /**
     * Group by Formation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormationGroupByArgs['orderBy'] }
        : { orderBy?: FormationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formation model
   */
  readonly fields: FormationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorials<T extends Formation$tutorialsArgs<ExtArgs> = {}>(args?: Subset<T, Formation$tutorialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Formation model
   */
  interface FormationFieldRefs {
    readonly id: FieldRef<"Formation", 'Int'>
    readonly nomFormation: FieldRef<"Formation", 'String'>
    readonly description: FieldRef<"Formation", 'String'>
    readonly photo: FieldRef<"Formation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Formation findUnique
   */
  export type FormationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter, which Formation to fetch.
     */
    where: FormationWhereUniqueInput
  }

  /**
   * Formation findUniqueOrThrow
   */
  export type FormationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter, which Formation to fetch.
     */
    where: FormationWhereUniqueInput
  }

  /**
   * Formation findFirst
   */
  export type FormationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter, which Formation to fetch.
     */
    where?: FormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formations to fetch.
     */
    orderBy?: FormationOrderByWithRelationInput | FormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formations.
     */
    cursor?: FormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formations.
     */
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * Formation findFirstOrThrow
   */
  export type FormationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter, which Formation to fetch.
     */
    where?: FormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formations to fetch.
     */
    orderBy?: FormationOrderByWithRelationInput | FormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formations.
     */
    cursor?: FormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formations.
     */
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * Formation findMany
   */
  export type FormationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter, which Formations to fetch.
     */
    where?: FormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formations to fetch.
     */
    orderBy?: FormationOrderByWithRelationInput | FormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formations.
     */
    cursor?: FormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formations.
     */
    skip?: number
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * Formation create
   */
  export type FormationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * The data needed to create a Formation.
     */
    data: XOR<FormationCreateInput, FormationUncheckedCreateInput>
  }

  /**
   * Formation createMany
   */
  export type FormationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formations.
     */
    data: FormationCreateManyInput | FormationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formation createManyAndReturn
   */
  export type FormationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * The data used to create many Formations.
     */
    data: FormationCreateManyInput | FormationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formation update
   */
  export type FormationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * The data needed to update a Formation.
     */
    data: XOR<FormationUpdateInput, FormationUncheckedUpdateInput>
    /**
     * Choose, which Formation to update.
     */
    where: FormationWhereUniqueInput
  }

  /**
   * Formation updateMany
   */
  export type FormationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formations.
     */
    data: XOR<FormationUpdateManyMutationInput, FormationUncheckedUpdateManyInput>
    /**
     * Filter which Formations to update
     */
    where?: FormationWhereInput
    /**
     * Limit how many Formations to update.
     */
    limit?: number
  }

  /**
   * Formation updateManyAndReturn
   */
  export type FormationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * The data used to update Formations.
     */
    data: XOR<FormationUpdateManyMutationInput, FormationUncheckedUpdateManyInput>
    /**
     * Filter which Formations to update
     */
    where?: FormationWhereInput
    /**
     * Limit how many Formations to update.
     */
    limit?: number
  }

  /**
   * Formation upsert
   */
  export type FormationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * The filter to search for the Formation to update in case it exists.
     */
    where: FormationWhereUniqueInput
    /**
     * In case the Formation found by the `where` argument doesn't exist, create a new Formation with this data.
     */
    create: XOR<FormationCreateInput, FormationUncheckedCreateInput>
    /**
     * In case the Formation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormationUpdateInput, FormationUncheckedUpdateInput>
  }

  /**
   * Formation delete
   */
  export type FormationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
    /**
     * Filter which Formation to delete.
     */
    where: FormationWhereUniqueInput
  }

  /**
   * Formation deleteMany
   */
  export type FormationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formations to delete
     */
    where?: FormationWhereInput
    /**
     * Limit how many Formations to delete.
     */
    limit?: number
  }

  /**
   * Formation.tutorials
   */
  export type Formation$tutorialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    where?: TutorialWhereInput
    orderBy?: TutorialOrderByWithRelationInput | TutorialOrderByWithRelationInput[]
    cursor?: TutorialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorialScalarFieldEnum | TutorialScalarFieldEnum[]
  }

  /**
   * Formation without action
   */
  export type FormationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formation
     */
    select?: FormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formation
     */
    omit?: FormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormationInclude<ExtArgs> | null
  }


  /**
   * Model Tutorial
   */

  export type AggregateTutorial = {
    _count: TutorialCountAggregateOutputType | null
    _avg: TutorialAvgAggregateOutputType | null
    _sum: TutorialSumAggregateOutputType | null
    _min: TutorialMinAggregateOutputType | null
    _max: TutorialMaxAggregateOutputType | null
  }

  export type TutorialAvgAggregateOutputType = {
    id: number | null
    formationId: number | null
  }

  export type TutorialSumAggregateOutputType = {
    id: number | null
    formationId: number | null
  }

  export type TutorialMinAggregateOutputType = {
    id: number | null
    titreTuto: string | null
    descriptionTuto: string | null
    photo: string | null
    formationId: number | null
  }

  export type TutorialMaxAggregateOutputType = {
    id: number | null
    titreTuto: string | null
    descriptionTuto: string | null
    photo: string | null
    formationId: number | null
  }

  export type TutorialCountAggregateOutputType = {
    id: number
    titreTuto: number
    descriptionTuto: number
    photo: number
    formationId: number
    _all: number
  }


  export type TutorialAvgAggregateInputType = {
    id?: true
    formationId?: true
  }

  export type TutorialSumAggregateInputType = {
    id?: true
    formationId?: true
  }

  export type TutorialMinAggregateInputType = {
    id?: true
    titreTuto?: true
    descriptionTuto?: true
    photo?: true
    formationId?: true
  }

  export type TutorialMaxAggregateInputType = {
    id?: true
    titreTuto?: true
    descriptionTuto?: true
    photo?: true
    formationId?: true
  }

  export type TutorialCountAggregateInputType = {
    id?: true
    titreTuto?: true
    descriptionTuto?: true
    photo?: true
    formationId?: true
    _all?: true
  }

  export type TutorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutorial to aggregate.
     */
    where?: TutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutorials to fetch.
     */
    orderBy?: TutorialOrderByWithRelationInput | TutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutorials
    **/
    _count?: true | TutorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorialMaxAggregateInputType
  }

  export type GetTutorialAggregateType<T extends TutorialAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorial[P]>
      : GetScalarType<T[P], AggregateTutorial[P]>
  }




  export type TutorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorialWhereInput
    orderBy?: TutorialOrderByWithAggregationInput | TutorialOrderByWithAggregationInput[]
    by: TutorialScalarFieldEnum[] | TutorialScalarFieldEnum
    having?: TutorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorialCountAggregateInputType | true
    _avg?: TutorialAvgAggregateInputType
    _sum?: TutorialSumAggregateInputType
    _min?: TutorialMinAggregateInputType
    _max?: TutorialMaxAggregateInputType
  }

  export type TutorialGroupByOutputType = {
    id: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    _count: TutorialCountAggregateOutputType | null
    _avg: TutorialAvgAggregateOutputType | null
    _sum: TutorialSumAggregateOutputType | null
    _min: TutorialMinAggregateOutputType | null
    _max: TutorialMaxAggregateOutputType | null
  }

  type GetTutorialGroupByPayload<T extends TutorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorialGroupByOutputType[P]>
            : GetScalarType<T[P], TutorialGroupByOutputType[P]>
        }
      >
    >


  export type TutorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreTuto?: boolean
    descriptionTuto?: boolean
    photo?: boolean
    formationId?: boolean
    formation?: boolean | FormationDefaultArgs<ExtArgs>
    cours?: boolean | Tutorial$coursArgs<ExtArgs>
    certificats?: boolean | Tutorial$certificatsArgs<ExtArgs>
    enrollments?: boolean | Tutorial$enrollmentsArgs<ExtArgs>
    commentaires?: boolean | Tutorial$commentairesArgs<ExtArgs>
    _count?: boolean | TutorialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorial"]>

  export type TutorialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreTuto?: boolean
    descriptionTuto?: boolean
    photo?: boolean
    formationId?: boolean
    formation?: boolean | FormationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorial"]>

  export type TutorialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreTuto?: boolean
    descriptionTuto?: boolean
    photo?: boolean
    formationId?: boolean
    formation?: boolean | FormationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorial"]>

  export type TutorialSelectScalar = {
    id?: boolean
    titreTuto?: boolean
    descriptionTuto?: boolean
    photo?: boolean
    formationId?: boolean
  }

  export type TutorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titreTuto" | "descriptionTuto" | "photo" | "formationId", ExtArgs["result"]["tutorial"]>
  export type TutorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formation?: boolean | FormationDefaultArgs<ExtArgs>
    cours?: boolean | Tutorial$coursArgs<ExtArgs>
    certificats?: boolean | Tutorial$certificatsArgs<ExtArgs>
    enrollments?: boolean | Tutorial$enrollmentsArgs<ExtArgs>
    commentaires?: boolean | Tutorial$commentairesArgs<ExtArgs>
    _count?: boolean | TutorialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formation?: boolean | FormationDefaultArgs<ExtArgs>
  }
  export type TutorialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formation?: boolean | FormationDefaultArgs<ExtArgs>
  }

  export type $TutorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutorial"
    objects: {
      formation: Prisma.$FormationPayload<ExtArgs>
      cours: Prisma.$CoursPayload<ExtArgs>[]
      certificats: Prisma.$CertificatPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titreTuto: string
      descriptionTuto: string
      photo: string
      formationId: number
    }, ExtArgs["result"]["tutorial"]>
    composites: {}
  }

  type TutorialGetPayload<S extends boolean | null | undefined | TutorialDefaultArgs> = $Result.GetResult<Prisma.$TutorialPayload, S>

  type TutorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorialCountAggregateInputType | true
    }

  export interface TutorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutorial'], meta: { name: 'Tutorial' } }
    /**
     * Find zero or one Tutorial that matches the filter.
     * @param {TutorialFindUniqueArgs} args - Arguments to find a Tutorial
     * @example
     * // Get one Tutorial
     * const tutorial = await prisma.tutorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorialFindUniqueArgs>(args: SelectSubset<T, TutorialFindUniqueArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutorial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorialFindUniqueOrThrowArgs} args - Arguments to find a Tutorial
     * @example
     * // Get one Tutorial
     * const tutorial = await prisma.tutorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorialFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialFindFirstArgs} args - Arguments to find a Tutorial
     * @example
     * // Get one Tutorial
     * const tutorial = await prisma.tutorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorialFindFirstArgs>(args?: SelectSubset<T, TutorialFindFirstArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialFindFirstOrThrowArgs} args - Arguments to find a Tutorial
     * @example
     * // Get one Tutorial
     * const tutorial = await prisma.tutorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorialFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutorials
     * const tutorials = await prisma.tutorial.findMany()
     * 
     * // Get first 10 Tutorials
     * const tutorials = await prisma.tutorial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorialWithIdOnly = await prisma.tutorial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorialFindManyArgs>(args?: SelectSubset<T, TutorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutorial.
     * @param {TutorialCreateArgs} args - Arguments to create a Tutorial.
     * @example
     * // Create one Tutorial
     * const Tutorial = await prisma.tutorial.create({
     *   data: {
     *     // ... data to create a Tutorial
     *   }
     * })
     * 
     */
    create<T extends TutorialCreateArgs>(args: SelectSubset<T, TutorialCreateArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutorials.
     * @param {TutorialCreateManyArgs} args - Arguments to create many Tutorials.
     * @example
     * // Create many Tutorials
     * const tutorial = await prisma.tutorial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorialCreateManyArgs>(args?: SelectSubset<T, TutorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutorials and returns the data saved in the database.
     * @param {TutorialCreateManyAndReturnArgs} args - Arguments to create many Tutorials.
     * @example
     * // Create many Tutorials
     * const tutorial = await prisma.tutorial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutorials and only return the `id`
     * const tutorialWithIdOnly = await prisma.tutorial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorialCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutorial.
     * @param {TutorialDeleteArgs} args - Arguments to delete one Tutorial.
     * @example
     * // Delete one Tutorial
     * const Tutorial = await prisma.tutorial.delete({
     *   where: {
     *     // ... filter to delete one Tutorial
     *   }
     * })
     * 
     */
    delete<T extends TutorialDeleteArgs>(args: SelectSubset<T, TutorialDeleteArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutorial.
     * @param {TutorialUpdateArgs} args - Arguments to update one Tutorial.
     * @example
     * // Update one Tutorial
     * const tutorial = await prisma.tutorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorialUpdateArgs>(args: SelectSubset<T, TutorialUpdateArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutorials.
     * @param {TutorialDeleteManyArgs} args - Arguments to filter Tutorials to delete.
     * @example
     * // Delete a few Tutorials
     * const { count } = await prisma.tutorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorialDeleteManyArgs>(args?: SelectSubset<T, TutorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutorials
     * const tutorial = await prisma.tutorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorialUpdateManyArgs>(args: SelectSubset<T, TutorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutorials and returns the data updated in the database.
     * @param {TutorialUpdateManyAndReturnArgs} args - Arguments to update many Tutorials.
     * @example
     * // Update many Tutorials
     * const tutorial = await prisma.tutorial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutorials and only return the `id`
     * const tutorialWithIdOnly = await prisma.tutorial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorialUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutorial.
     * @param {TutorialUpsertArgs} args - Arguments to update or create a Tutorial.
     * @example
     * // Update or create a Tutorial
     * const tutorial = await prisma.tutorial.upsert({
     *   create: {
     *     // ... data to create a Tutorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutorial we want to update
     *   }
     * })
     */
    upsert<T extends TutorialUpsertArgs>(args: SelectSubset<T, TutorialUpsertArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialCountArgs} args - Arguments to filter Tutorials to count.
     * @example
     * // Count the number of Tutorials
     * const count = await prisma.tutorial.count({
     *   where: {
     *     // ... the filter for the Tutorials we want to count
     *   }
     * })
    **/
    count<T extends TutorialCountArgs>(
      args?: Subset<T, TutorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorialAggregateArgs>(args: Subset<T, TutorialAggregateArgs>): Prisma.PrismaPromise<GetTutorialAggregateType<T>>

    /**
     * Group by Tutorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorialGroupByArgs['orderBy'] }
        : { orderBy?: TutorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutorial model
   */
  readonly fields: TutorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formation<T extends FormationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormationDefaultArgs<ExtArgs>>): Prisma__FormationClient<$Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cours<T extends Tutorial$coursArgs<ExtArgs> = {}>(args?: Subset<T, Tutorial$coursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificats<T extends Tutorial$certificatsArgs<ExtArgs> = {}>(args?: Subset<T, Tutorial$certificatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Tutorial$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Tutorial$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends Tutorial$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Tutorial$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tutorial model
   */
  interface TutorialFieldRefs {
    readonly id: FieldRef<"Tutorial", 'Int'>
    readonly titreTuto: FieldRef<"Tutorial", 'String'>
    readonly descriptionTuto: FieldRef<"Tutorial", 'String'>
    readonly photo: FieldRef<"Tutorial", 'String'>
    readonly formationId: FieldRef<"Tutorial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tutorial findUnique
   */
  export type TutorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter, which Tutorial to fetch.
     */
    where: TutorialWhereUniqueInput
  }

  /**
   * Tutorial findUniqueOrThrow
   */
  export type TutorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter, which Tutorial to fetch.
     */
    where: TutorialWhereUniqueInput
  }

  /**
   * Tutorial findFirst
   */
  export type TutorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter, which Tutorial to fetch.
     */
    where?: TutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutorials to fetch.
     */
    orderBy?: TutorialOrderByWithRelationInput | TutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutorials.
     */
    cursor?: TutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutorials.
     */
    distinct?: TutorialScalarFieldEnum | TutorialScalarFieldEnum[]
  }

  /**
   * Tutorial findFirstOrThrow
   */
  export type TutorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter, which Tutorial to fetch.
     */
    where?: TutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutorials to fetch.
     */
    orderBy?: TutorialOrderByWithRelationInput | TutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutorials.
     */
    cursor?: TutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutorials.
     */
    distinct?: TutorialScalarFieldEnum | TutorialScalarFieldEnum[]
  }

  /**
   * Tutorial findMany
   */
  export type TutorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter, which Tutorials to fetch.
     */
    where?: TutorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutorials to fetch.
     */
    orderBy?: TutorialOrderByWithRelationInput | TutorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutorials.
     */
    cursor?: TutorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutorials.
     */
    skip?: number
    distinct?: TutorialScalarFieldEnum | TutorialScalarFieldEnum[]
  }

  /**
   * Tutorial create
   */
  export type TutorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutorial.
     */
    data: XOR<TutorialCreateInput, TutorialUncheckedCreateInput>
  }

  /**
   * Tutorial createMany
   */
  export type TutorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutorials.
     */
    data: TutorialCreateManyInput | TutorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutorial createManyAndReturn
   */
  export type TutorialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * The data used to create many Tutorials.
     */
    data: TutorialCreateManyInput | TutorialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tutorial update
   */
  export type TutorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutorial.
     */
    data: XOR<TutorialUpdateInput, TutorialUncheckedUpdateInput>
    /**
     * Choose, which Tutorial to update.
     */
    where: TutorialWhereUniqueInput
  }

  /**
   * Tutorial updateMany
   */
  export type TutorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutorials.
     */
    data: XOR<TutorialUpdateManyMutationInput, TutorialUncheckedUpdateManyInput>
    /**
     * Filter which Tutorials to update
     */
    where?: TutorialWhereInput
    /**
     * Limit how many Tutorials to update.
     */
    limit?: number
  }

  /**
   * Tutorial updateManyAndReturn
   */
  export type TutorialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * The data used to update Tutorials.
     */
    data: XOR<TutorialUpdateManyMutationInput, TutorialUncheckedUpdateManyInput>
    /**
     * Filter which Tutorials to update
     */
    where?: TutorialWhereInput
    /**
     * Limit how many Tutorials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tutorial upsert
   */
  export type TutorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutorial to update in case it exists.
     */
    where: TutorialWhereUniqueInput
    /**
     * In case the Tutorial found by the `where` argument doesn't exist, create a new Tutorial with this data.
     */
    create: XOR<TutorialCreateInput, TutorialUncheckedCreateInput>
    /**
     * In case the Tutorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorialUpdateInput, TutorialUncheckedUpdateInput>
  }

  /**
   * Tutorial delete
   */
  export type TutorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
    /**
     * Filter which Tutorial to delete.
     */
    where: TutorialWhereUniqueInput
  }

  /**
   * Tutorial deleteMany
   */
  export type TutorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutorials to delete
     */
    where?: TutorialWhereInput
    /**
     * Limit how many Tutorials to delete.
     */
    limit?: number
  }

  /**
   * Tutorial.cours
   */
  export type Tutorial$coursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    cursor?: CoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Tutorial.certificats
   */
  export type Tutorial$certificatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    where?: CertificatWhereInput
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    cursor?: CertificatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificatScalarFieldEnum | CertificatScalarFieldEnum[]
  }

  /**
   * Tutorial.enrollments
   */
  export type Tutorial$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Tutorial.commentaires
   */
  export type Tutorial$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Tutorial without action
   */
  export type TutorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutorial
     */
    select?: TutorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutorial
     */
    omit?: TutorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorialInclude<ExtArgs> | null
  }


  /**
   * Model Cours
   */

  export type AggregateCours = {
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  export type CoursAvgAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CoursSumAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CoursMinAggregateOutputType = {
    id: number | null
    titreCours: string | null
    content: string | null
    photo: string | null
    tutorialId: number | null
  }

  export type CoursMaxAggregateOutputType = {
    id: number | null
    titreCours: string | null
    content: string | null
    photo: string | null
    tutorialId: number | null
  }

  export type CoursCountAggregateOutputType = {
    id: number
    titreCours: number
    content: number
    photo: number
    tutorialId: number
    _all: number
  }


  export type CoursAvgAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CoursSumAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CoursMinAggregateInputType = {
    id?: true
    titreCours?: true
    content?: true
    photo?: true
    tutorialId?: true
  }

  export type CoursMaxAggregateInputType = {
    id?: true
    titreCours?: true
    content?: true
    photo?: true
    tutorialId?: true
  }

  export type CoursCountAggregateInputType = {
    id?: true
    titreCours?: true
    content?: true
    photo?: true
    tutorialId?: true
    _all?: true
  }

  export type CoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to aggregate.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cours
    **/
    _count?: true | CoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursMaxAggregateInputType
  }

  export type GetCoursAggregateType<T extends CoursAggregateArgs> = {
        [P in keyof T & keyof AggregateCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCours[P]>
      : GetScalarType<T[P], AggregateCours[P]>
  }




  export type CoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithAggregationInput | CoursOrderByWithAggregationInput[]
    by: CoursScalarFieldEnum[] | CoursScalarFieldEnum
    having?: CoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursCountAggregateInputType | true
    _avg?: CoursAvgAggregateInputType
    _sum?: CoursSumAggregateInputType
    _min?: CoursMinAggregateInputType
    _max?: CoursMaxAggregateInputType
  }

  export type CoursGroupByOutputType = {
    id: number
    titreCours: string
    content: string
    photo: string
    tutorialId: number
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  type GetCoursGroupByPayload<T extends CoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursGroupByOutputType[P]>
            : GetScalarType<T[P], CoursGroupByOutputType[P]>
        }
      >
    >


  export type CoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreCours?: boolean
    content?: boolean
    photo?: boolean
    tutorialId?: boolean
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
    coursProgresses?: boolean | Cours$coursProgressesArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreCours?: boolean
    content?: boolean
    photo?: boolean
    tutorialId?: boolean
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titreCours?: boolean
    content?: boolean
    photo?: boolean
    tutorialId?: boolean
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectScalar = {
    id?: boolean
    titreCours?: boolean
    content?: boolean
    photo?: boolean
    tutorialId?: boolean
  }

  export type CoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titreCours" | "content" | "photo" | "tutorialId", ExtArgs["result"]["cours"]>
  export type CoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
    coursProgresses?: boolean | Cours$coursProgressesArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type CoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }

  export type $CoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cours"
    objects: {
      tutorial: Prisma.$TutorialPayload<ExtArgs>
      coursProgresses: Prisma.$CoursProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titreCours: string
      content: string
      photo: string
      tutorialId: number
    }, ExtArgs["result"]["cours"]>
    composites: {}
  }

  type CoursGetPayload<S extends boolean | null | undefined | CoursDefaultArgs> = $Result.GetResult<Prisma.$CoursPayload, S>

  type CoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursCountAggregateInputType | true
    }

  export interface CoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cours'], meta: { name: 'Cours' } }
    /**
     * Find zero or one Cours that matches the filter.
     * @param {CoursFindUniqueArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursFindUniqueArgs>(args: SelectSubset<T, CoursFindUniqueArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursFindUniqueOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursFindFirstArgs>(args?: SelectSubset<T, CoursFindFirstArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cours
     * const cours = await prisma.cours.findMany()
     * 
     * // Get first 10 Cours
     * const cours = await prisma.cours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursWithIdOnly = await prisma.cours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursFindManyArgs>(args?: SelectSubset<T, CoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cours.
     * @param {CoursCreateArgs} args - Arguments to create a Cours.
     * @example
     * // Create one Cours
     * const Cours = await prisma.cours.create({
     *   data: {
     *     // ... data to create a Cours
     *   }
     * })
     * 
     */
    create<T extends CoursCreateArgs>(args: SelectSubset<T, CoursCreateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cours.
     * @param {CoursCreateManyArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursCreateManyArgs>(args?: SelectSubset<T, CoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cours and returns the data saved in the database.
     * @param {CoursCreateManyAndReturnArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cours and only return the `id`
     * const coursWithIdOnly = await prisma.cours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cours.
     * @param {CoursDeleteArgs} args - Arguments to delete one Cours.
     * @example
     * // Delete one Cours
     * const Cours = await prisma.cours.delete({
     *   where: {
     *     // ... filter to delete one Cours
     *   }
     * })
     * 
     */
    delete<T extends CoursDeleteArgs>(args: SelectSubset<T, CoursDeleteArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cours.
     * @param {CoursUpdateArgs} args - Arguments to update one Cours.
     * @example
     * // Update one Cours
     * const cours = await prisma.cours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursUpdateArgs>(args: SelectSubset<T, CoursUpdateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cours.
     * @param {CoursDeleteManyArgs} args - Arguments to filter Cours to delete.
     * @example
     * // Delete a few Cours
     * const { count } = await prisma.cours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursDeleteManyArgs>(args?: SelectSubset<T, CoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursUpdateManyArgs>(args: SelectSubset<T, CoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours and returns the data updated in the database.
     * @param {CoursUpdateManyAndReturnArgs} args - Arguments to update many Cours.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cours and only return the `id`
     * const coursWithIdOnly = await prisma.cours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cours.
     * @param {CoursUpsertArgs} args - Arguments to update or create a Cours.
     * @example
     * // Update or create a Cours
     * const cours = await prisma.cours.upsert({
     *   create: {
     *     // ... data to create a Cours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cours we want to update
     *   }
     * })
     */
    upsert<T extends CoursUpsertArgs>(args: SelectSubset<T, CoursUpsertArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursCountArgs} args - Arguments to filter Cours to count.
     * @example
     * // Count the number of Cours
     * const count = await prisma.cours.count({
     *   where: {
     *     // ... the filter for the Cours we want to count
     *   }
     * })
    **/
    count<T extends CoursCountArgs>(
      args?: Subset<T, CoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursAggregateArgs>(args: Subset<T, CoursAggregateArgs>): Prisma.PrismaPromise<GetCoursAggregateType<T>>

    /**
     * Group by Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursGroupByArgs['orderBy'] }
        : { orderBy?: CoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cours model
   */
  readonly fields: CoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorial<T extends TutorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorialDefaultArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coursProgresses<T extends Cours$coursProgressesArgs<ExtArgs> = {}>(args?: Subset<T, Cours$coursProgressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cours model
   */
  interface CoursFieldRefs {
    readonly id: FieldRef<"Cours", 'Int'>
    readonly titreCours: FieldRef<"Cours", 'String'>
    readonly content: FieldRef<"Cours", 'String'>
    readonly photo: FieldRef<"Cours", 'String'>
    readonly tutorialId: FieldRef<"Cours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cours findUnique
   */
  export type CoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findUniqueOrThrow
   */
  export type CoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findFirst
   */
  export type CoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findFirstOrThrow
   */
  export type CoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findMany
   */
  export type CoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours create
   */
  export type CoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to create a Cours.
     */
    data: XOR<CoursCreateInput, CoursUncheckedCreateInput>
  }

  /**
   * Cours createMany
   */
  export type CoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cours.
     */
    data: CoursCreateManyInput | CoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cours createManyAndReturn
   */
  export type CoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * The data used to create many Cours.
     */
    data: CoursCreateManyInput | CoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cours update
   */
  export type CoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to update a Cours.
     */
    data: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
    /**
     * Choose, which Cours to update.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours updateMany
   */
  export type CoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cours.
     */
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyInput>
    /**
     * Filter which Cours to update
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to update.
     */
    limit?: number
  }

  /**
   * Cours updateManyAndReturn
   */
  export type CoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * The data used to update Cours.
     */
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyInput>
    /**
     * Filter which Cours to update
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cours upsert
   */
  export type CoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The filter to search for the Cours to update in case it exists.
     */
    where: CoursWhereUniqueInput
    /**
     * In case the Cours found by the `where` argument doesn't exist, create a new Cours with this data.
     */
    create: XOR<CoursCreateInput, CoursUncheckedCreateInput>
    /**
     * In case the Cours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
  }

  /**
   * Cours delete
   */
  export type CoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter which Cours to delete.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours deleteMany
   */
  export type CoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to delete
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to delete.
     */
    limit?: number
  }

  /**
   * Cours.coursProgresses
   */
  export type Cours$coursProgressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    where?: CoursProgressWhereInput
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    cursor?: CoursProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursProgressScalarFieldEnum | CoursProgressScalarFieldEnum[]
  }

  /**
   * Cours without action
   */
  export type CoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
  }


  /**
   * Model Certificat
   */

  export type AggregateCertificat = {
    _count: CertificatCountAggregateOutputType | null
    _avg: CertificatAvgAggregateOutputType | null
    _sum: CertificatSumAggregateOutputType | null
    _min: CertificatMinAggregateOutputType | null
    _max: CertificatMaxAggregateOutputType | null
  }

  export type CertificatAvgAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CertificatSumAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CertificatMinAggregateOutputType = {
    id: number | null
    titre: string | null
    apprenantId: string | null
    tutorialId: number | null
    dateObtention: Date | null
  }

  export type CertificatMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    apprenantId: string | null
    tutorialId: number | null
    dateObtention: Date | null
  }

  export type CertificatCountAggregateOutputType = {
    id: number
    titre: number
    apprenantId: number
    tutorialId: number
    dateObtention: number
    _all: number
  }


  export type CertificatAvgAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CertificatSumAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CertificatMinAggregateInputType = {
    id?: true
    titre?: true
    apprenantId?: true
    tutorialId?: true
    dateObtention?: true
  }

  export type CertificatMaxAggregateInputType = {
    id?: true
    titre?: true
    apprenantId?: true
    tutorialId?: true
    dateObtention?: true
  }

  export type CertificatCountAggregateInputType = {
    id?: true
    titre?: true
    apprenantId?: true
    tutorialId?: true
    dateObtention?: true
    _all?: true
  }

  export type CertificatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificat to aggregate.
     */
    where?: CertificatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificats to fetch.
     */
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificats
    **/
    _count?: true | CertificatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificatMaxAggregateInputType
  }

  export type GetCertificatAggregateType<T extends CertificatAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificat[P]>
      : GetScalarType<T[P], AggregateCertificat[P]>
  }




  export type CertificatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificatWhereInput
    orderBy?: CertificatOrderByWithAggregationInput | CertificatOrderByWithAggregationInput[]
    by: CertificatScalarFieldEnum[] | CertificatScalarFieldEnum
    having?: CertificatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificatCountAggregateInputType | true
    _avg?: CertificatAvgAggregateInputType
    _sum?: CertificatSumAggregateInputType
    _min?: CertificatMinAggregateInputType
    _max?: CertificatMaxAggregateInputType
  }

  export type CertificatGroupByOutputType = {
    id: number
    titre: string
    apprenantId: string
    tutorialId: number
    dateObtention: Date
    _count: CertificatCountAggregateOutputType | null
    _avg: CertificatAvgAggregateOutputType | null
    _sum: CertificatSumAggregateOutputType | null
    _min: CertificatMinAggregateOutputType | null
    _max: CertificatMaxAggregateOutputType | null
  }

  type GetCertificatGroupByPayload<T extends CertificatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificatGroupByOutputType[P]>
            : GetScalarType<T[P], CertificatGroupByOutputType[P]>
        }
      >
    >


  export type CertificatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    apprenantId?: boolean
    tutorialId?: boolean
    dateObtention?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificat"]>

  export type CertificatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    apprenantId?: boolean
    tutorialId?: boolean
    dateObtention?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificat"]>

  export type CertificatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    apprenantId?: boolean
    tutorialId?: boolean
    dateObtention?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificat"]>

  export type CertificatSelectScalar = {
    id?: boolean
    titre?: boolean
    apprenantId?: boolean
    tutorialId?: boolean
    dateObtention?: boolean
  }

  export type CertificatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "apprenantId" | "tutorialId" | "dateObtention", ExtArgs["result"]["certificat"]>
  export type CertificatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type CertificatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type CertificatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }

  export type $CertificatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tutorial: Prisma.$TutorialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      apprenantId: string
      tutorialId: number
      dateObtention: Date
    }, ExtArgs["result"]["certificat"]>
    composites: {}
  }

  type CertificatGetPayload<S extends boolean | null | undefined | CertificatDefaultArgs> = $Result.GetResult<Prisma.$CertificatPayload, S>

  type CertificatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificatCountAggregateInputType | true
    }

  export interface CertificatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificat'], meta: { name: 'Certificat' } }
    /**
     * Find zero or one Certificat that matches the filter.
     * @param {CertificatFindUniqueArgs} args - Arguments to find a Certificat
     * @example
     * // Get one Certificat
     * const certificat = await prisma.certificat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificatFindUniqueArgs>(args: SelectSubset<T, CertificatFindUniqueArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificatFindUniqueOrThrowArgs} args - Arguments to find a Certificat
     * @example
     * // Get one Certificat
     * const certificat = await prisma.certificat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificatFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatFindFirstArgs} args - Arguments to find a Certificat
     * @example
     * // Get one Certificat
     * const certificat = await prisma.certificat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificatFindFirstArgs>(args?: SelectSubset<T, CertificatFindFirstArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatFindFirstOrThrowArgs} args - Arguments to find a Certificat
     * @example
     * // Get one Certificat
     * const certificat = await prisma.certificat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificatFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificatFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificats
     * const certificats = await prisma.certificat.findMany()
     * 
     * // Get first 10 Certificats
     * const certificats = await prisma.certificat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificatWithIdOnly = await prisma.certificat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificatFindManyArgs>(args?: SelectSubset<T, CertificatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificat.
     * @param {CertificatCreateArgs} args - Arguments to create a Certificat.
     * @example
     * // Create one Certificat
     * const Certificat = await prisma.certificat.create({
     *   data: {
     *     // ... data to create a Certificat
     *   }
     * })
     * 
     */
    create<T extends CertificatCreateArgs>(args: SelectSubset<T, CertificatCreateArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificats.
     * @param {CertificatCreateManyArgs} args - Arguments to create many Certificats.
     * @example
     * // Create many Certificats
     * const certificat = await prisma.certificat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificatCreateManyArgs>(args?: SelectSubset<T, CertificatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificats and returns the data saved in the database.
     * @param {CertificatCreateManyAndReturnArgs} args - Arguments to create many Certificats.
     * @example
     * // Create many Certificats
     * const certificat = await prisma.certificat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificats and only return the `id`
     * const certificatWithIdOnly = await prisma.certificat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificatCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificat.
     * @param {CertificatDeleteArgs} args - Arguments to delete one Certificat.
     * @example
     * // Delete one Certificat
     * const Certificat = await prisma.certificat.delete({
     *   where: {
     *     // ... filter to delete one Certificat
     *   }
     * })
     * 
     */
    delete<T extends CertificatDeleteArgs>(args: SelectSubset<T, CertificatDeleteArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificat.
     * @param {CertificatUpdateArgs} args - Arguments to update one Certificat.
     * @example
     * // Update one Certificat
     * const certificat = await prisma.certificat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificatUpdateArgs>(args: SelectSubset<T, CertificatUpdateArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificats.
     * @param {CertificatDeleteManyArgs} args - Arguments to filter Certificats to delete.
     * @example
     * // Delete a few Certificats
     * const { count } = await prisma.certificat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificatDeleteManyArgs>(args?: SelectSubset<T, CertificatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificats
     * const certificat = await prisma.certificat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificatUpdateManyArgs>(args: SelectSubset<T, CertificatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificats and returns the data updated in the database.
     * @param {CertificatUpdateManyAndReturnArgs} args - Arguments to update many Certificats.
     * @example
     * // Update many Certificats
     * const certificat = await prisma.certificat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificats and only return the `id`
     * const certificatWithIdOnly = await prisma.certificat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificatUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificat.
     * @param {CertificatUpsertArgs} args - Arguments to update or create a Certificat.
     * @example
     * // Update or create a Certificat
     * const certificat = await prisma.certificat.upsert({
     *   create: {
     *     // ... data to create a Certificat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificat we want to update
     *   }
     * })
     */
    upsert<T extends CertificatUpsertArgs>(args: SelectSubset<T, CertificatUpsertArgs<ExtArgs>>): Prisma__CertificatClient<$Result.GetResult<Prisma.$CertificatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatCountArgs} args - Arguments to filter Certificats to count.
     * @example
     * // Count the number of Certificats
     * const count = await prisma.certificat.count({
     *   where: {
     *     // ... the filter for the Certificats we want to count
     *   }
     * })
    **/
    count<T extends CertificatCountArgs>(
      args?: Subset<T, CertificatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificatAggregateArgs>(args: Subset<T, CertificatAggregateArgs>): Prisma.PrismaPromise<GetCertificatAggregateType<T>>

    /**
     * Group by Certificat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificatGroupByArgs['orderBy'] }
        : { orderBy?: CertificatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificat model
   */
  readonly fields: CertificatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutorial<T extends TutorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorialDefaultArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificat model
   */
  interface CertificatFieldRefs {
    readonly id: FieldRef<"Certificat", 'Int'>
    readonly titre: FieldRef<"Certificat", 'String'>
    readonly apprenantId: FieldRef<"Certificat", 'String'>
    readonly tutorialId: FieldRef<"Certificat", 'Int'>
    readonly dateObtention: FieldRef<"Certificat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificat findUnique
   */
  export type CertificatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter, which Certificat to fetch.
     */
    where: CertificatWhereUniqueInput
  }

  /**
   * Certificat findUniqueOrThrow
   */
  export type CertificatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter, which Certificat to fetch.
     */
    where: CertificatWhereUniqueInput
  }

  /**
   * Certificat findFirst
   */
  export type CertificatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter, which Certificat to fetch.
     */
    where?: CertificatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificats to fetch.
     */
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificats.
     */
    cursor?: CertificatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificats.
     */
    distinct?: CertificatScalarFieldEnum | CertificatScalarFieldEnum[]
  }

  /**
   * Certificat findFirstOrThrow
   */
  export type CertificatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter, which Certificat to fetch.
     */
    where?: CertificatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificats to fetch.
     */
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificats.
     */
    cursor?: CertificatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificats.
     */
    distinct?: CertificatScalarFieldEnum | CertificatScalarFieldEnum[]
  }

  /**
   * Certificat findMany
   */
  export type CertificatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter, which Certificats to fetch.
     */
    where?: CertificatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificats to fetch.
     */
    orderBy?: CertificatOrderByWithRelationInput | CertificatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificats.
     */
    cursor?: CertificatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificats.
     */
    skip?: number
    distinct?: CertificatScalarFieldEnum | CertificatScalarFieldEnum[]
  }

  /**
   * Certificat create
   */
  export type CertificatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificat.
     */
    data: XOR<CertificatCreateInput, CertificatUncheckedCreateInput>
  }

  /**
   * Certificat createMany
   */
  export type CertificatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificats.
     */
    data: CertificatCreateManyInput | CertificatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificat createManyAndReturn
   */
  export type CertificatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * The data used to create many Certificats.
     */
    data: CertificatCreateManyInput | CertificatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificat update
   */
  export type CertificatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificat.
     */
    data: XOR<CertificatUpdateInput, CertificatUncheckedUpdateInput>
    /**
     * Choose, which Certificat to update.
     */
    where: CertificatWhereUniqueInput
  }

  /**
   * Certificat updateMany
   */
  export type CertificatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificats.
     */
    data: XOR<CertificatUpdateManyMutationInput, CertificatUncheckedUpdateManyInput>
    /**
     * Filter which Certificats to update
     */
    where?: CertificatWhereInput
    /**
     * Limit how many Certificats to update.
     */
    limit?: number
  }

  /**
   * Certificat updateManyAndReturn
   */
  export type CertificatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * The data used to update Certificats.
     */
    data: XOR<CertificatUpdateManyMutationInput, CertificatUncheckedUpdateManyInput>
    /**
     * Filter which Certificats to update
     */
    where?: CertificatWhereInput
    /**
     * Limit how many Certificats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificat upsert
   */
  export type CertificatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificat to update in case it exists.
     */
    where: CertificatWhereUniqueInput
    /**
     * In case the Certificat found by the `where` argument doesn't exist, create a new Certificat with this data.
     */
    create: XOR<CertificatCreateInput, CertificatUncheckedCreateInput>
    /**
     * In case the Certificat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificatUpdateInput, CertificatUncheckedUpdateInput>
  }

  /**
   * Certificat delete
   */
  export type CertificatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
    /**
     * Filter which Certificat to delete.
     */
    where: CertificatWhereUniqueInput
  }

  /**
   * Certificat deleteMany
   */
  export type CertificatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificats to delete
     */
    where?: CertificatWhereInput
    /**
     * Limit how many Certificats to delete.
     */
    limit?: number
  }

  /**
   * Certificat without action
   */
  export type CertificatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificat
     */
    select?: CertificatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificat
     */
    omit?: CertificatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificatInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    tutorialId: number | null
    progress: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    tutorialId: number | null
    progress: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    userId: string | null
    tutorialId: number | null
    enrolledAt: Date | null
    progress: number | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    tutorialId: number | null
    enrolledAt: Date | null
    progress: number | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    tutorialId: number
    enrolledAt: number
    progress: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    tutorialId?: true
    progress?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    tutorialId?: true
    progress?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    tutorialId?: true
    enrolledAt?: true
    progress?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    tutorialId?: true
    enrolledAt?: true
    progress?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    tutorialId?: true
    enrolledAt?: true
    progress?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    userId: string
    tutorialId: number
    enrolledAt: Date
    progress: number
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorialId?: boolean
    enrolledAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorialId?: boolean
    enrolledAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorialId?: boolean
    enrolledAt?: boolean
    progress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    tutorialId?: boolean
    enrolledAt?: boolean
    progress?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tutorialId" | "enrolledAt" | "progress", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tutorial: Prisma.$TutorialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      tutorialId: number
      enrolledAt: Date
      progress: number
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutorial<T extends TutorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorialDefaultArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly tutorialId: FieldRef<"Enrollment", 'Int'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly progress: FieldRef<"Enrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model CoursProgress
   */

  export type AggregateCoursProgress = {
    _count: CoursProgressCountAggregateOutputType | null
    _avg: CoursProgressAvgAggregateOutputType | null
    _sum: CoursProgressSumAggregateOutputType | null
    _min: CoursProgressMinAggregateOutputType | null
    _max: CoursProgressMaxAggregateOutputType | null
  }

  export type CoursProgressAvgAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type CoursProgressSumAggregateOutputType = {
    id: number | null
    coursId: number | null
  }

  export type CoursProgressMinAggregateOutputType = {
    id: number | null
    userId: string | null
    coursId: number | null
    completed: boolean | null
    viewedAt: Date | null
  }

  export type CoursProgressMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    coursId: number | null
    completed: boolean | null
    viewedAt: Date | null
  }

  export type CoursProgressCountAggregateOutputType = {
    id: number
    userId: number
    coursId: number
    completed: number
    viewedAt: number
    _all: number
  }


  export type CoursProgressAvgAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type CoursProgressSumAggregateInputType = {
    id?: true
    coursId?: true
  }

  export type CoursProgressMinAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    completed?: true
    viewedAt?: true
  }

  export type CoursProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    completed?: true
    viewedAt?: true
  }

  export type CoursProgressCountAggregateInputType = {
    id?: true
    userId?: true
    coursId?: true
    completed?: true
    viewedAt?: true
    _all?: true
  }

  export type CoursProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursProgress to aggregate.
     */
    where?: CoursProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursProgresses to fetch.
     */
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursProgresses
    **/
    _count?: true | CoursProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursProgressMaxAggregateInputType
  }

  export type GetCoursProgressAggregateType<T extends CoursProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursProgress[P]>
      : GetScalarType<T[P], AggregateCoursProgress[P]>
  }




  export type CoursProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursProgressWhereInput
    orderBy?: CoursProgressOrderByWithAggregationInput | CoursProgressOrderByWithAggregationInput[]
    by: CoursProgressScalarFieldEnum[] | CoursProgressScalarFieldEnum
    having?: CoursProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursProgressCountAggregateInputType | true
    _avg?: CoursProgressAvgAggregateInputType
    _sum?: CoursProgressSumAggregateInputType
    _min?: CoursProgressMinAggregateInputType
    _max?: CoursProgressMaxAggregateInputType
  }

  export type CoursProgressGroupByOutputType = {
    id: number
    userId: string
    coursId: number
    completed: boolean
    viewedAt: Date
    _count: CoursProgressCountAggregateOutputType | null
    _avg: CoursProgressAvgAggregateOutputType | null
    _sum: CoursProgressSumAggregateOutputType | null
    _min: CoursProgressMinAggregateOutputType | null
    _max: CoursProgressMaxAggregateOutputType | null
  }

  type GetCoursProgressGroupByPayload<T extends CoursProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CoursProgressGroupByOutputType[P]>
        }
      >
    >


  export type CoursProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coursId?: boolean
    completed?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursProgress"]>

  export type CoursProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coursId?: boolean
    completed?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursProgress"]>

  export type CoursProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coursId?: boolean
    completed?: boolean
    viewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursProgress"]>

  export type CoursProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    coursId?: boolean
    completed?: boolean
    viewedAt?: boolean
  }

  export type CoursProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coursId" | "completed" | "viewedAt", ExtArgs["result"]["coursProgress"]>
  export type CoursProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }
  export type CoursProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }
  export type CoursProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }

  export type $CoursProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cours: Prisma.$CoursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      coursId: number
      completed: boolean
      viewedAt: Date
    }, ExtArgs["result"]["coursProgress"]>
    composites: {}
  }

  type CoursProgressGetPayload<S extends boolean | null | undefined | CoursProgressDefaultArgs> = $Result.GetResult<Prisma.$CoursProgressPayload, S>

  type CoursProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursProgressCountAggregateInputType | true
    }

  export interface CoursProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursProgress'], meta: { name: 'CoursProgress' } }
    /**
     * Find zero or one CoursProgress that matches the filter.
     * @param {CoursProgressFindUniqueArgs} args - Arguments to find a CoursProgress
     * @example
     * // Get one CoursProgress
     * const coursProgress = await prisma.coursProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursProgressFindUniqueArgs>(args: SelectSubset<T, CoursProgressFindUniqueArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursProgressFindUniqueOrThrowArgs} args - Arguments to find a CoursProgress
     * @example
     * // Get one CoursProgress
     * const coursProgress = await prisma.coursProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressFindFirstArgs} args - Arguments to find a CoursProgress
     * @example
     * // Get one CoursProgress
     * const coursProgress = await prisma.coursProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursProgressFindFirstArgs>(args?: SelectSubset<T, CoursProgressFindFirstArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressFindFirstOrThrowArgs} args - Arguments to find a CoursProgress
     * @example
     * // Get one CoursProgress
     * const coursProgress = await prisma.coursProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursProgresses
     * const coursProgresses = await prisma.coursProgress.findMany()
     * 
     * // Get first 10 CoursProgresses
     * const coursProgresses = await prisma.coursProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursProgressWithIdOnly = await prisma.coursProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursProgressFindManyArgs>(args?: SelectSubset<T, CoursProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursProgress.
     * @param {CoursProgressCreateArgs} args - Arguments to create a CoursProgress.
     * @example
     * // Create one CoursProgress
     * const CoursProgress = await prisma.coursProgress.create({
     *   data: {
     *     // ... data to create a CoursProgress
     *   }
     * })
     * 
     */
    create<T extends CoursProgressCreateArgs>(args: SelectSubset<T, CoursProgressCreateArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursProgresses.
     * @param {CoursProgressCreateManyArgs} args - Arguments to create many CoursProgresses.
     * @example
     * // Create many CoursProgresses
     * const coursProgress = await prisma.coursProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursProgressCreateManyArgs>(args?: SelectSubset<T, CoursProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoursProgresses and returns the data saved in the database.
     * @param {CoursProgressCreateManyAndReturnArgs} args - Arguments to create many CoursProgresses.
     * @example
     * // Create many CoursProgresses
     * const coursProgress = await prisma.coursProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoursProgresses and only return the `id`
     * const coursProgressWithIdOnly = await prisma.coursProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoursProgress.
     * @param {CoursProgressDeleteArgs} args - Arguments to delete one CoursProgress.
     * @example
     * // Delete one CoursProgress
     * const CoursProgress = await prisma.coursProgress.delete({
     *   where: {
     *     // ... filter to delete one CoursProgress
     *   }
     * })
     * 
     */
    delete<T extends CoursProgressDeleteArgs>(args: SelectSubset<T, CoursProgressDeleteArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursProgress.
     * @param {CoursProgressUpdateArgs} args - Arguments to update one CoursProgress.
     * @example
     * // Update one CoursProgress
     * const coursProgress = await prisma.coursProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursProgressUpdateArgs>(args: SelectSubset<T, CoursProgressUpdateArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursProgresses.
     * @param {CoursProgressDeleteManyArgs} args - Arguments to filter CoursProgresses to delete.
     * @example
     * // Delete a few CoursProgresses
     * const { count } = await prisma.coursProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursProgressDeleteManyArgs>(args?: SelectSubset<T, CoursProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursProgresses
     * const coursProgress = await prisma.coursProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursProgressUpdateManyArgs>(args: SelectSubset<T, CoursProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursProgresses and returns the data updated in the database.
     * @param {CoursProgressUpdateManyAndReturnArgs} args - Arguments to update many CoursProgresses.
     * @example
     * // Update many CoursProgresses
     * const coursProgress = await prisma.coursProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoursProgresses and only return the `id`
     * const coursProgressWithIdOnly = await prisma.coursProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoursProgress.
     * @param {CoursProgressUpsertArgs} args - Arguments to update or create a CoursProgress.
     * @example
     * // Update or create a CoursProgress
     * const coursProgress = await prisma.coursProgress.upsert({
     *   create: {
     *     // ... data to create a CoursProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursProgress we want to update
     *   }
     * })
     */
    upsert<T extends CoursProgressUpsertArgs>(args: SelectSubset<T, CoursProgressUpsertArgs<ExtArgs>>): Prisma__CoursProgressClient<$Result.GetResult<Prisma.$CoursProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoursProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressCountArgs} args - Arguments to filter CoursProgresses to count.
     * @example
     * // Count the number of CoursProgresses
     * const count = await prisma.coursProgress.count({
     *   where: {
     *     // ... the filter for the CoursProgresses we want to count
     *   }
     * })
    **/
    count<T extends CoursProgressCountArgs>(
      args?: Subset<T, CoursProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursProgressAggregateArgs>(args: Subset<T, CoursProgressAggregateArgs>): Prisma.PrismaPromise<GetCoursProgressAggregateType<T>>

    /**
     * Group by CoursProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursProgressGroupByArgs['orderBy'] }
        : { orderBy?: CoursProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursProgress model
   */
  readonly fields: CoursProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoursProgress model
   */
  interface CoursProgressFieldRefs {
    readonly id: FieldRef<"CoursProgress", 'Int'>
    readonly userId: FieldRef<"CoursProgress", 'String'>
    readonly coursId: FieldRef<"CoursProgress", 'Int'>
    readonly completed: FieldRef<"CoursProgress", 'Boolean'>
    readonly viewedAt: FieldRef<"CoursProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoursProgress findUnique
   */
  export type CoursProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter, which CoursProgress to fetch.
     */
    where: CoursProgressWhereUniqueInput
  }

  /**
   * CoursProgress findUniqueOrThrow
   */
  export type CoursProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter, which CoursProgress to fetch.
     */
    where: CoursProgressWhereUniqueInput
  }

  /**
   * CoursProgress findFirst
   */
  export type CoursProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter, which CoursProgress to fetch.
     */
    where?: CoursProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursProgresses to fetch.
     */
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursProgresses.
     */
    cursor?: CoursProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursProgresses.
     */
    distinct?: CoursProgressScalarFieldEnum | CoursProgressScalarFieldEnum[]
  }

  /**
   * CoursProgress findFirstOrThrow
   */
  export type CoursProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter, which CoursProgress to fetch.
     */
    where?: CoursProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursProgresses to fetch.
     */
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursProgresses.
     */
    cursor?: CoursProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursProgresses.
     */
    distinct?: CoursProgressScalarFieldEnum | CoursProgressScalarFieldEnum[]
  }

  /**
   * CoursProgress findMany
   */
  export type CoursProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter, which CoursProgresses to fetch.
     */
    where?: CoursProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursProgresses to fetch.
     */
    orderBy?: CoursProgressOrderByWithRelationInput | CoursProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursProgresses.
     */
    cursor?: CoursProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursProgresses.
     */
    skip?: number
    distinct?: CoursProgressScalarFieldEnum | CoursProgressScalarFieldEnum[]
  }

  /**
   * CoursProgress create
   */
  export type CoursProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursProgress.
     */
    data: XOR<CoursProgressCreateInput, CoursProgressUncheckedCreateInput>
  }

  /**
   * CoursProgress createMany
   */
  export type CoursProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursProgresses.
     */
    data: CoursProgressCreateManyInput | CoursProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoursProgress createManyAndReturn
   */
  export type CoursProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CoursProgresses.
     */
    data: CoursProgressCreateManyInput | CoursProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursProgress update
   */
  export type CoursProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursProgress.
     */
    data: XOR<CoursProgressUpdateInput, CoursProgressUncheckedUpdateInput>
    /**
     * Choose, which CoursProgress to update.
     */
    where: CoursProgressWhereUniqueInput
  }

  /**
   * CoursProgress updateMany
   */
  export type CoursProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursProgresses.
     */
    data: XOR<CoursProgressUpdateManyMutationInput, CoursProgressUncheckedUpdateManyInput>
    /**
     * Filter which CoursProgresses to update
     */
    where?: CoursProgressWhereInput
    /**
     * Limit how many CoursProgresses to update.
     */
    limit?: number
  }

  /**
   * CoursProgress updateManyAndReturn
   */
  export type CoursProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * The data used to update CoursProgresses.
     */
    data: XOR<CoursProgressUpdateManyMutationInput, CoursProgressUncheckedUpdateManyInput>
    /**
     * Filter which CoursProgresses to update
     */
    where?: CoursProgressWhereInput
    /**
     * Limit how many CoursProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursProgress upsert
   */
  export type CoursProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursProgress to update in case it exists.
     */
    where: CoursProgressWhereUniqueInput
    /**
     * In case the CoursProgress found by the `where` argument doesn't exist, create a new CoursProgress with this data.
     */
    create: XOR<CoursProgressCreateInput, CoursProgressUncheckedCreateInput>
    /**
     * In case the CoursProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursProgressUpdateInput, CoursProgressUncheckedUpdateInput>
  }

  /**
   * CoursProgress delete
   */
  export type CoursProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
    /**
     * Filter which CoursProgress to delete.
     */
    where: CoursProgressWhereUniqueInput
  }

  /**
   * CoursProgress deleteMany
   */
  export type CoursProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursProgresses to delete
     */
    where?: CoursProgressWhereInput
    /**
     * Limit how many CoursProgresses to delete.
     */
    limit?: number
  }

  /**
   * CoursProgress without action
   */
  export type CoursProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursProgress
     */
    select?: CoursProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursProgress
     */
    omit?: CoursProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursProgressInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireAvgAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CommentaireSumAggregateOutputType = {
    id: number | null
    tutorialId: number | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: number | null
    contenu: string | null
    userId: string | null
    tutorialId: number | null
    createdAt: Date | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: number | null
    contenu: string | null
    userId: string | null
    tutorialId: number | null
    createdAt: Date | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    contenu: number
    userId: number
    tutorialId: number
    createdAt: number
    _all: number
  }


  export type CommentaireAvgAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CommentaireSumAggregateInputType = {
    id?: true
    tutorialId?: true
  }

  export type CommentaireMinAggregateInputType = {
    id?: true
    contenu?: true
    userId?: true
    tutorialId?: true
    createdAt?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    contenu?: true
    userId?: true
    tutorialId?: true
    createdAt?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    contenu?: true
    userId?: true
    tutorialId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _avg?: CommentaireAvgAggregateInputType
    _sum?: CommentaireSumAggregateInputType
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: number
    contenu: string
    userId: string
    tutorialId: number
    createdAt: Date
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    userId?: boolean
    tutorialId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    userId?: boolean
    tutorialId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    userId?: boolean
    tutorialId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id?: boolean
    contenu?: boolean
    userId?: boolean
    tutorialId?: boolean
    createdAt?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "userId" | "tutorialId" | "createdAt", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tutorial?: boolean | TutorialDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tutorial: Prisma.$TutorialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenu: string
      userId: string
      tutorialId: number
      createdAt: Date
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutorial<T extends TutorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorialDefaultArgs<ExtArgs>>): Prisma__TutorialClient<$Result.GetResult<Prisma.$TutorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'Int'>
    readonly contenu: FieldRef<"Commentaire", 'String'>
    readonly userId: FieldRef<"Commentaire", 'String'>
    readonly tutorialId: FieldRef<"Commentaire", 'Int'>
    readonly createdAt: FieldRef<"Commentaire", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    avatar: 'avatar',
    bio: 'bio',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FormationScalarFieldEnum: {
    id: 'id',
    nomFormation: 'nomFormation',
    description: 'description',
    photo: 'photo'
  };

  export type FormationScalarFieldEnum = (typeof FormationScalarFieldEnum)[keyof typeof FormationScalarFieldEnum]


  export const TutorialScalarFieldEnum: {
    id: 'id',
    titreTuto: 'titreTuto',
    descriptionTuto: 'descriptionTuto',
    photo: 'photo',
    formationId: 'formationId'
  };

  export type TutorialScalarFieldEnum = (typeof TutorialScalarFieldEnum)[keyof typeof TutorialScalarFieldEnum]


  export const CoursScalarFieldEnum: {
    id: 'id',
    titreCours: 'titreCours',
    content: 'content',
    photo: 'photo',
    tutorialId: 'tutorialId'
  };

  export type CoursScalarFieldEnum = (typeof CoursScalarFieldEnum)[keyof typeof CoursScalarFieldEnum]


  export const CertificatScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    apprenantId: 'apprenantId',
    tutorialId: 'tutorialId',
    dateObtention: 'dateObtention'
  };

  export type CertificatScalarFieldEnum = (typeof CertificatScalarFieldEnum)[keyof typeof CertificatScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tutorialId: 'tutorialId',
    enrolledAt: 'enrolledAt',
    progress: 'progress'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const CoursProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coursId: 'coursId',
    completed: 'completed',
    viewedAt: 'viewedAt'
  };

  export type CoursProgressScalarFieldEnum = (typeof CoursProgressScalarFieldEnum)[keyof typeof CoursProgressScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    userId: 'userId',
    tutorialId: 'tutorialId',
    createdAt: 'createdAt'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    certificats?: CertificatListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    coursProgresses?: CoursProgressListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    certificats?: CertificatOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    coursProgresses?: CoursProgressOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    certificats?: CertificatListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    coursProgresses?: CoursProgressListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FormationWhereInput = {
    AND?: FormationWhereInput | FormationWhereInput[]
    OR?: FormationWhereInput[]
    NOT?: FormationWhereInput | FormationWhereInput[]
    id?: IntFilter<"Formation"> | number
    nomFormation?: StringFilter<"Formation"> | string
    description?: StringFilter<"Formation"> | string
    photo?: StringFilter<"Formation"> | string
    tutorials?: TutorialListRelationFilter
  }

  export type FormationOrderByWithRelationInput = {
    id?: SortOrder
    nomFormation?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    tutorials?: TutorialOrderByRelationAggregateInput
  }

  export type FormationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormationWhereInput | FormationWhereInput[]
    OR?: FormationWhereInput[]
    NOT?: FormationWhereInput | FormationWhereInput[]
    nomFormation?: StringFilter<"Formation"> | string
    description?: StringFilter<"Formation"> | string
    photo?: StringFilter<"Formation"> | string
    tutorials?: TutorialListRelationFilter
  }, "id">

  export type FormationOrderByWithAggregationInput = {
    id?: SortOrder
    nomFormation?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    _count?: FormationCountOrderByAggregateInput
    _avg?: FormationAvgOrderByAggregateInput
    _max?: FormationMaxOrderByAggregateInput
    _min?: FormationMinOrderByAggregateInput
    _sum?: FormationSumOrderByAggregateInput
  }

  export type FormationScalarWhereWithAggregatesInput = {
    AND?: FormationScalarWhereWithAggregatesInput | FormationScalarWhereWithAggregatesInput[]
    OR?: FormationScalarWhereWithAggregatesInput[]
    NOT?: FormationScalarWhereWithAggregatesInput | FormationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Formation"> | number
    nomFormation?: StringWithAggregatesFilter<"Formation"> | string
    description?: StringWithAggregatesFilter<"Formation"> | string
    photo?: StringWithAggregatesFilter<"Formation"> | string
  }

  export type TutorialWhereInput = {
    AND?: TutorialWhereInput | TutorialWhereInput[]
    OR?: TutorialWhereInput[]
    NOT?: TutorialWhereInput | TutorialWhereInput[]
    id?: IntFilter<"Tutorial"> | number
    titreTuto?: StringFilter<"Tutorial"> | string
    descriptionTuto?: StringFilter<"Tutorial"> | string
    photo?: StringFilter<"Tutorial"> | string
    formationId?: IntFilter<"Tutorial"> | number
    formation?: XOR<FormationScalarRelationFilter, FormationWhereInput>
    cours?: CoursListRelationFilter
    certificats?: CertificatListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }

  export type TutorialOrderByWithRelationInput = {
    id?: SortOrder
    titreTuto?: SortOrder
    descriptionTuto?: SortOrder
    photo?: SortOrder
    formationId?: SortOrder
    formation?: FormationOrderByWithRelationInput
    cours?: CoursOrderByRelationAggregateInput
    certificats?: CertificatOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
  }

  export type TutorialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TutorialWhereInput | TutorialWhereInput[]
    OR?: TutorialWhereInput[]
    NOT?: TutorialWhereInput | TutorialWhereInput[]
    titreTuto?: StringFilter<"Tutorial"> | string
    descriptionTuto?: StringFilter<"Tutorial"> | string
    photo?: StringFilter<"Tutorial"> | string
    formationId?: IntFilter<"Tutorial"> | number
    formation?: XOR<FormationScalarRelationFilter, FormationWhereInput>
    cours?: CoursListRelationFilter
    certificats?: CertificatListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }, "id">

  export type TutorialOrderByWithAggregationInput = {
    id?: SortOrder
    titreTuto?: SortOrder
    descriptionTuto?: SortOrder
    photo?: SortOrder
    formationId?: SortOrder
    _count?: TutorialCountOrderByAggregateInput
    _avg?: TutorialAvgOrderByAggregateInput
    _max?: TutorialMaxOrderByAggregateInput
    _min?: TutorialMinOrderByAggregateInput
    _sum?: TutorialSumOrderByAggregateInput
  }

  export type TutorialScalarWhereWithAggregatesInput = {
    AND?: TutorialScalarWhereWithAggregatesInput | TutorialScalarWhereWithAggregatesInput[]
    OR?: TutorialScalarWhereWithAggregatesInput[]
    NOT?: TutorialScalarWhereWithAggregatesInput | TutorialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tutorial"> | number
    titreTuto?: StringWithAggregatesFilter<"Tutorial"> | string
    descriptionTuto?: StringWithAggregatesFilter<"Tutorial"> | string
    photo?: StringWithAggregatesFilter<"Tutorial"> | string
    formationId?: IntWithAggregatesFilter<"Tutorial"> | number
  }

  export type CoursWhereInput = {
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    id?: IntFilter<"Cours"> | number
    titreCours?: StringFilter<"Cours"> | string
    content?: StringFilter<"Cours"> | string
    photo?: StringFilter<"Cours"> | string
    tutorialId?: IntFilter<"Cours"> | number
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
    coursProgresses?: CoursProgressListRelationFilter
  }

  export type CoursOrderByWithRelationInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
    tutorial?: TutorialOrderByWithRelationInput
    coursProgresses?: CoursProgressOrderByRelationAggregateInput
  }

  export type CoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    titreCours?: StringFilter<"Cours"> | string
    content?: StringFilter<"Cours"> | string
    photo?: StringFilter<"Cours"> | string
    tutorialId?: IntFilter<"Cours"> | number
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
    coursProgresses?: CoursProgressListRelationFilter
  }, "id">

  export type CoursOrderByWithAggregationInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
    _count?: CoursCountOrderByAggregateInput
    _avg?: CoursAvgOrderByAggregateInput
    _max?: CoursMaxOrderByAggregateInput
    _min?: CoursMinOrderByAggregateInput
    _sum?: CoursSumOrderByAggregateInput
  }

  export type CoursScalarWhereWithAggregatesInput = {
    AND?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    OR?: CoursScalarWhereWithAggregatesInput[]
    NOT?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cours"> | number
    titreCours?: StringWithAggregatesFilter<"Cours"> | string
    content?: StringWithAggregatesFilter<"Cours"> | string
    photo?: StringWithAggregatesFilter<"Cours"> | string
    tutorialId?: IntWithAggregatesFilter<"Cours"> | number
  }

  export type CertificatWhereInput = {
    AND?: CertificatWhereInput | CertificatWhereInput[]
    OR?: CertificatWhereInput[]
    NOT?: CertificatWhereInput | CertificatWhereInput[]
    id?: IntFilter<"Certificat"> | number
    titre?: StringFilter<"Certificat"> | string
    apprenantId?: UuidFilter<"Certificat"> | string
    tutorialId?: IntFilter<"Certificat"> | number
    dateObtention?: DateTimeFilter<"Certificat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }

  export type CertificatOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    apprenantId?: SortOrder
    tutorialId?: SortOrder
    dateObtention?: SortOrder
    user?: UserOrderByWithRelationInput
    tutorial?: TutorialOrderByWithRelationInput
  }

  export type CertificatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CertificatWhereInput | CertificatWhereInput[]
    OR?: CertificatWhereInput[]
    NOT?: CertificatWhereInput | CertificatWhereInput[]
    titre?: StringFilter<"Certificat"> | string
    apprenantId?: UuidFilter<"Certificat"> | string
    tutorialId?: IntFilter<"Certificat"> | number
    dateObtention?: DateTimeFilter<"Certificat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }, "id">

  export type CertificatOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    apprenantId?: SortOrder
    tutorialId?: SortOrder
    dateObtention?: SortOrder
    _count?: CertificatCountOrderByAggregateInput
    _avg?: CertificatAvgOrderByAggregateInput
    _max?: CertificatMaxOrderByAggregateInput
    _min?: CertificatMinOrderByAggregateInput
    _sum?: CertificatSumOrderByAggregateInput
  }

  export type CertificatScalarWhereWithAggregatesInput = {
    AND?: CertificatScalarWhereWithAggregatesInput | CertificatScalarWhereWithAggregatesInput[]
    OR?: CertificatScalarWhereWithAggregatesInput[]
    NOT?: CertificatScalarWhereWithAggregatesInput | CertificatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificat"> | number
    titre?: StringWithAggregatesFilter<"Certificat"> | string
    apprenantId?: UuidWithAggregatesFilter<"Certificat"> | string
    tutorialId?: IntWithAggregatesFilter<"Certificat"> | number
    dateObtention?: DateTimeWithAggregatesFilter<"Certificat"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    userId?: UuidFilter<"Enrollment"> | string
    tutorialId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    progress?: IntFilter<"Enrollment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    enrolledAt?: SortOrder
    progress?: SortOrder
    user?: UserOrderByWithRelationInput
    tutorial?: TutorialOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_tutorialId?: EnrollmentUserIdTutorialIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: UuidFilter<"Enrollment"> | string
    tutorialId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    progress?: IntFilter<"Enrollment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }, "id" | "userId_tutorialId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    enrolledAt?: SortOrder
    progress?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    userId?: UuidWithAggregatesFilter<"Enrollment"> | string
    tutorialId?: IntWithAggregatesFilter<"Enrollment"> | number
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    progress?: IntWithAggregatesFilter<"Enrollment"> | number
  }

  export type CoursProgressWhereInput = {
    AND?: CoursProgressWhereInput | CoursProgressWhereInput[]
    OR?: CoursProgressWhereInput[]
    NOT?: CoursProgressWhereInput | CoursProgressWhereInput[]
    id?: IntFilter<"CoursProgress"> | number
    userId?: UuidFilter<"CoursProgress"> | string
    coursId?: IntFilter<"CoursProgress"> | number
    completed?: BoolFilter<"CoursProgress"> | boolean
    viewedAt?: DateTimeFilter<"CoursProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }

  export type CoursProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    completed?: SortOrder
    viewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cours?: CoursOrderByWithRelationInput
  }

  export type CoursProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_coursId?: CoursProgressUserIdCoursIdCompoundUniqueInput
    AND?: CoursProgressWhereInput | CoursProgressWhereInput[]
    OR?: CoursProgressWhereInput[]
    NOT?: CoursProgressWhereInput | CoursProgressWhereInput[]
    userId?: UuidFilter<"CoursProgress"> | string
    coursId?: IntFilter<"CoursProgress"> | number
    completed?: BoolFilter<"CoursProgress"> | boolean
    viewedAt?: DateTimeFilter<"CoursProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }, "id" | "userId_coursId">

  export type CoursProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    completed?: SortOrder
    viewedAt?: SortOrder
    _count?: CoursProgressCountOrderByAggregateInput
    _avg?: CoursProgressAvgOrderByAggregateInput
    _max?: CoursProgressMaxOrderByAggregateInput
    _min?: CoursProgressMinOrderByAggregateInput
    _sum?: CoursProgressSumOrderByAggregateInput
  }

  export type CoursProgressScalarWhereWithAggregatesInput = {
    AND?: CoursProgressScalarWhereWithAggregatesInput | CoursProgressScalarWhereWithAggregatesInput[]
    OR?: CoursProgressScalarWhereWithAggregatesInput[]
    NOT?: CoursProgressScalarWhereWithAggregatesInput | CoursProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoursProgress"> | number
    userId?: UuidWithAggregatesFilter<"CoursProgress"> | string
    coursId?: IntWithAggregatesFilter<"CoursProgress"> | number
    completed?: BoolWithAggregatesFilter<"CoursProgress"> | boolean
    viewedAt?: DateTimeWithAggregatesFilter<"CoursProgress"> | Date | string
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    contenu?: StringFilter<"Commentaire"> | string
    userId?: UuidFilter<"Commentaire"> | string
    tutorialId?: IntFilter<"Commentaire"> | number
    createdAt?: DateTimeFilter<"Commentaire"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tutorial?: TutorialOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    contenu?: StringFilter<"Commentaire"> | string
    userId?: UuidFilter<"Commentaire"> | string
    tutorialId?: IntFilter<"Commentaire"> | number
    createdAt?: DateTimeFilter<"Commentaire"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tutorial?: XOR<TutorialScalarRelationFilter, TutorialWhereInput>
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _avg?: CommentaireAvgOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
    _sum?: CommentaireSumOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commentaire"> | number
    contenu?: StringWithAggregatesFilter<"Commentaire"> | string
    userId?: UuidWithAggregatesFilter<"Commentaire"> | string
    tutorialId?: IntWithAggregatesFilter<"Commentaire"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormationCreateInput = {
    nomFormation: string
    description: string
    photo: string
    tutorials?: TutorialCreateNestedManyWithoutFormationInput
  }

  export type FormationUncheckedCreateInput = {
    id?: number
    nomFormation: string
    description: string
    photo: string
    tutorials?: TutorialUncheckedCreateNestedManyWithoutFormationInput
  }

  export type FormationUpdateInput = {
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorials?: TutorialUpdateManyWithoutFormationNestedInput
  }

  export type FormationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorials?: TutorialUncheckedUpdateManyWithoutFormationNestedInput
  }

  export type FormationCreateManyInput = {
    id?: number
    nomFormation: string
    description: string
    photo: string
  }

  export type FormationUpdateManyMutationInput = {
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type FormationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type TutorialCreateInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    cours?: CoursCreateNestedManyWithoutTutorialInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUpdateInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialCreateManyInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
  }

  export type TutorialUpdateManyMutationInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type TutorialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
  }

  export type CoursCreateInput = {
    titreCours: string
    content: string
    photo: string
    tutorial: TutorialCreateNestedOneWithoutCoursInput
    coursProgresses?: CoursProgressCreateNestedManyWithoutCoursInput
  }

  export type CoursUncheckedCreateInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
    tutorialId: number
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursUpdateInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorial?: TutorialUpdateOneRequiredWithoutCoursNestedInput
    coursProgresses?: CoursProgressUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursCreateManyInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
    tutorialId: number
  }

  export type CoursUpdateManyMutationInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type CoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
  }

  export type CertificatCreateInput = {
    titre: string
    dateObtention?: Date | string
    user: UserCreateNestedOneWithoutCertificatsInput
    tutorial: TutorialCreateNestedOneWithoutCertificatsInput
  }

  export type CertificatUncheckedCreateInput = {
    id?: number
    titre: string
    apprenantId: string
    tutorialId: number
    dateObtention?: Date | string
  }

  export type CertificatUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatsNestedInput
    tutorial?: TutorialUpdateOneRequiredWithoutCertificatsNestedInput
  }

  export type CertificatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    apprenantId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificatCreateManyInput = {
    id?: number
    titre: string
    apprenantId: string
    tutorialId: number
    dateObtention?: Date | string
  }

  export type CertificatUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    apprenantId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    enrolledAt?: Date | string
    progress?: number
    user: UserCreateNestedOneWithoutEnrollmentsInput
    tutorial: TutorialCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    userId: string
    tutorialId: number
    enrolledAt?: Date | string
    progress?: number
  }

  export type EnrollmentUpdateInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    tutorial?: TutorialUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    userId: string
    tutorialId: number
    enrolledAt?: Date | string
    progress?: number
  }

  export type EnrollmentUpdateManyMutationInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CoursProgressCreateInput = {
    completed?: boolean
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursProgressesInput
    cours: CoursCreateNestedOneWithoutCoursProgressesInput
  }

  export type CoursProgressUncheckedCreateInput = {
    id?: number
    userId: string
    coursId: number
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CoursProgressUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursProgressesNestedInput
    cours?: CoursUpdateOneRequiredWithoutCoursProgressesNestedInput
  }

  export type CoursProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursProgressCreateManyInput = {
    id?: number
    userId: string
    coursId: number
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CoursProgressUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    coursId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireCreateInput = {
    contenu: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentairesInput
    tutorial: TutorialCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateInput = {
    id?: number
    contenu: string
    userId: string
    tutorialId: number
    createdAt?: Date | string
  }

  export type CommentaireUpdateInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentairesNestedInput
    tutorial?: TutorialUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireCreateManyInput = {
    id?: number
    contenu: string
    userId: string
    tutorialId: number
    createdAt?: Date | string
  }

  export type CommentaireUpdateManyMutationInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CertificatListRelationFilter = {
    every?: CertificatWhereInput
    some?: CertificatWhereInput
    none?: CertificatWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type CoursProgressListRelationFilter = {
    every?: CoursProgressWhereInput
    some?: CoursProgressWhereInput
    none?: CoursProgressWhereInput
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CertificatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TutorialListRelationFilter = {
    every?: TutorialWhereInput
    some?: TutorialWhereInput
    none?: TutorialWhereInput
  }

  export type TutorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormationCountOrderByAggregateInput = {
    id?: SortOrder
    nomFormation?: SortOrder
    description?: SortOrder
    photo?: SortOrder
  }

  export type FormationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormationMaxOrderByAggregateInput = {
    id?: SortOrder
    nomFormation?: SortOrder
    description?: SortOrder
    photo?: SortOrder
  }

  export type FormationMinOrderByAggregateInput = {
    id?: SortOrder
    nomFormation?: SortOrder
    description?: SortOrder
    photo?: SortOrder
  }

  export type FormationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FormationScalarRelationFilter = {
    is?: FormationWhereInput
    isNot?: FormationWhereInput
  }

  export type CoursListRelationFilter = {
    every?: CoursWhereInput
    some?: CoursWhereInput
    none?: CoursWhereInput
  }

  export type CoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorialCountOrderByAggregateInput = {
    id?: SortOrder
    titreTuto?: SortOrder
    descriptionTuto?: SortOrder
    photo?: SortOrder
    formationId?: SortOrder
  }

  export type TutorialAvgOrderByAggregateInput = {
    id?: SortOrder
    formationId?: SortOrder
  }

  export type TutorialMaxOrderByAggregateInput = {
    id?: SortOrder
    titreTuto?: SortOrder
    descriptionTuto?: SortOrder
    photo?: SortOrder
    formationId?: SortOrder
  }

  export type TutorialMinOrderByAggregateInput = {
    id?: SortOrder
    titreTuto?: SortOrder
    descriptionTuto?: SortOrder
    photo?: SortOrder
    formationId?: SortOrder
  }

  export type TutorialSumOrderByAggregateInput = {
    id?: SortOrder
    formationId?: SortOrder
  }

  export type TutorialScalarRelationFilter = {
    is?: TutorialWhereInput
    isNot?: TutorialWhereInput
  }

  export type CoursCountOrderByAggregateInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
  }

  export type CoursAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type CoursMaxOrderByAggregateInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
  }

  export type CoursMinOrderByAggregateInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
  }

  export type CoursSumOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CertificatCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    apprenantId?: SortOrder
    tutorialId?: SortOrder
    dateObtention?: SortOrder
  }

  export type CertificatAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type CertificatMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    apprenantId?: SortOrder
    tutorialId?: SortOrder
    dateObtention?: SortOrder
  }

  export type CertificatMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    apprenantId?: SortOrder
    tutorialId?: SortOrder
    dateObtention?: SortOrder
  }

  export type CertificatSumOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type EnrollmentUserIdTutorialIdCompoundUniqueInput = {
    userId: string
    tutorialId: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    enrolledAt?: SortOrder
    progress?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
    progress?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    enrolledAt?: SortOrder
    progress?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    enrolledAt?: SortOrder
    progress?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
    progress?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CoursScalarRelationFilter = {
    is?: CoursWhereInput
    isNot?: CoursWhereInput
  }

  export type CoursProgressUserIdCoursIdCompoundUniqueInput = {
    userId: string
    coursId: number
  }

  export type CoursProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    completed?: SortOrder
    viewedAt?: SortOrder
  }

  export type CoursProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type CoursProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    completed?: SortOrder
    viewedAt?: SortOrder
  }

  export type CoursProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coursId?: SortOrder
    completed?: SortOrder
    viewedAt?: SortOrder
  }

  export type CoursProgressSumOrderByAggregateInput = {
    id?: SortOrder
    coursId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentaireAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    userId?: SortOrder
    tutorialId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentaireSumOrderByAggregateInput = {
    id?: SortOrder
    tutorialId?: SortOrder
  }

  export type CertificatCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CoursProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput> | CoursProgressCreateWithoutUserInput[] | CoursProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutUserInput | CoursProgressCreateOrConnectWithoutUserInput[]
    createMany?: CoursProgressCreateManyUserInputEnvelope
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type CertificatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CoursProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput> | CoursProgressCreateWithoutUserInput[] | CoursProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutUserInput | CoursProgressCreateOrConnectWithoutUserInput[]
    createMany?: CoursProgressCreateManyUserInputEnvelope
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CertificatUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    upsert?: CertificatUpsertWithWhereUniqueWithoutUserInput | CertificatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    set?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    disconnect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    delete?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    update?: CertificatUpdateWithWhereUniqueWithoutUserInput | CertificatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificatUpdateManyWithWhereWithoutUserInput | CertificatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CoursProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput> | CoursProgressCreateWithoutUserInput[] | CoursProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutUserInput | CoursProgressCreateOrConnectWithoutUserInput[]
    upsert?: CoursProgressUpsertWithWhereUniqueWithoutUserInput | CoursProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursProgressCreateManyUserInputEnvelope
    set?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    disconnect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    delete?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    update?: CoursProgressUpdateWithWhereUniqueWithoutUserInput | CoursProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursProgressUpdateManyWithWhereWithoutUserInput | CoursProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUserInput | CommentaireUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUserInput | CommentaireUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUserInput | CommentaireUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type CertificatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    upsert?: CertificatUpsertWithWhereUniqueWithoutUserInput | CertificatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    set?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    disconnect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    delete?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    update?: CertificatUpdateWithWhereUniqueWithoutUserInput | CertificatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificatUpdateManyWithWhereWithoutUserInput | CertificatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CoursProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput> | CoursProgressCreateWithoutUserInput[] | CoursProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutUserInput | CoursProgressCreateOrConnectWithoutUserInput[]
    upsert?: CoursProgressUpsertWithWhereUniqueWithoutUserInput | CoursProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursProgressCreateManyUserInputEnvelope
    set?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    disconnect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    delete?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    update?: CoursProgressUpdateWithWhereUniqueWithoutUserInput | CoursProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursProgressUpdateManyWithWhereWithoutUserInput | CoursProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput> | CommentaireCreateWithoutUserInput[] | CommentaireUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUserInput | CommentaireCreateOrConnectWithoutUserInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUserInput | CommentaireUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentaireCreateManyUserInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUserInput | CommentaireUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUserInput | CommentaireUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type TutorialCreateNestedManyWithoutFormationInput = {
    create?: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput> | TutorialCreateWithoutFormationInput[] | TutorialUncheckedCreateWithoutFormationInput[]
    connectOrCreate?: TutorialCreateOrConnectWithoutFormationInput | TutorialCreateOrConnectWithoutFormationInput[]
    createMany?: TutorialCreateManyFormationInputEnvelope
    connect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
  }

  export type TutorialUncheckedCreateNestedManyWithoutFormationInput = {
    create?: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput> | TutorialCreateWithoutFormationInput[] | TutorialUncheckedCreateWithoutFormationInput[]
    connectOrCreate?: TutorialCreateOrConnectWithoutFormationInput | TutorialCreateOrConnectWithoutFormationInput[]
    createMany?: TutorialCreateManyFormationInputEnvelope
    connect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
  }

  export type TutorialUpdateManyWithoutFormationNestedInput = {
    create?: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput> | TutorialCreateWithoutFormationInput[] | TutorialUncheckedCreateWithoutFormationInput[]
    connectOrCreate?: TutorialCreateOrConnectWithoutFormationInput | TutorialCreateOrConnectWithoutFormationInput[]
    upsert?: TutorialUpsertWithWhereUniqueWithoutFormationInput | TutorialUpsertWithWhereUniqueWithoutFormationInput[]
    createMany?: TutorialCreateManyFormationInputEnvelope
    set?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    disconnect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    delete?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    connect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    update?: TutorialUpdateWithWhereUniqueWithoutFormationInput | TutorialUpdateWithWhereUniqueWithoutFormationInput[]
    updateMany?: TutorialUpdateManyWithWhereWithoutFormationInput | TutorialUpdateManyWithWhereWithoutFormationInput[]
    deleteMany?: TutorialScalarWhereInput | TutorialScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorialUncheckedUpdateManyWithoutFormationNestedInput = {
    create?: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput> | TutorialCreateWithoutFormationInput[] | TutorialUncheckedCreateWithoutFormationInput[]
    connectOrCreate?: TutorialCreateOrConnectWithoutFormationInput | TutorialCreateOrConnectWithoutFormationInput[]
    upsert?: TutorialUpsertWithWhereUniqueWithoutFormationInput | TutorialUpsertWithWhereUniqueWithoutFormationInput[]
    createMany?: TutorialCreateManyFormationInputEnvelope
    set?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    disconnect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    delete?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    connect?: TutorialWhereUniqueInput | TutorialWhereUniqueInput[]
    update?: TutorialUpdateWithWhereUniqueWithoutFormationInput | TutorialUpdateWithWhereUniqueWithoutFormationInput[]
    updateMany?: TutorialUpdateManyWithWhereWithoutFormationInput | TutorialUpdateManyWithWhereWithoutFormationInput[]
    deleteMany?: TutorialScalarWhereInput | TutorialScalarWhereInput[]
  }

  export type FormationCreateNestedOneWithoutTutorialsInput = {
    create?: XOR<FormationCreateWithoutTutorialsInput, FormationUncheckedCreateWithoutTutorialsInput>
    connectOrCreate?: FormationCreateOrConnectWithoutTutorialsInput
    connect?: FormationWhereUniqueInput
  }

  export type CoursCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput> | CoursCreateWithoutTutorialInput[] | CoursUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutTutorialInput | CoursCreateOrConnectWithoutTutorialInput[]
    createMany?: CoursCreateManyTutorialInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CertificatCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput> | CertificatCreateWithoutTutorialInput[] | CertificatUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutTutorialInput | CertificatCreateOrConnectWithoutTutorialInput[]
    createMany?: CertificatCreateManyTutorialInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutTutorialInput = {
    create?: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput> | EnrollmentCreateWithoutTutorialInput[] | EnrollmentUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTutorialInput | EnrollmentCreateOrConnectWithoutTutorialInput[]
    createMany?: EnrollmentCreateManyTutorialInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput> | CommentaireCreateWithoutTutorialInput[] | CommentaireUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTutorialInput | CommentaireCreateOrConnectWithoutTutorialInput[]
    createMany?: CommentaireCreateManyTutorialInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type CoursUncheckedCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput> | CoursCreateWithoutTutorialInput[] | CoursUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutTutorialInput | CoursCreateOrConnectWithoutTutorialInput[]
    createMany?: CoursCreateManyTutorialInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CertificatUncheckedCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput> | CertificatCreateWithoutTutorialInput[] | CertificatUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutTutorialInput | CertificatCreateOrConnectWithoutTutorialInput[]
    createMany?: CertificatCreateManyTutorialInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutTutorialInput = {
    create?: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput> | EnrollmentCreateWithoutTutorialInput[] | EnrollmentUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTutorialInput | EnrollmentCreateOrConnectWithoutTutorialInput[]
    createMany?: EnrollmentCreateManyTutorialInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutTutorialInput = {
    create?: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput> | CommentaireCreateWithoutTutorialInput[] | CommentaireUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTutorialInput | CommentaireCreateOrConnectWithoutTutorialInput[]
    createMany?: CommentaireCreateManyTutorialInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type FormationUpdateOneRequiredWithoutTutorialsNestedInput = {
    create?: XOR<FormationCreateWithoutTutorialsInput, FormationUncheckedCreateWithoutTutorialsInput>
    connectOrCreate?: FormationCreateOrConnectWithoutTutorialsInput
    upsert?: FormationUpsertWithoutTutorialsInput
    connect?: FormationWhereUniqueInput
    update?: XOR<XOR<FormationUpdateToOneWithWhereWithoutTutorialsInput, FormationUpdateWithoutTutorialsInput>, FormationUncheckedUpdateWithoutTutorialsInput>
  }

  export type CoursUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput> | CoursCreateWithoutTutorialInput[] | CoursUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutTutorialInput | CoursCreateOrConnectWithoutTutorialInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutTutorialInput | CoursUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CoursCreateManyTutorialInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutTutorialInput | CoursUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutTutorialInput | CoursUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type CertificatUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput> | CertificatCreateWithoutTutorialInput[] | CertificatUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutTutorialInput | CertificatCreateOrConnectWithoutTutorialInput[]
    upsert?: CertificatUpsertWithWhereUniqueWithoutTutorialInput | CertificatUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CertificatCreateManyTutorialInputEnvelope
    set?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    disconnect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    delete?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    update?: CertificatUpdateWithWhereUniqueWithoutTutorialInput | CertificatUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CertificatUpdateManyWithWhereWithoutTutorialInput | CertificatUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput> | EnrollmentCreateWithoutTutorialInput[] | EnrollmentUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTutorialInput | EnrollmentCreateOrConnectWithoutTutorialInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutTutorialInput | EnrollmentUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: EnrollmentCreateManyTutorialInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutTutorialInput | EnrollmentUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutTutorialInput | EnrollmentUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput> | CommentaireCreateWithoutTutorialInput[] | CommentaireUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTutorialInput | CommentaireCreateOrConnectWithoutTutorialInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutTutorialInput | CommentaireUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CommentaireCreateManyTutorialInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutTutorialInput | CommentaireUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutTutorialInput | CommentaireUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type CoursUncheckedUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput> | CoursCreateWithoutTutorialInput[] | CoursUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutTutorialInput | CoursCreateOrConnectWithoutTutorialInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutTutorialInput | CoursUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CoursCreateManyTutorialInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutTutorialInput | CoursUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutTutorialInput | CoursUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type CertificatUncheckedUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput> | CertificatCreateWithoutTutorialInput[] | CertificatUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutTutorialInput | CertificatCreateOrConnectWithoutTutorialInput[]
    upsert?: CertificatUpsertWithWhereUniqueWithoutTutorialInput | CertificatUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CertificatCreateManyTutorialInputEnvelope
    set?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    disconnect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    delete?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
    update?: CertificatUpdateWithWhereUniqueWithoutTutorialInput | CertificatUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CertificatUpdateManyWithWhereWithoutTutorialInput | CertificatUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput> | EnrollmentCreateWithoutTutorialInput[] | EnrollmentUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTutorialInput | EnrollmentCreateOrConnectWithoutTutorialInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutTutorialInput | EnrollmentUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: EnrollmentCreateManyTutorialInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutTutorialInput | EnrollmentUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutTutorialInput | EnrollmentUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutTutorialNestedInput = {
    create?: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput> | CommentaireCreateWithoutTutorialInput[] | CommentaireUncheckedCreateWithoutTutorialInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutTutorialInput | CommentaireCreateOrConnectWithoutTutorialInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutTutorialInput | CommentaireUpsertWithWhereUniqueWithoutTutorialInput[]
    createMany?: CommentaireCreateManyTutorialInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutTutorialInput | CommentaireUpdateWithWhereUniqueWithoutTutorialInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutTutorialInput | CommentaireUpdateManyWithWhereWithoutTutorialInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type TutorialCreateNestedOneWithoutCoursInput = {
    create?: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCoursInput
    connect?: TutorialWhereUniqueInput
  }

  export type CoursProgressCreateNestedManyWithoutCoursInput = {
    create?: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput> | CoursProgressCreateWithoutCoursInput[] | CoursProgressUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutCoursInput | CoursProgressCreateOrConnectWithoutCoursInput[]
    createMany?: CoursProgressCreateManyCoursInputEnvelope
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
  }

  export type CoursProgressUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput> | CoursProgressCreateWithoutCoursInput[] | CoursProgressUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutCoursInput | CoursProgressCreateOrConnectWithoutCoursInput[]
    createMany?: CoursProgressCreateManyCoursInputEnvelope
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
  }

  export type TutorialUpdateOneRequiredWithoutCoursNestedInput = {
    create?: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCoursInput
    upsert?: TutorialUpsertWithoutCoursInput
    connect?: TutorialWhereUniqueInput
    update?: XOR<XOR<TutorialUpdateToOneWithWhereWithoutCoursInput, TutorialUpdateWithoutCoursInput>, TutorialUncheckedUpdateWithoutCoursInput>
  }

  export type CoursProgressUpdateManyWithoutCoursNestedInput = {
    create?: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput> | CoursProgressCreateWithoutCoursInput[] | CoursProgressUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutCoursInput | CoursProgressCreateOrConnectWithoutCoursInput[]
    upsert?: CoursProgressUpsertWithWhereUniqueWithoutCoursInput | CoursProgressUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: CoursProgressCreateManyCoursInputEnvelope
    set?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    disconnect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    delete?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    update?: CoursProgressUpdateWithWhereUniqueWithoutCoursInput | CoursProgressUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: CoursProgressUpdateManyWithWhereWithoutCoursInput | CoursProgressUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
  }

  export type CoursProgressUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput> | CoursProgressCreateWithoutCoursInput[] | CoursProgressUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: CoursProgressCreateOrConnectWithoutCoursInput | CoursProgressCreateOrConnectWithoutCoursInput[]
    upsert?: CoursProgressUpsertWithWhereUniqueWithoutCoursInput | CoursProgressUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: CoursProgressCreateManyCoursInputEnvelope
    set?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    disconnect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    delete?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    connect?: CoursProgressWhereUniqueInput | CoursProgressWhereUniqueInput[]
    update?: CoursProgressUpdateWithWhereUniqueWithoutCoursInput | CoursProgressUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: CoursProgressUpdateManyWithWhereWithoutCoursInput | CoursProgressUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCertificatsInput = {
    create?: XOR<UserCreateWithoutCertificatsInput, UserUncheckedCreateWithoutCertificatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatsInput
    connect?: UserWhereUniqueInput
  }

  export type TutorialCreateNestedOneWithoutCertificatsInput = {
    create?: XOR<TutorialCreateWithoutCertificatsInput, TutorialUncheckedCreateWithoutCertificatsInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCertificatsInput
    connect?: TutorialWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatsNestedInput = {
    create?: XOR<UserCreateWithoutCertificatsInput, UserUncheckedCreateWithoutCertificatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatsInput
    upsert?: UserUpsertWithoutCertificatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatsInput, UserUpdateWithoutCertificatsInput>, UserUncheckedUpdateWithoutCertificatsInput>
  }

  export type TutorialUpdateOneRequiredWithoutCertificatsNestedInput = {
    create?: XOR<TutorialCreateWithoutCertificatsInput, TutorialUncheckedCreateWithoutCertificatsInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCertificatsInput
    upsert?: TutorialUpsertWithoutCertificatsInput
    connect?: TutorialWhereUniqueInput
    update?: XOR<XOR<TutorialUpdateToOneWithWhereWithoutCertificatsInput, TutorialUpdateWithoutCertificatsInput>, TutorialUncheckedUpdateWithoutCertificatsInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TutorialCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<TutorialCreateWithoutEnrollmentsInput, TutorialUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutEnrollmentsInput
    connect?: TutorialWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type TutorialUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<TutorialCreateWithoutEnrollmentsInput, TutorialUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutEnrollmentsInput
    upsert?: TutorialUpsertWithoutEnrollmentsInput
    connect?: TutorialWhereUniqueInput
    update?: XOR<XOR<TutorialUpdateToOneWithWhereWithoutEnrollmentsInput, TutorialUpdateWithoutEnrollmentsInput>, TutorialUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutCoursProgressesInput = {
    create?: XOR<UserCreateWithoutCoursProgressesInput, UserUncheckedCreateWithoutCoursProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursProgressesInput
    connect?: UserWhereUniqueInput
  }

  export type CoursCreateNestedOneWithoutCoursProgressesInput = {
    create?: XOR<CoursCreateWithoutCoursProgressesInput, CoursUncheckedCreateWithoutCoursProgressesInput>
    connectOrCreate?: CoursCreateOrConnectWithoutCoursProgressesInput
    connect?: CoursWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCoursProgressesNestedInput = {
    create?: XOR<UserCreateWithoutCoursProgressesInput, UserUncheckedCreateWithoutCoursProgressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursProgressesInput
    upsert?: UserUpsertWithoutCoursProgressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursProgressesInput, UserUpdateWithoutCoursProgressesInput>, UserUncheckedUpdateWithoutCoursProgressesInput>
  }

  export type CoursUpdateOneRequiredWithoutCoursProgressesNestedInput = {
    create?: XOR<CoursCreateWithoutCoursProgressesInput, CoursUncheckedCreateWithoutCoursProgressesInput>
    connectOrCreate?: CoursCreateOrConnectWithoutCoursProgressesInput
    upsert?: CoursUpsertWithoutCoursProgressesInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutCoursProgressesInput, CoursUpdateWithoutCoursProgressesInput>, CoursUncheckedUpdateWithoutCoursProgressesInput>
  }

  export type UserCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentairesInput
    connect?: UserWhereUniqueInput
  }

  export type TutorialCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<TutorialCreateWithoutCommentairesInput, TutorialUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCommentairesInput
    connect?: TutorialWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentairesInput
    upsert?: UserUpsertWithoutCommentairesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentairesInput, UserUpdateWithoutCommentairesInput>, UserUncheckedUpdateWithoutCommentairesInput>
  }

  export type TutorialUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<TutorialCreateWithoutCommentairesInput, TutorialUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCommentairesInput
    upsert?: TutorialUpsertWithoutCommentairesInput
    connect?: TutorialWhereUniqueInput
    update?: XOR<XOR<TutorialUpdateToOneWithWhereWithoutCommentairesInput, TutorialUpdateWithoutCommentairesInput>, TutorialUncheckedUpdateWithoutCommentairesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CertificatCreateWithoutUserInput = {
    titre: string
    dateObtention?: Date | string
    tutorial: TutorialCreateNestedOneWithoutCertificatsInput
  }

  export type CertificatUncheckedCreateWithoutUserInput = {
    id?: number
    titre: string
    tutorialId: number
    dateObtention?: Date | string
  }

  export type CertificatCreateOrConnectWithoutUserInput = {
    where: CertificatWhereUniqueInput
    create: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput>
  }

  export type CertificatCreateManyUserInputEnvelope = {
    data: CertificatCreateManyUserInput | CertificatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    enrolledAt?: Date | string
    progress?: number
    tutorial: TutorialCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: number
    tutorialId: number
    enrolledAt?: Date | string
    progress?: number
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoursProgressCreateWithoutUserInput = {
    completed?: boolean
    viewedAt?: Date | string
    cours: CoursCreateNestedOneWithoutCoursProgressesInput
  }

  export type CoursProgressUncheckedCreateWithoutUserInput = {
    id?: number
    coursId: number
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CoursProgressCreateOrConnectWithoutUserInput = {
    where: CoursProgressWhereUniqueInput
    create: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput>
  }

  export type CoursProgressCreateManyUserInputEnvelope = {
    data: CoursProgressCreateManyUserInput | CoursProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutUserInput = {
    contenu: string
    createdAt?: Date | string
    tutorial: TutorialCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutUserInput = {
    id?: number
    contenu: string
    tutorialId: number
    createdAt?: Date | string
  }

  export type CommentaireCreateOrConnectWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput>
  }

  export type CommentaireCreateManyUserInputEnvelope = {
    data: CommentaireCreateManyUserInput | CommentaireCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificatUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificatWhereUniqueInput
    update: XOR<CertificatUpdateWithoutUserInput, CertificatUncheckedUpdateWithoutUserInput>
    create: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput>
  }

  export type CertificatUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificatWhereUniqueInput
    data: XOR<CertificatUpdateWithoutUserInput, CertificatUncheckedUpdateWithoutUserInput>
  }

  export type CertificatUpdateManyWithWhereWithoutUserInput = {
    where: CertificatScalarWhereInput
    data: XOR<CertificatUpdateManyMutationInput, CertificatUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificatScalarWhereInput = {
    AND?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
    OR?: CertificatScalarWhereInput[]
    NOT?: CertificatScalarWhereInput | CertificatScalarWhereInput[]
    id?: IntFilter<"Certificat"> | number
    titre?: StringFilter<"Certificat"> | string
    apprenantId?: UuidFilter<"Certificat"> | string
    tutorialId?: IntFilter<"Certificat"> | number
    dateObtention?: DateTimeFilter<"Certificat"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    userId?: UuidFilter<"Enrollment"> | string
    tutorialId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    progress?: IntFilter<"Enrollment"> | number
  }

  export type CoursProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursProgressWhereUniqueInput
    update: XOR<CoursProgressUpdateWithoutUserInput, CoursProgressUncheckedUpdateWithoutUserInput>
    create: XOR<CoursProgressCreateWithoutUserInput, CoursProgressUncheckedCreateWithoutUserInput>
  }

  export type CoursProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursProgressWhereUniqueInput
    data: XOR<CoursProgressUpdateWithoutUserInput, CoursProgressUncheckedUpdateWithoutUserInput>
  }

  export type CoursProgressUpdateManyWithWhereWithoutUserInput = {
    where: CoursProgressScalarWhereInput
    data: XOR<CoursProgressUpdateManyMutationInput, CoursProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursProgressScalarWhereInput = {
    AND?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
    OR?: CoursProgressScalarWhereInput[]
    NOT?: CoursProgressScalarWhereInput | CoursProgressScalarWhereInput[]
    id?: IntFilter<"CoursProgress"> | number
    userId?: UuidFilter<"CoursProgress"> | string
    coursId?: IntFilter<"CoursProgress"> | number
    completed?: BoolFilter<"CoursProgress"> | boolean
    viewedAt?: DateTimeFilter<"CoursProgress"> | Date | string
  }

  export type CommentaireUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutUserInput, CommentaireUncheckedUpdateWithoutUserInput>
    create: XOR<CommentaireCreateWithoutUserInput, CommentaireUncheckedCreateWithoutUserInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutUserInput, CommentaireUncheckedUpdateWithoutUserInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutUserInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    contenu?: StringFilter<"Commentaire"> | string
    userId?: UuidFilter<"Commentaire"> | string
    tutorialId?: IntFilter<"Commentaire"> | number
    createdAt?: DateTimeFilter<"Commentaire"> | Date | string
  }

  export type TutorialCreateWithoutFormationInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    cours?: CoursCreateNestedManyWithoutTutorialInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutFormationInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutFormationInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput>
  }

  export type TutorialCreateManyFormationInputEnvelope = {
    data: TutorialCreateManyFormationInput | TutorialCreateManyFormationInput[]
    skipDuplicates?: boolean
  }

  export type TutorialUpsertWithWhereUniqueWithoutFormationInput = {
    where: TutorialWhereUniqueInput
    update: XOR<TutorialUpdateWithoutFormationInput, TutorialUncheckedUpdateWithoutFormationInput>
    create: XOR<TutorialCreateWithoutFormationInput, TutorialUncheckedCreateWithoutFormationInput>
  }

  export type TutorialUpdateWithWhereUniqueWithoutFormationInput = {
    where: TutorialWhereUniqueInput
    data: XOR<TutorialUpdateWithoutFormationInput, TutorialUncheckedUpdateWithoutFormationInput>
  }

  export type TutorialUpdateManyWithWhereWithoutFormationInput = {
    where: TutorialScalarWhereInput
    data: XOR<TutorialUpdateManyMutationInput, TutorialUncheckedUpdateManyWithoutFormationInput>
  }

  export type TutorialScalarWhereInput = {
    AND?: TutorialScalarWhereInput | TutorialScalarWhereInput[]
    OR?: TutorialScalarWhereInput[]
    NOT?: TutorialScalarWhereInput | TutorialScalarWhereInput[]
    id?: IntFilter<"Tutorial"> | number
    titreTuto?: StringFilter<"Tutorial"> | string
    descriptionTuto?: StringFilter<"Tutorial"> | string
    photo?: StringFilter<"Tutorial"> | string
    formationId?: IntFilter<"Tutorial"> | number
  }

  export type FormationCreateWithoutTutorialsInput = {
    nomFormation: string
    description: string
    photo: string
  }

  export type FormationUncheckedCreateWithoutTutorialsInput = {
    id?: number
    nomFormation: string
    description: string
    photo: string
  }

  export type FormationCreateOrConnectWithoutTutorialsInput = {
    where: FormationWhereUniqueInput
    create: XOR<FormationCreateWithoutTutorialsInput, FormationUncheckedCreateWithoutTutorialsInput>
  }

  export type CoursCreateWithoutTutorialInput = {
    titreCours: string
    content: string
    photo: string
    coursProgresses?: CoursProgressCreateNestedManyWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutTutorialInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutTutorialInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput>
  }

  export type CoursCreateManyTutorialInputEnvelope = {
    data: CoursCreateManyTutorialInput | CoursCreateManyTutorialInput[]
    skipDuplicates?: boolean
  }

  export type CertificatCreateWithoutTutorialInput = {
    titre: string
    dateObtention?: Date | string
    user: UserCreateNestedOneWithoutCertificatsInput
  }

  export type CertificatUncheckedCreateWithoutTutorialInput = {
    id?: number
    titre: string
    apprenantId: string
    dateObtention?: Date | string
  }

  export type CertificatCreateOrConnectWithoutTutorialInput = {
    where: CertificatWhereUniqueInput
    create: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput>
  }

  export type CertificatCreateManyTutorialInputEnvelope = {
    data: CertificatCreateManyTutorialInput | CertificatCreateManyTutorialInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutTutorialInput = {
    enrolledAt?: Date | string
    progress?: number
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutTutorialInput = {
    id?: number
    userId: string
    enrolledAt?: Date | string
    progress?: number
  }

  export type EnrollmentCreateOrConnectWithoutTutorialInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput>
  }

  export type EnrollmentCreateManyTutorialInputEnvelope = {
    data: EnrollmentCreateManyTutorialInput | EnrollmentCreateManyTutorialInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutTutorialInput = {
    contenu: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutTutorialInput = {
    id?: number
    contenu: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentaireCreateOrConnectWithoutTutorialInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput>
  }

  export type CommentaireCreateManyTutorialInputEnvelope = {
    data: CommentaireCreateManyTutorialInput | CommentaireCreateManyTutorialInput[]
    skipDuplicates?: boolean
  }

  export type FormationUpsertWithoutTutorialsInput = {
    update: XOR<FormationUpdateWithoutTutorialsInput, FormationUncheckedUpdateWithoutTutorialsInput>
    create: XOR<FormationCreateWithoutTutorialsInput, FormationUncheckedCreateWithoutTutorialsInput>
    where?: FormationWhereInput
  }

  export type FormationUpdateToOneWithWhereWithoutTutorialsInput = {
    where?: FormationWhereInput
    data: XOR<FormationUpdateWithoutTutorialsInput, FormationUncheckedUpdateWithoutTutorialsInput>
  }

  export type FormationUpdateWithoutTutorialsInput = {
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type FormationUncheckedUpdateWithoutTutorialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomFormation?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type CoursUpsertWithWhereUniqueWithoutTutorialInput = {
    where: CoursWhereUniqueInput
    update: XOR<CoursUpdateWithoutTutorialInput, CoursUncheckedUpdateWithoutTutorialInput>
    create: XOR<CoursCreateWithoutTutorialInput, CoursUncheckedCreateWithoutTutorialInput>
  }

  export type CoursUpdateWithWhereUniqueWithoutTutorialInput = {
    where: CoursWhereUniqueInput
    data: XOR<CoursUpdateWithoutTutorialInput, CoursUncheckedUpdateWithoutTutorialInput>
  }

  export type CoursUpdateManyWithWhereWithoutTutorialInput = {
    where: CoursScalarWhereInput
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyWithoutTutorialInput>
  }

  export type CoursScalarWhereInput = {
    AND?: CoursScalarWhereInput | CoursScalarWhereInput[]
    OR?: CoursScalarWhereInput[]
    NOT?: CoursScalarWhereInput | CoursScalarWhereInput[]
    id?: IntFilter<"Cours"> | number
    titreCours?: StringFilter<"Cours"> | string
    content?: StringFilter<"Cours"> | string
    photo?: StringFilter<"Cours"> | string
    tutorialId?: IntFilter<"Cours"> | number
  }

  export type CertificatUpsertWithWhereUniqueWithoutTutorialInput = {
    where: CertificatWhereUniqueInput
    update: XOR<CertificatUpdateWithoutTutorialInput, CertificatUncheckedUpdateWithoutTutorialInput>
    create: XOR<CertificatCreateWithoutTutorialInput, CertificatUncheckedCreateWithoutTutorialInput>
  }

  export type CertificatUpdateWithWhereUniqueWithoutTutorialInput = {
    where: CertificatWhereUniqueInput
    data: XOR<CertificatUpdateWithoutTutorialInput, CertificatUncheckedUpdateWithoutTutorialInput>
  }

  export type CertificatUpdateManyWithWhereWithoutTutorialInput = {
    where: CertificatScalarWhereInput
    data: XOR<CertificatUpdateManyMutationInput, CertificatUncheckedUpdateManyWithoutTutorialInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutTutorialInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutTutorialInput, EnrollmentUncheckedUpdateWithoutTutorialInput>
    create: XOR<EnrollmentCreateWithoutTutorialInput, EnrollmentUncheckedCreateWithoutTutorialInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutTutorialInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutTutorialInput, EnrollmentUncheckedUpdateWithoutTutorialInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutTutorialInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutTutorialInput>
  }

  export type CommentaireUpsertWithWhereUniqueWithoutTutorialInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutTutorialInput, CommentaireUncheckedUpdateWithoutTutorialInput>
    create: XOR<CommentaireCreateWithoutTutorialInput, CommentaireUncheckedCreateWithoutTutorialInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutTutorialInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutTutorialInput, CommentaireUncheckedUpdateWithoutTutorialInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutTutorialInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutTutorialInput>
  }

  export type TutorialCreateWithoutCoursInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutCoursInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutCoursInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
  }

  export type CoursProgressCreateWithoutCoursInput = {
    completed?: boolean
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursProgressesInput
  }

  export type CoursProgressUncheckedCreateWithoutCoursInput = {
    id?: number
    userId: string
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CoursProgressCreateOrConnectWithoutCoursInput = {
    where: CoursProgressWhereUniqueInput
    create: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput>
  }

  export type CoursProgressCreateManyCoursInputEnvelope = {
    data: CoursProgressCreateManyCoursInput | CoursProgressCreateManyCoursInput[]
    skipDuplicates?: boolean
  }

  export type TutorialUpsertWithoutCoursInput = {
    update: XOR<TutorialUpdateWithoutCoursInput, TutorialUncheckedUpdateWithoutCoursInput>
    create: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
    where?: TutorialWhereInput
  }

  export type TutorialUpdateToOneWithWhereWithoutCoursInput = {
    where?: TutorialWhereInput
    data: XOR<TutorialUpdateWithoutCoursInput, TutorialUncheckedUpdateWithoutCoursInput>
  }

  export type TutorialUpdateWithoutCoursInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type CoursProgressUpsertWithWhereUniqueWithoutCoursInput = {
    where: CoursProgressWhereUniqueInput
    update: XOR<CoursProgressUpdateWithoutCoursInput, CoursProgressUncheckedUpdateWithoutCoursInput>
    create: XOR<CoursProgressCreateWithoutCoursInput, CoursProgressUncheckedCreateWithoutCoursInput>
  }

  export type CoursProgressUpdateWithWhereUniqueWithoutCoursInput = {
    where: CoursProgressWhereUniqueInput
    data: XOR<CoursProgressUpdateWithoutCoursInput, CoursProgressUncheckedUpdateWithoutCoursInput>
  }

  export type CoursProgressUpdateManyWithWhereWithoutCoursInput = {
    where: CoursProgressScalarWhereInput
    data: XOR<CoursProgressUpdateManyMutationInput, CoursProgressUncheckedUpdateManyWithoutCoursInput>
  }

  export type UserCreateWithoutCertificatsInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatsInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatsInput, UserUncheckedCreateWithoutCertificatsInput>
  }

  export type TutorialCreateWithoutCertificatsInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    cours?: CoursCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutCertificatsInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutCertificatsInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutCertificatsInput, TutorialUncheckedCreateWithoutCertificatsInput>
  }

  export type UserUpsertWithoutCertificatsInput = {
    update: XOR<UserUpdateWithoutCertificatsInput, UserUncheckedUpdateWithoutCertificatsInput>
    create: XOR<UserCreateWithoutCertificatsInput, UserUncheckedCreateWithoutCertificatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatsInput, UserUncheckedUpdateWithoutCertificatsInput>
  }

  export type UserUpdateWithoutCertificatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TutorialUpsertWithoutCertificatsInput = {
    update: XOR<TutorialUpdateWithoutCertificatsInput, TutorialUncheckedUpdateWithoutCertificatsInput>
    create: XOR<TutorialCreateWithoutCertificatsInput, TutorialUncheckedCreateWithoutCertificatsInput>
    where?: TutorialWhereInput
  }

  export type TutorialUpdateToOneWithWhereWithoutCertificatsInput = {
    where?: TutorialWhereInput
    data: XOR<TutorialUpdateWithoutCertificatsInput, TutorialUncheckedUpdateWithoutCertificatsInput>
  }

  export type TutorialUpdateWithoutCertificatsInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateWithoutCertificatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatUncheckedCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type TutorialCreateWithoutEnrollmentsInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    cours?: CoursCreateNestedManyWithoutTutorialInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutEnrollmentsInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutEnrollmentsInput, TutorialUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUncheckedUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TutorialUpsertWithoutEnrollmentsInput = {
    update: XOR<TutorialUpdateWithoutEnrollmentsInput, TutorialUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<TutorialCreateWithoutEnrollmentsInput, TutorialUncheckedCreateWithoutEnrollmentsInput>
    where?: TutorialWhereInput
  }

  export type TutorialUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: TutorialWhereInput
    data: XOR<TutorialUpdateWithoutEnrollmentsInput, TutorialUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type TutorialUpdateWithoutEnrollmentsInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type UserCreateWithoutCoursProgressesInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    commentaires?: CommentaireCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursProgressesInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursProgressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursProgressesInput, UserUncheckedCreateWithoutCoursProgressesInput>
  }

  export type CoursCreateWithoutCoursProgressesInput = {
    titreCours: string
    content: string
    photo: string
    tutorial: TutorialCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutCoursProgressesInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
    tutorialId: number
  }

  export type CoursCreateOrConnectWithoutCoursProgressesInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutCoursProgressesInput, CoursUncheckedCreateWithoutCoursProgressesInput>
  }

  export type UserUpsertWithoutCoursProgressesInput = {
    update: XOR<UserUpdateWithoutCoursProgressesInput, UserUncheckedUpdateWithoutCoursProgressesInput>
    create: XOR<UserCreateWithoutCoursProgressesInput, UserUncheckedCreateWithoutCoursProgressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursProgressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursProgressesInput, UserUncheckedUpdateWithoutCoursProgressesInput>
  }

  export type UserUpdateWithoutCoursProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoursUpsertWithoutCoursProgressesInput = {
    update: XOR<CoursUpdateWithoutCoursProgressesInput, CoursUncheckedUpdateWithoutCoursProgressesInput>
    create: XOR<CoursCreateWithoutCoursProgressesInput, CoursUncheckedCreateWithoutCoursProgressesInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutCoursProgressesInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutCoursProgressesInput, CoursUncheckedUpdateWithoutCoursProgressesInput>
  }

  export type CoursUpdateWithoutCoursProgressesInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorial?: TutorialUpdateOneRequiredWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutCoursProgressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCommentairesInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentairesInput = {
    id?: string
    nom: string
    prenom: string
    avatar?: string | null
    bio?: string | null
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    coursProgresses?: CoursProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentairesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
  }

  export type TutorialCreateWithoutCommentairesInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    cours?: CoursCreateNestedManyWithoutTutorialInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutCommentairesInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutCommentairesInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutCommentairesInput, TutorialUncheckedCreateWithoutCommentairesInput>
  }

  export type UserUpsertWithoutCommentairesInput = {
    update: XOR<UserUpdateWithoutCommentairesInput, UserUncheckedUpdateWithoutCommentairesInput>
    create: XOR<UserCreateWithoutCommentairesInput, UserUncheckedCreateWithoutCommentairesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentairesInput, UserUncheckedUpdateWithoutCommentairesInput>
  }

  export type UserUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentairesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TutorialUpsertWithoutCommentairesInput = {
    update: XOR<TutorialUpdateWithoutCommentairesInput, TutorialUncheckedUpdateWithoutCommentairesInput>
    create: XOR<TutorialCreateWithoutCommentairesInput, TutorialUncheckedCreateWithoutCommentairesInput>
    where?: TutorialWhereInput
  }

  export type TutorialUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: TutorialWhereInput
    data: XOR<TutorialUpdateWithoutCommentairesInput, TutorialUncheckedUpdateWithoutCommentairesInput>
  }

  export type TutorialUpdateWithoutCommentairesInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateWithoutCommentairesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type CertificatCreateManyUserInput = {
    id?: number
    titre: string
    tutorialId: number
    dateObtention?: Date | string
  }

  export type EnrollmentCreateManyUserInput = {
    id?: number
    tutorialId: number
    enrolledAt?: Date | string
    progress?: number
  }

  export type CoursProgressCreateManyUserInput = {
    id?: number
    coursId: number
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CommentaireCreateManyUserInput = {
    id?: number
    contenu: string
    tutorialId: number
    createdAt?: Date | string
  }

  export type CertificatUpdateWithoutUserInput = {
    titre?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorial?: TutorialUpdateOneRequiredWithoutCertificatsNestedInput
  }

  export type CertificatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    tutorial?: TutorialUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorialId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorialId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CoursProgressUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateOneRequiredWithoutCoursProgressesNestedInput
  }

  export type CoursProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUpdateWithoutUserInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorial?: TutorialUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorialCreateManyFormationInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
  }

  export type TutorialUpdateWithoutFormationInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateWithoutFormationInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutTutorialNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateManyWithoutFormationInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type CoursCreateManyTutorialInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
  }

  export type CertificatCreateManyTutorialInput = {
    id?: number
    titre: string
    apprenantId: string
    dateObtention?: Date | string
  }

  export type EnrollmentCreateManyTutorialInput = {
    id?: number
    userId: string
    enrolledAt?: Date | string
    progress?: number
  }

  export type CommentaireCreateManyTutorialInput = {
    id?: number
    contenu: string
    userId: string
    createdAt?: Date | string
  }

  export type CoursUpdateWithoutTutorialInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coursProgresses?: CoursProgressUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coursProgresses?: CoursProgressUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateManyWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type CertificatUpdateWithoutTutorialInput = {
    titre?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatsNestedInput
  }

  export type CertificatUncheckedUpdateWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    apprenantId?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificatUncheckedUpdateManyWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    apprenantId?: StringFieldUpdateOperationsInput | string
    dateObtention?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutTutorialInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireUpdateWithoutTutorialInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursProgressCreateManyCoursInput = {
    id?: number
    userId: string
    completed?: boolean
    viewedAt?: Date | string
  }

  export type CoursProgressUpdateWithoutCoursInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursProgressesNestedInput
  }

  export type CoursProgressUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursProgressUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}