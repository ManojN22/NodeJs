var rect = require('./rectangle');

function solverec(l,b) {
	console.log("solving for rectanglr with l = "+l+" and b = "+b);
	rect(l,b,(err,rectangle) => {
		if(err)
		{
			console.log("error",err.message);

		}
		else
		{   console.log("the perimeter is "+rectangle.perimeter());
			console.log("the area is "+rectangle.area());
		}
	})
	console.log("finish");
}
solverec(20,20);
solverec(0,-1);