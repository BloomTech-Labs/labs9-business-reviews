//Uncomment on Production
// export const backendLink = `https://bonafind.herokuapp.com`;

export const backendLink =
  process.env.NODE_ENV === 'PRODUCTION'
    ? `https://bonafind.herokuapp.com`
    : `http://localhost:9000`;
//Uncomment on Development
// export const backendLink = `http://localhost:9000`;
