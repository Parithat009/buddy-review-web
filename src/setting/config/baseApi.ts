
export default
process.env.NODE_ENV === 'development'
  ? {
    baseURL: 'http://localhost:4000'
  }
  : {
    baseURL: `http://localhost:4000`,
  }
