
// api/devices/{id}
//api/devices/[deviceId]

//req === user request
//req.body === body of the request
//req.method === method of the request
//res === server response
//res.status === status of the response

import { createDevice, deleteDevice, readDevice } from "@/lib/deviceCrud";

export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'PATCH') {
    handlePatchRequest(req, res);
  } else if (req.method === 'DELETE') {
    handleDeleteRequest(req, res);
  }else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


async function handleGetRequest(req, res) {
  const id = req.query.deviceId;
  try {
    const device = readDevice(id);
    return res.status(200).json({device});
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the GET request' });
  }
}
async function handleDeleteRequest(req, res) {
  const id = req.query.deviceId;
  try {
    const device = deleteDevice(id);
    return res.status(200).json({device});
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the GET request' });
  }
}




