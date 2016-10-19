var Check_arrays = function(){
        /*check if exist a item of array2 within array1*/
        function exist(array1, array2){
                return array2.some( function (item_array2){
                        return array1.indexOf( item_array2 ) >= 0;
                });
        }
        
        return{
                existe:exist
        }
        
}();

$(function(){
        Check_arrays.existe();
});
