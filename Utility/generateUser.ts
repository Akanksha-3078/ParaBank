// export function generateUsername(user: string ,browserName: string) {

//     const timestamp = Date.now();

//    const random = Math.floor(Math.random() * 1000);

//    return `${user}_${browserName}`;  
// }
export function generateUsername(browserName: string) {

    const prefix = Math.random().toString(36).substring(2, 8);

    return `${prefix}_${browserName}`;
}