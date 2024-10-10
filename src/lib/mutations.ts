// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// const useAddDrama = () => {
//   const queryClient = useQueryClient();

//   const addDrama = (data: unknown) => {
//     return axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/kdrama`, data);
//   };

//   return useMutation(addDrama, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["kdrama"]); // Refresh the "kdrama" query
//     },
//   });
// };

// const useEditDrama = () => {
//   const queryClient = useQueryClient();
//   const editDrama = (item: any) => {
//     return axios.put(
//       `${process.env.NEXT_PUBLIC_API_KEY}/kdrama/${item.id}`,
//       item
//     );
//   };

//   return useMutation(editDrama, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["kdrama"]); // Refresh the "kdrama" query
//     },
//   });
// };

// const useDeleteDrama = () => {
//   const queryClient = useQueryClient();
//   const deleteDrama = (item: any) => {
//     return axios.delete(`${process.env.NEXT_PUBLIC_API_KEY}/kdrama/${item.id}`);
//   };

//   return useMutation(deleteDrama, {
//     onSuccess: (deletedItemId) => {
//       queryClient.setQueryData(["kdrama"], (oldItems: any) => {
//         return oldItems.filter((item: any) => item.id !== deletedItemId);
//       });
//       queryClient.invalidateQueries(["kdrama"]); // Refresh the "kdrama" query
//     },

//     // onSuccess: async () => {
//     //   await queryClient.invalidateQueries(["kdrama"]);
//     // },
//   });
// };

// export { useAddDrama, useEditDrama, useDeleteDrama };

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { MovieList } from "./data";

const useAddDrama = () => {
  const queryClient = useQueryClient();

  const addDrama = async (data: unknown) => {
    await axios.post("/api/drama", data);

    console.log("data - useAddDrama ---->", data);
  };

  return useMutation(addDrama, {
    onSettled: () => {
      queryClient.invalidateQueries(["kdrama"]);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["kdrama"]); // Refresh the "kdrama" query
    },
  });
};

const useEditDrama = () => {
  const queryClient = useQueryClient();
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const editDrama = async (item: any) => {
    await axios.put(
      // `${process.env.NEXT_PUBLIC_API_KEY}/kdrama/`,
      `/api/drama/${item.id}`,
      item
    );
  };

  return useMutation(editDrama, {
    onSuccess: () => {
      queryClient.invalidateQueries(["kdrama"]); // Refresh the "kdrama" query
    },
  });
};





type DramaItem = {
  id: string;
  // add other relevant fields if necessary
};

const useDeleteDrama = () => {
  const queryClient = useQueryClient();

  const deleteDrama = async (item: DramaItem) => {
    console.log("item delete", item);
    
    // Making a DELETE request, passing ID in the URL
    await axios.delete(`/api/drama/${item.id}`);

    return item.id;
  };

  return useMutation(deleteDrama, {
    onSuccess: (deletedItemId) => {
      // Update the query cache
      queryClient.setQueryData<DramaItem[] | undefined>(
        ["kdrama"],
        (oldItems) => {
          if (oldItems) {
            return oldItems.filter((item) => item.id !== deletedItemId);
          }
          return [];
        }
      );
      // Invalidate the query to refetch data
      queryClient.invalidateQueries(["kdrama"]);
    },
    onError: (error) => {
      console.error("Error deleting drama:", error);
      // Handle the error (e.g., show toast notifications)
    },
  });
};

export { useAddDrama, useEditDrama, useDeleteDrama };
