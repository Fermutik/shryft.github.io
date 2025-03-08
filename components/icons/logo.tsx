import * as React from "react"
import { cn } from "@/lib/utils"

type SvgLogoProps = React.ComponentProps<"svg">

function Logo({ className, ...props }: SvgLogoProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708.661 586.471" className={cn("fill-current", className)} {...props}>
            <path d="M642.767 356.554V10.4H511.158v1.168L444.19 119.312c-9.854-21.576-24.305-40.688-43.381-57.321C361.349 27.599 308.004 10.4 240.776 10.4H10.656v566.93h131.998V383.031h98.122c15.132 0 36.923-1.466 50.647-3.195l.127 77.955h219.607V577.33h131.608V457.791h57.238V356.554h-57.236zm-500.113-74.761V111.636h98.122c28.553 0 50.29 8.05 65.221 24.143 14.923 16.099 22.389 36.734 22.389 61.91 0 24.664-7.466 44.844-22.389 60.548-14.931 15.709-36.668 23.557-65.221 23.557h-98.122zm368.504 74.761H401.354l97.344-159.961 10.124-16.037 2.336.784v175.214z" />
        </svg>
    )
}

export default Logo
