'use client'
import { useRouter } from "next/navigation";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
function Header() {
 
  const router = useRouter();
  const {isLoaded,isSignedIn,user} = useUser()
  const {signOut} = useClerk()
  return (
    <header className="flex justify-between ">
      <h1 className="flex justify-center mt-2">
        <ElectricBoltIcon /> Keeper
      </h1>
      <div className="flex space-x-6">
      {isLoaded && isSignedIn ? (
        <div className="flex gap-4 sm:gap-10  group">

        <span className="mt-3 sm:mt-1 text-xs sm:text-base opacity-0 group-hover:opacity-100 transition-all text-white ">Click here to log out</span>
        <img src={user?.imageUrl}  alt="profile" className="h-9 rounded-full cursor-pointer" onClick={()=>signOut()}/>
        </div>
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
