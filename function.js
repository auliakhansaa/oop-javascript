function volumeBolaPejal(r){
    const hasil = 4/3*r;
    return hasil;
}

const vBP = volumeBolaPejal(7);
console.log(vBP);


class BangunRuang{
	constructor(nama, luasAlas, tinggi){
		this.nama=nama;
		this.luasAlas=luasAlas;
		this.tinggi=tinggi;
	}
	keteranganBangunRuang(){
		console.log(`Bangun ${this.nama} memiliki, luas Alas : ${this.luasAlas},
			memiliki tinggi : ${this.tinggi} 
			`)
	}

	hitungVolume(){
		const volume =this.luasAlas * this.tinggi;
		return volume;
	}

	cek(){
		this.#mCek();
		console.log(`${this.nama} adalah tipe bangun ruang loh`)
	}

	#mCek(){
		console.log('Bangun ruang adalah bangung yang memiliki ruang')
	}
}

const prisma = new BangunRuang("Prisma",10,30);

prisma.keteranganBangunRuang();
console.log(prisma.hitungVolume())



class Limas extends BangunRuang{
	constructor(nama, luasAlas, tinggi){
		super(nama, luasAlas, tinggi)

	}

	hitungVolume(){
		const hitungVolume=super.hitungVolume();
		const volume = hitungVolume/3;
		console.log(`volumenya ${volume}`)
	}

}

const limasSegiEmpat = new Limas("limas segi empat",10,30);

limasSegiEmpat.hitungVolume();
