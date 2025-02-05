import { ApiResponse } from "@/types";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }
  
  return {
    data,
    status: response.status,
    message: "Success",
  };
}

export async function get<T>(url: string, headers = {}): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: "GET",
    headers: { ...DEFAULT_HEADERS, ...headers },
  });
  return handleResponse<T>(response);
}

export async function post<T>(url: string, body: any, headers = {}): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: "POST",
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export async function put<T>(url: string, body: any, headers = {}): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export async function del<T>(url: string, headers = {}): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: "DELETE",
    headers: { ...DEFAULT_HEADERS, ...headers },
  });
  return handleResponse<T>(response);
} 