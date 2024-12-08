import { useContext } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const auth = getAuth();
  const navigate = useNavigate();

  const updateInfoBtnHandle = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    // Update
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({
          ...auth.currentUser,
          displayName: name,
          photoURL: photo,
        });
        toast.success("Profile updated successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Error updating profile: ${error.message}`);
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-[#37f51e] mb-5">
        Update Your Profile
      </h1>
      <form
        onSubmit={updateInfoBtnHandle}
        className="md:w-2/5 mx-auto w-4/5 pb-10 border-2 border-[#37f51e] rounded-lg"
      >
        <div className="form-control w-4/5 mx-auto mt-5">
          <label className="label">
            <span className="label-text">Update Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            defaultValue={user?.displayName}
            required
          />
        </div>
        <div className="form-control w-4/5 mx-auto">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Update Photo URL"
            className="input input-bordered"
            name="photo"
            defaultValue={user?.photoURL}
            required
          />
        </div>
        <div className="form-control w-4/5 mx-auto mt-6">
          <button
            type="submit"
            className="btn bg-[#37f51e] rounded-lg border-none text-white"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
