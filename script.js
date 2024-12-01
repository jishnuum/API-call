const btn = document.getElementById('Button')


    const prom = new Promise((resolve,reject) =>{
        const randomNumber = Math.floor(Math.random() * 10)
        console.log(randomNumber);
        

        if(randomNumber<2){
            resolve("Operation success")
        } else{
            reject("Operation failed")
        }
    })

    btn.addEventListener("click",() =>{
        prom
        .then((result) =>{
            document.getElementById('message').innerText = result;
            
        })
        .catch((error) => {
            document.getElementById('message').innerText = error;

            
        })

    })


    const second = document.getElementById('second')

    const proms = new Promise((resolve,reject) =>{
        const randomNumbers = Math.floor(Math.random() * 10)
        console.log(randomNumbers);
        

        if(randomNumbers<2){
            resolve("Operation success")
        } else{
            reject("Operation failed")
        }
    })

    second.addEventListener('click',() =>{
        async function main(){
            try{
                const result = await proms
                document.getElementById('secondMessage').innerText= result
                
            }catch(error){
                document.getElementById('secondMessage').innerText= error

                
            }
        }
        main()
    })

   
