import { it, describe, expect } from 'vitest';
import { buffer } from "./buffers";
import { buffers_with_dataview, buffers_with_typed_array } from './buffers';

describe('Buffer Scenrio', () => {
    it('Buffer with dataview', () => {
        expect(buffers_with_dataview(buffer)).toEqual('Length : 10 - Data View : [object DataView] getInt8: 3 getInt32 327725 getInt32 83897600')
    })

    it('Buffer with typed array', () => {
        expect(buffers_with_typed_array(buffer)).toEqual('Length : 5 : TypedArray :255,128,45,0,0')
    })
})
