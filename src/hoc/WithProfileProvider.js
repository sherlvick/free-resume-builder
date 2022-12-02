import React from "react";
import { ProfileProvider } from "../components/Context/Profile/ProfileContext";


export default function WithProfileProvider(Component)  {
    return function(){
        return <ProfileProvider>
         <Component />
        </ProfileProvider>
    }
}
