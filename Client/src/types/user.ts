// 🛡️ Renamed from "File" to "CloudinaryAsset" to prevent crashing the browser's native File upload type!
export interface CloudinaryAsset {
  public_id: string;
  url: string;
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  // Uses the browser's native File type for local uploads, or CloudinaryAsset for fetched data
  file?: File | CloudinaryAsset; 
}

export interface LoadUserBody {
  name: string;
  email: string;
}

export interface MessageResponse {
  success: boolean;
  message: string;
}

// 🛡️ Standardized to PascalCase
export interface DocsStructure {
  title: string;
  description: string;
  documentArray: CloudinaryAsset[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface UserReducerInitialState {
  user: IUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  message: string | null;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  file: CloudinaryAsset | string;
  // pdfs: DocsStructure[];
}

// 🛡️ Standardized to PascalCase
export interface OneCourse {
  _id: string;
  title: string;
  description: string;
  author?: string;
  file: CloudinaryAsset;
  NumberOfDownloads?: number;
  category?: string;
  pdfs: DocsStructure[];
}

export interface CourseStructure {
  loading: boolean;
  course: Course[] | null;
  specificCourse: OneCourse | null;
  error?: string | null;
  message?: string | null; // ✅ THE FIX: Added the optional message property!
}

export interface CardsProps {
  id: string;
  title: string;
  description: string;
  file: string;
}