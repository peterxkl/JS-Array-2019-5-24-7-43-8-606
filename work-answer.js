//程序1
function IsArray(var x){
	if (x instanceof Array)
		return 1;
	else
		return 0;
}

//程序2
var a=[1,2,3,4,5];
for(var i=0;i<a.length;i++){
	a[i]=a[i]*2;
}

//程序3
var colors=["red","Green","White","Black"];
console.log(colors[0]+" "+colors[1]+" "+colors[2]+" "+colors[3]);
console.log(colors[0]+"+"+colors[1]+"+"+colors[2]+"+"+colors[3]);
console.log(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);

//程序4
var a=[5,1,8,10,4];
a.sort(function(a,b){return b-a});
console.log(a);

//程序5
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findMost(arr) {
	if(!arr.length) 
		return;
	if (arr.length===1) 
		return arr[0];
	var res={};
	//遍历数组
	for(var i=0,l=arr.length;i<l;i++){
		if (!res[arr[i]]) {
			res[arr[i]]=1;
		}else{
			res[arr[i]]++;
		}
	}
	//遍历res
	var keys=Object.keys(res);
	var maxNum=0,maxEle;
	for(var i=0,l=keys.length;i<l;i++){
		if (res[keys[i]]>maxNum) {
			maxNum=res[keys[i]];
			maxEle=keys[i];
		}
	}
	return maxEle;
}
