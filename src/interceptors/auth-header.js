export default function authHeader() {
    let user = JSON.parse(sessionStorage.getItem('data'));
    const token = user.data.id.token;
    
    return token;
  }