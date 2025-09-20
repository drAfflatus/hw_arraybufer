export class ArrayBufferConverter {
  constructor(data_massive) {
    this.data_massive = data_massive;
    this.data_buffer = new Uint8Array(
      new ArrayBuffer(this.data_massive.length)
    );
    this.data_string = '';
  }

  load() {
    for (let i = 0; i < this.data_buffer.length; i++) {
      this.data_buffer[i] = this.data_massive.charCodeAt(i);
    }
    return this.data_buffer;
  }

  toString() {
    for (let i = 0; i < this.data_buffer.length; i++) {
      //console.log(i,this.data_buffer.length,this.data_buffer[i]);
      this.data_string += String.fromCharCode(this.data_buffer[i]);
    }
    return this.data_string;
  }
}
// function getBuffer() {
//   const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
//   return (input => {
//     const buffer = new ArrayBuffer(data.length * 2);
//     const bufferView = new Uint16Array(buffer);
//     for (let i = 0; i < input.length; i++) {
//       bufferView[i] = input.charCodeAt(i);
//     }
//     return buffer;
//   })(data);
// }
