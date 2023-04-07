class ApiService {
  loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
  }

  localLoginUser(credentials) {
    console.log({credentials})
    return {
      status: 'ok',
      message: 'Logged in',
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      
      user: {
        id:  Math.round(Math.random(0,99999)),
...credentials
      },
    }
  }
}
export default new ApiService()
