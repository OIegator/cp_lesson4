class MiniMaple{
    constructor(string, x){
        this.units = new Map()
		this.string = string
		this.x = x
		this.divide_into_units(this.string)
    }

	divide_into_units(str){
		let cur_sign = true
		let buff = ""
		for(let i = 0; i < str.length; i++) {
			switch (str[i]) {
				case '-':
					this.units.set(buff, cur_sign)
					buff = ""
					cur_sign = false
					break

				case '+':
					this.units.set(buff, cur_sign)
					buff = ""
					cur_sign = true
					break

				default:
					buff += str[i]
			}
		}
		this.units.set(buff, cur_sign)
	}

	calc() {
		let res = ""
		this.units.forEach((value, key) => {
			let num = 1
			let cur_res = ""
			let cur_num = ""
			let after_x = false
			let pow_x = 0
			let pow_any = false
			if(key.includes(this.x)) {
				for(let i = 0; i < key.length; i++) {
					switch(key[i]) {
						case this.x:
							after_x = true
							break
						case '^':
							if (after_x) pow_x = 1
							else {
								cur_res += "^"
								pow_any = true
							}
							break
						case '0':
						case '1':
						case '2':
						case '3':
						case '4':
						case '5':
						case '6':
						case '7':
						case '8':
						case '9':
							if (i !== key.length && !isNaN(key[i + 1]) ) {
								cur_num += key[i]
							} else if (pow_any) {
								cur_res += cur_num + key[i]
							} else {
								num *= Number(cur_num + key[i])
								if (pow_x) (Number(cur_num + key[i]) > 2) ?
									cur_res += "*" + this.x + "^" + (Number(cur_num + key[i]) - 1) :
									cur_res += "*" + this.x
								cur_num = ""
							}
							break
						default:
							after_x = false
							cur_res += key[i]

					}

				}
				if(!value) res += "-"
				else if(res !== "") res += "+"
				res += num + cur_res
			}

		})
		let validate = res.replace(/-1\*/g, "-")
						  .replace(/\+1\*/g, "-")
						  .replace(/\*\*/g, "*")
		return (validate.slice(-1) === "*") ? validate.slice(0, -1) : validate

	}
}

export {MiniMaple}