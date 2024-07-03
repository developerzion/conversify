import { Popover, PopoverButton } from "@headlessui/react";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function Notification() {
   return (
      <Popover className="relative">
         <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
            <BellAlertIcon className="w-[1.5rem]" />
         </PopoverButton>
      </Popover>
   );
}
