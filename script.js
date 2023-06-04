// დავალება 1

function mySetTimeout(ms){ 
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.1){
            setTimeout( ()=> {
                resolve('works')
            }, ms)
        }else{
            setTimeout( ()=> {
                reject('does not work')
            }, ms)
        }
    })
}

mySetTimeout(2000)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))



// დავალება 2

function makeToys(ms){ 
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (Math.random() > 0.1){
            resolve('Undefected')
            }else{
                reject('Defected')
            }
        },ms)
    })
}

function deliverToys(status, ms1){ 
    return new Promise((resolve, reject) => {
            if (status === 'Undefected'){
                setTimeout(()=>{
                    if (Math.random() > 0.3){
                            resolve('Toy has been delivered')
                        }
                    else{
                            reject('Toy was not delivered')
                        }
                }, ms1)
            }
        })
    }

function sellToys(deliverStatus, ms2){ 
    return new Promise((resolve, reject) => {
            if (deliverStatus === 'Toy has been delivered'){
                setTimeout(()=>{
                    if (Math.random() > 0.7){
                            resolve('Toy has been sold')
                        }
                    else{
                            reject('Toy was unsuccessful')
                        }
                }, ms2)
            }
        })
    }

makeToys(3000)
    .then((status) => deliverToys(status, 2000))
    .then((deliverStatus) => sellToys(deliverStatus, 1000))
    .then((res) => console.log(res))
    .catch((err)=> console.log(err))




// დავალება 3


async function makeToys(ms){ 
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (Math.random() > 0.1){
            resolve('Undefected')
            }else{
                reject('Defected')
            }
        },ms)
    })
}

async function deliverToys(status, ms1){ 
    return new Promise((resolve, reject) => {
            if (status === 'Undefected'){
                setTimeout(()=>{
                    if (Math.random() > 0.3){
                            resolve('Toy has been delivered')
                        }
                    else{
                            reject('Toy was not delivered')
                        }
                }, ms1)
            }
        })
    }

async function sellToys(deliverStatus, ms2){ 
    return new Promise((resolve, reject) => {
            if (deliverStatus === 'Toy has been delivered'){
                setTimeout(()=>{
                    if (Math.random() > 0.7){
                            resolve('Toy has been sold')
                        }
                    else{
                            reject('Toy was unsuccessful')
                        }
                }, ms2)
            }
        })
    }


async function promisify(){
    try {
        const status = await makeToys(3000)
        const deliverStatus = await deliverToys(status, 2000)
        const result = await sellToys(deliverStatus, 2000)
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

promisify()