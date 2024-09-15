function FazzFood(harga, voucher, jarak, pajak) {
    let diskon = 0;
    
    if (voucher === "FAZZFOOD50") {
        if (harga >= 50000) {
            diskon = Math.min(0.5 * harga, 50000);
        }
    } else if (voucher === "DITRAKTIR60") {
        if (harga >= 25000) {
            diskon = Math.min(0.6 * harga, 30000);
        }
    }
    
    
    let ongkir;
    if (jarak <= 2) {
        ongkir = 5000;
    } else {
        ongkir = 5000 + ((jarak - 2) * 3000);
    }
       
    let biayaPajak = pajak ? 0.05 * harga : 0;
      
    let subtotal = harga - diskon + ongkir + biayaPajak;
    
    // Cetak hasil
    console.log(`Harga          : ${harga}`);
    console.log(`Potongan       : ${diskon}`);
    console.log(`Ongkos Kirim   : ${ongkir}`);
    console.log(`Pajak          : ${biayaPajak}`);
    console.log(`SubTotal       : ${subtotal}`);
}


FazzFood(75000, 'FAZZFOOD50', 5, true)