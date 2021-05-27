let arm_but = document.getElementById("arm_but");
let serb_but = document.getElementById("serb_but");
let arm_drbtn = document.getElementById("arm_drbtn");
let serb_drbtn = document.getElementById("serb_drbtn");

arm_drbtn.style.display = "none";
serb_drbtn.style.display = "none";



arm_but.addEventListener("click",(event)=>{
    if(arm_drbtn.style.display == "none"){
        arm_drbtn.style.display = "block";
        serb_drbtn.style.display = "none";
    }

    else{
        arm_drbtn.style.display = "none";
    }
})

serb_but.addEventListener("click",(event)=>{
    if(serb_drbtn.style.display == "none"){
        serb_drbtn.style.display = "block";
        arm_drbtn.style.display = "none";
    }

    else{
        serb_drbtn.style.display = "none";
    }

})
