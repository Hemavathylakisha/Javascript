
 for(count=10; count>=1; count=count-1)
 {
 console.log(count);
 }

 //** Closures */

 //** its the combination of functions bundled together with the references of its surrounding states, which means closures can gives access to an outer function scope from inner function scope **/

 function makeFun(){
    var name = "Android"
    function displayName(num){
        console.log(name,num);
    }
    return displayName;
 }

 makeFun()(5);

 /** closures chain means its the bundles of inner function can access to an outer function  with the chain of inner functions **/
 /** time consumption */