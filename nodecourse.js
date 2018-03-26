/*LESSON 7 */




/*LESSON 6 MAKE IT MODULAR*/

var mymodule = require('./mymodule.js')
var directory = process.argv[2];
var extension = process.argv[3]
mymodule(directory,extension,function(err,data){
	if(!err){
		data.map(function(file){
			console.log(file)
		})
	}

})




/*LESSON 5*/
// var fs = require('fs');
// fs.readdir(process.argv[2],function(err,data){
// 	if(!err){
// 		data.map(function(file){
// 			var stringsegments = file.split('.')
// 			let extension = stringsegments[stringsegments.length-1]
// 			if(file.includes('.')){
// 				var argumentstringsegments = process.argv[3].split('.')	
// 				let argumentextension = argumentstringsegments[argumentstringsegments.length-1]
// 				if(argumentextension===extension){
// 					console.log(file)
// 				}
// 			}

// 		})

// 	}
// })


/*LESSON 4*/
// var fs = require('fs');
// fs.readFile(process.argv[2],function(error,data){
// 	if(!error){
// 		var arrayofsegments = (data.toString()).split('\n')
// 		console.log(arrayofsegments.length-1)
// 	}
	
// })

/*LESSON 3*/
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);

// var arrayofsegments = (buffer.toString()).split('\n');

// console.log(arrayofsegments.length-1);


/*LESSON 2*/
// //console.log(process.argv)
// let accumulation = 0;
// for (let i =0;i<process.argv.length;i++){
// 	//console.log(process.argv[i])
// 	if(i>=2){


// 		accumulation= Number(accumulation)+Number(process.argv[i])	
//		}

	
// }
// console.log(accumulation)
