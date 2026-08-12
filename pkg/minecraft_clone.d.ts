/* tslint:disable */
/* eslint-disable */

export function wasm_renderer(disable_webgpu: boolean): void;

export function wasm_start(): void;

export function wasm_update(): number;

export function wasm_update_with_message(id: number, message: Uint8Array): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly wasm_renderer: (a: number) => void;
    readonly wasm_start: () => void;
    readonly wasm_update: () => number;
    readonly wasm_update_with_message: (a: number, b: number, c: number) => number;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_e9a9d69d95dc72a___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___js_sys_f58b1d8c19b292fc___Array__web_sys_d881da6e64b59126___features__gen_ResizeObserver__ResizeObserver______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___sys__JsOption_wgpu_2ff0625bd2e06ed9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_e9a9d69d95dc72a___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___sys__JsOption_wgpu_2ff0625bd2e06ed9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_e9a9d69d95dc72a___JsError___true__11: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___sys__JsOption_wgpu_2ff0625bd2e06ed9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_e9a9d69d95dc72a___JsError___true__12: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke___wasm_bindgen_e9a9d69d95dc72a___JsValue______true__10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e9a9d69d95dc72a___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
