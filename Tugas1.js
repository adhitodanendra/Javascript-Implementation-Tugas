function cekPalindrom(teks) {
    
    const teksBersih = teks.toLowerCase();
        
    const teksBalik = teksBersih.split('').reverse().join('');
    
    
    if (teksBersih === teksBalik) {
        return 'Palindrom';
    } else {
        return 'Bukan Palindrom';
    }
}


console.log(cekPalindrom('malam'));