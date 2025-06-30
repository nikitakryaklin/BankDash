import { IAboutData, IUser } from "@/types/User.type";

class UserService {
  public URL = process.env.NEXT_PUBLIC_API;

  async getUser() {
    try {
      const result = await fetch(this.URL + "/users/me?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (result.ok) {
        return result.json();
      } else {
        const errorMessage = result.text();
        throw new Error("ошибка запроса " + errorMessage);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  patchUserAbout = async (aboutData: IAboutData) => {

    const user_id = localStorage.getItem('User_id')

    try {
     const check = await fetch(`http://localhost:1337/api/abouts?filters[user][$eq]=${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      })

      const res = await check.json()

      if (!res.data[0]) {

        await this.createAboutTable(user_id!, aboutData)
          
      } else {

        await this.addAboutData(res.data[0].documentId, aboutData)            

      }
      
    } catch (error) {
      console.log(error);
      throw error;
    }
    
  }

  private createAboutTable = async (user_id: string, data: IAboutData) => {
    try {
      await fetch('http://localhost:1337/api/abouts', {
        method: 'POST',
        body: JSON.stringify({data: {
          ...data,
          user: user_id
        }}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })       
    } catch (error) {
      throw error
    }
  }

  private addAboutData = async (id: string, data: IAboutData) => {
    try {
      await fetch(`http://localhost:1337/api/abouts/${id}` , {
        method: "PUT",
        body: JSON.stringify({data: {
          ...data,
          user: localStorage.getItem('User_id')
        }}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      })
    } catch (error) {
      throw error
    }
  }
}

export const User = new UserService();
