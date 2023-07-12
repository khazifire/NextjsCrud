
let devices =[]

//function to create
export const createDevice=(name, id)=>{
    devices.push({"deviceName":name, "id":id})
    return devices
}
//function to read
export const readDevice=(id)=>{
    //filter the device list and get the device with the specified id
    if(id){
        return devices.filter(device => device.id === id)
    }
    return devices
}

export const deleteDevice=(id)=>{
    devices=devices.filter(device => device.id != id)
    return devices
}

export const patchDevice=({id, name})=>{
    //
}


//function to delete