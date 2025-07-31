import fs from 'fs';

export function saveUserToFile(user: any, filePath = 'user-data.json') {
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
}

export function loadUserFromFile(filePath = 'user-data.json') {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
}