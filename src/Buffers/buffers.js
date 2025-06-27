export const buffer = new ArrayBuffer(10);
export function buffers_with_dataview(buffer) {
    const dataView = new DataView(buffer);
    // Byte-level control
    dataView.setInt8(0, 3);
    dataView.setInt32(1, 45);
    dataView.setUint16(2, 5, true)
    return `Length : ${dataView.byteLength} - Data View : ${dataView} getInt8: ${dataView.getInt8(0)} getInt32 ${dataView.getInt32(1)} getInt32 ${dataView.getUint32(2)}`
}
export function buffers_with_typed_array(buffer) {
    const typedArray = new Uint16Array(buffer);
    typedArray[0] = 255;
    typedArray[1] = 128;
    return `Length : ${typedArray.length} : TypedArray :${typedArray}`
}