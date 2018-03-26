//console.log('HELLO WORLD')
//console.log(process.argv)
let accumulation = 0;
for (let i =0;i<process.argv.length;i++){
	//console.log(process.argv[i])
	if(i>=2){
/*
		if(process.argv[i].length>=2){
			console.log(process.argv[i])
			accumulation=Number(accumulation+process.argv[i].substring[0,2])
		}else{
*/
		accumulation= Number(accumulation)+Number(process.argv[i])	
		
		}
		
	
	
}
console.log(accumulation)
//console.log(accumulation)