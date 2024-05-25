import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getMyUserRequest = async (): Promise<User>=> {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  };
  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);

  if(error){
    toast.error(error.toString());

  }

  return {currentUser, isLoading}
};
type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`${API_BASE_URL}/api/my/user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create user: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error creating user:", error); // Debugging line
      throw error;
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const UpdateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    try {
      // Get access token
      const accessToken = await getAccessTokenSilently();
      console.log("Access Token:", accessToken);
      // Build the request
      const response = await fetch(`${API_BASE_URL}/api/my/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle successful response
      if (response.ok) {
        return response.json();
      }

      // Handle error response (including 401)
      throw new Error(`Failed to update user: ${response.statusText}`);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error; // Re-throw for mutation handling
    }
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(UpdateMyUserRequest);

  if (isSuccess) {
    toast.success("User profile updated");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateUser, isLoading };
};
