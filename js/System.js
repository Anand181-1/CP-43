class System{

    constructor(){
        this.title = createElement('h2');
    }

    authenticate(actualCode,enteredCode){

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);


        if(actualCode === enteredCode.toUpperCase()){
            return true
        }else{ 
            return false
        }
    }

}