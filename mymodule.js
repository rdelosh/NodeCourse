var fs = require('fs');
module.exports = function(directory,extension, callbackfunc ){
	fs.readdir(directory,function(err,data){
		if(err){
			return  callbackfunc(err)
		}else{
			var newdata = []
			data.map(function(file){
				var stringsegments = file.split('.')
				let fileextension = stringsegments[stringsegments.length-1]
				if(file.includes('.')){
					// console.log("arg[3]"+process.argv[3])
					// console.log("ext"+extension)
					var argumentstringsegments = extension.split('.')	
					let argumentextension = argumentstringsegments[argumentstringsegments.length-1]
					if(argumentextension===fileextension){
						newdata.push(file)
					}
				}

			})
			return callbackfunc(err,newdata)
		}
	})
}


