
// api/devices/{id}
//api/devices/[deviceId]

import { createDevice, deleteDevice, readDevice } from "@/lib/deviceCrud";

export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  }else if(req.method === 'POST'){
    handlePostRequest(req, res);
  }else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function handleGetRequest(req, res) {
  try {
    const device = readDevice();
    return res.status(200).json({device});
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'An error occurred during the GET request' });
  }
}

async function handlePostRequest(req, res) {
  try {
    // get the deviceId from request
    //function to update the name of the device
    const { name, id} = req.body;

    //create a device
    const device = createDevice(name, id)

    return res.status(200).json({ device});
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the POST request' });
  }
}





