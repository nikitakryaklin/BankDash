import { log } from "console";

class Fetch {
  private api: string = process.env.NEXT_PUBLIC_API || "";
  public async get(url: string) {
    try {
      const response = await fetch(this.api + url, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzQ0NjU3MjE5LCJleHAiOjE3NDcyNDkyMTl9.wQNg_8kog-aT6AI2bUAXs5V7ocDj_Ib5U7WUl82Spqc",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        const errorMessage = await response.text();
        throw new Error("ошибка " + errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  }
  public async post<T>(url: string, data?: T, isAuth: boolean = false) {
    const AuthorizationHeader = isAuth
      ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
      : null;
    console.log(AuthorizationHeader);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ...AuthorizationHeader,
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        throw new Error("ошибка запроса " + errorMessage);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public async put(url: string, data: any) {}
  public async delete(url: string, data: any) {}
}

export const $Fetch = new Fetch();
