import crypto from 'crypto';

function Sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

console.log(Sha256("Neriag"));