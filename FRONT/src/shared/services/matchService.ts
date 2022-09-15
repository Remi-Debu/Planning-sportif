import 'dotenv/config';

const URI = process.env.URI;

export default class MatchService {
    static getAllMatch = async () => {
        return await fetch(`${URI}`)
            .then((response) => response.json());
    }
}
