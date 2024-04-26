import apiClient from "./api-client";
import create from './http-services'

export interface User {
    id: number;
    name: string;
  }

export default  create('/users')