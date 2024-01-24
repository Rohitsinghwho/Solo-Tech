import { Client, Account, ID } from "appwrite";
import conf from "../environmentConfiguration/conf";
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.AppwriteUrl)
      .setProject(conf.AppwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ username, email, password }) {
    try {
      const CreatedUser = await this.account.create(
        ID.unique(),
        username,
        email,
        password
      );
      if (CreatedUser) {
        //Todo
        return this.login({email, password});
      } else {
        return CreatedUser;
      }
    } catch (error) {
      console.log(`Error Occured in Creating Account:::`, error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(`Error Occured in LoggingIn Account:::`, error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(`Error Occured in LoggingOut Account:::`, error);
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
      console.log(`Error Occured in Getting Current User Account:::`, error);
        
    }
  }
}

const authService = new AuthService();
export default authService;
