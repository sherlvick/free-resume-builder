import React, { createContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = React.memo(({children}) => {
    const data = JSON.parse(localStorage.getItem("profiledata"));
    const activeProfile = data.find((item) => item.default === true);
    
    return <ProfileContext.Provider value={activeProfile}>
        {children}
    </ProfileContext.Provider>
})

