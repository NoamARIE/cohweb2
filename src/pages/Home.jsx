import React, { useState, useEffect } from 'react';
import { Song } from '@/api/entities';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Clock, Star, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HomePage() {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = async () => {
    const data = await Song.list('-views');
    setSongs(data);
    setLoading(false);
  };

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchResults = searchQuery.length > 0 
    ? songs.filter(song => 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">מלווה מלכה</h1>
          <p className="text-xl text-gray-600 mb-8">מצא אקורדים לשירים האהובים עליך</p>
          
          <div className="relative max-w-2xl mx-auto">
            <Popover open={searchOpen && searchQuery.length > 0} onOpenChange={setSearchOpen}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="חפש שירים לפי שם או אמן..."
                    className="pr-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchOpen(true)}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[calc(100vw-3rem)] max-w-2xl" align="start">
                <Command>
                  <CommandList>
                    <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
                    <CommandGroup heading="שירים">
                      {searchResults.map(song => (
                        <Link 
                          key={song.id} 
                          to={createPageUrl(`Song?id=${song.id}`)}
                          onClick={() => setSearchOpen(false)}
                        >
                          <CommandItem className="cursor-pointer">
                            <Music className="ml-2 h-4 w-4" />
                            <span className="font-medium">{song.title}</span>
                            <span className="text-gray-500 mr-2">- {song.artist}</span>
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Tabs defaultValue="trending" className="space-y-8">
          <TabsList className="w-full justify-start border-b p-0">
            <TabsTrigger value="trending" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              פופולרי
            </TabsTrigger>
            <TabsTrigger value="latest" className="gap-2">
              <Clock className="w-4 h-4" />
              חדש
            </TabsTrigger>
            <TabsTrigger value="popular" className="gap-2">
              <Star className="w-4 h-4" />
              הכי נצפה
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSongs.map(song => (
                <Link 
                  key={song.id} 
                  to={createPageUrl(`Song?id=${song.id}`)}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-semibold">{song.title}</CardTitle>
                      <p className="text-sm text-gray-500">{song.artist}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{song.genre}</span>
                        <span>{song.views} צפיות</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}