import {BrandLogo} from "@/components/BrandLogo";
import {Navigator} from "@/components/Navigator";

export const Main = ({ children }) => {
    return (
        <div>
            <BrandLogo />
            <Navigator />
            {children}
        </div>
    )
}