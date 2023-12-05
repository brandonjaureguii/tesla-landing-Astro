const btnMenu = document.getElementById("btn-menu")
    const modal = document.getElementById("modal") 
    btnMenu.addEventListener("click", ()=>{
        modal.classList.add("open")
    })


    const navLinks = document.querySelectorAll(".li-link")
    const dialog = document.getElementById("dialog-dropdown")

    const btnVehicles = document.getElementById("btn-vehicles")
    const vehiclesContent = document.getElementById("vehicles-content")

    const btnEnergy = document.getElementById("btn-energy")
    const energyContent = document.getElementById("energy-content")

    const btnCharging = document.getElementById("btn-charging")
    const ChargingContent = document.getElementById("charging-content")
    
    const btnDiscover = document.getElementById("btn-discover")
    const discoverContent = document.getElementById("discover-content")


    const btnShop = document.getElementById("btn-shop")
    const shopContent = document.getElementById("shop-content")
    
    const navContent = document.getElementById("nav-container")
    const navBar = document.querySelectorAll("#nav-bar")
    const logo = document.getElementById("img-logo")
    const divBlur = document.getElementById("modal-backdrop")

    navLinks.forEach((element)=>{
        element.addEventListener("mouseenter", ()=>{
            dialog.addEventListener("animationend", ()=>{
                dialog.style.height=`${dialog.clientHeight}px`
            })
            dialog.classList.remove("close")
            dialog.classList.add("open")
            dialog.style.animation = "fade-in 500ms forwards"
            divBlur.classList.add("open")
            divBlur.classList.remove("close")

            const $header = document.getElementById('landing-header')
            if ($header.style.getPropertyValue("color") == "white") {
                    navContent.style.color="black"
            } 
            
            

            navLinks.forEach(element => {
            element.classList.remove("active")
            });
            element.classList.add("active")

            document.addEventListener("mousemove", function(event) {
            let positionY = event.clientY;
            if(dialog.clientHeight > 350) {
                if(positionY > dialog.clientHeight) {
                    dialog.style.animation = "fade-out 300ms forwards"
                    setTimeout(()=>{
                        dialog.classList.add("close")
                        dialog.classList.remove("open") 
                    }, 200)  
                    navContent.style.removeProperty("color")    
                    divBlur.classList.add("close")
                    divBlur.classList.remove("open")
                } 
            }
                
        });  
        })
    })
    

    function checkClass1() {
        if (btnShop.classList.contains('active')) {
            shopContent.classList.remove("close")
            shopContent.classList.add("open") 
            dialog.style.height="360px"
        } else {
            shopContent.classList.remove("open")
            shopContent.classList.add("close")
        }
    }
    function checkClass2() {
  
    if (btnDiscover.classList.contains('active')) {
        discoverContent.classList.remove("close")
        discoverContent.classList.add("open")
        dialog.style.height="440px"
        
    } else {
        discoverContent.classList.remove("open")
        discoverContent.classList.add("close")
    }
    }
    function checkClass3() {
  
    if (btnCharging.classList.contains('active')) {
      ChargingContent.classList.remove("close")
      ChargingContent.classList.add("open") 
      dialog.style.height="380px"
    } else {
      ChargingContent.classList.remove("open")
      ChargingContent.classList.add("close")
    }
    }
    function checkClass4() {
  
    if (btnEnergy.classList.contains('active')) {
        energyContent.classList.remove("close")
        energyContent.classList.add("open")
        dialog.style.height="380px"
    } else {
        energyContent.classList.remove("open")
        energyContent.classList.add("close")
    }
    }
    function checkClass5() {
  
    if (btnVehicles.classList.contains('active')) {
        vehiclesContent.classList.remove("close")
        vehiclesContent.classList.add("open")
        dialog.style.height="520px"
    } else {
        vehiclesContent.classList.remove("open")
        vehiclesContent.classList.add("close")
    }
    }
 
    function observeChanges(mutationsList) {
        for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            checkClass1()
            checkClass2() 
            checkClass3() 
            checkClass4()   
            checkClass5()   }
        }
    }

    const observerClass = new MutationObserver(observeChanges);

    observerClass.observe(btnShop, { attributes: true });
    observerClass.observe(btnDiscover, { attributes: true });
    checkClass1()
    checkClass2()
    checkClass3()
    checkClass4()
    checkClass5()