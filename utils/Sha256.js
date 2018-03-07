import crypto from 'crypto';

const Sha256 = (data) =>  {
    return crypto.createHash('sha256').update(data).digest('hex');
}

export default Sha256;