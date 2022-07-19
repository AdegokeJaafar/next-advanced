export default function handler(req, res){


    // req.method => GET, POST, DELETE, PATCH

    res.status(200).json([
        {
            id: 1,
            name: 'Jaafar',
            email: 'jaafaradegoke@gmail.com'
        }
    ])
}