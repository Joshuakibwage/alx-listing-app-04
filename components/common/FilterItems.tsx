"use client";

import { categoryItems } from "@/lib/categoryItems";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";


const FilterItems: React.FC = () => {

    const searchParams = useSearchParams();
    const search = searchParams.get('filter');
    const pathname = usePathname();


    const createQueryString = useCallback(
        (name: string, value: string) => {

            const params = new URLSearchParams(searchParams.toString())

            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );


    return (
        <div className="flex space-x-10 w-full overflow-x-scroll no-scrollbar py-6">
            {
                categoryItems.map((item) => (
                    <Link 
                        key={item.id} 
                        href={ pathname + "?" + createQueryString("filter", item.name)}
                        className={cn(
                            search === item.name ? "border-b-2 pb-2 flex-shrink-0 border-black " : "opacity-70", 
                            "flex flex-col items-center space-y-2 capitalize scrollbar-y-none no-scrollbar"
                        )}
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.name}
                            className=""
                            width={24}
                            height={24}
                        />
                        <p>{item.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}


export default FilterItems;