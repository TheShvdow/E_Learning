
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
    Certificat: 'Certificat'
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
      modelProps: "user" | "formation" | "tutorial" | "cours" | "certificat"
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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificats?: boolean | UserCountOutputTypeCountCertificatsArgs
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
  }

  export type TutorialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | TutorialCountOutputTypeCountCoursArgs
    certificats?: boolean | TutorialCountOutputTypeCountCertificatsArgs
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    certificats?: boolean | User$certificatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "username" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificats?: boolean | User$certificatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      certificats: Prisma.$CertificatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    certificats?: CertificatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    certificats?: CertificatOrderByRelationAggregateInput
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
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    certificats?: CertificatListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
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
  }

  export type CoursOrderByWithRelationInput = {
    id?: SortOrder
    titreCours?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    tutorialId?: SortOrder
    tutorial?: TutorialOrderByWithRelationInput
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

  export type UserCreateInput = {
    id?: string
    nom: string
    prenom: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    certificats?: CertificatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificats?: CertificatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nom: string
    prenom: string
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
  }

  export type TutorialUncheckedCreateInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUpdateInput = {
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formation?: FormationUpdateOneRequiredWithoutTutorialsNestedInput
    cours?: CoursUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUpdateManyWithoutTutorialNestedInput
  }

  export type TutorialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
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
  }

  export type CoursUncheckedCreateInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
    tutorialId: number
  }

  export type CoursUpdateInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorial?: TutorialUpdateOneRequiredWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    tutorialId?: IntFieldUpdateOperationsInput | number
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

  export type CertificatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
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

  export type CertificatCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type CertificatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificatCreateWithoutUserInput, CertificatUncheckedCreateWithoutUserInput> | CertificatCreateWithoutUserInput[] | CertificatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificatCreateOrConnectWithoutUserInput | CertificatCreateOrConnectWithoutUserInput[]
    createMany?: CertificatCreateManyUserInputEnvelope
    connect?: CertificatWhereUniqueInput | CertificatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type TutorialCreateNestedOneWithoutCoursInput = {
    create?: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCoursInput
    connect?: TutorialWhereUniqueInput
  }

  export type TutorialUpdateOneRequiredWithoutCoursNestedInput = {
    create?: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
    connectOrCreate?: TutorialCreateOrConnectWithoutCoursInput
    upsert?: TutorialUpsertWithoutCoursInput
    connect?: TutorialWhereUniqueInput
    update?: XOR<XOR<TutorialUpdateToOneWithWhereWithoutCoursInput, TutorialUpdateWithoutCoursInput>, TutorialUncheckedUpdateWithoutCoursInput>
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

  export type TutorialCreateWithoutFormationInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    cours?: CoursCreateNestedManyWithoutTutorialInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutFormationInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
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
  }

  export type CoursUncheckedCreateWithoutTutorialInput = {
    id?: number
    titreCours: string
    content: string
    photo: string
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

  export type TutorialCreateWithoutCoursInput = {
    titreTuto: string
    descriptionTuto: string
    photo: string
    formation: FormationCreateNestedOneWithoutTutorialsInput
    certificats?: CertificatCreateNestedManyWithoutTutorialInput
  }

  export type TutorialUncheckedCreateWithoutCoursInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    certificats?: CertificatUncheckedCreateNestedManyWithoutTutorialInput
  }

  export type TutorialCreateOrConnectWithoutCoursInput = {
    where: TutorialWhereUniqueInput
    create: XOR<TutorialCreateWithoutCoursInput, TutorialUncheckedCreateWithoutCoursInput>
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
  }

  export type TutorialUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type UserCreateWithoutCertificatsInput = {
    id?: string
    nom: string
    prenom: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCertificatsInput = {
    id?: string
    nom: string
    prenom: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
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
  }

  export type TutorialUncheckedCreateWithoutCertificatsInput = {
    id?: number
    titreTuto: string
    descriptionTuto: string
    photo: string
    formationId: number
    cours?: CoursUncheckedCreateNestedManyWithoutTutorialInput
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
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCertificatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type TutorialUncheckedUpdateWithoutCertificatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    formationId?: IntFieldUpdateOperationsInput | number
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
  }

  export type CertificatCreateManyUserInput = {
    id?: number
    titre: string
    tutorialId: number
    dateObtention?: Date | string
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
  }

  export type TutorialUncheckedUpdateWithoutFormationInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreTuto?: StringFieldUpdateOperationsInput | string
    descriptionTuto?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    cours?: CoursUncheckedUpdateManyWithoutTutorialNestedInput
    certificats?: CertificatUncheckedUpdateManyWithoutTutorialNestedInput
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

  export type CoursUpdateWithoutTutorialInput = {
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type CoursUncheckedUpdateWithoutTutorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    titreCours?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
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