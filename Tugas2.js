function reverseWord(kalimat) {
    //memecah kalimat menjadi array kata, membalikkan urutan array, dan menggabungkannya kembali menjadi string
    const kalter = kalimat.split(' ').reverse().join(' ');
    return kalter;
}

console.log(reverseWord('Saya Belajar Javascript')); 
console.log(reverseWord('Hello World'));            