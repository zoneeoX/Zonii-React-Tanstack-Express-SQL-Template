// Function untuk komunikasi ke backend gunain axios
import axios from "axios";
import { ITodo, IUser } from "../types";

// interface ITodo {
//   title: string;
//   description: string;
//   difficulty: string;
//   due_date: string;
// }

// @ INI PENTING BANGET NOTE NIH BIAR BISA SEND COOKIES KE BACKEND
axios.defaults.withCredentials = true;

export async function getTodo() {
  try {
    const response = await axios.get("http://localhost:3000/api/todo/");

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleTodo(id: number) {
  try {
    const response = await axios.get(`http://localhost:3000/api/todo/${id}`);
    if (!response) {
      console.log({ msg: "Error" });
    }
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
}

export async function postTodo(data: ITodo) {
  const { title, description, difficulty, due_date } = data;
  try {
    const response = await axios.post("http://localhost:3000/api/todo/create", {
      title,
      description,
      difficulty,
      due_date,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function editTodo(data: any) {
  const { title, description, difficulty, due_date, id } = data;
  try {
    const response = await axios.put(
      `http://localhost:3000/api/todo/edit/${id}`,
      {
        title,
        description,
        difficulty,
        due_date,
      }
    );
    return console.log({ msg: "Success", data: response });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/todo/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// @ AUTHENTICATION

export async function postUser(data: IUser) {
  const { username, password, role } = data;

  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        username,
        password,
        role,
      }
    );

    return response;
  } catch (error) {
    console.log({ msg: "ERROR MESSAGE: ", error });
  }
}

export async function loginUser(data: IUser) {
  const { username, password } = data;

  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      username,
      password,
    });

    console.log(response);
    localStorage.setItem("token", response.data.token);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log({ msg: "ERROR MESSAGE: ", error });
  }
}

export async function getUser() {
  try {
    const response = await axios.get("http://localhost:3000/api/auth/login");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log({ msg: "Error" });
  }
}

export async function isAuth() {
  const response = await axios.get("http://localhost:3000/api/auth/", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });

  return response;
}

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/token",
      {},
      { withCredentials: true }
    );

    localStorage.setItem("token", response.data.accessToken);

    console.log("Access token refreshed:", response.data.accessToken);
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    console.log(response.data.message);
  } catch (error) {
    console.error("Error logging out 😢:", error);
  }
}

export async function isAdmin() {
  const response = await axios.get("http://localhost:3000/api/auth/admin", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });

  return response;
}

export async function isManager() {
  const response = await axios.get("http://localhost:3000/api/auth/manager", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });

  return response;
}

// export async function postTodo({ queryKey }: any) {
//   const [_key, { title, description, difficulty, due_date }] = queryKey;
//   try {
//     console.log(title, description, difficulty, due_date);
//   } catch (error) {
//     console.log(error);
//   }
// }
