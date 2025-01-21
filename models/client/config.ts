import { Client, Databases, Account, Avatars, Storage } from 'appwrite';
import env from '@/app/env';
// Import type models for Appwrite
import { type Models } from 'appwrite';

const client: Client = new Client();

client.setEndpoint(env.appwrite.endPoint).setProject(env.appwrite.projectId);

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
const authUser: Models.Session = await account.createEmailPasswordSession(
  email,
  password
);
