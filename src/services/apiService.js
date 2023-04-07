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
    console.log(credentials)
    return {
      status: 'ok',
      message: 'Logged in',
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      user: {
        id: 1,
        fname: 'Karn',
        lname: 'Yong',
        username: 'karn.yong@mecallapi.com',
        email: 'karn.yong@mecallapi.com',
        avatar: 'https://www.mecallapi.com/users/1.png',
      },
    }
  }
}
export default new ApiService()
