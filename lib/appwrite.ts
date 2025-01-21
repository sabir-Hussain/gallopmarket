import { Client, Databases, Account } from 'appwrite';
// Import type models for Appwrite
import { type Models } from 'appwrite';

const client: Client = new Client();

client.setEndpoint('http://localhost/v1').setProject('678df2a6002e36ffcac9');

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(
//   email,
//   password
// );
