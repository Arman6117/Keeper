'use client'
import { useRouter } from "next/navigation";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useUser } from "@clerk/nextjs";
function Header() {
 
  const router = useRouter();
  const {isLoaded,isSignedIn,user} = useUser()
  return (
    <header className="flex justify-between ">
      <h1 className="flex justify-center mt-2">
        <ElectricBoltIcon /> Keeper
      </h1>
      <div className="flex space-x-6">
      {isLoaded && isSignedIn ? (
        <img src={user?.imageUrl}  alt="profile" className="h-9 rounded-full cursor-pointer"/>
      ):(
        <>

        <span className="loginBtn " onClick={()=>{
          router.push('/login')
        }}>Login</span>
        <span className="signupBtn" onClick={()=>{
          router.push('/signUp')
        }}>Sign-Up</span>
        </>
      )}
       
      </div>
    </header>
  );
}

export default Header;
