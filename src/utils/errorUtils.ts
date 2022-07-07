export interface AppError {
    type: "not_found" | "bad_request";
  }
  
  export function notFound(): AppError {
    return { type: "not_found" };
  }
  