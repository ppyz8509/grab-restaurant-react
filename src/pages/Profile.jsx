import { useAuthContext } from "../context/AuthContext";


const Profile = () => {
  const { user } = useAuth(); // Assuming useAuthContext returns an object with user information

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-6 card profile my-2 ligth"
          style={{ width: "500px", borderRadius: "20px" }}
        >
          <div className="card-header">Profile</div>
          <div className="crad-body">
            <div className="card-text">
                <b>Token</b>
                {user.accessToken.substring(0,20)}...
                {user.accessToken.substring(user.accessToken.length)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;