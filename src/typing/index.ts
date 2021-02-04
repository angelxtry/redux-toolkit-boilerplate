export interface IndexSignatureStringType<V> {
  [key: string]: V;
}

export type ValueType = string | number | symbol;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type EntityValueType<P> = P extends (infer R)[] ? string[] : string;

export type IEntityTypeOf<M> = {
  [k in keyof M]: M[k] extends ValueType ? M[k] : EntityValueType<M[k]>;
};
