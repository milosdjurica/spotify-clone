"use client";

import React from "react";
import { Song } from "../../types";
import MediaItem from "./MediaItem";

type SearchContentProps = {
  songs: Song[];
};

export default function SearchContent({ songs }: SearchContentProps) {
  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-netural-400">
        No songs found!
      </div>
    );

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div>
            <MediaItem data={song} />
          </div>
          {/* // TODO: Add like button here */}
        </div>
      ))}
    </div>
  );
}
