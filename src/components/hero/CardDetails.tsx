"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

const CardDetails = () => {
  return (
    <div className="relative bg-primary rounded-3xl p-4 md:p-12">
      <div className="flex justify-start">
        <div className="flex flex-col items-center gap-3">
          <Avatar className="h-16 w-16 md:h-28 md:w-28 rounded-full overflow-hidden">
            <AvatarImage src={"/profile-picture.png"} alt="profile picture" className="h-16 w-16 md:h-28 md:w-28" />
            <AvatarFallback>
              <Skeleton className="relative z-20 w-full h-full bg-primary/70" />
            </AvatarFallback>
          </Avatar>
          <p className="text-xs md:text-base text-accent-foreground font-semibold">Kevin Ramírez</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4 pb-8">
        <h2 className="text-accent-foreground text-xl md:text-2xl font-semibold">Next Event:</h2>
        <div className="flex gap-4">
          <Image src={"/time-clock-svgrepo-com.svg"} width={20} height={20} alt="icon time" />
          <p className="font-semibold text-secondary text-xs md:text-base">1h 30 min</p>
        </div>
        <div className="flex gap-4">
          <Image src={"/video-svgrepo-com.svg"} width={20} height={20} alt="icon camera video" />
          <p className="font-semibold text-secondary text-xs md:text-base">Zoom, Google Meet, Microsoft Teams</p>
        </div>

        <div className="flex gap-4">
          <Image src={"/card-svgrepo-com.svg"} width={20} height={20} alt="icon bank card" />
          <p className="font-semibold text-secondary text-xs md:text-base">5000</p>
        </div>
      </div>
      <div className="absolute flex gap-6 right-6 bottom-6 md:right-8 md:bottom-8">
        <button className="p-2 md:p-3 bg-muted rounded-full shadow-accent/50 shadow-md hover:bg-muted/90 hover:-translate-y-[2px]">
          <Image
            src={"/microphone-alt-1-svgrepo-com.svg"}
            width={35}
            height={35}
            alt="icon microphone"
            className="h-6 w-6 md:h-10 md:w-10 "
          />
        </button>
        <button className="p-2 md:p-3 bg-muted rounded-full shadow-accent/50 shadow-md hover:bg-muted/90 hover:-translate-y-[2px]">
          <Image
            src={"/edit-svgrepo-com.svg"}
            width={35}
            height={35}
            alt="icon edit"
            className="h-6 w-6 md:h-10 md:w-10 "
          />
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
