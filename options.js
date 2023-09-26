const namet = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click" , () => {
   const name = namet.value
   chrome.storage.sync.set(
    {"name" : name },
        () => {
            console.log(`Name is set to ${name}` )
    }
   )
})

chrome.storage.sync.get(["name"] , (res) =>{
    namet.value = res.name
console.log(res)
})
