const path = require('path');

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.sendFile(path.join(__dirname, '..', 'public', 'try.html'));
    }
}
