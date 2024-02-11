export const checkUserAuthenticated = () => {
    // Obter o userToken do localStorage
    const userToken = localStorage.getItem('session.token');

    return !!userToken; 
  }