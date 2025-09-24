import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Brother</h3>
            <p>Grandpa: {money} tk</p>
        </div>
    );
};

export default Brother;