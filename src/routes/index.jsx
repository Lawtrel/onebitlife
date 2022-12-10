import { useState } from "react";

import AllPages from "./allpages";
import HomePage from "./homepage";

export default function Routes(){
    const [showHome, setShowHome] = useState("false");
    return <>{showHome=="true" ? <HomePage/> : <AllPages/>}</>;
}