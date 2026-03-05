import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-[400px]">
        <div className="flex flex-col items-center gap-4">

          <div className="w-20 h-20 rounded-full bg-forest-600 flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            {user?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email}
          </p>

          <div className="w-full border-t pt-4 mt-4 text-sm text-gray-600">
            <p><span className="font-semibold">Name:</span> {user?.name}</p>
            <p><span className="font-semibold">Email:</span> {user?.email}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;