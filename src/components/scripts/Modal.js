const modal = document.getElementById("modal") 
    const xmark = document.querySelectorAll("#xmark")
    const modalMain = document.getElementById("modal-main") 
    
    const btnVehiclesN = document.getElementById("btnVehiclesN") 
    const modalVehicles = document.getElementById("modal-vehicles") 

    const btnEnergyN = document.getElementById("btnEnergyN")
    const modalEnergy = document.getElementById("modal-energy") 

    const btnChargingN = document.getElementById("btnChargingN")
    const modalCharging = document.getElementById("modal-charging") 

    const btnReverse = document.querySelectorAll("#btnReverse")

    xmark.forEach((element)=>{
        element.addEventListener("click", ()=>{
            modal.classList.add("close")
            modalVehicles.classList.add("hidden")
            modalEnergy.classList.add("hidden")
            modalCharging.classList.add("hidden")

            modal.addEventListener("animationend", ()=>{
                modal.classList.remove("close")
                modal.classList.remove("open")
                modalMain.style.removeProperty("display")
            }, {once: true})
        })
    })

    const btnOpen = (btn, modal)=>{
        btn.addEventListener("click", ()=>{
            modalMain.style.display="none"
            modal.classList.remove("hidden")
        })
    }
    btnOpen(btnVehiclesN, modalVehicles)
    btnOpen(btnEnergyN, modalEnergy)
    btnOpen(btnChargingN, modalCharging)

    const btnRewind = (modal)=>{
        btnReverse.forEach((element)=>{
            element.addEventListener("click", ()=>{
                modal.classList.add("hidden")
                modalMain.style.removeProperty("display")
            })
        })
        
    }
    btnRewind(modalVehicles)
    btnRewind(modalEnergy)
    btnRewind(modalCharging)
    