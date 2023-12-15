import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "Profile | Onemate";
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile?email=${email}`
        );
        setData({ name: response.data.name, email: response.data.email });
      } catch (e) {
        console.log(e);
      }
    };

    fetchUserDetails();
  }, [email]);
  const [confimLogout, setConfirmLogout] = useState(false);
  return (
    <>
      <div className="bg-[#242424] w-full min-h-[100svh] flex items-center justify-center scroll-smooth">
        <div
          id="profile-block"
          className="sm:bg-blue-900 w-full sm:w-[75%] md:w-[50%] sm:h-[480px] rounded-3xl flex flex-col items-center justify-between p-4"
        >
          {data ? (
            <div className="flex flex-col sm:flex-row w-full justify-center h-full m-2 mb-4">
              <div
                className="bg-white w-full
               sm:w-[40%] flex flex-col rounded-t-2xl sm:rounded-bl-2xl sm:rounded-tr-none p-4"
              >
                <img
                  className=""
                  src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
                  alt=""
                />
                <div className="flex justify-center font-extrabold text-2xl text-blue-900 tracking-wide mb-9 sm:mb-0 capitalize">
                  {data.name}
                </div>
                <div className="m-auto bg-red-600 px-4 py-2 text-xl text-white rounded-lg cursor-pointer hover:scale-105">
                  Edit details
                </div>
              </div>
              <div className="bg-white text-white w-full sm:w-[60%] h-full flex flex-col justify-between rounded-b-2xl sm:rounded-tr-2xl sm:rounded-bl-none ">
                <div className="flex m-2 mt-4 py-5 bg-blue-900 rounded-lg">
                  <div className=" pl-3 text-xl">Full Name :</div>
                  <div className="pl-2 text-xl overflow-hidden capitalize">
                    {data.name}
                  </div>
                </div>
                <div className="flex m-2 py-5 bg-blue-900 rounded-lg">
                  <div className=" pl-3 text-xl">Email :</div>
                  <div className="pl-2 text-xl overflow-hidden">
                    {data.email}
                  </div>
                </div>
                <div className="flex m-2 py-5 bg-blue-900 rounded-lg">
                  <div className="pl-3 text-xl">DOB :</div>
                  <div className="pl-2 text-xl overflow-hidden">NA</div>
                </div>
                <div className="flex m-2 mb-4 py-5 bg-blue-900 rounded-lg">
                  <div className=" pl-3 text-xl">Phone :</div>
                  <div className="pl-2 text-xl overflow-hidden">NA</div>
                </div>
              </div>
            </div>
          ) : null}
          <div
            className="bg-red-600 hover:scale-105 px-4 py-2 rounded-lg cursor-pointer text-white text-2xl"
            onClick={() => {
              setConfirmLogout(true);

              const block = document.getElementById("profile-block");
              block.style.display = "none";
            }}
          >
            Logout
          </div>
        </div>
        {confimLogout && (
          <div className="bg-blue-900 w-[24rem] h-48 font-bold text-white flex flex-col items-center p-4 rounded-2xl text-xl">
            <div className="tracking-wide mt-4">
              Are you sure, you want to logout?
            </div>
            <div className="flex space-x-4 my-auto">
              <Link
                to={"/"}
                className="bg-red-600 px-5 py-3 rounded-xl hover:scale-105"
              >
                Yes
              </Link>
              <div
                className="bg-green-600 px-5 py-3 rounded-xl hover:scale-105 cursor-pointer"
                onClick={() => {
                  window.location.href = `/profile?email=${email}`;
                }}
              >
                No
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// function Profile() {
//   const location = useLocation();
//   const email = new URLSearchParams(location.search).get("email");

//   const [data, setData] = useState(null);
//   const [confimLogout, setConfirmLogout] = useState(false);

//   useEffect(() => {
//     document.title = "Profile | Onemate";
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/profile?email=${email}`
//         );
//         setData({ name: response.data.name, email: response.data.email });
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     fetchUserDetails();
//   }, [email]);

//   return (
//     <>
//       <div className="bg-gradient-to-r from-red-600 to-blue-600 w-full min-h-screen flex items-center justify-center">
//         <div
//           id="profile-block"
//           className="bg-blue-900 w-full sm:w-[75%] md:w-[50%] h-[480px] rounded-3xl flex flex-col items-center justify-between p-4"
//         >
//           {data ? ( // Only render this part if data is available
//             <div className="flex w-full justify-center h-full m-2 mb-4">
//               <div className="bg-white w-[40%] flex flex-col rounded-s-2xl p-4">
//                 <img
//                   className=""
//                   src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
//                   alt=""
//                 />
//                 <div className="flex justify-center font-extrabold text-2xl text-blue-900 tracking-wide">
//                   {data.name}
//                 </div>
//                 <div className="m-auto bg-red-600 px-4 py-2 text-xl text-white rounded-lg cursor-pointer hover:scale-105">
//                   Edit details
//                 </div>
//               </div>
//               <div className="bg-white text-white  w-[60%] h-full flex flex-col justify-between rounded-e-2xl ">
//                 <div className="flex m-2 mt-4 py-5 bg-blue-900 rounded-lg">
//                   <div className="w-[40%] pl-3 text-xl">Full Name :</div>
//                   <div className="w-[60%] text-xl">User One</div>
//                 </div>
//                 <div className="flex m-2 py-5 bg-blue-900 rounded-lg">
//                   <div className="w-[40%] pl-3 text-xl">Email :</div>
//                   <div className="w-[60%] text-xl">User One</div>
//                 </div>
//                 <div className="flex m-2 py-5 bg-blue-900 rounded-lg">
//                   <div className="w-[40%] pl-3 text-xl">DOB :</div>
//                   <div className="w-[60%] text-xl">User One</div>
//                 </div>
//                 <div className="flex m-2 mb-4 py-5 bg-blue-900 rounded-lg">
//                   <div className="w-[40%] pl-3 text-xl">Phone :</div>
//                   <div className="w-[60%] text-xl">User One</div>
//                 </div>
//               </div>
//             </div>
//           ) : null}
//           <div
//             className="bg-red-600 hover:scale-105 px-4 py-2 rounded-lg cursor-pointer text-white text-2xl"
//             onClick={() => {
//               setConfirmLogout(true);

//               const block = document.getElementById("profile-block");
//               block.style.display = "none";
//             }}
//           >
//             Logout
//           </div>
//         </div>
//         {confimLogout && (
//           <div className="bg-blue-900 w-[24rem] h-48 font-bold text-white flex flex-col items-center p-4 rounded-2xl text-xl">
//             <div className="tracking-wide mt-4">
//               Are you sure, you want to logout?
//             </div>
//             <div className="flex space-x-4 my-auto">
//               <Link
//                 to={"/"}
//                 className="bg-red-600 px-5 py-3 rounded-xl hover:scale-105"
//               >
//                 Yes
//               </Link>
//               <div
//                 className="bg-green-600 px-5 py-3 rounded-xl hover:scale-105 cursor-pointer"
//                 onClick={() => {
//                   window.location.href = `/profile?email=${email}`;
//                 }}
//               >
//                 No
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Profile;
