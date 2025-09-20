import { ArrayBufferConverter } from '../ar_buf'

test('кодируем данные в коды ТС', () => {
    let data_massive = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    let data_buffer = new ArrayBufferConverter(data_massive);
    expect(Array.from(data_buffer.load())).toEqual([123, 34, 100, 97, 116, 97, 34, 58, 123, 34, 117, 115, 101, 114,
        34, 58, 123, 34, 105, 100, 34, 58, 49, 44, 34, 110, 97, 109, 101, 34, 58, 34, 72, 105, 116, 109,
        97, 110, 34, 44, 34, 108, 101, 118, 101, 108, 34, 58, 49, 48, 125, 125, 125]);
})

test('декодируем из кодов в строку', () => {
    let data_massive = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    let data_buffer = new ArrayBufferConverter(data_massive);
    data_buffer.load();
    expect(data_buffer.toString()).toEqual(data_massive);
})
