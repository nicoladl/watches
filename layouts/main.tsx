import {BrandLogo} from "@/components/BrandLogo";
import {Navigator} from "@/components/Navigator";

export const Main = ({ children }) => {
    return (
        <section>
            <BrandLogo />
            <Navigator />
            {children}
        </section>
    )
}