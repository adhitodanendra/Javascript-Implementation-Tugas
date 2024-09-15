function divideAndSort(angka) {
    
    //memisahkan deret angka
    const pisahAngka = angka.toString().split('0');
    
    //mengurutkan setiap bilangan yang terpisah
    const urutkanAngka = pisahAngka.map(num => {
        return num.split('').sort().join('');
    });
    
    //menggabungkan kembali angka yang sudah diurutkan menjadi satu deret angka
    const hasil = urutkanAngka.join('');
    
    //mengubah hasil gabungan menjadi angka kembali
    return parseInt(hasil, 10);
}


console.log(divideAndSort(5956560159466056)); 
