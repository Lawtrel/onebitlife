import { useState } from "react";

import ChangeNavigationService from "../services/changenavigationservice";

import AllPages from "./allpages";
import HomePage from "./homepage";

export default function Routes(){
    const [showHome, setShowHome] = useState("false");

    ChangeNavigationService.checkShowHome(1)
        .then((showHome) => {
            setShowHome(showHome.showHome);
        })
        .catch((err) => console.log(err));
    return <>{showHome=="true" ? <HomePage/> : <AllPages/>}</>;
}