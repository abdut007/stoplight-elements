import { ReferenceResolver } from './ReferenceResolver';
interface CreateResolvedObjectOptions {
    contextObject?: object;
    resolver?: ReferenceResolver;
}
export declare const createResolvedObject: (currentObject: object, options?: CreateResolvedObjectOptions) => object;
export declare const isResolvedObjectProxy: (someObject: object) => boolean;
export declare const getOriginalObject: (resolvedObject: object) => object;
export declare const isReference: (obj: unknown) => obj is Record<string, unknown> & {
    $ref: string;
};
export {};
