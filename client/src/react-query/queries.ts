import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTodo,
  editTodo,
  getSingleTodo,
  getTodo,
  postTodo,
} from "../api/api";

interface ITodo {
  title: string;
  description: string;
  difficulty: string;
  due_date: string;
}

// Disini dimana fungsi react-query dijalanin
export const useGetTodo = () => {
  return useQuery({
    queryKey: ["getTodo"],
    queryFn: getTodo,
  });
};

export const useGetSingleTodo = (id: number) => {
  return useQuery({
    queryKey: ["getSingleTodo", id],
    queryFn: () => getSingleTodo(id),
  });
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: ITodo) => postTodo(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postTodo"],
      });
    },
  });
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => editTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTodo"],
      });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getTodo"],
      });
    },
  });
};

// export const usePostTodo = ({
//   title,
//   description,
//   difficulty,
//   due_date,
// }: ITodo) => {
//   return useQuery({
//     queryKey: ["postTodo", { title, description, difficulty, due_date }],
//     queryFn: postTodo,
//   });
// };

// referensi : const [_key, { status, page }] = queryKey
