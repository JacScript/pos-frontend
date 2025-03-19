import { useEffect, useState } from "react";
import { getUserData } from "../https/index";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../redux/slices/userSlice"; // ✅ Import setUser
import { useHistory } from "react-router-dom";

/**
 * Custom hook to fetch and set user data on component mount.
 * Redirects to "/auth" if user data fetch fails.
 */
const useLoadData = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    /**
     * Fetches user data from the API and updates Redux state.
     */
    const fetchUser = async () => {
      try {
        const { data } = await getUserData(); // ✅ Fetch user data
        // console.log(data);

        // ✅ Extract required fields
        const { _id, username, img, phoneNumber, role, status } = data.data;

        // ✅ Store user data in Redux
        dispatch(setUser({ _id, username, phoneNumber, role, status, img }));
      } catch (error) {
        // ✅ Remove user from Redux if request fails
        dispatch(removeUser());

        // ✅ Redirect to authentication page
        history.push("/auth");

        console.error("Error fetching user data:", error);
      }finally{
        setIsLoading(false);
      }

    };

    fetchUser();
  }, [dispatch, history]); // ✅ Add dependencies

    return isLoading;

  // No return needed unless data is required outside
};

export default useLoadData;
