function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove" , gradientMove);
    gradient.addEventListener("mouseout", gradientOut);
    function gradientMove(event){
        let position = event.offsetX;
        let gradientWidth = event.target.offsetWidth;
        let result = Math.trunc(position / gradientWidth * 100);
        document.getElementById("result").textContent = result + "%";
    }
    function gradientOut(event){
    document.getElementById('result').textContent = '';    
    }
    };
    
