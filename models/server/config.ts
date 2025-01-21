import env from '@/app/env';
import { Client } from 'node-appwrite';

const client = new Client();

client
  .setEndpoint(env.appwrite.endPoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);
