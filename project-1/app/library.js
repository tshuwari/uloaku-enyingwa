module.exports = {
	aritGeo: function(arr){
        if (arr.length === 0){
            return 0;
        }
        var isArit = true;
        var isGeo = true;
        var numDiff = arr[1] - arr[0];
        for (var i = 2; i < arr.length; i++){
            if (arr[i] - arr[i-1] !== numDiff){
                isArit = false;
            }
        }

        if (isArit){
            return "Arithmetic";
        }

        var numDiv = arr[1]/arr[0];
        for (var i = 2; i < arr.length; i++){
            if (arr[i]/arr[i-1] !== numDiv){
                isGeo = false;
            }
        }

        if (isGeo){
            return "Geometric";
        }
        return -1;
    }

}