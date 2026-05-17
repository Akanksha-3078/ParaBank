export function generateUsername(user: string ,browserName: string) {

    const timestamp = Date.now();

   const random = Math.floor(Math.random() * 1000);

   return `${user}_${browserName}`;  
}
