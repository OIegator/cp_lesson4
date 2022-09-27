class MiniMaple{
    constructor(string, x){
        this.units = new Map()
		this.string = string
		this.x = x
		devide_into_units(this.string)
    }
	
	devide_into_units(str){
		let csign = true
		let buff = ''
		for(let i = 0; i < str.length, i++) {
			switch(str[i]) {
			  case '-':
			  if(buff) {
				this.units.set(buff, csign)
				buff = ''  
			  }
				csign = false
				break

			  case '+': 
			  if(buff) {
				this.units.set(buff, csign)
				buff = ''
			  }
				csign = true
				break
			
			  default:
				buff += str[i]
			}
		}
	}
	
	calc() {
		
	}
}

export {MiniMaple}