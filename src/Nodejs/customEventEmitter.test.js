import { it, describe, expect, vi } from "vitest";
import Emitter from "./customEventEmitter.cjs";


describe('Custom Event Emitter', () => {
    it('should call all listeners with correct arguments', () => {
        const emitter = new Emitter();
        const spy = vi.fn();

        emitter.on('order', spy);
        emitter.emit('order', 'Pizza', 'Burger');

        expect(spy).toHaveBeenCalledWith('Pizza', 'Burger');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});