
let devices =[]

//function to create
export const createDevice=(name, id)=>{
    devices.push({"deviceName":name, "id":devices.length+1})
    return devices
}
//function to read
export const readDevice=(id)=>{
    //filter the device list and get the device with the specified id
    console.log(id)
    return devices.filter(device => device.id === Number(id))
}

export const readAllDevices=()=>{
    return devices
}

//function to delete
export const deleteDevice=(id)=>{
    //not proper, but this is just an example
    return devices.filter(device => device.id != id)
}

export const patchDevice=({id, name})=>{
    //
}

