// ES6 script to connect to DB

let isConnected;

const connectToDatabase = async (dbUri) =>  {
  if (isConnected) {
    console.log('=> Using existing DB connection');
    return;
  }
  console.log('=> Using new DB connection');
  
  try {
    // const db = Connect to DB
  
    isConnected = true;
    console.log('=> Connection successful');
    return;
  } catch (err) {
    throw new Error(err);
  };
};

export default connectToDatabase;
