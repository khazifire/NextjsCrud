// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// export default function handler(req, res) {
//   res.status(200).json({ name: 'HI there', test:"testing"})
// }


export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else if (req.method === 'PATCH') {
    handlePatchRequest(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function handleGetRequest(req, res) {
  try {
    return res.status(200).json({ msg: 'Hi there welcome to wonderland' });
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the GET request' });
  }
}

async function handlePostRequest(req, res) {
  try {
    const { fname, lname } = req.body;
    // const details = req.body/
    
    return res.status(200).json({ msg: `HI ${fname} ${lname}`});
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the POST request' });
  }
}

async function handlePatchRequest(req, res) {
  try {
    const { fname, lname } = req.body;
    // const details = req.body/
    
    return res.status(200).json({ msg: `HI ${fname} ${lname}`});
  } catch (err) {
    return res.status(500).json({ msg: 'An error occurred during the POST request' });
  }
}


